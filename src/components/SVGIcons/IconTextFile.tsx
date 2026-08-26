import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconTextFile = ({
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
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" fill="none"></path>
    <path d="M14 2v4a2 2 0 0 0 2 2h4" fill="none"></path>
    <path d="M10 9H8" fill="none"></path>
    <path d="M16 13H8" fill="none"></path>
    <path d="M16 17H8" fill="none"></path>
  </svg>
)

export default IconTextFile
