import './pereview.css';
import './responsive.css';
import img1 from './img/imags/Image.svg';
import img2 from './img/imags/Image (1).svg';
import img3 from './img/imags/Image (2).svg';
import img4 from './img/imags/icon/PDP (About) 6.png';
import img5 from './img/img4/Frame 1.svg';
import img6 from './img/img4/Frame 427320141.svg';
import img7 from './img/img4/Frame 3svg.svg';
import img8 from './img/img2/Card (2).svg';
import img9 from './img/img2/Card (3).svg';
import img10 from './img/img2/Card (4).svg';
function Pereview(){
    return(
        <div className="container-fliud pos">
            <div class="preview dis-none block">
                <img src={img1}/>
            </div>
            <div class="preview-sm dis-none block">
                <img src={img2}/>
            </div>
            <div class="preview-landscape dis-none block">
                <img src={img3}/>
            </div>
            <div className="preview-xs dis-none-md">
                <img src= {img4}/>
            </div>
            <div class="invaesment">
                <img className='invaesment__img1 col-xs-12 col-sm-12 col-md-4' src={img5}/>
                <img className='invaesment__img2 col-xs-12 col-sm-12 col-md-4' src={img6}/>
                <img className='invaesment__img3 col-xs-12 col-sm-12 col-md-4' src={img7}/>
            </div>
        </div>
    )
}
export default Pereview