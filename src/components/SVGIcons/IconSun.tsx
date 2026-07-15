import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconSun = ({
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
    <circle fill="none" cx="12" cy="12" r="4"></circle>
    <path fill="none" d="M12 2v2"></path>
    <path fill="none" d="M12 20v2"></path>
    <path fill="none" d="m4.93 4.93 1.41 1.41"></path>
    <path fill="none" d="m17.66 17.66 1.41 1.41"></path>
    <path fill="none" d="M2 12h2"></path>
    <path fill="none" d="M20 12h2"></path>
    <path fill="none" d="m6.34 17.66-1.41 1.41"></path>
    <path fill="none" d="m19.07 4.93-1.41 1.41"></path>
  </svg>
)

export default IconSun
