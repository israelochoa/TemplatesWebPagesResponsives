import React,{useContext} from 'react';
import SubHeading from '../SubHeading/SubHeading';
import { LangContext } from '../../context/lang';
import './Newsletter.css';

const Newsletter = () =>{
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext); 
  return(
  <div className='app__newsletter'>
    <div className="app__newsletter-heading">
      <SubHeading tittle={'Newsletter'}/>
      <h1 className='headtext__cormorant'>
        {translate("FooterTitle")}
      </h1>
      <p className='p__opensans'>{translate("FooterSubtitle")}</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder='Enter your email address' />
      <button type='button' className='custom__button'>{translate("FooterButton")}</button>
    </div>
  </div>
);
  }
export default Newsletter;
