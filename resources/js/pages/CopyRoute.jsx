import React, { useState } from "react";

const CopyRoute = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setSuccessMessage("");
        setErrorMessage("");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || "Something went wrong."
                );
            }

            setSuccessMessage(data.message);

            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* YAHAN AAPKA SAME EXISTING CONTENT RAHEGA */}

            <section className="py-5 mt-5">
                <div className="container py-5">
                    <section className="position-relative py-4 py-xl-5">
                        <div className="container position-relative">

                            <div className="row mb-5">
                                <div className="col-md-8 col-xl-6 text-center mx-auto">
                                    <h2 className="display-6 fw-bold mb-4">
                                        Got any{" "}
                                        <span className="underline">
                                            questions
                                        </span>
                                        ?
                                    </h2>

                                    <p className="text-muted">
                                        Our team is always here to help. Send us a message and we'll get back
                                        to you shortly.
                                    </p>
                                </div>
                            </div>

                            <div className="row d-flex justify-content-center">

                                {/* LEFT SIDE */}
                                <div className="col-md-6 col-lg-4 col-xl-4">
                                    <div className="d-flex flex-column justify-content-center align-items-start h-100">

                                        <div className="d-flex align-items-center p-3">
                                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-telephone"
                                                >
                                                    <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                                                </svg>
                                            </div>

                                            <div className="px-2">
                                                <h6 className="mb-0">Phone</h6>
                                                <p className="mb-0">+91 85060-59559</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center p-3">
                                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-envelope"
                                                >
                                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                                                </svg>
                                            </div>

                                            <div className="px-2">
                                                <h6 className="mb-0">Email</h6>
                                                <p className="mb-0">info@iprveda.com</p>
                                            </div>
                                        </div>

                                        <div className="d-flex align-items-center p-3">
                                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="1em"
                                                    height="1em"
                                                    fill="currentColor"
                                                    viewBox="0 0 16 16"
                                                    className="bi bi-pin"
                                                >
                                                    <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001m-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282" />
                                                </svg>
                                            </div>

                                            <div className="px-2">
                                                <h6 className="mb-0">Location</h6>
                                                <p className="mb-0">
                                                    H15 Prem Nagar, Uttam Nagar, Delhi, India - 110059
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                {/* FORM */}
                                <div className="col-md-6 col-lg-5 col-xl-4">
                                    <div>

                                        <form
                                            className="p-3 p-xl-4"
                                            onSubmit={handleSubmit}
                                        >

                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    type="text"
                                                    id="name-2"
                                                    name="name"
                                                    placeholder="Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    className="form-control"
                                                    type="email"
                                                    id="email-2"
                                                    name="email"
                                                    placeholder="Email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <textarea
                                                    className="form-control"
                                                    id="message-2"
                                                    name="message"
                                                    rows="6"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                />
                                            </div>

                                            {successMessage && (
                                                <div className="alert alert-success">
                                                    {successMessage}
                                                </div>
                                            )}

                                            {errorMessage && (
                                                <div className="alert alert-danger">
                                                    {errorMessage}
                                                </div>
                                            )}

                                            <div>
                                                <button
                                                    className="btn btn-primary d-block w-100"
                                                    type="submit"
                                                    disabled={loading}
                                                >
                                                    {loading ? "Sending..." : "Send "}
                                                </button>
                                            </div>

                                        </form>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </div>
            </section>

            {/* FAQ - AAPKA SAME FAQ CONTENT YAHAN RAHEGA */}

            <section className="py-4 py-xl-5 mb-5">
                <div className="container">

                    <div className="row mb-2">
                        <div className="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 className="display-6 fw-bold mb-5">
                                <span className="pb-3 underline">
                                    FAQ<br />
                                </span>
                            </h2>

                            <p className="text-muted mb-5">
                                Your Questions Answered: A Guide to IPR
                            </p>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-md-8 mx-auto">

                            <div
                                className="accordion text-muted"
                                role="tablist"
                                id="accordion-1"
                            >

                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-1 .item-1"
                                            aria-expanded="true"
                                        >
                                            What does a copyright protect?
                                        </button>
                                    </h2>

                                    <div
                                        className="accordion-collapse collapse show item-1"
                                        role="tabpanel"
                                        data-bs-parent="#accordion-1"
                                    >
                                        <div className="accordion-body">
                                            <p>
                                                A copyright protects original works of authorship, such as literary,
                                                dramatic, musical, artistic, and certain other intellectual creations.
                                                It gives you the exclusive right to reproduce, distribute, and display
                                                your work, preventing others from copying or exploiting it without
                                                your permission.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-1 .item-2"
                                        >
                                            Can something be protected by both a trademark and a copyright?
                                        </button>
                                    </h2>

                                    <div
                                        className="accordion-collapse collapse item-2"
                                        role="tabpanel"
                                        data-bs-parent="#accordion-1"
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-0">
                                                Yes! In some cases, a work may qualify for both protections. For
                                                example, the artistic design of a logo could be protected by copyright,
                                                while the logo itself as a brand identifier could be protected by a
                                                trademark.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-1 .item-3"
                                        >
                                            Do I need to register my trademark or copyright?
                                        </button>
                                    </h2>

                                    <div
                                        className="accordion-collapse collapse item-3"
                                        role="tabpanel"
                                        data-bs-parent="#accordion-1"
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-0">
                                                Registration isn't mandatory for either, but it offers significant
                                                advantages:
                                            </p>

                                            <ul>
                                                <li>
                                                    Stronger legal protection: A registered trademark or copyright
                                                    gives you a legal presumption of ownership and makes it easier
                                                    to sue infringers.
                                                </li>
                                                <li>
                                                    Public notice: Registration puts others on notice of your claim
                                                    to the IP, deterring potential infringement.
                                                </li>
                                                <li>
                                                    Benefits in certain situations: Registration is mandatory for
                                                    filing certain lawsuits and may be required for customs enforcement.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-1 .item-4"
                                        >
                                            What about trade secrets in India?
                                        </button>
                                    </h2>

                                    <div
                                        className="accordion-collapse collapse item-4"
                                        role="tabpanel"
                                        data-bs-parent="#accordion-1"
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-0">
                                                Trade secrets aren't formally registered in India, but you can
                                                protect them through:
                                            </p>

                                            <ul>
                                                <li>
                                                    Maintaining confidentiality: Limit access to the information,
                                                    use non-disclosure agreements (NDAs), and keep records of who
                                                    has access.
                                                </li>
                                                <li>
                                                    Marking confidential information: Label documents and materials
                                                    as "confidential" or "trade secret."
                                                </li>
                                                <li>
                                                    Taking prompt action against infringement: If your trade secret
                                                    is leaked, take steps to mitigate the damage and hold the
                                                    infringer accountable.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="accordion-item">
                                    <h2 className="accordion-header" role="tab">
                                        <button
                                            className="accordion-button collapsed"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#accordion-1 .item-5"
                                        >
                                            I have more questions! Who can help me?
                                        </button>
                                    </h2>

                                    <div
                                        className="accordion-collapse collapse item-5"
                                        role="tabpanel"
                                        data-bs-parent="#accordion-1"
                                    >
                                        <div className="accordion-body">
                                            <p className="mb-0">
                                                For specific legal advice, it's always best to consult with an
                                                intellectual property attorney. They can help you determine the best
                                                way to protect your IP and guide you through the registration process.
                                                <br />
                                                <br />
                                                At IPR Veda, We have experienced attorneys that have been successful
                                                in getting even hard to get trademarks.
                                                <br />
                                                <br />
                                                They have trademarked for top companies in India. Contact to discuss
                                                about yours today!
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center d-xl-flex justify-content-xl-center mt-5">
                    <button
                        className="btn btn-secondary disabled d-xl-flex"
                        type="button"
                        disabled=""
                    >
                        AI Powered Complete IPR Guide
                    </button>
                </div>

                <p className="text-center mt-3">
                    Coming your way soon
                </p>

            </section>
        </>
    );
};

export default CopyRoute;