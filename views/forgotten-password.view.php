<?php require_once 'partials/head.php'; ?>

<body style="">

    <?php require_once 'partials/nav.php'; ?>
    
    <section class="py-4 py-md-5 mt-5">
        <div class="container py-md-5">
            <div class="row d-flex align-items-center">
                <div class="col-md-6 text-center"><img class="img-fluid w-100" src="assets/img/illustrations/desk.svg"></div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-4">Forgot your <span class="underline">password</span>?</h2>
                    <p class="text-muted">Enter the email associated with your account and we'll send you a reset link.</p>
                    <form method="post" data-bs-theme="light">
                        <div class="mb-3"><input class="shadow form-control" type="email" name="email" placeholder="Email"></div>
                        <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Reset password</button></div>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <?php require_once 'partials/footer.php'; ?>
