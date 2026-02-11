import React, { LegacyRef, ReactElement } from 'react'
import classnames from 'classnames'
import { Text } from '../../../../Text'
import IconChevronUp from '../../../../SVGIcons/IconChevronUp'
import IconChevronDown from '../../../../SVGIcons/IconChevronDown'
import { ICommon } from '../../../../../type'

type TProps = ICommon & {
  buttonText: string
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
  dataId?: string
  onClick: () => void
  refHandler?: LegacyRef<HTMLButtonElement> | undefined
  selectedItemsLabels: string
  isOpen?: boolean
  type?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = (props: TProps): ReactElement => {
  const {
    type,
    buttonText,
    size = 'large',
    className = '',
    isOpen,
    disabled,
    dataId = '',
    onClick,
    refHandler = null,
    selectedItemsLabels,
    theme = 'light'
  } = props

  return (
    <button
      type="button"
      ref={refHandler}
      data-id={dataId}
      disabled={disabled}
      className={classnames('btn', `btn--${type}`, `btn--${size}`, `btn--${size}`, className)}
      onClick={onClick}
      data-theme={theme}
    >
      <>
        <Text
          className="btn__text mr-4"
          type={selectedItemsLabels ? 'tertiary' : 'secondary'}
          theme={theme}
        >
          {`${buttonText}${selectedItemsLabels ? '  |' : ''}`}
        </Text>

        {selectedItemsLabels ? <Text className="btn__text ml-4 mr-4" theme={theme} /> : null}
        {isOpen ? <IconChevronUp size="small" /> : <IconChevronDown size="small" />}
      </>
    </button>
  )
}
