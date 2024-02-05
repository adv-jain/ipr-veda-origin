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


        <?php 


            echo "<div class='container py-5'>";
            echo "<div class='row'>";
            foreach ($chemicals as $key => $value) {
                echo "<div class='col'>";
                echo "<h2 class='badge bg-info'>Class $key</h2>";
                echo "<p>$value</p>";
                echo "</div>";
            }
            echo "</div>";
            echo "</div>";
        
        ?>
        
    </main>

<?php require_once 'partials/footer.php'; ?>