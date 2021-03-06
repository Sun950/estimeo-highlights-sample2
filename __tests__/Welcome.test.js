/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Welcome from '../components/Welcome';

describe('<Welcome />', () => {

    it('only one h1', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('h1').length).toBe(1)
    })

    it('only one p', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('p').length).toBe(1)
    })

    it('shows "Bienvenue !" as title', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('h1').text()).toEqual('Welcome !')
    })

    it('shows "My Message" as msg', () => {
        const wrapper = shallow(<Welcome title="Welcome !" msg="My Message"/>);
        expect(wrapper.find('p').text()).toEqual('My Message')
    })	
    /*it('will success', () => {
        expect(true).toBe(true)
    })*/
})
