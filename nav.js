class Nav {
    constructor() {
        this.el = document.getElementById("nav");
        this.el.innerHTML = this.render();
    }

    render = () => {
        return `<img src=" https://fingercoder.ir/assets/jpg/logo.png" alt="">
        <ul>
            <li><a href="https://fingercoder.ir">خانه</a></li>
            <li><a href="https://fingercoder.ir/#team">درباره ما</a></li>
            <li><a href="https://fingercoder.ir/#event">نشست ها</a></li>
            <li><a href="https://fingercoder.ir/#participant">شرکت کنندگان</a></li>
            <li><a href="https://photo.fingercoder.ir">گالری</a></li>
    
        </ul>`; 
    }
}

new Nav()   