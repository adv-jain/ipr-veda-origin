<nav class="navbar navbar-expand-md my-0 py-2 navbar-light" id="mainNav">
  <div class="container-fluid">
    <a class="navbar-brand d-flex align-items-center" href="/">
      <img src="assets/img/ipr-perfect-rect.png" style="width: 113px;"></a>
    <button data-bs-toggle="collapse" class="navbar-toggler border-0" data-bs-target="#navcol-1">
      <span class="visually-hidden">Toggle navigation</span>
      <!-- <span class="navbar-toggler-icon"></span> -->
      <i class="fa-solid fa-ellipsis-vertical"></i>
    </button>
    <div class="collapse navbar-collapse" id="navcol-1">
      <div class="d-flex justify-content-end w-100 align-items-center">
        <ul class="navbar-nav fw-bold small">
          <!-- <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li> -->
          <li class="nav-item"><a class="nav-link<?= url('trademark') ?>" href="trademark">Trademark</a></li>
          <li class="nav-item"><a class="nav-link<?= url('copyright') ?>" href="copyright">Copyright</a></li>
          <li class="nav-item"><a class="nav-link<?= url('patent') ?>" href="patent">Patent</a></li>
          <li class="nav-item"><a class="nav-link<?= url('about') ?>" href="about">About</a></li>
          <li class="nav-item"><a class="nav-link<?= url('contact') ?>" href="contact">Contact</a></li>
          <li class="nav-item"><a class="nav-link<?= url('blog') ?>" href="blog">Blog</a></li>
        </ul>
        <div>
          <div class="btn-group" role="group">
            <a type="button" class="btn btn-outline-warning" href='login'>Login</a>
            <a type="button" class="btn btn-warning " href='signup'>SignUp</a>
          </div>

        </div>



      </div>
      <a class="btn small text-nowrap" role="button" href="#">
        <i class="fa-solid fa-phone fa-xs fa-shake me-1"></i>
        <small>
          Consult Attorney
        </small>
      </a>

      <!-- 
      <div class='bg-warning py-3 px-3'>

        <small class="fw-bold border-bottom  border-dark text-uppercase d-block text-end w-100"
          style='font-size: 12px'>Talk to
          Attorney</small>
        <a class="fw-bolder shadow-none text-dark font-monospace rounded-3 d-xl-flex justify-content-xl-center align-items-xl-center"
          role="button" href="#" style='font-size: 16px'>
          <i class="fa-solid fa-phone fa-xs fa-shake me-2"></i>85060-59559</a>
      </div> -->

    </div>
  </div>
</nav>