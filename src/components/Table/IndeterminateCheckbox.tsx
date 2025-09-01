import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import { Checkbox } from '../Checkbox'

type IndeterminateCheckboxProps = {
  indeterminate: boolean
  checked: boolean
  disabled: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

export const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, checked, onChange, disabled = false }: IndeterminateCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef(null)
    const resolvedRef: any = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    const handleChange = (v: boolean) => {
      onChange({ target: { checked: v } })
    }

    return (
      <Checkbox
        disabled={disabled}
        value={checked}
        onClick={handleChange}
        ref={resolvedRef}
        iconProps={{
          name: disabled ? '' : 'checkmark'
        }}
      />
    )
  }
)

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'
