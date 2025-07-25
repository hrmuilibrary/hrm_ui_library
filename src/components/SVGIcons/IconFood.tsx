import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconFood = ({
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
      d="M18.25 3.25C18.6297 3.25 18.9435 3.53215 18.9932 3.89823L19 4V20C19 20.4142 18.6642 20.75 18.25 20.75C17.8703 20.75 17.5565 20.4678 17.5068 20.1018L17.5 20V15H15.25C14.8703 15 14.5565 14.7178 14.5068 14.3518L14.5 14.25V7C14.5 4.92893 16.1789 3.25 18.25 3.25ZM12.25 3.25C12.6297 3.25 12.9435 3.53215 12.9932 3.89823L13 4V8C13 9.95258 11.6009 11.5784 9.7506 11.9297L9.75 20C9.75 20.4142 9.41421 20.75 9 20.75C8.6203 20.75 8.30651 20.4678 8.25685 20.1018L8.25 20L8.25039 11.9299C6.46566 11.5915 5.10054 10.0675 5.00531 8.20795L5 8V4C5 3.58579 5.33579 3.25 5.75 3.25C6.1297 3.25 6.44349 3.53215 6.49315 3.89823L6.5 4V8C6.5 9.11957 7.23593 10.0672 8.25042 10.3857L8.25 4C8.25 3.58579 8.58579 3.25 9 3.25C9.3797 3.25 9.69349 3.53215 9.74315 3.89823L9.75 4L9.75057 10.3854C10.7082 10.0843 11.4174 9.22253 11.4933 8.18486L11.5 8V4C11.5 3.58579 11.8358 3.25 12.25 3.25ZM17.5 13.5V4.87803C16.6775 5.16874 16.0745 5.9241 16.0064 6.82871L16 7V13.5H17.5V4.87803V13.5Z"
      fill="#0E121B"
    />
  </svg>
)

export default IconFood
