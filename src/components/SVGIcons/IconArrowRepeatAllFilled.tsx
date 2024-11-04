import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconArrowRepeatAllFilled = ({
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
    <g id="Size=24, Theme=Filled">
      <path
        id="Shape"
        d="M14.7123 2.28927L14.6251 2.21162C14.2326 1.90101 13.6607 1.92689 13.2981 2.28927L13.2204 2.37643C12.9096 2.76867 12.9355 3.34012 13.2981 3.70249L14.597 4.99947L8.99921 4.99968L8.75859 5.00373C5.00445 5.13047 2 8.21161 2 11.994C2 13.4387 2.43833 14.7811 3.18863 15.8923C3.37024 16.1437 3.666 16.3073 4 16.3073C4.55228 16.3073 5 15.8599 5 15.308C5 15.0919 4.93132 14.8917 4.81525 14.7293L4.68008 14.5112C4.24775 13.772 4 12.9119 4 11.994C4 9.23493 6.23822 6.99828 8.99921 6.99828L14.595 6.99807L13.2981 8.29546L13.2204 8.38262C12.9096 8.77486 12.9355 9.34631 13.2981 9.70868C13.6886 10.0989 14.3218 10.0989 14.7123 9.70868L17.7175 6.70559L17.7952 6.61843C18.106 6.22619 18.0801 5.65474 17.7175 5.29237L14.7123 2.28927ZM20.7865 8.06061C20.6034 7.82799 20.3191 7.6786 20 7.6786C19.4477 7.6786 19 8.126 19 8.6779C19 8.88608 19.0637 9.07939 19.1717 9.2389C19.6952 10.0287 20 10.9757 20 11.994C20 14.753 17.7618 16.9897 15.0008 16.9897L9.415 16.9891L10.7087 15.6977L10.7923 15.603C11.0733 15.2413 11.0713 14.7312 10.7864 14.3716L10.7087 14.2845L10.6139 14.2009C10.252 13.9201 9.7415 13.9221 9.38169 14.2068L9.29447 14.2845L6.28926 17.2876L6.20562 17.3823C5.92465 17.7439 5.92663 18.2541 6.21156 18.6136L6.28926 18.7008L9.29447 21.7039L9.38867 21.787C9.78097 22.0918 10.3482 22.0641 10.7087 21.7039C11.0713 21.3415 11.0972 20.7701 10.7864 20.3778L10.7087 20.2907L9.405 18.9877L15.0008 18.9883L15.2414 18.9842C18.9956 18.8575 22 15.7764 22 11.994C22 10.534 21.5524 9.17858 20.7868 8.05715L20.7865 8.06061Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconArrowRepeatAllFilled
