import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CustomerImages from '../../client/src/components/customer_images/CustomerImages';

Enzyme.configure({ adapter: new Adapter() });

describe('CustomerImages Component', () => {
  it('should render', () => {
    const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should correctly handle if there are no customer images', () => {
    const wrapper = shallow(<CustomerImages imageUrls={[]}/>);
    expect(wrapper.html().includes('No customer images yet.')).toBeTruthy();
  });

  it('should render passed in image urls', () => {
    const wrapper = shallow(<CustomerImages imageUrls={['https://hr-fec.s3.us-east-2.amazonaws.com/random-product-photos/random-product-photos/mike-dorner-sf_1ZDA1YFw-unsplash.jpg']}/>);
    expect(wrapper.html().includes('See all customer images')).toBeTruthy();
  });
});

