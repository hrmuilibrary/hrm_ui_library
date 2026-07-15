import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconCode = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataTestId
}: ISVGIconProps): ReactElement => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={classNames('svg-icon', {
      [`svg-icon__size-${size}`]: size,
      [`svg-icon__type-${type}`]: type,
      [className]: className
    })}
    viewBox="0 0 24 24"
    fill="none"
    onClick={onClick}
    ref={refHandler}
    id={id}
    data-test-id={dataTestId ? `${dataTestId}-svg-icon` : ''}
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="18,16 22,12 18,8"></polyline>
    <polyline points="6,8 2,12 6,16"></polyline>
    <line x1="14.5" y1="4" x2="9.5" y2="20"></line>
  </svg>
)

export default IconCode
