class Gallery {
    constructor() {
        this.el = document.getElementById("gallery");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title-header text-center">
              <h1 class="section-title wow fadeInUp" data-wow-delay="0.2s">گالری تصاویر نشست های فینگرکدر</h1>
              <p class="wow fadeInDown" data-wow-delay="0.2s">لحضات ضبط شده از با هم بودن در فینگرکدر</p>
            </div>
          </div> 
        </div>
        <div class="row">
          <div class="col-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-1.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-1.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="ccol-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-2.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-2.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="ccol-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-3.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-3.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="ccol-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-4.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-4.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="ccol-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-5.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-5.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
          <div class="ccol-md-6 col-sm-6 col-lg-4">
            <div class="gallery-box">
              <div class="img-thumb">
                <img class="img-fluid" src="assets/img/gallery/img-6.jpeg" alt="">
              </div>
              <div class="overlay-box text-center">
                <a class="lightbox" href="assets/img/gallery/img-6.jpeg">
                  <i class="lni-plus"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mt-3">
          <div class="col-xs-12">
            <a href="https://photo.fingercoder.ir" class="btn btn-common">گالری تکمیلی</a>
          </div>
        </div>
      </div>`; 
    }
}

new Gallery()   