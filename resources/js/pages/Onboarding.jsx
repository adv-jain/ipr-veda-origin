import { Head, useForm } from '@inertiajs/react';
import { useState } from 'react';

export default function Onboarding() {
    const [step, setStep] = useState(0);

    const { data, setData, post, processing, errors } = useForm({
        company_name: '',
        business_type: '',
        preference: '',
    });

    const totalSteps = 3;

    const next = () => setStep((s) => Math.min(s + 1, totalSteps));
    const back = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/onboarding');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
            <Head title="Onboarding" />

            <div className="w-full max-w-xl bg-white rounded-xl shadow-lg p-8">

                {step > 0 && (
                    <div className="mb-8">
                        <div className="flex justify-between text-sm text-gray-500 mb-2">
                            <span>Step {step} of {totalSteps}</span>
                            <span>{Math.round((step / totalSteps) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                                className="bg-blue-600 h-2 rounded-full transition-all"
                                style={{ width: `${(step / totalSteps) * 100}%` }}
                            />
                        </div>
                    </div>
                )}

                {step === 0 && (
                    <div className="text-center">
                        <h1 className="text-3xl font-bold mb-4">Welcome to IPR Veda 👋</h1>
                        <p className="text-gray-600 mb-8">
                            Let's set up a few details so we can personalize your
                            dashboard. It's just 3 quick steps.
                        </p>
                        <button
                            onClick={next}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Get Started
                        </button>
                    </div>
                )}

                {step === 1 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Company Details</h2>
                        <p className="text-gray-500 mb-6">What is the name of your company?</p>

                        <input
                            type="text"
                            value={data.company_name}
                            onChange={(e) => setData('company_name', e.target.value)}
                            placeholder="e.g. Acme Pvt Ltd"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-1 outline-none focus:border-blue-500"
                        />
                        {errors.company_name && (
                            <p className="text-red-500 text-sm mb-4">{errors.company_name}</p>
                        )}

                        <div className="flex justify-between mt-6">
                            <button onClick={back} className="text-gray-500 hover:text-black">
                                Back
                            </button>
                            <button
                                onClick={next}
                                disabled={!data.company_name}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div>
                        <h2 className="text-2xl font-bold mb-2">Business Type</h2>
                        <p className="text-gray-500 mb-6">Which field do you work in?</p>

                        <div className="grid grid-cols-2 gap-3">
                            {['Startup', 'Agency', 'Individual', 'Enterprise'].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => setData('business_type', type)}
                                    className={`border rounded-lg px-4 py-3 text-left transition ${
                                        data.business_type === type
                                            ? 'border-blue-600 bg-blue-50 text-blue-700'
                                            : 'border-gray-300 hover:border-gray-400'
                                    }`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        {errors.business_type && (
                            <p className="text-red-500 text-sm mt-2">{errors.business_type}</p>
                        )}

                        <div className="flex justify-between mt-6">
                            <button onClick={back} className="text-gray-500 hover:text-black">
                                Back
                            </button>
                            <button
                                onClick={next}
                                disabled={!data.business_type}
                                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 transition"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-2xl font-bold mb-2">Almost done!</h2>
                        <p className="text-gray-500 mb-6">What are you most interested in?</p>

                        <select
                            value={data.preference}
                            onChange={(e) => setData('preference', e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 mb-6 outline-none focus:border-blue-500"
                        >
                            <option value="">Select an option</option>
                            <option value="Patent">Patent</option>
                            <option value="Trademark">Trademark</option>
                            <option value="Copyright">Copyright</option>
                        </select>

                        <div className="flex justify-between">
                            <button type="button" onClick={back} className="text-gray-500 hover:text-black">
                                Back
                            </button>
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 disabled:opacity-50 transition"
                            >
                                {processing ? 'Saving...' : 'Finish'}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}