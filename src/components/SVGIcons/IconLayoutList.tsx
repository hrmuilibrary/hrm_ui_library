import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconLayoutList = ({
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
    <rect width="18" height="18" x="3" y="3" rx="2"></rect>
    <path d="M12 3v18"></path>
  </svg>
)

export default IconLayoutList
