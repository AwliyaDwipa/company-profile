import Nav from './navigation/nav';
import Carousel from './carousel/carousel';
import Content from './content/content';
import Partnerships from './partnerships/partnerships';
import Footer from './footer/footer';

const homepage = () => {
    return ( 
        <>
         <Nav/>
         <Carousel/>
         <Content/>
         <Partnerships/>
         <Footer/>
        </>
     );
}
 
export default homepage;