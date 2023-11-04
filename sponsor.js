class Sponsor {
    constructor() {
        this.el = document.getElementById("sponsors");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `            <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">حامیان</h1>
              <p class="wow fadeInDown estedad-b" data-wow-delay="0.2s">حمایت شما به عنوان حامیان جامعه فینگرکدر، باعث خواهد شد تا ما بتوانیم به هدفمان در ارتقای دانش و تجربه برنامه‌نویسان و علاقه‌مندان به تکنولوژی نزدیک‌تر شویم و ما قادر خواهیم بود تا برنامه‌های بیشتری را در زمینه‌های برنامه نویسی برگزار کنیم و به برنامه‌نویسان و علاقه‌مندان به فناوری اطلاعات، تجربیات و دانش جدیدی از جامعه حضوری ارائه دهیم.</p>
            </div>
          </div>
        </div>
        <div class="row mb-30 text-center wow fadeInDown" data-wow-delay="0.3s">
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="spnsors-logo">
              <a href="https://mizbanic.com/"><img class="img-fluid" src="assets/img/sponsors/logo-02.png" alt=""></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="spnsors-logo">
              <a href="https://www.blockto.ir/"><img class="img-fluid" src="assets/img/sponsors/logo-04.png" alt=""></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="spnsors-logo">
              <a href="http://zarabanebourse.ir/"><img class="img-fluid" src="assets/img/sponsors/logo-03.png" alt=""></a>
            </div>
          </div>
          <div class="col-md-3 col-sm-3 col-xs-12">
            <div class="spnsors-logo">
              <a href="https://rokhdad.media/"><img class="img-fluid" src="assets/img/sponsors/logo-01.png" alt=""></a>
            </div>
          </div>
          <div class="col-12 text-center">
            <a href="#" class="btn btn-common disabled">حامیان سابق</a>
          </div>
        </div>
      </div>`; 
    }
}

new Sponsor()   