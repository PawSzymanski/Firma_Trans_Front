import React from 'react';
import { shallow } from 'enzyme';
import { Users } from "./Users";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import ActionBtn from "../../components/Button/ActionBtn";
import UserTable from "../../components/UserTable/UserTable";

function setupUsers() {

    let props = {
        fetchUserDetails: () => { return {}; }
    };

    const enzymeWrapper = shallow(<Users {...props} />);

    return {
        enzymeWrapper
    }
}

describe('Users components are rendered', () => {
    const { enzymeWrapper } = setupUsers()

    it('RegisterForm is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<RegisterForm />)).toEqual(true);
    });

    it('ActionBtn is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<ActionBtn />)).toEqual(true);
    });

    it('UserTable is exist', () => {
        expect(enzymeWrapper.containsMatchingElement(<UserTable />)).toEqual(true);
    });

})
