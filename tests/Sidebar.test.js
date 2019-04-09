import React from 'react';
import { mount } from 'enzyme';
import Sidebar from '../client/components/Sidebar.jsx';
import findByAttr from '../__testAsset__/findByAttr.js';
import SidebarOptions from '../client/components/SidebarOptions.jsx';
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
  var mouseOver = (component, wrapper) => {
    wrapper.simulate('mouseover');
    component.update();
  };
  var mouseLeave = (component, wrapper) => {
    wrapper.simulate('mouseleave');
    component.update();
  };
  beforeEach(() => {
    component = setup();
  });
  describe('Test sidebar options component: ', () => {
    var optionSetup = () => {
      return mount(<SidebarOptions />);
    };
    beforeEach(() => {
      component = optionSetup();
    });
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
    it('mouseover Home ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Home');
      mouseOver(component, wrapper);
      expect(component.state().HomeImg).toBe('images/homeW.png');
    });
    it('mouseleave Home ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Home');
      mouseOver(component, wrapper);
      mouseLeave(component, wrapper);
      expect(component.state().HomeImg).toBe('images/home.png');
    });
    it('mouseover Search ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Search');
      mouseOver(component, wrapper);
      expect(component.state().SearchImg).toBe('images/searchW.png');
    });
    it('mouseleave Search ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Search');
      mouseOver(component, wrapper);
      mouseLeave(component, wrapper);
      expect(component.state().SearchImg).toBe('images/search.png');
    });
    it('mouseover Library ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Your Library');
      mouseOver(component, wrapper);
      expect(component.state().LibImg).toBe('images/libraryW.png');
    });
    it('mouseleave Library ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'Your Library');
      mouseOver(component, wrapper);
      mouseLeave(component, wrapper);
      expect(component.state().LibImg).toBe('images/library.png');
    });
  });
  describe('Test Sidebar Recents component: ', () => {
    it('Does Recent Album render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent album');
      expect(wrapper.length).toBe(1);
    });
    it('Does Recent Playlist render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent playlist');
      expect(wrapper.length).toBe(1);
    });
    it('Does Recent Artist render ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent artist');
      expect(wrapper.length).toBe(1);
    });
    it('does Playlist render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent playlist');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'menuContainer');
      expect(menuWrapper.length).toBe(3);
    });
    it('does Artist render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent artist');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'menuContainer');
      expect(menuWrapper.length).toBe(3);
    });
    it('does Album render rightclick menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent album');
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'menuContainer');
      expect(menuWrapper.length).toBe(3);
    });
    it('does second rightclick end menu ', () => {
      expect.assertions(1);
      const wrapper = findByAttr(component, 'recent album');
      rightClick(component, wrapper);
      rightClick(component, wrapper);
      const menuWrapper = findByAttr(component, 'menuContainer');
      expect(menuWrapper.length).toBe(0);
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
  it('mouseover install change ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'Install App');
    mouseOver(component, wrapper);
    expect(component.state().InstallIcon).toBe('images/installW.png');
  });
  it('mouseLeave install change ', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'Install App');
    mouseOver(component, wrapper);
    mouseLeave(component, wrapper);
    expect(component.state().InstallIcon).toBe('images/install.png');
  });
});
