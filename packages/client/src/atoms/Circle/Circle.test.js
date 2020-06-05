/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Circle from 'atoms/Circle'

describe('<Circle />', () => {
  it('matches snapshot', () => {
    const wrapper = mount(<Circle num={22}/>)
    expect(wrapper).toMatchSnapshot()
  })

  it('matches props', () => {
    const wrapper = mount(<Circle num={22}/>)
    expect(wrapper.props().num).toBe(22)
  })
  it('matches big number converted with ...', () => {
    const wrapper = mount(<Circle num={9999}/>)
    expect(wrapper.find('div').text()).toBe('999+')
  })
})
