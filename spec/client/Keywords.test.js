import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Keywords from '../../client/src/components/keywords/Keywords';

Enzyme.configure({ adapter: new Adapter() });

describe('Keywords Component', () => {
  it('should render', () => {
    const wrapper = shallow(<Keywords domesticReviews={['mock']}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should set state of keywords as an array', () => {
    const wrapper = shallow(<Keywords domesticReviews={['mock']}/>);
    expect(Array.isArray(wrapper.state().keywords)).toBe(true);
  });

  it('should limit the length of the keywords array to 12', () => {
    const wrapper = shallow(<Keywords domesticReviews={['mock']}/>);
    expect(wrapper.state().keywords.length <= 12).toBe(true);
  });
});

