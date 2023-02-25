import './content.css'
import Michelin from './michelin(1).png';
import Michelin2 from './michelin(2).png';

const content = () => {
    return ( 
        <div className="content">
            <div className="content1">
                <div className="group">
                <img src={Michelin} alt="" />
                <div className="isi">
                    <h1>THE GROUP</h1>
                    <p>Offering everyone a better way forward is our corporate mission. Our “All Sustainable” approach is constantly pushing us to find solutions capableof fostering an optimal balance between personal fulfillment, economic development, and safeguarding the planet and its inhabitants. Leveraging our unrivaled capabilities, we're innovating to help humanity conquer new frontiers and live a better life on the move. At Michelin, we believe that nothing can stop us from moving.</p>
                    <a href="#">Tap to see more</a>
                </div>
                </div>
            </div>
            <div className="content2">
                <div className="forward">
                    <div className="quotes">
                        <h1>“A better way forward”</h1>
                        <p>This is the shared purpose, embraced by all our employees, that imbues our everyday actions with meaning.</p>
                        <a href="#">Tap to see more</a>
                    </div>
                    <img src={Michelin2} alt="" />
                </div>
            </div>
        </div>
     );
}
 
export default content;