class Time {
    constructor() {
        this.el = document.getElementById("timer");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `<div class="container">
        <div class="row text-center">
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="heading-count">
              <h2 class="wow fadeInDown" data-wow-delay="0.2s">تا شروع نشست بعدی</h2>
            </div>
          </div>
          <div class="col-md-12 col-sm-12 col-xs-12">
            <div class="row time-countdown justify-content-center wow fadeInUp" data-wow-delay="0.2s">
              <div id="clock" class="time-count"></div>
            </div>
            <a target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&amp;tmeid=NmN2NWY3NHY2MzcwMDdrNzY0bmIwdGwwbmcgei5hYmJhcy4xMzcwQG0&amp;tmsrc=z.abbas.1370%40gmail.com" class="btn btn-common wow fadeInUp" data-wow-delay="0.3s">اضافه به تقویم</a>
          </div>
        </div>
      </div>`; 
    }
}

new Time()   