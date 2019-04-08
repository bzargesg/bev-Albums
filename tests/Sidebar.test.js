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
  let component = mount(<Sidebar />);
};
describe('Sidebar Tests: ', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });
  describe('Test sidebar options component: ', () => {
    it('does Logo render ', () => {});
  });
});
