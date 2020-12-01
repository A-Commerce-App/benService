import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Ratings from '../../client/src/components/ratings/Ratings';

Enzyme.configure({ adapter: new Adapter() });

describe('Ratings Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should show title', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    expect(wrapper.html().includes('Customer reviews')).toBe(true);
  });

  it('should render all four subcomponents', () => {
    const wrapper = shallow(<Ratings ratings={[4, 2, 3, 5, 3]} />);
    const ratings = wrapper.find('div');
    expect(ratings.length).toBe(4);
  });
});
