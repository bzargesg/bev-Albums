import React from 'react';
import { mount } from 'enzyme';
import AlbumList from '../client/components/AlbumsList.jsx';
import findByAttr from '../__testAsset__/findByAttr.js';
import fetch from 'node-fetch';
import Album from '../client/components/Album.jsx';
import 'babel-polyfill';
jest.mock('node-fetch');
describe('AlbumList component', () => {
  const setUp = (withFetch = false) => {
    var mockSuccessResponse = [];
    const testResObj = {
      _id: '5c9faf730f3ad65bb9d06598',
      name: 'Lampshades Wheeled Nerdy',
      image:
        'https://images.unsplash.com/photo-1464925257126-6450e871c667?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9',
      type: 'Compilation',
      __v: 0,
    };
    for (let i = 0; i < 11; i++) {
      mockSuccessResponse.push(testResObj);
    }

    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });
    fetch.mockImplementation(() => mockFetchPromise);
    const component = mount(<AlbumList />);
    if (withFetch) {
      return [component, fetch];
    }
    return component;
  };
  //run before every test
  let component = setUp();
  // beforeEach(() => {
  //   component = setUp();
  // });

  it('test Fetch', () => {
    expect.assertions(1);
    let [component, fetch] = setUp(true);
    // const wrapper = shallow(<AlbumList />);
    expect(fetch).toHaveBeenCalledTimes(4);
    fetch.mockRestore();
  });
  //search for allAlbums tag
  it('should render allAlbums without errors', () => {
    expect.assertions(1);
    //test with class names
    const wrapper = findByAttr(component, 'allAlbums');
    expect(wrapper.length).toBe(1);
  });

  //search for albumsComponent tag
  it('should render albumsComponent without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'albumsbyartist');
    expect(wrapper.length).toBe(1);
  });
  //search for epsComponent tag
  it('should render epsComponent without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'epswithartist');
    expect(wrapper.length).toBe(1);
  });
  //search for compilationsComponent tag
  it('should render compilationsComponent without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'compilationswithartist');
    expect(wrapper.length).toBe(1);
  });
  //search for appearsOnComponent tag
  it('should render appearsOnComponent without errors', () => {
    expect.assertions(1);
    const wrapper = findByAttr(component, 'albumswithartist');
    expect(wrapper.length).toBe(1);
  });

  it('should render button for showmore', async () => {
    expect.assertions(1);
    // const component = mount(<AlbumList />);

    component.update();
    const wrapper = findByAttr(component, 'showMoreButton');
    // const wrapper = component.find('button');
    expect(wrapper.length).toBe(4);
  });
});
