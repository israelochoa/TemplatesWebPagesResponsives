import React, { useState,useContext,useRef,useEffect,useCallback} from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import { MdOutlineRestaurantMenu,MdLanguage} from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images'
import {LangContext} from '../../context/lang';


const Navbar = () => {
  const [toggleMenu, setToggleMenu]=useState(false);
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  const [showDropdown, setShowDropdown]=useState(false);
  const dropdownEl=useRef(null);  
  const handleClickOutside=useCallback((e)=>{
    if(showDropdown && e.target.closest('.app__navbar_lang_dropdown')!== dropdownEl.current){
        setShowDropdown(false);
    }
},[dropdownEl]);
  useEffect(()=>{
    document.addEventListener('click',handleClickOutside);
    return ()=>{
        document.removeEventListener('click',handleClickOutside);
    }
},[showDropdown,setShowDropdown,handleClickOutside]);
const chooseLanguageHandler=(value)=>{
    setShowDropdown(false);
    setLanguage(value);
}
  return(
  <nav className='app__navbar'>
    <div className='app__navbar-logo'>
      <img src={images.gericht} alt="app logo"/>
    </div>
    <ul className='app_navbar-links'>
      <li className="p_opensans">
        <a href="#home">{translate('ButtonHome')}</a>
      </li>

      <li className="p_opensans">
        <a href="#about">{translate('ButtonAbout')}</a>
      </li>

      <li className="p_opensans">
        <a href="#menu">{translate('ButtonMenu')}</a>
      </li>

      <li className="p_opensans">
        <a href="#awards">{translate('ButtonAwards')}</a>
      </li>

      <li className="p_opensans">
        <a href="#contact">{translate('ButtonContact')}</a>
      </li>
    </ul>
    <div className=" app__navbar_lang" onClick={()=>setShowDropdown(!showDropdown)}>
      
      <div className='app__navbar_lang_label'>
        <MdLanguage className='app__navbar_lang_icon' color={"white"} fontSize={27}  />       
        <p className='p_opensans selected' >
        
            {language}
        </p>
      </div>
      
      {showDropdown &&
       <div className='app__navbar_lang_divul'>
          <ul className='app__navbar_lang_dropdown' ref={dropdownEl}>
              <li className='p_opensans' onClick={()=>chooseLanguageHandler('EN')}>EN</li>
              <li className='p_opensans' onClick={()=>chooseLanguageHandler('ES')}>ES</li>
          </ul>
        </div>}
    </div>
    <div className="app__navbar-login">
      
      <a href='#login' className='p_opensans'>
          {translate('ButtonLogIn')}
      </a>
      <div />
      <a href="/" className='p_opensans'>
        {translate('ButtonBookTable')}
      </a>
    </div>
    <div className="app__navbar-smallscreen">
      <GiHamburgerMenu color={`var(--color-white)`} fontSize={27} onClick={()=>{setToggleMenu(true)}} />
      {toggleMenu && (
      <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={()=>{setToggleMenu(false)}} />

        <ul className='app_navbar-smallscreen_links'>
          <li className="p_opensans">
            <a href="#home">{translate('ButtonHome')}</a>
          </li>

          <li className="p_opensans">
            <a href="#about">{translate('ButtonAbout')}</a>
          </li>

          <li className="p_opensans">
            <a href="#menu">{translate('ButtonMenu')}</a>
          </li>

          <li className="p_opensans">
            <a href="#awards">{translate('ButtonAwards')}</a>
          </li>

          <li className="p_opensans">
            <a href="#contact">{translate('ButtonContact')}</a>
          </li>
        </ul>
      </div>
      )}
    </div>
  </nav>
  );

}

export default Navbar;
