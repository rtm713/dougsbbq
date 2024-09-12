import Navbar from './Navbar';
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

export default function LandingPage() {
    return (
      <>
        <Navbar/>
        <div id='landingPageCardBox'>
          <div id='landingFeaturedBox'>
            <div id='featuredCard'>
                <h3>Charcoal Grilled Ribs</h3>
            </div>
            <div id='featuredMoreCardbox'>
              <div id='featuredMoreOne' className='featuredMoreCard'>
                <p>More Recipes</p>
              </div>
              <div id='featuredMoreTwo'className='featuredMoreCard'>
                <p>Seasonings</p>
              </div>
              <div id='featuredMoreThree'className='featuredMoreCard'>
                <p>Sauces</p>
              </div>
            </div>
          </div>
          <div id='landingBioCard'> 
            <img src="images/dougBioPic.jpg" alt="" />
            <p>Hi, Im Doug, This is where the description will go h uidshu idhuih duisfh uih fuidh fuidsbhfb dsu fuu hu iufuig sfghgh hfbhiuh ui giusb gjkb fhgbig hfbgjhj gnuf kjgnfjngj sfhg jkfb gjkb fjngjkf jk fgbjf gjk fjk gf gjfgjnfjk sgui jhgjk j huhu fhu hfiu hfuh fhdu hfiu dui hiuh fduih fuidh sfhds uif ds fhdsbhf hdb fsdb fb dshbfdsb hfbds fh sdh</p>
          </div>
        </div>
        <Footer/>
      </>
    );
  }