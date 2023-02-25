import './register.css'
import { Link } from 'react-router-dom';
import Logo from './Michelin-logo.png';

const register = () => {
    return ( 
        <div className="registerpage">
        <div className="image"></div>
        {/* <img src={Michelin} alt="" /> */}
        <div className="registersec">
            <img src={Logo} alt="" />
            <header>REGISTER</header>
            <input type="text" placeholder='USERNAME' />
            <input type="email" id="email" name="email" placeholder='EMAIL'/>
            <input type="password" placeholder='PASSWORD'/>
            <button><Link className='btn' to={'/homepage'}>Register</Link></button>
        </div>
        <span><Link className='register' to={'/'}>login</Link></span>
    </div>
     );
}
 
export default register;