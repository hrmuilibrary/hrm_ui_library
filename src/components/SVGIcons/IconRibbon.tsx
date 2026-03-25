import React, { ReactElement } from 'react'
import { ISVGIconProps } from '../../type'
import classNames from 'classnames'

const IconRibbon = ({
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
    <path d="M9.99935 1.66663C13.221 1.66663 15.8327 4.2783 15.8327 7.49996C15.8327 9.08911 15.1972 10.5298 14.1665 11.5819L14.1653 17.7085C14.1653 18.185 13.6598 18.4754 13.2551 18.2649L13.1806 18.2195L9.99856 15.9797L6.81822 18.2195C6.42851 18.4939 5.89996 18.2477 5.83913 17.7956L5.83335 17.7085L5.83216 11.5819C4.80148 10.5298 4.16602 9.08911 4.16602 7.49996C4.16602 4.2783 6.77769 1.66663 9.99935 1.66663ZM12.9153 16.5042L12.9155 12.5532C12.0576 13.0493 11.0617 13.3333 9.99935 13.3333C8.93705 13.3333 7.94107 13.0493 7.08317 12.5532L7.08335 16.5039L9.6386 14.7043C9.82742 14.5714 10.0715 14.5547 10.2742 14.6544L10.3582 14.7043L12.9153 16.5042L12.9155 12.5532L12.9153 16.5042ZM9.99935 2.91663C7.46804 2.91663 5.41602 4.96865 5.41602 7.49996C5.41602 10.0313 7.46804 12.0833 9.99935 12.0833C12.5307 12.0833 14.5827 10.0313 14.5827 7.49996C14.5827 4.96865 12.5307 2.91663 9.99935 2.91663Z" />
  </svg>
)

export default IconRibbon
