import './herosection.css';
import img1 from './img/imags/icon/bolt.png';
import img2 from './img/imags/icon/chevron_left.png';
function Herosection(){
    return(
        <section className="hero-section">
            <h1>با سرچ کمتر نیجه بهتر بگیر</h1>
            <p>کانسپتو اولین مرجع معتبر معرفی استارتاپ ها و شرکت های ایرانی</p>
            <button className="hero-section__btn-right" type="button">
                <img className="hero-section__btn-right__vertical-align" src={img1}/>
                رایگان شروع کن!
            </button>
            <button className="hero-section__chevron_left" type="button">
                درباره کانسپتو
                <img className="hero-section__chevron_left__vertical-align" src={img2}/>
            </button>
        </section>
    )
}
export default Herosection