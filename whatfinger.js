class Whatfinger {
    constructor() {
        this.el = document.getElementById("whatfinger");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `<div class="container">
        <div class="row">
          <!-- Counter Item -->
          <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div class="counter wow fadeInRight" data-wow-delay="0.3s">
              <div class="icon"><i class="lni-map"></i></div>
              <p class="titr">مکان های برگزاری</p>
              <span>در حال حاضر شیراز</span>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div class="counter wow fadeInRight" data-wow-delay="0.6s">
              <div class="icon"><i class="lni-timer"></i></div>
              <p class="titr">جمعه های هر هفته فعال</p>
              <span>زمان اجرا در فصل های مختلف متغاوت است</span>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div class="counter wow fadeInRight" data-wow-delay="0.9s">
              <div class="icon"><i class="lni-users"></i></div>
              <p class="titr">۵۰ عدد ظرفیت حضور</p>       
              <span>ظرفیت محدود جهت ارتقای کیفیت برگزاری هفتگی</span>
            </div>
          </div>
          <!-- Counter Item -->
          <div class="col-md-6 col-lg-3 col-xs-12 work-counter-widget text-center">
            <div class="counter wow fadeInRight" data-wow-delay="1.2s">
              <div class="icon"><i class="lni-coffee-cup"></i></div>
              <p class="titr">شبکه سازی با طعم کد و کافی</p>
              <span>اختصاص کافی شاپ در برنامه اجرایی</span>
            </div>
          </div>
        </div>
      </div>`; 
    }
}

new Whatfinger()   