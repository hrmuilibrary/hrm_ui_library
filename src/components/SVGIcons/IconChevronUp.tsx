import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronUp = ({
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
      d="M13.1326 11.4502C12.9089 11.2265 12.5463 11.2265 12.3226 11.4502L8.9089 14.8639C8.55748 15.2153 7.98772 15.2153 7.6363 14.8639C7.28488 14.5125 7.28488 13.9427 7.6363 13.5913L12.2069 9.02069C12.4945 8.73312 12.9607 8.73312 13.2483 9.02069L17.8189 13.5913C18.1703 13.9427 18.1703 14.5125 17.8189 14.8639C17.4675 15.2153 16.8977 15.2153 16.5463 14.8639L13.1326 11.4502Z"
      fill="#0E121B"
    />
  </svg>
)

export default IconChevronUp
