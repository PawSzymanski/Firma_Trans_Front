import React from 'react';
import { shallow } from 'enzyme';
import { Reservation } from "./Reservation";
import ReservationTable from "../../components/ReservationTable/ReservationTable";

function setupReservation() {

    let props = {
        fetchReservationDetails: () => { return {}; },
    };

    const enzymeWrapper = shallow(<Reservation {...props} />);

    return {
        enzymeWrapper
    }
}

describe('Roads components are rendered', () => {
    const { enzymeWrapper } = setupReservation()

    it('ReservationTable is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<ReservationTable />)).toEqual(true);
    });

    it('Text is correct', () => {
        expect(enzymeWrapper.find('Title').html()).toContain('Rezerwacje użytkownika');
    });

});

