import React from 'react';
import s from '../styles/Ratings.css';

const ProductReviewBtn = () => (
  <div>
    <div className={s.reviewProduct}>Review this product</div>
    <div className={s.text}>Share your thoughts with other customers</div>
    <button className={s.reviewProductBtn}>Write a customer review</button>
  </div>
);

export default ProductReviewBtn;
