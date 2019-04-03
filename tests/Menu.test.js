import React from 'react';
import { shallow } from 'enzyme';
import Menu from '../client/components/Menu.jsx';
import findByAttr from '../__testAsset__/findByAttr.js';

const setUp = (show = true) => {
  const component = shallow(<Menu show={show} />);
  return component;
};
describe('Menu Component', () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });
  it('Should menu container', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'menuContainer');
    expect(wrapper.length).toBe(1);
  });
  it('Should contain start radio', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'startRadio');
    expect(wrapper.length).toBe(1);
  });
  it('Should contain saveLib', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'saveLib');
    expect(wrapper.length).toBe(1);
  });
  it('Should contain addPlayl', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'addPlayl');
    expect(wrapper.length).toBe(1);
  });
  it('Should contain copyLink', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'copyLink');
    expect(wrapper.length).toBe(1);
  });
});
describe('Menu no render', () => {
  let component;
  beforeEach(() => {
    component = setUp(false);
  });
  it('Should not have menu container', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'menuContainer');
    expect(wrapper.length).toBe(0);
  });
  it('Should not contain start radio', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'startRadio');
    expect(wrapper.length).toBe(0);
  });
  it('Should not contain saveLib', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'saveLib');
    expect(wrapper.length).toBe(0);
  });
  it('Should not contain addPlayl', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'addPlayl');
    expect(wrapper.length).toBe(0);
  });
  it('Should not contain copyLink', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'copyLink');
    expect(wrapper.length).toBe(0);
  });
});
