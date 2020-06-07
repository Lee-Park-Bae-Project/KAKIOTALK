import React from 'react'
import Circle from 'atoms/Circle'

export default {
  title: 'Atoms/Circle',
  component: Circle,
}

export const Default = () => {
  const num = 1

  return (
    <Circle num={num}/>
  )
}

export const BiggerNum = () => {
  const num = 33

  return (
    <Circle num={num}/>
  )
}

export const BiggerBiggerNum = () => {
  const num = 1000

  return (
    <Circle num={num}/>
  )
}
