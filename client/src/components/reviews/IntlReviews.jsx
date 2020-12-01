import React, { useState } from 'react';
import ReviewItem from './ReviewItem.jsx';
import s from '../styles/Reviews.css';

const IntlReviews = ({intlReviews}) => {
  intlReviews.sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);

  return (
    <div style={{marginBottom: '50px'}}>
      {intlReviews.length ?
      <div>
        <div className={s.headline}>Top reviews from other countries</div>
        {intlReviews.map((review, index) => <ReviewItem key={index} review={review}/>)}
      </div>
      :
      <div className={s.noReviews}>No reviews from other countries</div>}
    </div>
  );
};

export default IntlReviews;