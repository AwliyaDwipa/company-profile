
import './partnerships.css'
import Logo from './assets/cbf-logo.png'
import Logo2 from './assets/fia-logo.png'
// import Logo3 from './assets/FormulaE-Logo'
import Logo4 from './assets/gogoro-logo.png'
import Logo5 from './assets/gtlogo.png'
import Logo6 from './assets/imsalogo.png'
import Logo7 from './assets/M3-logo.png'
import Logo8 from './assets/Moto-gp-logo.png'
import Logo9 from './assets/porchelogo.png'
import Logo10 from './assets/unichef-logo.png'
import Logo11 from './assets/weclogo.png'
import Logo12 from './assets/wwf-logo.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const partnerships = () => {
    return ( 
        <div className="partnerships">
            <h1>OUR PARTNERSHIPS</h1>
            <div className="sponsor">
            <IoIosArrowBack className='arrow-2' />
                <img src={Logo} alt="" />
                <img src={Logo2} alt="" />
                {/* <img src={Logo3} alt="" /> */}
                <img src={Logo4} alt="" />
                <img src={Logo5} alt="" />
                <img src={Logo6} alt="" />
            </div>
            <div className="sponsor">
                <img src={Logo7} alt="" />
                <img src={Logo8} alt="" />
                <img src={Logo9} alt="" />
                <img src={Logo10} alt="" />
                <img src={Logo11} alt="" />
                <img src={Logo12} alt="" />
            <IoIosArrowForward className='arrow' />
            </div>
        </div>
     );
}
 
export default partnerships;