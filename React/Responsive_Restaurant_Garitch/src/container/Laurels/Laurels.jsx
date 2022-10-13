import React,{useContext} from 'react';
import { images,data} from '../../constants';
import {SubHeading} from '../../components'
import './Laurels.css';
import { LangContext } from '../../context/lang';
const AwardCard=(props)=>{
  
  return(
  <div className='app__laurels_awards-card'>
    <img src={props.award.imgUrl} alt="awards_" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" 
          style={{color:'#DCCA87'}}>
            {props.award.title}
      </p>
      <p className="p__opensans">
        {props.award.subtitle}
      </p>
    </div>
  </div>
  );
  
}
const Laurels = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  
  <div className='app__bg
                  app__wrapper
                  section__padding'
        id="awards">
    <div className='app__wrapper_info'>
        <SubHeading tittle={translate("LaurelsSubheading")} />
        <h1 className='headtext__cormorant'>
          {translate("LaurelsTitle")}
        </h1>
        <div className='app__laurels_awards'>
          {data.awards.map((award,index)=>{
            return(<AwardCard award={award} 
                              key={award.title+index}/>);
          })}
        </div>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.laurels} alt="laurels_img"/>
    </div>
  </div>
);
        }
export default Laurels;
