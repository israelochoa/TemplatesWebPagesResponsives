import React,{useContext} from 'react';
import {SubHeading} from '../../components';
import {images} from '../../constants';
import { LangContext } from '../../context/lang';
const FindUs = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  <div className='app__bg app__wrapper section__padding' id='contact'>
    <div className='app__wrapper_info'>
      <SubHeading tittle={translate("FindUsSubheading")}/>
      <h1 className='headtext__cormorant' style={{marginBottom:'3rem'}}>
        {translate("FindUsTitle")}
      </h1>
      <div className='app__wrapper-content'>
        <p className='p__opensans'>Av.Universitaria y Simon Bolivar</p>
        <p className='p__opensans' style={{color:'#DCCA87', margin:'2rem 0'}}>{translate("FindUsP1")}</p>
        <p className='p__opensans'>{translate("FindUsP2")}: 10:00 am - 02:00 am</p>
        <p className='p__opensans'>{translate("FindUsP3")}: 10:00 am - 03:00 pm</p>
      </div>
      <button type='button' className='custom__button' style={{marginTop:'2rem'}}> {translate("FindUsButton")}</button>
    </div>   
    <div className='app__wrapper_img'>
      <img src={images.findus} alt='Find Us image'/>  
    </div> 
    
  </div>
);
}
export default FindUs;
