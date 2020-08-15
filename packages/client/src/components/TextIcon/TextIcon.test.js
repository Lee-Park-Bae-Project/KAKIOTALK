/* eslint-disable no-undef */
import React from 'react'
import {
  mount, shallow,
} from 'enzyme'
import TextIcon from 'components/TextIcon'

describe('<TextIcon/>', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<TextIcon icon='Account' text='hi'/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('matches props', () => {
    const wrapper = mount(<TextIcon icon='Account' text='hihi'/>)
    expect(wrapper.props().icon).toBe('Account')
    expect(wrapper.props().text).toBe('hihi')
  })
})
