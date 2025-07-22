import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconPersonMinus = ({
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
      d="M1.00009 21C1.00009 19.6774 0.988894 18.7943 1.21493 18.0488C1.69969 16.4508 2.95092 15.1996 4.54892 14.7148C5.29437 14.4888 6.1775 14.5 7.50009 14.5H12.0001C12.5524 14.5 13.0001 14.9477 13.0001 15.5C13.0001 16.0523 12.5524 16.5 12.0001 16.5H7.50009C6.03177 16.5 5.51906 16.5106 5.129 16.6289C4.17031 16.9198 3.41986 17.6702 3.129 18.6289C3.01067 19.019 3.00009 19.5317 3.00009 21C3.00009 21.5523 2.55238 22 2.00009 22C1.44781 22 1.00009 21.5523 1.00009 21ZM22.0001 17C22.5524 17 23.0001 17.4477 23.0001 18C23.0001 18.5523 22.5524 19 22.0001 19H16.0001C15.4478 19 15.0001 18.5523 15.0001 18C15.0001 17.4477 15.4478 17 16.0001 17H22.0001ZM13.5001 7.5C13.5001 5.567 11.9331 4 10.0001 4C8.06709 4 6.50009 5.567 6.50009 7.5C6.50009 9.433 8.06709 11 10.0001 11C11.9331 11 13.5001 9.433 13.5001 7.5ZM15.5001 7.5C15.5001 10.5376 13.0377 13 10.0001 13C6.96252 13 4.50009 10.5376 4.50009 7.5C4.50009 4.46243 6.96252 2 10.0001 2C13.0377 2 15.5001 4.46243 15.5001 7.5Z"
      fill="#0E121B"
    />
  </svg>
)

export default IconPersonMinus
