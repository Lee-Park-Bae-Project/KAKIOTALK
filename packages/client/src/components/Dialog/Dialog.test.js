/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'enzyme'
import Dialog from 'components/Dialog'

describe('<Dialog/>', () => {
  it('matches snapshot', () => {
    const isVisible = true
    const title = 'this is title'
    const description = 'this is description'
    const isHideButton = false
    const canCancel = true
    const cancelText = 'cancel'
    const confirmText = 'confirm'

    const wrapper = mount((
      <Dialog
        isVisible={isVisible}
        title={title}
        description={description}
        isHideButton={isHideButton}
        canCancel={canCancel}
        cancelText={cancelText}
        confirmText={confirmText}
      />
    ))
    expect(wrapper).toMatchSnapshot()
  })

  it('matches props', () => {
    const isVisible = true
    const title = 'this is title'
    const description = 'this is description'
    const isHideButton = false
    const canCancel = true
    const cancelText = 'cancel'
    const confirmText = 'confirm'

    const wrapper = mount((
      <Dialog
        isVisible={isVisible}
        title={title}
        description={description}
        isHideButton={isHideButton}
        canCancel={canCancel}
        cancelText={cancelText}
        confirmText={confirmText}
        id="dialog"
      />
    ))

    expect(wrapper.props().isVisible).toEqual(true)
    expect(wrapper.props().title).toEqual(title)
    expect(wrapper.props().description).toEqual(description)
    expect(wrapper.props().isHideButton).toEqual(isHideButton)
    expect(wrapper.props().canCancel).toEqual(canCancel)
    expect(wrapper.props().cancelText).toEqual(cancelText)
    expect(wrapper.props().confirmText).toEqual(confirmText)
  })

  it('event fire (just change text)', () => {
    let result = ''
    const isVisible = true
    const title = 'this is title'
    const description = 'this is description'
    const isHideButton = false
    const canCancel = true
    const cancelText = 'cancel'
    const confirmText = 'confirm'

    const cancelResult = 'cancel'
    const confirmResult = 'confirm'

    const onCancel = () => {
      result = cancelResult
    }
    const onConfirm = () => {
      result = confirmResult
    }

    const wrapper = mount((
      <Dialog
        isVisible={isVisible}
        title={title}
        description={description}
        isHideButton={isHideButton}
        canCancel={canCancel}
        cancelText={cancelText}
        confirmText={confirmText}
        id="dialog"
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    ))

    wrapper.find('button').at(0).simulate('click')
    expect(result).toEqual(confirmResult)
    wrapper.find('button').at(1).simulate('click')
    expect(result).toEqual(cancelResult)
  })
})
