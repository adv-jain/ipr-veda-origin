<?php require_once 'partials/head.php'; ?>

<body style="">
    
    <?php require_once 'partials/nav.php'; ?>

    <main>
        <div class='bg-light py-5 mb-5'>        
            <div class="container py-5">
                <div class="row">
                    <div class="col s12">
                        <nav class="breadcrumb">
                            <a class="breadcrumb-item" href="home">Home</a>
                            <a class="breadcrumb-item" href="tools">Tools</a>
                            <span class="breadcrumb-item active" aria-current="page">Find Classes</span>
                        </nav>
                        
                        <h1 class='display-1 fw-bold'>Find Classes</h1>
                        <p>Find classes for your trademark.</p>
                    </div>
                </div>
            </div>
        </div>

    <section class="py-4 py-md-5 my-5">
        <div class="container py-md-5">
            <div class="row">
                <div class="col-md-6 text-center"><img class="img-fluid w-100" src="assets/img/illustrations/login.svg"></div>
                <div class="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 class="display-6 fw-bold mb-5"><span class="underline pb-1"><strong>Login</strong><br></span></h2>
                    <form method="post" data-bs-theme="light">
                        <div class="mb-3"><input class="shadow form-control" type="email" name="email" placeholder="Email"></div>
                        <div class="mb-3"><input class="shadow form-control" type="password" name="password" placeholder="Password"></div>
                        <div class="mb-5"><button class="btn btn-primary shadow" type="submit">Log in</button></div>
                    </form>
                    <p class="text-muted"><a href="forgotten-password.html">Forgot your password?</a></p>
                </div>
            </div>
        </div>
    </section>

<?php require_once 'partials/footer.php'; ?>
