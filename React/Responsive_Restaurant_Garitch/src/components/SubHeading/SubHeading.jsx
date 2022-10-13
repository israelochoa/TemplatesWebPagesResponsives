import React from 'react';
import images from '../../constants/images';
const SubHeading = ({tittle}) => (
  <div style={{marginBottom:"1rem"}}>
    <p className='p__cormorant' >
      {tittle}
    </p>
    <img src={images.spoon} 
    alt="spoon" 
    className='spoon_img'/>
  </div>
);

export default SubHeading;
