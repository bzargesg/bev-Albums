import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album.jsx';
var pic =
  'https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9';

const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

//data-test containerComponent picComponent albumTextComponent artistNameComponent
describe('Album component', () => {
  const setUp = (props = {}) => {
    const component = shallow(<Album picURL={pic} name={'Wheeled Bagel Burnt'} artistName={'The Ascending Critics'} />);
    return component;
  };
  //run before every test
  let component = setUp();
  // beforeEach(() => {
  //   component = setUp();
  // });
  //search for containercomponent tag
  it('should render container without errors', () => {
    //test with class names
    expect.assertions(1);
    const wrapper = findByAttr(component, 'containerComponent')
    expect(wrapper.length).toBe(1);
  });
  //search for piccomponent tag
  it('should render picture without errors', () => {
    expect.assertions(1);
    const wrapper= findByAttr(component, 'picComponent');
    expect(wrapper.length).toBe(1);
  });
   //search for albumTextComponent tag
   it('should render album name without errors', () => {
    expect.assertions(1);
    const wrapper= findByAttr(component, 'albumTextComponent');
    expect(wrapper.length).toBe(1);
  });
   //search for piccomponent tag
   it('should render artist name without errors', () => {
    expect.assertions(1);
    const wrapper= findByAttr(component, 'artistNameComponent');
    expect(wrapper.length).toBe(1);
  });
});

