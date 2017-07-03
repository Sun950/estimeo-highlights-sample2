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

    /*it('h1 equals to Welcome!', () => {
    const wrapper = shallow(<Welcome />);
    expect(wrapper.find('h1').text()).toBe('Welcome !')
    })

     it('p equals to MyMessage', () => {
     const wrapper = shallow(<Welcome />);
     expect(wrapper.find('').text()).toBe('My Message')
     })*/

    /*it('will success', () => {
        expect(true).toBe(true)
    })*/
})
