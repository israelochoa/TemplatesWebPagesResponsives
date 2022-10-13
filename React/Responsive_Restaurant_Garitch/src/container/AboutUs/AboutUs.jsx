import React,{useContext} from 'react';
import { LangContext } from '../../context/lang';
import './AboutUs.css';
import images from '../../constants/images'
const AboutUs = () => {
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  return(
  <div className='app__aboutus
  app__bg
  flex__center
  section__padding'
  id="about">
    
    <div className='app__aboutus-overlay
    flex__center'>
      <img src={images.G} 
      alt="g letter"/>
    </div>

    <div className='app__aboutus-content
    flex__center'>
      <div className='app__aboutus-content_about'>
        <h1 className='headtext__cormorant'>
          {translate("AboutUs")}
        </h1>
        <img src={images.spoon}
        alt='about'
        className='spoon__img'/>
        <p className='p__opensans'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
        </p>
        <button type="button" 
        className='custom__button'>
          {translate("AboutUsButton")}
        </button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife}
         alt="about_knife" />
      </div>

      <div className='app__aboutus-content_history'>
        <h1 className='headtext__cormorant'>
        {translate("AboutUsHistory")}
        </h1>
        <img src={images.spoon}
        alt='about'
        className='spoon__img'/>
        <p className='p__opensans'>
        
          Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.
        </p>
        <button type="button" 
        className='custom__button'>
         {translate("AboutUsButton")}
        </button>
      </div>
    </div>
  </div>
  );
}

export default AboutUs;
