import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../client/components/Sidebar.jsx';
import findByAttr from '../__testAsset__/findByAttr.js';
//   Logo
//   Home
//   Search
//   Your Library
//   Recently Played
//     -Recently Played should be Right Clickable
//        -3 menus based on playlist, album artist
//    Install App
//    User
const setup = () => {
  return mount(<Sidebar />);
};
describe('Sidebar Tests: ', () => {
  let component;
  var rightClick = (component, wrapper) => {
    wrapper.simulate('contextmenu', {
      preventDefault: () => {},
    });
    component.update();
  };
  beforeEach(() => {
    component = setup();
  });
  describe('Test sidebar options component: ', () => {
    it('does Home render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Home');
      expect(wrapper.length).toBe(1);
    });
    it('does Search render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Search');
      expect(wrapper.length).toBe(1);
    });
    it('does Your Library render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Your Library');
      expect(wrapper.length).toBe(1);
    });
  });
  xdescribe('Test Sidebar Recents component: ', () => {
    it('Does Recent Album render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Album');
      expect(wrapper.length).toBe(1);
    });
    it('Does Recent Playlist render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Playlist');
      expect(wrapper.length).toBe(1);
    });
    it('Does Recent Artist render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Artist');
      expect(wrapper.length).toBe(1);
    });
    it('does Playlist render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Playlist');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'Playlist menu');
      expect(menuWrapper.length).toBe(1);
    });
    it('does Artist render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Artist');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'Artist menu');
      expect(menuWrapper.length).toBe(1);
    });
    it('does Album render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Recent Album');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'Album menu');
      expect(menuWrapper.length).toBe(1);
    });
  });
  it('does Sidebar render ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'Sidebar');
    expect(wrapper.length).toBe(1);
  });
  it('does Sidebar header render ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'SidebarHeader');
    expect(wrapper.length).toBe(1);
  });
  it('does Install App render ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'Install App');
    expect(wrapper.length).toBe(1);
  });
  it('does User render ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'User');
    expect(wrapper.length).toBe(1);
  });
});
