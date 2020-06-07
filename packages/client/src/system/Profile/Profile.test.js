/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Profile from 'system/Profile'

const user = {
  id: '1',
  name: 'junow',
  statusMessage: 'this is junow',
}

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Profile {...user}/>)
    expect(wrapper).toMatchSnapshot()
  })
  it('matches props', () => {
    const wrapper = mount(<Profile {...user}/>)
    expect(wrapper.props().id).toEqual(user.id)
    expect(wrapper.props().name).toEqual(user.name)
    expect(wrapper.props().statusMessage).toEqual(user.statusMessage)
  })
})
