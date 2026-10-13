import { Head, usePage, router } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

const loadRazorpayScript = () => {
    return new Promise((resolve) => {
        if (document.getElementById('razorpay-script')) {
            resolve(true);
            return;
        }
        const script = document.createElement('script');
        script.id = 'razorpay-script';
        script.src = 'https://checkout.razorpay.com/v1/checkout.js';
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};



const TRADEMARK_TYPES = [
    { value: 'Brand Name', label: 'Brand Name' },
    { value: 'Brand Name + Logo', label: 'Brand Name + Logo', sub: 'Name + Graphic representation of brand' },
    { value: 'Logo', label: 'Logo', sub: 'Graphic representation of your brand' },
    { value: 'Slogan', label: 'Slogan', sub: "Your brand's catchy tagline" },
    { value: 'Other Options', label: 'Other Options', sub: 'Unique sounds/marks/patterns for brand recognition' },
];

const PLANS = {
    standard: { label: 'Standard', icon: '⏳', time: 'Filing within 24 hours', mrp: 1999, price: 1499, discount: 500 },
    express: { label: 'Express', icon: '⚡', time: 'Filing within 6 hours', mrp: 2999, price: 1999, discount: 1000 },
};

export default function Onboarding() {
    const { props } = usePage();
    const application = props.application;
    const {url} = usePage();
const urlParams = new URLSearchParams(url.split('?')[1]||'');
  const serviceId = urlParams.get('service_id');
    const serviceTitle = urlParams.get('service_title');
    const servicePrice = urlParams.get('service_price');
    // ✅ Flag to skip leave confirmation on "Pay Later" click
    const skipLeaveConfirmation = useRef(false);

    const [step, setStep] = useState(application?.current_step || 1);
    const [selectedService, setSelectedService] = useState(
        serviceId 
            ? { id: serviceId, title: serviceTitle, price: servicePrice } 
            : null
    );
    const totalSteps = 4;

    const [trademarkType, setTrademarkType] = useState(application?.trademark_type || '');
    const [businessActivity, setBusinessActivity] = useState(application?.business_activity || '');
    const [selectedClasses, setSelectedClasses] = useState(application?.selected_classes || []);
    const [selectedPlan, setSelectedPlan] = useState(application?.plan || 'express');

    const [searchingClasses, setSearchingClasses] = useState(false);
    const [matchedClasses, setMatchedClasses] = useState([]);

    const [paymentMethod, setPaymentMethod] = useState('upi');
    const [selectedUpiApp, setSelectedUpiApp] = useState('PhonePe');
    const [paying, setPaying] = useState(false);
    const [paymentError, setPaymentError] = useState('');
    const [orderDetails, setOrderDetails] = useState(null);

    const [showLeaveModal, setShowLeaveModal] = useState(false);
    const [pendingNavigation, setPendingNavigation] = useState(null);

    const next = () => setStep((s) => Math.min(s + 1, totalSteps));
    const back = () => setStep((s) => Math.max(s - 1, 1));

    const saveStep = async (fields) => {
        if (!application?.id) {
            console.error('No application id available.');
            return;
        }
        try {
            await axios.post('/trademark/save-step', {
                application_id: application.id,
                ...fields,
            });
        } catch (err) {
            console.error('Save step failed', err);
        }
    };

    // ---------- Step 1 ----------
    const selectTrademarkType = (value) => {
        setTrademarkType(value);
    };

    const goToStep2 = () => {
        saveStep({ trademark_type: trademarkType, current_step: 2 });
        next();
    };

    // ---------- Step 2 ----------
    const toggleClass = (id) => {
        setSelectedClasses((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const handleSearchClasses = async () => {
        if (!businessActivity) return;
        setSearchingClasses(true);
        try {
            const res = await axios.post('/trademark/search-classes', {
                description: businessActivity,
            });
            setMatchedClasses(res.data.classes);
        } catch (err) {
            setMatchedClasses([]);
        } finally {
            setSearchingClasses(false);
        }
    };

    const goToStep3 = () => {
        saveStep({
            business_activity: businessActivity,
            selected_classes: selectedClasses,
            current_step: 3,
        });
        next();
    };

    // ---------- Step 3 ----------
    const classCount = selectedClasses.length || 1;
    const plan = PLANS[selectedPlan];
    const totalPrice = plan.price * classCount;

    const choosePlanAndGoToPayment = () => {
        saveStep({ plan: selectedPlan, current_step: 4 });
        next();
    };

    // ---------- Step 4 : Payment ----------
    const gstAmount = Math.round(totalPrice * 0.18);
    const finalAmount = totalPrice + gstAmount;

    useEffect(() => {
    if (step === 4) {
        axios.post('/trademark/create-order', {
            application_id: application?.id || null,   // ✅ null agar application nahi hai
            service_id: serviceId,                     // ✅ ServiceHub se
            service_title: serviceTitle,               // ✅ ServiceHub se
            service_price: servicePrice,               // ✅ ServiceHub se
        })
            .then((res) => {
                setOrderDetails(res.data);
                // ✅ Agar naya application create hua hai toh state update karo
                if (res.data.application_id && !application?.id) {
                    // Optional: application state set karo
                    console.log('New application created:', res.data.application_id);
                }
            })
            .catch(() => setPaymentError('Could not initiate payment.'));
    }
}, [step]);

    const handlePayNow = async () => {
        setPaymentError('');
        setPaying(true);

        const scriptLoaded = await loadRazorpayScript();
        if (!scriptLoaded || !orderDetails) {
            setPaymentError('Razorpay not loaded.');
            setPaying(false);
            return;
        }

        const options = {
            key: orderDetails.key,
            amount: orderDetails.amount,
            currency: orderDetails.currency,
            name: 'IPR Veda',
            description: 'Trademark Registration',
            order_id: orderDetails.order_id,
            handler: async function (response) {
                try {
                    const verifyRes = await axios.post('/trademark/verify-payment', {
                        application_id: application.id,
                        razorpay_payment_id: response.razorpay_payment_id,
                        razorpay_order_id: response.razorpay_order_id,
                        razorpay_signature: response.razorpay_signature,
                    });

                    if (verifyRes.data.status === 'success') {
                        // ✅ Payment successful — skip leave modal too
                        skipLeaveConfirmation.current = true;
                        window.location.href = '/dashboard';
                    } else {
                        setPaymentError('Payment not verified.');
                        setPaying(false);
                    }
                } catch (err) {
                    setPaymentError('Verification failed.');
                    setPaying(false);
                }
            },
            modal: { ondismiss: () => setPaying(false) },
            theme: { color: '#0f2f52' },
        };

        const rzp = new window.Razorpay(options);
        rzp.on('payment.failed', function (response) {
            setPaymentError('Payment failed: ' + response.error.description);
            setPaying(false);
        });
        rzp.open();
    };

    // ---------------- LEAVE CONFIRMATION LOGIC ----------------

    useEffect(() => {
        const removeListener = router.on('before', (event) => {
            // ✅ Skip the modal if this navigation is intentional (Pay Later / Pay success)
            if (skipLeaveConfirmation.current) {
                skipLeaveConfirmation.current = false;
                return;
            }

            if (application?.payment_status !== 'paid') {
                event.preventDefault();
                setPendingNavigation(event.detail.visit.url);
                setShowLeaveModal(true);
            }
        });

        return () => removeListener();
    }, [application]);

    useEffect(() => {
        const handleBeforeUnload = (e) => {
            // ✅ Skip browser warning if this navigation is intentional
            if (skipLeaveConfirmation.current) return;

            if (application?.payment_status !== 'paid') {
                e.preventDefault();
                e.returnValue = '';
            }
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => window.removeEventListener('beforeunload', handleBeforeUnload);
    }, [application]);

    const confirmLeave = () => {
        setShowLeaveModal(false);
        if (pendingNavigation) {
            skipLeaveConfirmation.current = true; // ✅ User confirmed — bypass any future popup
            router.visit(pendingNavigation, { replace: true });
        }
    };

    const cancelLeave = () => {
        setShowLeaveModal(false);
        setPendingNavigation(null);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-8">
            <Head title="Onboarding" />

            <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg p-8">

                {step <= 3 && (
                    <>
                        <div className="flex justify-end mb-4">
                            <div className="inline-flex bg-gray-100 rounded-full p-1 text-sm">
                                <span className="px-3 py-1 rounded-full bg-white shadow-sm font-medium">En</span>
                                
                            </div>
                        </div>

                        <div className="mb-8">
                            <p className="text-sm text-gray-500 mb-2">{step}/{totalSteps - 1}</p>
                            <div className="flex gap-2">
                                {Array.from({ length: totalSteps - 1 }).map((_, i) => (
                                    <div
                                        key={i}
                                        className={`h-1.5 flex-1 rounded-full ${i < step ? 'bg-blue-900' : 'bg-gray-200'}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {/* ---------------- STEP 1 ---------------- */}
                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">What would you like to protect?</h2>

                        <div className="flex flex-col gap-4">
                            {TRADEMARK_TYPES.map((t) => (
                                <label
                                    key={t.value}
                                    className={`flex items-center justify-between p-4 border rounded-lg cursor-pointer transition ${
                                        trademarkType === t.value ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-gray-400'
                                    }`}
                                >
                                    <div className="flex items-start gap-3">
                                        <input
                                            type="radio"
                                            name="trademarkType"
                                            value={t.value}
                                            checked={trademarkType === t.value}
                                            onChange={() => selectTrademarkType(t.value)}
                                            className="mt-1 w-4 h-4"
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-base font-medium text-gray-800">{t.label}</span>
                                            {t.sub && <span className="text-sm text-gray-500">{t.sub}</span>}
                                        </div>
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="flex justify-end mt-6">
                            <button
                                onClick={goToStep2}
                                disabled={!trademarkType}
                                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-40 transition flex items-center gap-1"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 2 ---------------- */}
                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">
                            Describe Your Business Activity <span className="font-normal text-gray-600">(To Identify Your Trademark Class)</span>
                            <span className="ml-2 text-gray-400 text-lg align-middle">ⓘ</span>
                        </h2>

                        <textarea
                            value={businessActivity}
                            onChange={(e) => setBusinessActivity(e.target.value)}
                            placeholder="Type here..."
                            rows={4}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:border-blue-500 resize-none mb-3"
                        />

                        <div className="flex justify-end mb-6">
                            <button
                                onClick={handleSearchClasses}
                                disabled={!businessActivity || searchingClasses}
                                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-50 transition text-sm font-medium"
                            >
                                {searchingClasses ? 'Searching...' : 'Search'}
                            </button>
                        </div>

                      

                        {matchedClasses.length > 0 && (
                            <div className="mb-6">
                                <h3 className="font-semibold text-gray-800 mb-1">
                                    Matches found based on your description?
                                </h3>
                                <p className="text-sm text-gray-500 mb-3">
                                    Select more classes. Get 360° protection.
                                </p>

                                <div className="flex flex-col gap-2">
                                    {matchedClasses.map((cls) => (
                                        <label
                                            key={cls.id}
                                            className={`flex items-start gap-3 p-3 border rounded-lg cursor-pointer transition ${
                                                selectedClasses.includes(cls.id) ? 'border-blue-600 bg-blue-50' : 'border-gray-300 hover:border-blue-400'
                                            }`}
                                        >
                                            <input
                                                type="checkbox"
                                                checked={selectedClasses.includes(cls.id)}
                                                onChange={() => toggleClass(cls.id)}
                                                className="mt-1 w-4 h-4"
                                            />
                                            <div className="flex flex-col">
                                                {cls.recommended && (
                                                    <span className="text-xs font-semibold text-yellow-600 mb-1">
                                                        ★ Highly recommended ★
                                                    </span>
                                                )}
                                                <span className="text-sm font-medium text-gray-800">
                                                    Class {cls.id} — {cls.name}
                                                </span>
                                                <span className="text-xs text-gray-500">{cls.description}</span>
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between mt-6">
                            <button onClick={back} className="flex items-center gap-1 border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-50 transition">
                                ← Back
                            </button>
                            <button
                                onClick={goToStep3}
                                disabled={selectedClasses.length === 0}
                                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 disabled:opacity-40 transition flex items-center gap-1"
                            >
                                Next →
                            </button>
                        </div>
                    </div>
                )}

                {/* ---------------- STEP 3 ---------------- */}
                {step === 3 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-6">Choose right plan for brand protection</h2>

                        <div className="flex flex-col gap-4 mb-6">
                            {Object.entries(PLANS).map(([key, p]) => (
                                <label
                                    key={key}
                                    className={`block border rounded-lg p-4 cursor-pointer transition ${selectedPlan === key ? 'border-blue-600 bg-blue-50' : 'border-gray-200'}`}
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <div className="flex items-center gap-2">
                                            <input
                                                type="radio"
                                                name="plan"
                                                checked={selectedPlan === key}
                                                onChange={() => setSelectedPlan(key)}
                                                className="w-4 h-4"
                                            />
                                            <span className="font-semibold text-gray-800">
                                                {p.label} - {p.icon} {p.time}
                                            </span>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-gray-400 line-through text-sm mr-2">₹{p.mrp}</span>
                                            <span className="font-bold text-gray-900">₹{p.price}</span>
                                            <span className="text-sm text-gray-500">/class</span>
                                            <div className="text-xs text-gray-400">+ Govt. Fee</div>
                                        </div>
                                    </div>
                                    <div className="bg-white border border-gray-200 rounded-md px-3 py-2 flex items-center gap-2 text-sm text-gray-700">
                                        🏷️ Great news! You're eligible for a ₹{p.discount} discount as part of our limited-time offer.
                                    </div>
                                </label>
                            ))}
                        </div>

                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-800">
                                Number of Class Selected ({classCount}) ✎
                            </h3>
                        </div>

                        <div className="flex items-center justify-between mb-6">
                            <select disabled className="border border-gray-300 rounded-lg px-4 py-2 bg-gray-100 text-gray-500">
                                <option>Class {selectedClasses[0] ?? 25}</option>
                            </select>
                            <div className="text-right">
                                <div className="font-bold text-gray-900">₹{totalPrice}</div>
                                <div className="text-xs text-gray-500">(₹{plan.price} x {classCount})</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-700 mb-6">
                            <span className="font-semibold">Note: </span>
                            Our experts will call you within your selected time range for the consultation.
                        </div>

                        <div className="flex justify-between">
                            <button onClick={back} className="flex items-center gap-1 border border-gray-300 rounded-lg px-6 py-2 text-gray-700 hover:bg-gray-50 transition">
                                ← Back
                            </button>
                            <button
                                onClick={choosePlanAndGoToPayment}
                                className="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition flex items-center gap-1"
                            >
                                Pay Now →
                            </button>
                        </div>
                        
                    </div>
                )}

                {/* ---------------- STEP 4 : PAYMENT ---------------- */}
 {step === 4 && (
    <div className="max-w-6xl mx-auto p-4 md:p-6 font-sans">
        {/* Header */}
        <div className="mb-8">
            <span className="text-xl font-bold tracking-tight">
                <span className="bg-yellow-400 px-1.5 py-0.5 rounded-sm">IPR</span>Veda
            </span>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Payment Method</h2>
        <p className="text-gray-500 mb-8">Select your preferred way to pay</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ============ LEFT: Payment Methods ============ */}
            <div className="lg:col-span-2 border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
                <div className="flex flex-col md:flex-row">
                    {/* Left column — tabs */}
                    <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r border-gray-200 bg-gray-50/50">
                        {[
                            { id: 'upi', title: 'UPI', desc: 'Gpay, PhonePe, Paytm & more' },
                            { id: 'card', title: 'Credit/Debit/ATM Card', desc: 'Visa, MasterCard, Rupay & more' },
                            { id: 'netbanking', title: 'Net Banking', desc: 'Pay using all Indian banks' }
                        ].map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setPaymentMethod(method.id)}
                                className={`w-full text-left px-5 py-4 border-l-4 transition-all duration-200 ${
                                    paymentMethod === method.id
                                        ? 'border-blue-600 bg-white shadow-sm'
                                        : 'border-transparent hover:bg-gray-100/50 text-gray-500'
                                }`}
                            >
                                <div className={`font-semibold ${paymentMethod === method.id ? 'text-blue-900' : 'text-gray-700'}`}>
                                    {method.title}
                                </div>
                                <div className="text-xs font-normal text-gray-400 mt-1">
                                    {method.desc}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right column — method details */}
                    <div className="w-full md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                        <div>
                            {paymentMethod === 'upi' && (
                                <>
                                    <h3 className="font-semibold text-xl text-gray-900 mb-6">Pay with UPI</h3>
                                    <p className="text-sm font-medium text-gray-500 mb-4">Select UPI App</p>
                                    <div className="flex flex-wrap gap-4 mb-8">
                                        {[
                                            { name: 'Google pay', icon: 'G' },
                                            { name: 'PhonePe', icon: 'P' },
                                            { name: 'Paytm', icon: 'Pt' },
                                            { name: 'Other UPI ID', icon: '#' }
                                        ].map((app) => (
                                            <button
                                                key={app.name}
                                                onClick={() => setSelectedUpiApp(app.name)}
                                                className="flex flex-col items-center gap-2 group"
                                            >
                                                <div
                                                    className={`w-14 h-14 rounded-full border-2 flex items-center justify-center text-lg font-bold transition-all duration-200 ${
                                                        selectedUpiApp === app.name
                                                            ? 'border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-600 ring-offset-2'
                                                            : 'border-gray-200 text-gray-400 group-hover:border-gray-300 group-hover:bg-gray-50'
                                                    }`}
                                                >
                                                    {app.icon}
                                                </div>
                                                <span className={`text-xs font-medium ${selectedUpiApp === app.name ? 'text-blue-700' : 'text-gray-500'}`}>
                                                    {app.name}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                    <p className="text-sm text-gray-500 mb-6 bg-blue-50/50 p-3 rounded-lg border border-blue-100">
                                        Pay securely through the <span className="font-semibold text-blue-800">{selectedUpiApp}</span> app on your phone.
                                    </p>
                                </>
                            )}

                            {paymentMethod === 'card' && (
                                <>
                                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Pay with Card</h3>
                                    <p className="text-sm text-gray-500 mb-8">
                                        You'll be redirected to a secure payment gateway to complete your transaction.
                                    </p>
                                </>
                            )}

                            {paymentMethod === 'netbanking' && (
                                <>
                                    <h3 className="font-semibold text-xl text-gray-900 mb-4">Pay with Net Banking</h3>
                                    <p className="text-sm text-gray-500 mb-8">
                                        Select your bank on the next screen to complete the payment.
                                    </p>
                                </>
                            )}
                        </div>

                        <div>
                            {paymentError && (
                                <p className="text-red-500 text-sm mb-4 bg-red-50 p-2 rounded border border-red-100">{paymentError}</p>
                            )}

                            <button
                                onClick={handlePayNow}
                                disabled={paying || !orderDetails}
                                className="w-full bg-blue-600 text-white py-3.5 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            >
                                {paying ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : (
                                    `PAY ₹${orderDetails?.final_amount ?? finalAmount}`
                                )}
                            </button>

                            <p className="text-sm text-orange-600 mt-4 flex items-center gap-2 font-medium bg-orange-50 p-2 rounded">
                                <span>⚡</span> Hurry! Your Expert will be assigned right after the Payment
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ============ RIGHT: Price Summary ============ */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm h-fit">
                <h3 className="font-bold text-lg text-gray-900 mb-6 pb-4 border-b border-gray-200">
                    {selectedService?.title || 'Trademark Registration'}
                </h3>
                
                <p className="text-sm font-semibold text-gray-700 mb-4 uppercase tracking-wider">Price Details</p>

                <div className="flex justify-between text-sm mb-3">
                    <span className="text-gray-600">Professional Fees</span>
                    <span className="font-medium text-gray-900">₹{orderDetails?.subtotal ?? totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm mb-4 pb-4 border-b border-gray-200 border-dashed">
                    <span className="text-gray-600">GST @ 18%</span>
                    <span className="font-medium text-gray-900">₹{orderDetails?.gst ?? gstAmount}</span>
                </div>
                <div className="flex justify-between items-center font-bold text-xl text-blue-900 mb-8">
                    <span>Total Amount</span>
                    <span>₹{orderDetails?.final_amount ?? finalAmount}</span>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-green-100 p-2 rounded-full text-green-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                        </div>
                        <span>100% Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                            </svg>
                        </div>
                        <span>Guaranteed Satisfaction</span>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8">
            <button
                onClick={back}
                className="flex items-center gap-2 border border-gray-300 rounded-lg px-6 py-2.5 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back
            </button>
        </div>
    </div>
)}
        </div>


            

            {/* Leave confirmation modal */}
            {showLeaveModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
                        <h3 className="text-lg font-bold text-gray-800 mb-2">
                            Are you sure you want to leave?
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">
                            Your progress has been saved, but your trademark application is not yet complete.
                        </p>
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={cancelLeave}
                                className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmLeave}
                                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700 transition"
                            >
                                Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}