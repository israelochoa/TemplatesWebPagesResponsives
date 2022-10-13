import React,{useContext} from 'react';
import { SubHeading } from '../../components';
import images from '../../constants/images';
import './Header.css';
import {LangContext} from '../../context/lang';

const Header = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  <div className='app__header app__wrapper section__padding' id="home">
    <div className='app__wrapper_info'>
        <SubHeading tittle={translate("HeaderSubheading")} color="#fff"/>
        <h1 className='app__header-h1' >
          {translate("HeaderH1")}
        </h1>
        <p className='p__opensans'>
          {translate("HeaderP")}
        </p>
        <button type='button'
        className='custom__button'>
          {translate('HeaderButton')}
        </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img"/>
    </div>
  </div>);
}

export default Header;
