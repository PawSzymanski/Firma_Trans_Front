import React from 'react';
import { shallow } from 'enzyme';
import { Roads } from "./Roads";
import configureMockStore from 'redux-mock-store'
import AllRoadTable from "../../components/RoadTable/AllRoadTable";
import AllConnectionTable from "../../components/RoadTable/AllConnectionTable";

const mockStore = configureMockStore([  ]);
const storeStateMock = {
    myReducer:{
        Admin:'Admin_Role',
    }
};

function setupRoads() {
    let store = mockStore(storeStateMock);
    let props = {
        store: store,
        userRole:'Admin_Role',
        fetchAllRoadDetails: () => { return {}; },
        fetchAllConnection: () => { return {}; }
    };

    const enzymeWrapper = shallow(<Roads {...props} />);

    return {
        enzymeWrapper
    }
}

describe('Roads components are rendered', () => {
    const { enzymeWrapper } = setupRoads()
    //console.log(enzymeWrapper.debug());

    it('AllRoadTable is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<AllRoadTable />)).toEqual(true);
    });
    it('AllConnectionTable is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<AllConnectionTable />)).toEqual(true);
    });

});

