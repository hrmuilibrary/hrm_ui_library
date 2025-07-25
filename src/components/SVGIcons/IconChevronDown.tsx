import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDown = ({
  size,
  type,
  className = '',
  onClick,
  refHandler,
  id,
  dataId
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
    data-id={dataId ? `${dataId}-svg-icon` : ''}
  >
    <path
      d="M12.1097 12.55C12.3334 12.7737 12.696 12.7737 12.9197 12.55L16.3334 9.1363C16.6848 8.78488 17.2546 8.78488 17.606 9.1363C17.9574 9.48772 17.9574 10.0575 17.606 10.4089L13.0354 14.9795C12.7478 15.2671 12.2816 15.2671 11.994 14.9795L7.42341 10.4089C7.07199 10.0575 7.07199 9.48772 7.42341 9.1363C7.77483 8.78488 8.34459 8.78488 8.69601 9.1363L12.1097 12.55Z"
      fill="#0E121B"
    />
  </svg>
)

export default IconChevronDown
