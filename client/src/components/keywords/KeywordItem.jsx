import React from 'react';
import s from '../styles/Keywords.css';

const KeywordItem = ({children, onClick, selected}) => (
  <div className={`${s.keywordItem} ${selected ? s.selected : ''}`} onClick={onClick}>{children}</div>
);

export default KeywordItem;