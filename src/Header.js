import './style.css';
import './responsive.css';
import image1 from './img/imags/icon/menu.png';
import image2 from './img/imags/logo.png';
import image3 from './img/imags/icon/bolt.png';
import image4 from './img/imags/icon/login.png';
import image5 from './img/imags/icon/search.png';
import image6 from './img/imags/icon/bolt.png';
import image7 from './img/imags/icon/login.png';
function Header(){
    return(
        <header>
        <div className="container-fliud">
            <div className="row">
                <div className="icon-menu col-xs-1 col-sm-1 dis-none-md">
                    <img src={image1}/>
                </div>
                <div className="img-logo col-xs-8 col-sm-8 col-md-3">
                    <img src={image2}/>
                </div>
                <div className="img-bolt col-xs-2 col-sm-2 dis-none-md">
                    <div><img src={image3}/></div>
                </div>
                <div className="img-login col-xs-1 col-sm-1 dis-none-md">
                    <div><img src={image4}/></div>
                </div>
                <div className="input-heder col-xs-12 col-sm-12 col-md-4">
                    <img className="search" src={image5}/>
                    <input type="text" placeholder=" جستجو کسب و کار"/>
                </div>
                <div className="dis-none-xs dis-none-sm block col-md-2">
                    <button className="btn-right" type="button">
                        <img className="vertical-align" src={image6}/>
                        رایگان شروع کن!
                    </button>
                </div>
                <div className="dis-none-xs dis-none-sm block col-md-2">
                    <button className="btn-left" type="button">
                        <img className="vertical-align" src={image7}/>
                        ورود/ثبت نام
                    </button>
                </div>
                <div className="nav-bar dis-none-xs dis-none-sm block col-md-12">
                    <ul>
                        <li>شرکت ها</li>
                        <li>فرصت شغلی</li>
                        <li>اخبار و رویداد ها</li>
                        <li>درباره ی ما</li>
                        <li>تماس با ما</li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Header