import React from 'react'

// eslint-disable-next-line func-names
const usePrevious = function<T> (value: T): undefined | T {
  const ref = React.useRef<T | undefined>(undefined)

  React.useEffect(() => {
    ref.current = value
  })

  return ref.current
}

export default usePrevious
