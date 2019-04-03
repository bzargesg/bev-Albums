import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from './AlbumsList.jsx'
const findByAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};
//data-test allAlbums albumsComponent epsComponent compilationsComponent appearsOnComponent
describe('AlbumList component', ()=>{
  const setUp = () => {
    const component = shallow(<AlbumList />);
    return component;
  };
  //run before every test
  let component= setUp();
  // beforeEach(() => {
  //   component = setUp();
  // });
    //search for allAlbums tag
    it('should render allAlbums without errors', () => {
      expect.assertions(1);
      //test with class names
      const wrapper = findByAttr(component, 'allAlbums')
      expect(wrapper.length).toBe(1);
    });
    //search for albumsComponent tag
    it('should render albumsComponent without errors', () => {
      expect.assertions(1);
      const wrapper= findByAttr(component, 'albumsComponent');
      expect(wrapper.length).toBe(1);
    });
     //search for epsComponent tag
     it('should render epsComponent without errors', () => {
      expect.assertions(1);
      const wrapper= findByAttr(component, 'epsComponent');
      expect(wrapper.length).toBe(1);
    });
     //search for compilationsComponent tag
     it('should render compilationsComponent without errors', () => {
      expect.assertions(1);
      const wrapper= findByAttr(component, 'compilationsComponent');
      expect(wrapper.length).toBe(1);
    });
    //search for appearsOnComponent tag
    it('should render appearsOnComponent without errors', () => {
      expect.assertions(1);
      const wrapper= findByAttr(component, 'appearsOnComponent');
      expect(wrapper.length).toBe(1);
    });
});