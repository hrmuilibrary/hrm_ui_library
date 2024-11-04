import React, { ReactElement } from 'react'
import { ISVGIconProps } from './types'
import classNames from 'classnames'

export const IconAlertFilled = ({
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
        d="M9.04173 19.003H14.9583C14.7196 20.4211 13.486 21.5015 12 21.5015C10.514 21.5015 9.28037 20.4211 9.04173 19.003ZM12 2.00391C16.1421 2.00391 19.5 5.36177 19.5 9.50391V13.5024L20.9183 16.6625C20.9732 16.7848 21.0016 16.9174 21.0016 17.0515C21.0016 17.5762 20.5763 18.0015 20.0516 18.0015H3.95219C3.8184 18.0015 3.68613 17.9733 3.56402 17.9186C3.08515 17.7042 2.87073 17.1422 3.08511 16.6633L4.50001 13.5028L4.50011 9.49099L4.50453 9.24107C4.6436 5.21035 7.95588 2.00391 12 2.00391Z"
        fill="#222222"
      />
    </g>
  </svg>
)

export default IconAlertFilled
