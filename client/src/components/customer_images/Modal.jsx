import React from 'react';
import ReactDom from 'react-dom';
// import { ModalStyles, OverlayStyles, modalMain, imageStyles, CloseBtn, ModalHeader } from '../styles/Styles.jsx';
import s from '../styles/CustomerImages.css';

const Modal = ({open, imageUrls, onClose}) => {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
    <div className={s.overlayStyles}/>
    <div className={s.modalStyles}>
      <div className={s.modalHeader}>
        <button className={s.closeBtn} onClick={onClose}>{'\u2715'}</button>
      </div>
      <div className={s.modalMain}>
        {imageUrls.map(url => <img src={url} className={s.imageStyles}/>)}
      </div>
    </div>
    </>,
    document.getElementById('reviewsPortal')
  );
};

export default Modal;

