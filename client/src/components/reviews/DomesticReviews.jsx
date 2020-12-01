import React, { Component } from 'react';
import ReviewItem from './ReviewItem.jsx';
import Keywords from '../keywords/Keywords.jsx';
import s from '../styles/Reviews.css';

class DomesticReviews extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // is initializing state in the component with props an 'anti-pattern'?
      reviews: this.props.domesticReviews,
      topReviews: [],
      mostRecent: [],
      filterBySelect: 'top',
      filterByKeyword: false,
      sortByStars: false
    };

    this.toggleSelectFilter = this.toggleSelectFilter.bind(this);
    this.setKeywordFilter = this.setKeywordFilter.bind(this);
    this.clearFilter = this.clearFilter.bind(this);
    this.showFilterText = this.showFilterText.bind(this);
  }

  componentWillMount() {
    const top = [...this.state.reviews].sort((a, b) => (a.helpful < b.helpful) ? 1 : -1);
    const recent = [...this.state.reviews].sort((a, b) => {
      return (new Date(b.review_date) > new Date(a.review_date)) ? 1 : -1;
    });
    this.setState({
      topReviews: top,
      mostRecent: recent
    });
  }

  toggleSelectFilter(topOrRecent) {
    this.setState({
      filterBySelect: topOrRecent
    });
  }

  setKeywordFilter(keyword) {
    if (keyword === this.state.filterByKeyword) {
      this.clearFilter();
    } else {
      this.setState({
        filterByKeyword: keyword
      });
    }
  }

  clearFilter(clearAll) {
    if (clearAll) {
      this.setState({
        filterByKeyword: false,
        sortByStars: false
      });
    } else {
      this.setState({
        filterByKeyword: false
      });
    }
  }

  showFilterText(numReviews) {
    let filterText = `Showing ${numReviews} review${numReviews !== 1 ? 's' : ''} with `;

    let additionalText = '';
    if (this.state.filterByKeyword) {
      additionalText += `"${this.state.filterByKeyword}"`;
    }

    if (additionalText.length && this.state.sortByStars) {
      additionalText += ' and ';
    }

    if (this.state.sortByStars) {
      additionalText += `${this.state.sortByStars} stars`;
    }

    return filterText + additionalText;
  }

  // instead of setting props to state within the constructor
  componentWillReceiveProps(nextProps) {
    if (nextProps.sortByStars !== this.props.sortByStars) {
      this.setState({ sortByStars: nextProps.sortByStars })
    }
  }

  render() {
    let {reviews, topReviews, mostRecent, filterBySelect, filterByKeyword, sortByStars} = this.state;

    let filteredReviews = filterBySelect === 'top' ? topReviews : mostRecent;

    if (filterByKeyword) {
      filteredReviews = filteredReviews.filter(review => review.full_text.includes(filterByKeyword));
    }

    if (sortByStars) {
      filteredReviews = filteredReviews.filter(review => review.overall_rating === sortByStars);
    }

    return (
      <div style={{marginBottom: '50px'}}>
        <Keywords setKeywordFilter={this.setKeywordFilter} domesticReviews={reviews} filterByKeyword={filterByKeyword}/>
        {reviews.length ?
          <div>
          <select className={s.select} value={filterBySelect} onChange={(e) => this.toggleSelectFilter(e.target.value)}>
            <option value="top">Top reviews</option>
            <option value="recent">Most recent</option>
          </select>
          <div className={s.headline}>Top reviews from the United States</div>
          {(filterByKeyword || sortByStars) &&
          <div style={{display: 'inline-flex', alignItems: 'center', marginTop: '15px'}}>
            <div className={s.filters}>{this.showFilterText(filteredReviews.length)}</div>
            <div className={s.blueText} onClick={() => this.clearFilter('all')}>Clear filter</div>
          </div >}
          {filteredReviews.map((review, index) => <ReviewItem key={index} review={review} keyword={filterByKeyword}/>)}
        </div>
        :
        <div className={s.filters}>No reviews from the United States</div>}
      </div>
    );
  }
};

export default DomesticReviews;

