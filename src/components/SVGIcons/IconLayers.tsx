import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconLayers = ({
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
    <polygon
      fill="none"
      points="12.83,2.18 11.17,2.18 2.6,6.08 2.6,7.91 11.18,11.82 12.84,11.82 21.42,7.92 21.42,6.09"
    ></polygon>
    <polyline
      fill="none"
      points="2,12 2.58,12.91 11.18,16.82 12.83,16.82 21.41,12.92 22,12"
    ></polyline>
    <polyline
      fill="none"
      points="2,17 2.58,17.91 11.18,21.82 12.83,21.82 21.41,17.92 22,17"
    ></polyline>
  </svg>
)

export default IconLayers
