import Logo from './michelin(1).png';
import './about-cnt.css';


const aboutcnt = () => {
    return ( 
        <div className="content-abt">
            <img src={Logo} alt="" />
            <div className="first-content">
                <h1>About us</h1>
                <p>Discover the Group's many different facets — sustainable mobility, innovation, travel support, restaurant booking — at a glance.</p>
            </div>
        </div>
     );
}
 
export default aboutcnt;