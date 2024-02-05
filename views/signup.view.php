<?php require_once 'partials/head.php'; ?>

<body style="">

    <?php require_once 'partials/nav.php'; ?>

    <section class="py-4 py-md-5 my-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-6 text-center"><img class="img-fluid w-100"
                        src="assets/img/illustrations/register.svg"></div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-5"><span class="underline pb-1"><strong>Sign up</strong></span></h2>
                    <form method="post" data-bs-theme="light">
                        <div class="mb-3"><input class="shadow-sm form-control" type="email" name="email"
                                placeholder="Email"></div>
                        <div class="mb-3"><input class="shadow-sm form-control" type="password" name="password"
                                placeholder="Password"></div>
                        <div class="mb-3"><input class="shadow-sm form-control" type="password" name="password_repeat"
                                placeholder="Repeat Password"></div>
                        <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Create account</button>
                        </div>
                    </form>
                    <p class="text-muted">Have an account? <a href="login">Log in&nbsp;<svg
                                xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
                                stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                                stroke-linejoin="round" class="icon icon-tabler icon-tabler-arrow-narrow-right">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M5 12l14 0"></path>
                                <path d="M15 16l4 -4"></path>
                                <path d="M15 8l4 4"></path>
                            </svg></a>&nbsp;</p>
                </div>
            </div>
        </div>
    </section>

    <?php require_once 'partials/footer.php'; ?>