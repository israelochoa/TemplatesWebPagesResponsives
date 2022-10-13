import React,{useContext} from 'react';
import {images,data} from '../../constants/';
import './SpecialMenu.css';
import { SubHeading,MenuItem } from '../../components';
import { LangContext } from '../../context/lang';
const SpecialMenu = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  <div className='app__specialMenu
  flex__center
  section__padding
  '
  id="menu">
    <div className="app__specialMenu-title">
      <SubHeading tittle={translate("MenuSubheading")}/>
      <h1 className='headtext__cormorant'>
        {translate('MenuTitle')}
      </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine
                      flex__center">
        <p className='app__specialMenu-menu_heading'>
          {translate('MenuSubtitle')}
        </p>
        <div className="app__specialMenu-menu_items">
          
          {data.wines.map((wine, index)=>{
              return(
              <MenuItem 
              key={wine.title+index} 
              title={wine.title} 
              price={wine.price} 
              tags={wine.tags}/>);
              
          })}
        </div>
      </div>

      <div className='app__specialMenu-menu_img'>
        <img src={images.menu} 
        alt="menu img"/>
      </div>

      <div className="app__specialMenu-menu_cocktails
                      flex__center">
        <p className='app__specialMenu-menu_heading'>
          {translate('MenuSubtitle2')}
        </p>
        <div className="app__specialMenu-menu_items">
          
          {data.cocktails.map((cocktail, index)=>{
               return(<MenuItem key={cocktail.title+index} 
                title={cocktail.title} 
                price={cocktail.price} 
                tags={cocktail.tags}/>);
              
          })}
        </div>
      </div>
    </div>
    <div style={{marginTop:'15px'}}>
      <button type="button"
      className="custom__button">
        {translate("AboutUsButton")}
      </button>
    </div>
  </div>
);}

export default SpecialMenu;
