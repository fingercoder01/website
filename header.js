class Nav {
    constructor() {
        this.el = document.getElementById("header-wrap");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `      <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg fixed-top scrolling-navbar">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main-navbar"
                      aria-controls="main-navbar" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                <span class="icon-menu"></span>
                <span class="icon-menu"></span>
                <span class="icon-menu"></span>
              </button>
              <a href="https://fingercoder.ir" class="navbar-brand"><img src="assets/img/logo.png" alt=""></a>
            </div>
            <div class="collapse navbar-collapse" id="main-navbar">
              <ul class="navbar-nav mr-auto w-100 justify-content-end">
                <li class="nav-item active">
                  <a class="nav-link" href="#header-wrap">
                    خانه
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#services">
                    چرا فینگرکدر
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#event">
                    نشست ها
                  </a>
                </li>      
                <li class="nav-item">
                  <a class="nav-link" href="#team">
                    تیم اجرایی
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#gallery">
                    تصاویر
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#faq">
                    سوالات متداول
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#sponsors">
                    حامیان
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#pricing">
                    حامی شو
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#google-map-area">
                    تماس با ما
                  </a>
                </li>
              </ul>
            </div>
          </div>
  
          <!-- Mobile Menu Start -->
          <ul class="mobile-menu">
            <li>
              <a class="page-scrool" href="#header-wrap">خانه</a>
            </li>
            <li>
              <a class="page-scroll" href="#services">چرا فینگرکدر</a>
            </li>
            <li>
              <a class="page-scrool" href="#event">نشست ها</a>
            </li>          
            <li>
              <a class="page-scroll" href="#team">تیم اجرایی</a>
            </li>
            <li>
              <a class="page-scroll" href="#gallery">تصاویر</a>
            </li>
            <li>
              <a class="page-scroll" href="#faq">سوالات متداول</a>
            </li>
            <li>
              <a class="page-scroll" href="#sponsors">حامیان</a>
            </li>
            <li>
              <a class="page-scroll" href="#pricing">حامی شو</a>
            </li>
            <li>
              <a class="page-scroll" href="#google-map-area">تماس با ما</a>
            </li>
          </ul>
          <!-- Mobile Menu End -->
  
        </nav>
        <!-- Navbar End -->
  
        <!-- Main Carousel Section Start -->
        <div id="main-slide" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#main-slide" data-slide-to="0" class="active"></li>
            <li data-target="#main-slide" data-slide-to="1"></li>
            <li data-target="#main-slide" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src="assets/img/slider/slide1.jpeg" alt="First slide">
              <div class="carousel-caption d-md-block">
                <p class="fadeInUp wow" data-wow-delay=".6s">جمعه های هر هفته</p>
                <h1 class="wow fadeInDown heading" data-wow-delay=".4s">برای من، برای تو، برای همه</h1>
                <a href="#timer" class="fadeInLeft wow btn btn-common btn-lg" data-wow-delay=".6s">تا شروع نشست بعدی</a>
                <a href="#services" class="fadeInRight wow btn btn-border btn-lg" data-wow-delay=".6s">بیشتر از فینگرکدر بدانید</a>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="assets/img/slider/slide2.jpeg" alt="Second slide">
              <div class="carousel-caption d-md-block">
                <p class="fadeInUp wow" data-wow-delay=".6s">تا به امروز ...</p>
                <h1 class="wow bounceIn heading" data-wow-delay=".7s">بیش از ۲۲ نفر ارائه دهنده</h1>
                <a href="#event" class="fadeInUp wow btn btn-border btn-lg" data-wow-delay=".8s">اطلاعات بیشتر</a>
              </div>
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="assets/img/slider/slide3.jpeg" alt="Third slide">
              <div class="carousel-caption d-md-block">
                <p class="fadeInUp wow" data-wow-delay=".6s">رضایت و تعداد شرکت کنندگان</p>
                <h1 class="wow fadeInUp heading" data-wow-delay=".6s">بیش تر ۵۶۰ نفر شرکت کننده حضوری در شیراز</h1>
                <h1 class="wow fadeInUp heading" data-wow-delay=".6s">رضایت عمومی شرکت کنندگان از فینگرکدر</h1>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#main-slide" role="button" data-slide="prev">
            <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-left"></i></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#main-slide" role="button" data-slide="next">
            <span class="carousel-control" aria-hidden="true"><i class="lni-chevron-right"></i></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- Main Carousel Section End -->`; 
    }
}

new Nav()   