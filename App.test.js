import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import Filters from './src/components/Filters.component.js';
import Inventory from './src/components/Inventory.component.js';
import * as actions from './src/redux/actions/filters.action.js';
import filterReducer from './src/redux/reducers/filters.reducer.js';

configure({ adapter: new Adapter() })

const mockStore = configureStore();

const initialState = {
    filters: {
        available: {
            locations: [],
            operations: [],
            dimensions: []
        },
        applied: {
            locations: [],
            operations: [],
            dimensions: []
        }
    }
};

// TODO: *Important* Some tests will need to be changed when data becomes
// a prop. Mock inventory data will be required in the test suite.

/*
 * Inventory component tests
 */
describe('Testing Inventory Component', () => {

    beforeEach(() => {
        initialState.filters.applied.locations = [];
        initialState.filters.applied.operations = [];
        initialState.filters.applied.dimensions = [];
    });

  it('renders as expected', () => {
    const wrapper = shallow(
        <Inventory navigation={{}} />,
        { context: { store: mockStore(initialState) } },
    );

    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('has 3 inventory items with 1 filter', () => {
    initialState.filters.applied.locations[0] = 'Location 1';

    const wrapper = shallow(
        <Inventory navigation={{}} />,
        { context: { store: mockStore(initialState) } },
    );

    expect(wrapper.dive().state().inventory.length).toEqual(3);
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('has 1 inventory item with 2 filters', () => {
    initialState.filters.applied.locations[0] = 'Location 1';
    initialState.filters.applied.dimensions[0] = '30 ft.';

    const wrapper = shallow(
        <Inventory />,
        { context: { store: mockStore(initialState) } },
    );

    expect(wrapper.dive().state().inventory.length).toEqual(1);
    expect(wrapper.dive()).toMatchSnapshot();
  });

});


/*
 * Filters component tests
 */
describe('Testing Filters Component', () => {

    beforeEach(() => {
        initialState.filters.applied.locations = [];
        initialState.filters.applied.operations = [];
        initialState.filters.applied.dimensions = [];
    });

  it('renders as expected', () => {
    const wrapper = shallow(
        <Filters />,
        { context: { store: mockStore(initialState) } },
    );

    expect(wrapper.dive()).toMatchSnapshot();
  });

});


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

