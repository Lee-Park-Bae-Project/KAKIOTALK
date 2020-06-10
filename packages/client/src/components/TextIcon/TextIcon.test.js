/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
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

  it('test with click event handler', () => {
    let result = ''
    const onClick = () => {
      result = 'clicked'
    }
    const wrapper = mount(
      <TextIcon
        icon='Account'
        text='hihi'
        onClick={onClick}
      />
    )
    expect(result).toBe('')
    wrapper.simulate('click')
    expect(result).toBe('clicked')
  })
})
