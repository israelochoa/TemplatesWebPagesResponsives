import React, { useRef, useContext } from 'react';
import { BsInstagram
        ,BsArrowLeftShort
        ,BsArrowRightShort } 
from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';
import { LangContext } from '../../context/lang';

const Gallery = () =>{ 
  const {state:{language}, dispatch:{setLanguage, translate}}=useContext(LangContext);
  const scrollRef=useRef();
  const scroll=(direction)=>{
    console.log("------direction----:",direction);
    const {current}=scrollRef;
    if(direction==='left'){
      console.log("------directionLeft----:",direction);
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }
  return(
  <div className='app__gallery
                flex__center'>
    <div className="app__gallery-content">
      <SubHeading tittle="Instagram"/>
      <h1 className="headtext__cormorant">
        {translate('GalleryTitle')}
      </h1>
      <p className="p__opensans" 
        style={{color:'#AAAAAA', marginTop:'2rem'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
      </p>
      <button type='button'
      className='custom__button'>
        {translate("AboutUsButton")}
      </button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container"
          ref={scrollRef}>
        {[images.gallery01
        ,images.gallery02
        ,images.gallery03
        ,images.gallery04].map((image,index)=>(
          <div key={`gallery_image-${index+1}`}
              className="app__gallery-images_card
                        flex__center">
              <img src={image} alt="gallery_image" />
              <BsInstagram className='gallery__image-icon'/>
          </div>
        )
        )}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon'
        onClick={()=>scroll('left')}/>
        <BsArrowRightShort className='gallery__arrow-icon'
        onClick={()=>scroll('right')}/>
      </div>
    </div>
    
  </div>
);
}
export default Gallery;
