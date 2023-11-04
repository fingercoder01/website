class Service {
    constructor() {
        this.el = document.getElementById("services");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">چرا فینگرکدر ؟</h1>
              <p class="wow fadeInDown" data-wow-delay="0.2s">مزایای شرکت در جلسات حضوری فنیگرکدر</p>
            </div>
          </div>
        </div>
        <div class="row services-wrapper">
          <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="0.2s">
              <div class="icon">
                <i class="lni-heart"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">عشق به کدنویسی</a></h3>
                <p>فضایی مختص علاقه مندان برنامه نویسی، توانایی خود را در فینگرکدر به اوج برسانید و بهترین پروژه ها رو ایجاد کنید.</p>
              </div>
            </div>
          </div>
          <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="0.4s">
              <div class="icon">
                <i class="lni-gallery"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">آشنایی با چهره های جدید</a></h3>
                <p>فضایی برای اشنایی با دیگر برنامه نویسان حوزه های مختلف</p>
              </div>
            </div>
          </div>
          <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="0.6s">
              <div class="icon">
                <i class="lni-envelope"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">بینش فناوری نو</a></h3>
                <p>با هم در فینگرکدر به بالاترین ارتفاعات برنامه نویسی برسیم و توانایی های خود را به اوج برسانیم</p>
              </div>
            </div>
          </div>
          <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="0.8s">
              <div class="icon">
                <i class="lni-cup"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">شبکه سازی</a></h3>
                <p> با شبکه سازی در جلسات فینگرکدر برای هم دنیایی از ارتباطات پویا و فرصت های بیشمار دست پیدا کنید!</p>
              </div>
            </div>
          </div>
           <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="1s">
              <div class="icon">
                <i class="lni-user"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">توسعه فردی</a></h3>
                <p>در فینگرکدر فضایی ایجاد شده تا با هم و با هم فکری و همکاری با دیگران به ارتباطات و پیشرفت هم دیگه کمک کنیم.</p>
              </div>
            </div>
          </div>
           <!-- Services item -->
          <div class="col-md-6 col-lg-4 col-xs-12 padding-none">
            <div class="services-item wow fadeInDown" data-wow-delay="1.2s">
              <div class="icon">
                <i class="lni-bubble"></i>
              </div>
              <div class="services-content">
                <h3><a href="#">هفته نگار</a></h3>
                <p>هفته نگار در فینگرکدر باعث میشود با هم به توسعه هفتگی و ارتقای یکدیگر بپردازیم</p>
              </div>
            </div>
          </div>
        </div>
      </div>`; 
    }
}

new Service()   