import React, { useState } from 'react';
import Modal from './Modal.jsx';
import s from '../styles/CustomerImages.css';

const CustomerImages = ({imageUrls}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className={s.headline}>Customer images</div>
      {!imageUrls.length ? <div className={s.noImages}>No customer images yet.</div> :
      <div style={{marginTop: '10px'}}>
      {imageUrls.map((image, index) => {
        if (image && index < 4) {
          return <img key={index} src={image} className={s.imgStyle}/>
        }
      })}
      <div className={s.blueText} onClick={() => setIsOpen(true)}>See all customer images</div>
      <Modal imageUrls={imageUrls} open={isOpen} onClose={() => setIsOpen(false)}></Modal>
      </div>}
    </div>
  )
};

export default CustomerImages;