import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconChevronLeft = ({
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
      d="M11.9502 11.3226C11.7265 11.5463 11.7265 11.9089 11.9502 12.1326L15.3639 15.5463C15.7153 15.8977 15.7153 16.4675 15.3639 16.8189C15.0125 17.1703 14.4427 17.1703 14.0913 16.8189L9.52069 12.2483C9.23312 11.9607 9.23312 11.4945 9.52069 11.2069L14.0913 6.6363C14.4427 6.28488 15.0125 6.28488 15.3639 6.6363C15.7153 6.98772 15.7153 7.55748 15.3639 7.9089L11.9502 11.3226Z"
      fill="#0E121B"
    />
  </svg>
)

export default IconChevronLeft
