class Footer {
    constructor() {
        this.el = document.getElementById("myFooter");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return  `<div class="container">
        <div class="row">
            <div class="col-sm-3">
                <h5>تماس با ما</h5>
                <ul>
                    <li><a href="tel:09353554898">09353554898</a></li>
                    <li><a href="mailto: info@fingercoder.ir">info@fingercoder.ir</a></li>                       
                </ul>
            </div>           
            <div class="col-sm-3 info">
                <h5><a href="https://mellipay.ir/mellilink/fingercoder/">کمک به فینگرکدر</a></h5>
                <h5><a href="https://fingercoder.ir/#event">شرکت در دورهمی</a></h5>
                <h5><a href="https://docs.google.com/forms/d/e/1FAIpQLScxoLSmm5SyKwlbOMoPIJQK_HlypsFMaCPPlOSbAhvxFXMfmw/viewform">عضویت به تیم اجرایی</a></h5>
                <h5><a href="https://docs.google.com/forms/d/e/1FAIpQLScOTvEy-EuqQeIN_kroX2yBP7i2LkxbBkP3SjrgR11PUdiRIw/viewform?usp=sharing">درخواست ارائه</a></h5>
                <h5><a href="https://github.com/fingercoder01/website">مشارکت در طراحی سایت</a></h5>
            </div>
        </div>
    </div>
    <div class="col-sm-3">
        <a referrerpolicy='origin' target='_blank' href='https://trustseal.enamad.ir/u?id=395231&Code=nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD'><img referrerpolicy='origin' src='https://trustseal.enamad.ir/logo.aspx?id=395231&Code=nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD' alt='' style='cursor:pointer' Code='nFDskwkQw4tJRAXcEzZ7pw6iotckhCSD'></a>
    </div>
    <div class="second-bar">
       <div class="container">
       <div class="social-icons">
            <a href="https://instagram.com/fingercoder"><img src="https://shirazlinuxcommunity.ir/assets/jpg/instagram.svg" alt=""></a>
            <a href="https://www.linkdin.com/company/fingercoder/" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/linkedin.svg" alt=""></a>
            <a href="https://t.me/fingercoder" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/telegram.svg" alt=""></a>
            <a href="https://www.aparat.com/fingercoder" ><img src="https://shirazlinuxcommunity.ir/assets/jpg/youtube.svg" alt=""></a>
            <p>تمامی حقوق محفوظ است. &copy; فینگرکدر - ۱۴۰۰ </p>
        </div>
        </div>
    </div>`; 
    }
}

new Footer()