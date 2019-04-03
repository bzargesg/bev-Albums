import React from 'react';
import { shallow } from 'enzyme';
import Album from './Album.jsx';
import findByAttr from '../../__testAsset__/findByAttr.js';
var pic =
  'https://images.unsplash.com/photo-1465634836201-1d5651b9b6d6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9';

//data-test containerComponent picComponent albumTextComponent artistNameComponent
describe('Album component', () => {
  const setUp = (props = {}) => {
    const component = shallow(
      <Album picURL={pic} name={'Wheeled Bagel Burnt'} artistName={'The Ascending Critics'} />,
    );
    return component;
  };
  //run before every test
  let component;
  beforeEach(() => {
    component = setUp();
  });
  //search for containercomponent tag
  it('should render container without errors', () => {
    //test with class names
    expect.assertions(1);
    const wrapper = findByAttr(component, 'containerComponent');
    expect(wrapper.length).toBe(1);
  });
  //search for piccomponent tag
  it('should render picture without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'picComponent');
    expect(wrapper.length).toBe(1);
  });
  //search for albumTextComponent tag
  it('should render album name without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'albumTextComponent');
    expect(wrapper.length).toBe(1);
  });
  //search for piccomponent tag
  it('should render artist name without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'artistNameComponent');
    expect(wrapper.length).toBe(1);
  });
  it('should contain the mouseover element', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'picContainerComp');
    expect(wrapper.length).toBe(1);
  });
  it('should contain watermark element', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'mouseOverPlay');
    expect(wrapper.length).toBe(1);
  });
  it('should contain menu element', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'menuComp');
    expect(wrapper.length).toBe(1);
  });
  it('should show menu on right click', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'containerComponent');
    wrapper.simulate('contextmenu', {
      preventDefault: () => {},
    });
    expect(component.state().menuShow).toBe(true);
  });
});
