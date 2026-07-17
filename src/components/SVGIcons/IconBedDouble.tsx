import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconBedDouble = ({
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" fill="none"></path>
    <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" fill="none"></path>
    <path d="M12 4v6" fill="none"></path>
    <path d="M2 18h20" fill="none"></path>
  </svg>
)

export default IconBedDouble
