
import './purpose.css'
import Helmet from './helmet-michelin-(1).png'
import Logo from './michelin(1).png'

const purpose = () => {
    return ( 
        <div className="purpose">
            <div className="visi">
                <div className="tujuan">
                <h1>Our Purpose</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, sit enim nam unde qui quae at tenetur doloribus repudiandae adipisci suscipit nostrum atque sapiente! Ut suscipit, molestias enim dolorum, fuga quam minima eligendi voluptas sequi quisquam illum architecto, voluptates praesentium?</p>
                </div>
                <img src={Helmet} alt="" />
            </div>
            <div className="komitmen">
                <img src={Logo} alt="" />
                <div className="mision">
                    <h1>Our commitments</h1>
                    <p>The major upheavals the world is facing have strengthened the validity of Michelin's “All Sustainable” business model. A model which is based on three inseparable criteria: the growth and development of people, financial and operational performance, and the positive contribution of the Group's activities to the planet and its inhabitants.</p>
                </div>
            </div>
        </div>
     );
}
 
export default purpose;