import React from 'react';
import RatingBar from './RatingBar.jsx';
import Stars from '../styles/Stars.jsx';
import s from '../styles/Ratings.css';

const ratingsCalculations = (ratings) => {
  const len = ratings.length;
  const totals = {};
  let sumTotal = 0;

  for (let rating of ratings) {
    sumTotal += rating;
    totals[rating] = ++totals[rating] || 1;
  }

  const globalAverage = (sumTotal / len).toFixed(1);

  let percentages = [0, 0, 0, 0, 0, 0];

  for (let rating in totals) {
    percentages[rating] = Math.round((totals[rating] / len) * 100);
  }

  percentages.reverse().pop();

  return [len, globalAverage, percentages]
};

const Ratings = ({ratings, handleRatingBarClick}) => {
  const [len, globalAverage, percentages] = ratingsCalculations(ratings);

  return (
    <div style={{marginRight: '100px', marginLeft: '10px'}}>
      <div className={s.ratingsHeadline}>Customer reviews</div>
      {ratings.length ?
        <div>
          <div style={{display: 'flex', alignItems: 'flex-end'}}>
            <Stars rating={globalAverage} height={'20px'}/>
            <div style={{fontFamily: 'PT Sans', fontSize: '1.2em', marginLeft: '10px'}}>{globalAverage} out of 5</div>
          </div>
          <div className={s.grayText}>{len} global rating{len > 1 && 's'}</div>
        </div>
        :
        <div className={s.noRatings}>There are no customer reviews yet.</div>}
      {percentages.map((percentage, index) => <RatingBar key={index} percentage={percentage} stars={5 - index} handleRatingBarClick={handleRatingBarClick}/>)}
    </div>
  );
};

export default Ratings;