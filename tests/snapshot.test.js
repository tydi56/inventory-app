import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Filters from '../src/components/Filters.component.js';
import Inventory from '../src/components/Inventory.component.js';
import {mockStore, initialState} from './mockStore.js';

configure({ adapter: new Adapter() });

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
        { context: { store: mockStore(initialState) } }
    )

    wrapper.setProps({test: 1});
    expect(wrapper.dive().state().filteredInventory.length).toEqual(3);
    expect(wrapper.dive()).toMatchSnapshot();
  });

  it('has 1 inventory item with 2 filters', () => {
    initialState.filters.applied.locations[0] = 'Location 1';
    initialState.filters.applied.dimensions[0] = '30 ft.';

    const wrapper = shallow(
        <Inventory navigation={{}} />,
        { context: { store: mockStore(initialState) } },
    );

    expect(wrapper.dive().state().filteredInventory.length).toEqual(1);
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
