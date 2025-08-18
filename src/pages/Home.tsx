
import Footer from '../Home/footer';
import Header from '../Home/header';

import HelpSection from '../Home/hero2';
// import hero from '../assets/hero.jpg';
import Promotions from '../components/promotions';
// import RatesSection from '../components/ratesection';
import SupportBot from '../components/support';


const Home: React.FC = () => {
 

  return (
    <>

    <Header/>

    
   
    <HelpSection/>
    

    <Promotions/>
   
    <SupportBot/>

    <Footer/>

    
    </>
  
  );
};

export default Home;
