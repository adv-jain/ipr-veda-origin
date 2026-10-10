import { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function ReportIssueModal({ onClose }) {
    const [success, setSuccess] = useState(false);

    const { data, setData, post, processing, errors, reset } = useForm({
        subject: '',
        description: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post('/report-issue', {
            preserveScroll: true,
            onSuccess: () => {
                setSuccess(true);
                reset();
                setTimeout(() => {
                    onClose();
                }, 1500);
            },
        });
    };

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 relative" onClick={(e) => e.stopPropagation()}>
                {/* Close button */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl">×</button>

                {/* Header */}
                <div className="mb-5">
                    <h2 className="text-xl font-bold text-gray-900">Report an Issue</h2>
                    <p className="text-sm text-gray-500 mt-1">Tell us what went wrong. Our team will review it shortly.</p>
                </div>

                {success ? (
                    <div className="text-center py-8">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-3xl">✅</span>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Report Submitted!</h3>
                        <p className="text-sm text-gray-500">Our team will get back to you soon.</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Subject */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Subject <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                value={data.subject}
                                onChange={(e) => setData('subject', e.target.value)}
                                placeholder="e.g., Payment not reflecting"
                                maxLength={255}
                                required
                                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                            />
                            {errors.subject && <p className="text-xs text-red-600 mt-1">{errors.subject}</p>}
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1.5">
                                Description <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={data.description}
                                onChange={(e) => setData('description', e.target.value)}
                                placeholder="Describe your issue in detail..."
                                rows={5}
                                maxLength={2000}
                                required
                                className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 resize-none"
                            />
                            {errors.description && <p className="text-xs text-red-600 mt-1">{errors.description}</p>}
                            <p className="text-xs text-gray-400 mt-1 text-right">{data.description.length}/2000</p>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-3 pt-2">
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={processing}
                                className="flex-1 px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition disabled:opacity-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={processing || !data.subject.trim() || !data.description.trim()}
                                className="flex-1 px-4 py-2.5 bg-[#0f2942] text-white rounded-lg font-medium hover:bg-[#0a1e30] transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {processing ? (
                                    <>
                                        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        Submitting...
                                    </>
                                ) : (
                                    'Submit Report'
                                )}
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}