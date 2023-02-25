
import './nav.css';
import logonav from './logo-nav-removebg-preview.png'
import { Link } from 'react-router-dom';

const nav = () => {
    return ( 
        <div className="navigation">
            <div className="company-name">
                <img src={logonav} alt="" />
            </div>
            <div className="option">
                <Link to={'/homepage'}>Beranda</Link>
                <a href="#">Visi</a>
                <a href="#">Misi</a>
                <Link to={'/Aboutpage'}>Tentang</Link>
                <Link to={'/kontak'}>Kontak</Link>
                <Link className="button" to={'/'}>Log in</Link>
            </div>
        </div>
     );
}
 
export default nav;