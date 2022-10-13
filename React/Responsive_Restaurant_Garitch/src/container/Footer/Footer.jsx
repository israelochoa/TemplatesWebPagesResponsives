import React,{useContext} from 'react';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';
import { LangContext } from '../../context/lang';
const Footer = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  <div className="app__footer section__padding" id='login'>
    <FooterOverlay/>
    <Newsletter/>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className='app__footer-headtext'> {translate("FindUsSubheading")}</h1>
        <p className='p__opensans'>Av. Universitaria y 10 de Agosto</p>
        <p className='p__opensans'>0986379241</p>

      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='Footer logo'/>
        <p className='p__opensans'>
          &quot; {translate('FooterP')}&quot;
        </p>
        <img src={images.spoon} className='spoon__img' style={{marginTop:15}} alt='Footer_image_spoon'/>
        <div className='app__footer-link_icons'>
          <FiFacebook/>
          <FiTwitter/> 
          <FiInstagram/>
        </div>
      </div>
      
      <div className="app__footer-links_work">
        <h1 className='app__footer-headtext'>
          {translate("FindUsP1")}
        </h1>
        <p className='p__opensans'>{translate("FooterP1")}</p>
        <p className='p__opensans'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>{translate("FooterP2")}</p>
        <p className='p__opensans'>Sat - Sun: 10:00 am - 03:00 pm</p>
      </div>

    </div>
      
  </div>
  
  
);
  }
export default Footer;
