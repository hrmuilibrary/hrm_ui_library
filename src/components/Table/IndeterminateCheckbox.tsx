import { IBaseProps } from '../../type'
import React, { ForwardedRef, forwardRef, useEffect, useRef } from 'react'
import { Checkbox } from '../Checkbox'

type IndeterminateCheckboxProps = IBaseProps & {
  indeterminate: boolean
  checked: boolean
  disabled: boolean
  onChange: (e: { target: { checked: boolean } }) => void
}

export const IndeterminateCheckbox = forwardRef(
  (
    {
      indeterminate,
      checked,
      onChange,
      disabled = false,
      dataTestId = ''
    }: IndeterminateCheckboxProps,
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
        dataTestId={dataTestId}
        stopPropagation
      />
    )
  }
)

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'
