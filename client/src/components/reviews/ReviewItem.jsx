import React from 'react';
import Stars from '../styles/Stars.jsx';
import s from '../styles/Reviews.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const ReviewItem = ({ review, keyword }) => {
  const { avatar, country, full_text, headline, overall_rating, review_date, user_name, verified_purchase, helpful } = review;

  let [year, month, day] = review_date.split('T')[0].split('-');

  const highlightText = (text, keyword) => {
    if (!keyword) {
      return text;
    }
    // I want to understand exactly how this works, specifically reduce
    return (<span>
      { text.split(keyword)
        .reduce((acc, current) => {
          return acc.concat(<span className={s.highlight} key={keyword + current}>{keyword}</span>, current);
        }, [])
      }
    </span>);
  };

  return (
    <div className={s.reviewItemContainer}>
      <div className={s.avatar}>
        <img src={avatar} style={{ borderRadius: '100%', width: '30px', height: '30px', objectFit: 'cover' }} />
        <div style={{ marginLeft: '10px', fontFamily: 'PT Sans', fontSize: '.85em' }}>{user_name}</div>
      </div>
      <div className={s.box}>
        <Stars rating={overall_rating} height={'15px'} /><div className={s.reviewItemHeadline}>{headline}</div>
      </div>
      <p className={s.reviewGrayText}>
        Reviewed in {country} on {`${months[month - 1]} ${day}, ${year}`}
      </p>
      {verified_purchase === 1 && <p className={s.verified}>Verified Purchase</p>}
      <p className={s.reviewText}>{highlightText(full_text, keyword)}</p>
      <p className={s.reviewGrayText}>
        {helpful !== 1 ? `${helpful} people found this helpful` : 'One person found this helpful'}
      </p>
      <div style={{ display: 'inline-flex', alignItems: 'center', width: '300px', height: '50px' }}>
        <button className={s.helpfulBtn}>Helpful</button>
        <p className={s.thinLine}><p className={s.comment}>Comment</p></p>
        <p className={s.thinLine}><p className={s.report}>Report abuse</p></p>
      </div>
    </div>
  );
};

export default ReviewItem;

