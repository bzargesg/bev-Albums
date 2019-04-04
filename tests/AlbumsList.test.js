import React from 'react';
import { shallow } from 'enzyme';
import AlbumList from '../client/components/AlbumsList.jsx';
import findByAttr from '../__testAsset__/findByAttr.js';
import fetch from 'node-fetch';
jest.mock('node-fetch');

describe('MockFetch ', () => {
  it('test Fetch', () => {
    expect.assertions(1);
    const mockSuccessResponse = {
      _id: '5c9faf730f3ad65bb9d06598',
      name: 'Lampshades Wheeled Nerdy',
      image:
        'https://images.unsplash.com/photo-1464925257126-6450e871c667?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=280&h=280&fit=crop&ixid=eyJhcHBfaWQiOjF9',
      type: 'Compilation',
      __v: 0,
    };
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({ json: () => mockJsonPromise });

    // const newFetch = jest.spyOn(fetch, 'fetch');
    fetch.mockImplementation(() => mockFetchPromise);
    const wrapper = shallow(<AlbumList />);
    expect(fetch).toHaveBeenCalledTimes(4);
    fetch.mockRestore();
  });
});
describe('AlbumList component', () => {
  const setUp = () => {
    const component = shallow(<AlbumList />);
    return component;
  };
  //run before every test
  let component = setUp();
  // beforeEach(() => {
  //   component = setUp();
  // });
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
});
