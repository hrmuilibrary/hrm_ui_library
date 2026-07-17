import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconCalendarDays = ({
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
    <path d="M8 2v4" fill="none"></path>
    <path d="M16 2v4" fill="none"></path>
    <rect width="18" height="18" x="3" y="4" rx="2" fill="none"></rect>
    <path d="M3 10h18" fill="none"></path>
    <path d="M8 14h.01" fill="none"></path>
    <path d="M12 14h.01" fill="none"></path>
    <path d="M16 14h.01" fill="none"></path>
    <path d="M8 18h.01" fill="none"></path>
    <path d="M12 18h.01" fill="none"></path>
    <path d="M16 18h.01" fill="none"></path>
  </svg>
)

export default IconCalendarDays
