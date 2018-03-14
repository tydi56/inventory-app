import React from 'react';
import thunk from 'redux-thunk';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import * as actions from '../src/redux/actions/filters.action.js';
import filterReducer from '../src/redux/reducers/filters.reducer.js';
import {mockStore, initialState} from './mockStore.js';

configure({ adapter: new Adapter() });

/*
 * Redux tests
 */
describe('Test Redux actions', () => {

  it('should create an action to add a location filter', () => {
    const locations = ['Location 1'];

    const expectedAction = {
      type: 'SET_LOCATIONS_FILTER',
      locations: locations
    }

    expect(actions.setLocationsFilter(locations)).toEqual(expectedAction);
  });

  it('should create an action to add an operation filter', () => {
    const operations = ['Rig Down'];
    
    const expectedAction = {
      type: 'SET_OPERATIONS_FILTER',
      operations: operations
    }

    expect(actions.setOperationsFilter(operations)).toEqual(expectedAction);
  });

  it('should create an action to add an dimensions filter', () => {
    const dimensions = ['30'];
    
    const expectedAction = {
      type: 'SET_DIMENSIONS_FILTER',
      dimensions: dimensions
    }

    expect(actions.setDimensionsFilter(dimensions)).toEqual(expectedAction);
  });

});


describe('Test Redux reducers', () => {

    it('should return the initial state', () => {
        expect(filterReducer(undefined, {})).toEqual(initialState.filters);
    });

    it('should add one filter to locations', () => {
        expect(
            filterReducer([], {
                type: 'SET_LOCATIONS_FILTER',
                locations: ["Location 1"]
            })
        ).toEqual({"applied": {"locations": ["Location 1"]}});
    });

    it('should add one filter to operations', () => {
        expect(
            filterReducer([], {
                type: 'SET_OPERATIONS_FILTER',
                operations: ["Rig Down"]
            })
        ).toEqual({"applied": {"operations": ["Rig Down"]}});
    });

    it('should add one filter to dimensions', () => {
        expect(
            filterReducer([], {
                type: 'SET_DIMENSIONS_FILTER',
                dimensions: ["30 ft."]
            })
        ).toEqual({"applied": {"dimensions": ["30 ft."]}});
    });
    
});