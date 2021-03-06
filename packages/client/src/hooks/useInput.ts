import React, { useState } from 'react'

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue)
  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  return {
    value,
    onChange: handleChangeValue,
  }
}

export default useInput
