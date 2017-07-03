/**
 * Created by Adrien on 02/07/2017.
 */
import { shallow } from 'enzyme'
import React from 'react'

import Header from '../components/Header';

describe('<Header />', () => {

    it('is equal to Estimeo Hightlights', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('title').text()).toBe('Estimeo Highlights')
    })
    
    it('link Roboto is registered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('<link href=\"https://fonts.googleapis.com/css?family=Roboto\" rel=\"stylesheet\" />'))
    })

    it('link stylesheet blabla', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains('<link rel="stylesheet" href="/static/css/estimeo-style.css"/>'))
    })

    it('test style only once', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('style').length).toBe(1)
    })
    /*it('will fail', () => {
        expect(false).toBe(true)
    })*/
})
