import type { ForwardedRef } from 'react'
import React, { forwardRef, useEffect, useRef } from 'react'
import { Checkbox } from '../Checkbox'
import classNames from 'classnames'
import { ICommon } from '../../type'

type IndeterminateCheckboxProps = ICommon & {
  indeterminate: boolean
  checked: boolean
  onChange: (e: { target: { checked: boolean } }) => void
  disabled?: boolean
}

export const IndeterminateCheckbox = forwardRef(
  (
    { indeterminate, checked, onChange, disabled, theme = 'light' }: IndeterminateCheckboxProps,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    const defaultRef = useRef(null)
    const resolvedRef: any = ref ?? defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    const handleChange = (v: boolean) => {
      onChange({ target: { checked: v } })
    }

    return (
      <div className={'actions-list'} data-theme={theme}>
        <Checkbox
          className={classNames('actions-list__checkbox', { 'active-checkbox': checked })}
          value={checked}
          disabled={disabled}
          onClick={handleChange}
          ref={resolvedRef}
          theme={theme}
        />
      </div>
    )
  }
)

IndeterminateCheckbox.displayName = 'IndeterminateCheckbox'
