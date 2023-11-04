class Footer {
    constructor() {
        this.el = document.getElementById("foot");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.2s">
            <h3><img src="assets/img/logo-with.png" alt=""></h3>
            <p>
              در فینگرکردر بستری فراهم شده تا برنامه نویسان بتوانند گردهم آیند و تجربیات و دانش خود را در اختیار دیگران قرار دهند شما میتوانید با شرکت در دورهمی ها ما را در این امر همراهی فرمایید
            </p>
          </div>
          <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.4s">
            <h3>دسترسی سریع</h3>
            <ul>
              <li><a href="https://www.payping.ir/p/@fingercoder">کمک به فینگرکدر</a></li>
              <li><a href="https://fingercoder.ir/#event">شرکت در دورهمی</a></li>
              <li><script type="text/javascript" src="https://formafzar.com/pages/formbuilder/ravesh-formbuilder.js" form-url="https://formafzar.com/form/nc9eg" form-style="dialog" form-link-text="عضویت به تیم اجرایی" form-theme=""></script></li>
              <li><script type="text/javascript" src="https://formafzar.com/pages/formbuilder/ravesh-formbuilder.js" form-url="https://formafzar.com/form/fvazc" form-style="dialog" form-link-text="درخواست ارائه" form-theme=""></script></li>
              <li><a href="https://github.com/fingercoder01">مشارکت در طراحی سایت</a></li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.6s">
            <h3>            </h3>
            <ul class="image-list">
              <li>
                <a referrerpolicy="origin" target="_blank" href="https://trustseal.enamad.ir/u?id=395231&amp;Code=nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD"><img referrerpolicy="origin" src="https://trustseal.enamad.ir/logo.aspx?id=395231&amp;Code=nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD" alt="" style="cursor:pointer" code="nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD"></a>          
              </li>
              <li>
                <span id="PPTrust" >
                  <script src="https://statics.payping.ir/trust-v3.js"
                      theme="light"
                      size="md" ></script>
                </span>
              </li>
            </ul>
          </div>
          <div class="col-md-6 col-lg-3 col-sm-6 col-xs-12 wow fadeInUp" data-wow-delay="0.8s">
            
            <!-- /.widget -->
            <div class="widget">
              <h5 class="widget-title">شبکه های اجتماعی</h5>
              <ul class="footer-social">
                <li><a class="coshal" href="https://instagram.com/fingercoder"><i class=""><img class="img-fluid" src="https://shirazlinuxcommunity.ir/assets/jpg/instagram.svg" alt=""></i></a></li>                
                <li><a class="coshal" href="https://www.linkdin.com/company/fingercoder/"><i class=""><img class="img-fluid" src="https://shirazlinuxcommunity.ir/assets/jpg/linkedin.svg" alt=""></i></a></li>
                <li><a class="coshal" href="https://t.me/fingercoder"><i class=""><img class="img-fluid" src="https://shirazlinuxcommunity.ir/assets/jpg/telegram.svg" alt=""></i></a></li>
                <li><a class="coshal" href="https://www.aparat.com/fingercoder"><i class=""><img class="img-fluid" src="https://shirazlinuxcommunity.ir/assets/jpg/youtube.svg" alt=""></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>`; 
    }
}

new Footer()   