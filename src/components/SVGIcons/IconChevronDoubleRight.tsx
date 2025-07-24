import type { ReactElement } from 'react'
import React from 'react'
import type { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconChevronDoubleRight = ({
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
      d="M10.9904 5.04814C11.3503 4.70531 11.92 4.71915 12.2628 5.07906L18.2644 11.3796C18.5955 11.7272 18.5955 12.2735 18.2644 12.6211L12.2628 18.9217C11.92 19.2816 11.3503 19.2954 10.9904 18.9526C10.6305 18.6098 10.6166 18.0401 10.9595 17.6802L16.3698 12.0004L10.9595 6.32055C10.6166 5.96065 10.6305 5.39097 10.9904 5.04814ZM6.19039 5.04814C6.55029 4.70531 7.11997 4.71915 7.4628 5.07906L13.4644 11.3796C13.7955 11.7272 13.7955 12.2735 13.4644 12.6211L7.4628 18.9217C7.11997 19.2816 6.55029 19.2954 6.19039 18.9526C5.83048 18.6098 5.81664 18.0401 6.15947 17.6802L11.5698 12.0004L6.15947 6.32055C5.81664 5.96065 5.83048 5.39097 6.19039 5.04814Z"
      fill="#222222"
    />
  </svg>
)

export default IconChevronDoubleRight
