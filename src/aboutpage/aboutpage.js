import Nav from '../homepage/navigation/nav'
import Aboutcnt from './about-content/about-cnt';
import Team from './team/team';
import Purpose from './purposes/purpose';
import History from './history/history';
import Footer from '../homepage/footer/footer';

const aboutpage = () => {
    return ( 
        <>
        <Nav/>
        <Aboutcnt/>
        <Team/>
        <Purpose/>
        <History/>
        <Footer/>
        </>
     );
}
 
export default aboutpage;