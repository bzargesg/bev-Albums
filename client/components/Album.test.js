import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album';
const setUp = (props = {}) => {
  const component = shallow(<Album {...props} />);
  return component;
};
const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test=${attr}]`);
  return wrapper;
};

describe('Album component', () => {
  //run before every test
  let component;
  beforeEach(() => {
    component = setUp();
  });

  //search for classname try not to use
  it('should render without errors', () => {
    //test with class names
    const wrapper = component.find('.album');
    expect(wrapper.length).toBe(1);
  });
  //use data-test attribute
  it('should render without errors', () => {
    findByAttr(component, 'mytestthing');
    expect(wrapper.length).toBe(1);
  });
});
