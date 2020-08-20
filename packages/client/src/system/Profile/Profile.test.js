/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Profile from 'system/Profile'
import { Provider } from 'react-redux'
import { Store } from 'modules'

const user = {
  uuid: '1',
  name: 'junow',
  statusMessage: 'this is junow',
}

describe('<Profile/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(
      <Provider store={Store.store}>
        <Profile {...user}/>
      </Provider>
    )
    expect(wrapper).toMatchSnapshot()
  })
  it('matches props', () => {
    const wrapper = mount(
      <Provider store={Store.store}>
        <Profile {...user}/>
      </Provider>
    )
    expect(wrapper.props().children.props.uuid).toEqual(user.uuid)
    expect(wrapper.props().children.props.name).toEqual(user.name)
    expect(wrapper.props().children.props.statusMessage).toEqual(user.statusMessage)
  })
})
