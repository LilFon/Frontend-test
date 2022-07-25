import { useState } from 'react'

export const useValue = initialValue => {
  const [value, setValue] = useState(initialValue)
  const onChange = e => setValue(e.target.value)

  return { value, onChange }
}