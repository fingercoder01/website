class Faq {
    constructor() {
        this.el = document.getElementById("faq");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">سوالات متداول</h1>
              <p class="wow fadeInDown" data-wow-delay="0.2s">پاسخ به سوالات متداول در مورد جامعه فینگرکدر</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div class="accordion">
              <div class="card">
                <div class="card-header" id="headingOne">
                  <div class="header-title" data-toggle="collapse" data-target="#questionOne" aria-expanded="true" aria-controls="collapseOne">
                    <i class="lni-pencil"></i> فینگرکدر چیست؟
                  </div>
                </div>
                <div id="questionOne" class="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div class="card-body">
                    فینگرکدر یک جامعه مخصوص برنامه‌نویسان و فعالان حوزه فناوری اطلاعات است که با هدف ارتقای دانش و تبادل تجربیات در این حوزه تشکیل شده است.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo">
                    <div class="header-title" data-toggle="collapse" data-target="#questionTwo" aria-expanded="false" aria-controls="questionTwo">
                      <i class="lni-pencil"></i>  آیا شرکت در نشست های فینگرکدر رایگان است؟ 
                    </div>
                </div>
                <div id="questionTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div class="card-body">
                    خیر، جهت ارزش آفرینی برای نشست های فینگرکدر و خلق ارزش برای شرکت کننده نشست های فینگرکدر غیررایگان میباشد.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingThree">
                  <div class="header-title" data-toggle="collapse" data-target="#questionThree" aria-expanded="false" aria-controls="questionThree">
                    <i class="lni-pencil"></i>  چه کسانی می‌توانند در نشست های فینگرکدر شرکت کنند؟   
                  </div>
                </div>
                <div id="questionThree" class="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div class="card-body">
                    هر کسی که علاقه‌مند به برنامه‌نویسی و فعالیت در حوزه فناوری اطلاعات است، می‌تواند در نشست‌های فینگرکدر شرکت کند.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFour">
                  <div class="header-title" data-toggle="collapse" data-target="#questionFour" aria-expanded="false" aria-controls="questionFour">
                   <i class="lni-pencil"></i> آیا در نشست های فینگرکدر تنها به زبان‌های برنامه نویسی خاصی پرداخته می‌شود؟
                  </div>
                </div>
                <div id="questionFour" class="collapse" aria-labelledby="headingThree" data-parent="#question">
                  <div class="card-body">
                    در نشست‌های فینگرکدر به زبان‌های برنامه‌نویسی مختلف پرداخته می‌شود و تنها به زبان خاصی محدود نمی‌شود.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <div class="accordion">
              <div class="card">
                <div class="card-header" id="headingOne2">
                  <div class="header-title" data-toggle="collapse" data-target="#questionOne2" aria-expanded="true" aria-controls="collapseOne">
                    <i class="lni-pencil"></i> چگونه می‌توانم به عنوان یک سخنران در نشست های فینگرکدر شرکت کنم؟
                  </div>
                </div>
                <div id="questionOne2" class="collapse" aria-labelledby="headingOne" data-parent="#question">
                  <div class="card-body">
                    برای شرکت به عنوان سخنران در نشست‌های فینگرکدر، باید با تیم فینگرکدر تماس بگیرید و موضوع ارائه خود را برای آن‌ها ارسال کنید.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingTwo2">
                    <div class="header-title" data-toggle="collapse" data-target="#questionTwo2" aria-expanded="false" aria-controls="questionTwo">
                      <i class="lni-pencil"></i>  چگونه می‌توانم در نشست های حضوری فینگرکدر شرکت کنم؟ 
                    </div>
                </div>
                <div id="questionTwo2" class="collapse" aria-labelledby="headingTwo" data-parent="#question">
                  <div class="card-body">
                    برای شرکت در نشست‌های حضوری فینگرکدر، می‌توانید از طریق سایت فینگرکدر و صفحات شبکه‌های اجتماعی آن، به تاریخ و محل برگزاری نشست‌ها دسترسی پیدا کنید و در صورت تمایل، حضور خود را ثبت کنید.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingFive">
                  <div class="header-title" data-toggle="collapse" data-target="#questionFive" aria-expanded="false" aria-controls="questionFive">
                    <i class="lni-pencil"></i>آیا در نشست های فینگرکدر فرصتی برای شبکه‌سازی و ارتباط با افراد دیگر وجود دارد؟
                  </div>
                </div>
                <div id="questionFive" class="collapse" aria-labelledby="headingFive" data-parent="#question">
                  <div class="card-body">
                    در نشست‌های فینگرکدر فرصت خوبی برای شبکه‌سازی و ارتباط با افراد دیگر در حوزه فناوری اطلاعات و برنامه‌نویسی وجود دارد.
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-header" id="headingSix">
                  <div class="header-title" data-toggle="collapse" data-target="#questionSix" aria-expanded="false" aria-controls="questionSix">
                    <i class="lni-pencil"></i>  چگونه می‌توانم از نشست های فینگرکدر به عنوان یک شرکت کننده حامی حمایت کنم؟
                  </div>
                </div>
                <div id="questionSix" class="collapse" aria-labelledby="headingFive" data-parent="#question">
                  <div class="card-body">
                    برای حمایت از جامعه فینگرکدر، می‌توانید با انجام معرفی فینگرکدر به دوستان برنامه نویس‌ خود، حضور در نشست‌ها، شرکت در کارگاه‌ها و یا حتی به عنوان حامی مالی از طریق سایت فینگرکدر حمایت مالی انجام بدید.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`; 
    }
}

new Faq()   