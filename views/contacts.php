<?php require_once 'partials/head.php'; ?>

<?php require 'router.php'; ?>

<body style="padding-top 82px;">
    
    <?php require_once 'partials/nav.php'; ?>
    <?php require_once 'partials/header.php'; ?>


    <section class="py-5 mt-5">
        <div class="container py-5">
            <section class="position-relative py-4 py-xl-5">
                <div class="container position-relative">
                    <div class="row mb-5">
                        <div class="col-md-8 col-xl-6 text-center mx-auto">
                            <h2 class="display-6 fw-bold mb-4">Got any <span class="underline">questions</span>?</h2>
                            <p class="text-muted">Our team is always here to help. Send us a message and we'll get back to you shortly.</p>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-6 col-lg-4 col-xl-4">
                            <div class="d-flex flex-column justify-content-center align-items-start h-100">
                                <div class="d-flex align-items-center p-3">
                                    <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-telephone">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path>
                                        </svg></div>
                                    <div class="px-2">
                                        <h6 class="mb-0">Phone</h6>
                                        <p class="mb-0">+91 85060-59559</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center p-3">
                                    <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-envelope">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
                                        </svg></div>
                                    <div class="px-2">
                                        <h6 class="mb-0">Email</h6>
                                        <p class="mb-0">info@iprveda.com</p>
                                    </div>
                                </div>
                                <div class="d-flex align-items-center p-3">
                                    <div class="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" class="bi bi-pin">
                                            <path d="M4.146.146A.5.5 0 0 1 4.5 0h7a.5.5 0 0 1 .5.5c0 .68-.342 1.174-.646 1.479-.126.125-.25.224-.354.298v4.431l.078.048c.203.127.476.314.751.555C12.36 7.775 13 8.527 13 9.5a.5.5 0 0 1-.5.5h-4v4.5c0 .276-.224 1.5-.5 1.5s-.5-1.224-.5-1.5V10h-4a.5.5 0 0 1-.5-.5c0-.973.64-1.725 1.17-2.189A5.921 5.921 0 0 1 5 6.708V2.277a2.77 2.77 0 0 1-.354-.298C4.342 1.674 4 1.179 4 .5a.5.5 0 0 1 .146-.354zm1.58 1.408-.002-.001.002.001m-.002-.001.002.001A.5.5 0 0 1 6 2v5a.5.5 0 0 1-.276.447h-.002l-.012.007-.054.03a4.922 4.922 0 0 0-.827.58c-.318.278-.585.596-.725.936h7.792c-.14-.34-.407-.658-.725-.936a4.915 4.915 0 0 0-.881-.61l-.012-.006h-.002A.5.5 0 0 1 10 7V2a.5.5 0 0 1 .295-.458 1.775 1.775 0 0 0 .351-.271c.08-.08.155-.17.214-.271H5.14c.06.1.133.191.214.271a1.78 1.78 0 0 0 .37.282"></path>
                                        </svg></div>
                                    <div class="px-2">
                                        <h6 class="mb-0">Location</h6>
                                        <p class="mb-0">H15 Prem Nagar, Uttam Nagar, Delhi, India - 110059</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-5 col-xl-4">
                            <div>
                                <form class="p-3 p-xl-4" method="post">
                                    <div class="mb-3"><input class="form-control" type="text" id="name-2" name="name" placeholder="Name"></div>
                                    <div class="mb-3"><input class="form-control" type="email" id="email-2" name="email" placeholder="Email"></div>
                                    <div class="mb-3"><textarea class="form-control" id="message-2" name="message" rows="6" placeholder="Message"></textarea></div>
                                    <div><button class="btn btn-primary d-block w-100" type="submit">Send </button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
    <section class="py-4 py-xl-5 mb-5">
        <div class="container">
            <div class="row mb-2">
                <div class="col-md-8 col-xl-6 text-center mx-auto">
                    <h2 class="display-6 fw-bold mb-5"><span class="pb-3 underline">FAQ<br></span></h2>
                    <p class="text-muted mb-5">Your Questions Answered: A Guide to IPR</p>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-md-8 mx-auto">
                    <div class="accordion text-muted" role="tablist" id="accordion-1">
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">What does a copyright protect?</button></h2>
                            <div class="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p>A copyright protects original works of authorship, such as literary, dramatic, musical, artistic, and certain other intellectual creations. It gives you the exclusive right to reproduce, distribute, and display your work, preventing others from copying or exploiting it without your permission.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">Can something be protected by both a trademark and a copyright?</button></h2>
                            <div class="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">Yes! In some cases, a work may qualify for both protections. For example, the artistic design of a logo could be protected by copyright, while the logo itself as a brand identifier could be protected by a trademark.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">Do I need to register my trademark or copyright?</button></h2>
                            <div class="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">Registration isn't mandatory for either, but it offers significant advantages:</p>
                                    <ul>
                                        <li>Stronger legal protection: A registered trademark or copyright gives you a legal presumption of ownership and makes it easier to sue infringers.</li>
                                        <li>Public notice: Registration puts others on notice of your claim to the IP, deterring potential infringement.</li>
                                        <li>Benefits in certain situations: Registration is mandatory for filing certain lawsuits and may be required for customs enforcement.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-4" aria-expanded="false" aria-controls="accordion-1 .item-4">What about trade secrets in India?</button></h2>
                            <div class="accordion-collapse collapse item-4" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">Trade secrets aren't formally registered in India, but you can protect them through:</p>
                                    <ul>
                                        <li>Maintaining confidentiality: Limit access to the information, use non-disclosure agreements (NDAs), and keep records of who has access.</li>
                                        <li>Marking confidential information: Label documents and materials as "confidential" or "trade secret."</li>
                                        <li>Taking prompt action against infringement: If your trade secret is leaked, take steps to mitigate the damage and hold the infringer accountable.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" role="tab"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-5" aria-expanded="false" aria-controls="accordion-1 .item-5">I have more questions! Who can help me?</button></h2>
                            <div class="accordion-collapse collapse item-5" role="tabpanel" data-bs-parent="#accordion-1">
                                <div class="accordion-body">
                                    <p class="mb-0">For specific legal advice, it's always best to consult with an intellectual property attorney. They can help you determine the best way to protect your IP and guide you through the registration process.<br><br>At IPR Veda, We have experienced attorneys that have been successful in getting even hard to get trademarks. <br><br>They have trademarked for top companies in India. Contact to discuss about yours today!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center d-xl-flex justify-content-xl-center mt-5"><button class="btn btn-secondary disabled d-xl-flex" type="button" disabled="">AI Powered Complete IPR Guide</button></div>
        <p class="text-center mt-3">Coming your way soon</p>
    </section>
    
    <?php require_once 'partials/footer.php'; ?>