
import './team.css'
import Person from './person.jpg'

const team = () => {
    return ( 
        <div className="team">
            <h1>Our Team</h1>
            <div className="group">
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
                <div className="member">
                   <div className="human">
                   <img src={Person} alt="" />
                   </div>
                    <div className="deskripsi">
                        <h1>John Doe</h1>
                        <h5>Back End</h5>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default team;