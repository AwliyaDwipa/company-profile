import './carousel.css'
import Michelin from './tirecar.jpg';

const carousel = () => {
    return ( 
        <form>

        <input type="radio" name="fancy" autofocus value="clubs" id="clubs" />
        <input type="radio" name="fancy" value="hearts" id="hearts" />
        <input type="radio" name="fancy" value="spades" id="spades" />
        <input type="radio" name="fancy" value="diamonds" id="diamonds" />			
        <label for="clubs"><img src={Michelin} alt="" /></label>
        <label for="hearts"></label>
        <label for="spades"></label>
        <label for="diamonds"></label>

        <div class="keys">Use left and right keys to navigate</div>
</form>
     );
}
 
export default carousel;