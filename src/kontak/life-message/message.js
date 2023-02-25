
import './message.css'

const message = () => {
    return ( 
        <div className="message">
            <h1>Send live message</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus soluta reprehenderit totam doloremque ea, in corporis minus ab necessitatibus! Error at quos iste ex sint quo molestiae vero, laudantium nam.</p>
            <input type="email" id="email" name="email" placeholder='EMAIL'/>
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="send message"/>
            <button type='submit'>submit</button>
        </div>
     );
}
 
export default message;