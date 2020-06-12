import React from 'react';
import { shallow } from 'enzyme';
import {ConnSearch} from './ConnSearch';
import RoadForm from "../../components/RoadTable/RoadForm";
import RoadTable from "../../components/RoadTable/RoadTable";

function setupConn() {

    let props = {
        fetchUserPoints: () => { return {}; }
    };

    const enzymeWrapper = shallow(<ConnSearch {...props} />);

    return {
        enzymeWrapper
    }
}

    describe('ConnSearch components are rendered', () => {
        const { enzymeWrapper } = setupConn()

        it('RoadForm is exist', () => {
            expect(enzymeWrapper.containsMatchingElement(<RoadForm />)).toEqual(true);
        });

        it('RoadTable is exist', () => {
            expect(enzymeWrapper.containsMatchingElement(<RoadTable />)).toEqual(true);
        });

        it('Text is correct', () => {
            expect(enzymeWrapper.find('p').html()).toContain('Kliknij na połączenie, aby dokonać rezerwacji');
        });

    })


// const mockStore = configureMockStore([  ]);
// const storeStateMock = {
//     myReducer:{
//
//     }
// };
// let store = mockStore(storeStateMock);
// store: store,
