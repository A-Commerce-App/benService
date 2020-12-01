import React, { useState } from 'react';
import styled from 'styled-components';
import s from '../styles/Ratings.css';

const StyledBar = styled.div`
  background-color: #FFA41C;
  border-radius: ${props => props.width === 100 ? '4px' : '4px 0px 0px 4px'};
  height: 100%;
  box-shadow: inset -2px 0 0 -1px #F5961D, inset 0 0 0 1px #DE7921;
  width: ${props => props.width}%;
`;

const RatingBar = ({ percentage, stars, handleRatingBarClick }) => {
  const [hoverStyle, setHoverStyle] = useState(false);

  return (
    <div className={s.container} onMouseEnter={() => setHoverStyle(true)} onMouseLeave={() => setHoverStyle(false)} onClick={() => handleRatingBarClick(stars)}>
      <div className={`${s.numberOfStars} ${hoverStyle ? s.starsHover : ''}`}>{stars} star</div>
      <div className={hoverStyle ? s.hoverBar : s.fullBar}>
        <StyledBar width={percentage}></StyledBar>
      </div>
      <div className={`${s.percentage} ${hoverStyle ? s.percentHover : ''}`}>{percentage}%</div>
    </div>
  );
};

export default RatingBar;

