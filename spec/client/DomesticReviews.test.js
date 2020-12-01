import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DomesticReviews from '../../client/src/components/reviews/DomesticReviews';

Enzyme.configure({ adapter: new Adapter() });

describe('DomesticReviews Component', () => {
  it('should render', () => {
    const wrapper = shallow(<DomesticReviews domesticReviews={['mock']}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show topReviews by default', () => {
    const wrapper = shallow(<DomesticReviews domesticReviews={['mock']}/>);
    expect(wrapper.state().filterBySelect).toBe('top');
  });

  it('should not initially sort by keyword or number of stars', () => {
    const wrapper = shallow(<DomesticReviews domesticReviews={['mock']}/>);
    expect(wrapper.state().filterByKeyword || wrapper.state().sortByStars).toBe(false);
  });
});


// test your props, state, etc
// .props(), .state()
// shallow has an html method?

/*

  it('should show title', () => {
    // use shallow for unit tests
    // it mocks the child components
    // in Enzyme,
    // Doruk used mount, not shallow
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]}/>);
    // .render() works well with mount, but not shallow (not confirmed)
    console.log('DEBUG------', wrapper.debug()); // debug spits out what Enzyme sees after wrapper is defined
    console.log('HTML-------', wrapper.html());
    console.log('TEXT-------', wrapper.text());
    const ratings = wrapper.find('div');
    // console.log(wrapper.find('h1').render());
    // console.log('ratings', ratings);
    // console.log(ratings.length); // should be equal to 4
    expect(wrapper.text().includes('Customer reviews')).toBe(true);
  });


*/