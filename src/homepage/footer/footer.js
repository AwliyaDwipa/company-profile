
import './footer.css'
import Logo from './michelin(1).png'
import { BsLinkedin} from "react-icons/bs";
import { BsFacebook} from "react-icons/bs";
import {BsYoutube} from "react-icons/bs";
import {BsTwitter} from "react-icons/bs";



const footer = () => {
    return (
        <>
        <div className="footer">
            <img src={Logo} alt="" />
            <div className="desc">
                <a href="#">Legal notice</a>
                <a href="#">Privacy policy</a>
                <a href="#">Cookies policy</a>
                <a href="#">Contact</a>
            </div>
            <div className="sosmed">
                <a href="#"><BsLinkedin className='linkedin' /></a>
               <a href="#"><BsFacebook className='fb' /></a>
               <a href="#"><BsYoutube  className='yt' /></a>
               <a href="#"><BsTwitter  className='twt'/></a>
            </div>
        </div>
        <div className="copyr">
            <p>Copyright © 2023 MICHELIN. All rights reserved</p>
        </div>
        </> 
     );
}
 
export default footer;