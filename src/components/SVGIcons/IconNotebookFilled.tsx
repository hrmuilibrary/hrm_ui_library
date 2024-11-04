import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconNotebookFilled = ({
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
        d="M16.7488 2C17.9915 2 18.9988 3.00736 18.9988 4.25V19.75C18.9988 20.9926 17.9915 22 16.7488 22H6.25C5.00736 22 4 20.9926 4 19.75V4.25C4 3.00736 5.00736 2 6.25 2H16.7488ZM20 15.0019H20.75C21.1297 15.0019 21.4435 15.2841 21.4932 15.6502L21.5 15.7519V17.25C21.5 17.6297 21.2178 17.9435 20.8518 17.9932L20.75 18H20V15.0019H20.75H20ZM20 11.0019H20.75C21.1297 11.0019 21.4435 11.2841 21.4932 11.6502L21.5 11.7519V13.25C21.5 13.6297 21.2178 13.9435 20.8518 13.9932L20.75 14H20V11.0019H20.75H20ZM20 7.00194H20.75C21.1297 7.00194 21.4435 7.28409 21.4932 7.65017L21.5 7.75194V9.25C21.5 9.6297 21.2178 9.94349 20.8518 9.99315L20.75 10H20V7.00194H20.75H20ZM14.7536 5.49739H8.25136C7.87167 5.49739 7.55787 5.77954 7.50821 6.14562L7.50136 6.24739V7.75097C7.50136 8.13067 7.78352 8.44446 8.14959 8.49412L8.25136 8.50097H14.7536C15.1333 8.50097 15.4471 8.21882 15.4968 7.85274L15.5036 7.75097V6.24739C15.5036 5.83317 15.1678 5.49739 14.7536 5.49739Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconNotebookFilled
