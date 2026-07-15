import React, { LegacyRef, ReactElement } from 'react'
import classnames from 'classnames'
import { Text } from '../../../../Text'
import IconChevronUp from '../../../../SVGIcons/IconChevronUp'
import IconChevronDown from '../../../../SVGIcons/IconChevronDown'

type TProps = {
  buttonText: string
  size?: 'small' | 'medium' | 'large'
  className?: string
  disabled?: boolean
  dataTestId?: string
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
    dataTestId = '',
    onClick,
    refHandler = null,
    selectedItemsLabels
  } = props

  return (
    <button
      type="button"
      ref={refHandler}
      data-test-id={dataTestId}
      disabled={disabled}
      className={classnames('btn', `btn--${type}`, `btn--${size}`, `btn--${size}`, className)}
      onClick={onClick}
    >
      <>
        <Text className="btn__text mr-4" type={selectedItemsLabels ? 'tertiary' : 'secondary'}>
          {`${buttonText}${selectedItemsLabels ? '  |' : ''}`}
        </Text>

        {selectedItemsLabels ? (
          <Text className="btn__text ml-4 mr-4">{selectedItemsLabels}</Text>
        ) : null}
        {isOpen ? <IconChevronUp size="small" /> : <IconChevronDown size="small" />}
      </>
    </button>
  )
}
