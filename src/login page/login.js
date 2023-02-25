import './login.css'
import { Link } from 'react-router-dom';
import Michelin from './michelin.jpg';
import Logo from './Michelin-logo.png';

const login = () => {
    return ( 
        <div className="loginpage">
            <div className="image"></div>
            {/* <img src={Michelin} alt="" /> */}
            <div className="loginsec">
                <img src={Logo} alt="" />
                <header>LOGIN</header>
                <input type="text" placeholder='USERNAME' />
                <input type="password" placeholder='PASSWORD'/>
                <button><Link className='btn' to={'/homepage'}>Login</Link></button>
            </div>
            <span><Link className='register' to={'/register'}>Register</Link></span>
        </div>
     );
}
 
export default login;