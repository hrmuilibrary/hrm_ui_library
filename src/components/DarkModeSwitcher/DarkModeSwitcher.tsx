import { IBaseProps } from '../../type'
import React, { ChangeEvent, forwardRef } from 'react'
import classNames from 'classnames'
import IconMoon from '../SVGIcons/IconMoon'
import IconSun from '../SVGIcons/IconSun'

type DarkModeSwitcherProps = IBaseProps & {
  checked: boolean
  onChange: (checked: boolean) => void
  disabled?: boolean
  id?: string
  name?: string
  className?: string
}

export const DarkModeSwitcher = forwardRef<HTMLInputElement, DarkModeSwitcherProps>(
  (
    {
      checked,
      onChange,
      disabled = false,
      id = 'dark-mode-switcher',
      name,
      className,
      dataTestId = ''
    },
    ref
  ) => {
    const _onChange = (e: ChangeEvent<HTMLInputElement>) => {
      if (disabled) {
        return
      }
      onChange(e.target.checked)
    }

    return (
      <label
        className={classNames('theme-switch', className, { 'is-disabled': disabled })}
        htmlFor={id}
        data-test-id={dataTestId}
      >
        <span className={classNames('theme-switch__track', { 'is-checked': checked })}>
          <span className="theme-switch__icon theme-switch__icon--sun" aria-hidden="true">
            <IconSun size="xsmall" dataTestId={dataTestId ? `${dataTestId}-sun-icon` : ''} />
          </span>

          <input
            ref={ref}
            id={id}
            name={name}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            onChange={_onChange}
            className="theme-switch__input"
            data-test-id={dataTestId ? `${dataTestId}-input` : ''}
          />

          <span className="theme-switch__thumb" aria-hidden="true" />

          <span className="theme-switch__icon theme-switch__icon--moon" aria-hidden="true">
            <IconMoon size="xsmall" dataTestId={dataTestId ? `${dataTestId}-moon-icon` : ''} />
          </span>
        </span>
      </label>
    )
  }
)

DarkModeSwitcher.displayName = 'DarkModeSwitcher'
