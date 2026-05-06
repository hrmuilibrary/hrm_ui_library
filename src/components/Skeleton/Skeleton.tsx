import React, { CSSProperties, ReactElement } from 'react'
import classnames from 'classnames'
import { TSkeletonPropTypes } from './types'
import { DEFAULT_ANIMATION, DEFAULT_VARIANT } from './consts'

const toCSSSize = (value: number | string | undefined): string | undefined => {
  if (value === undefined || value === null) {
    return undefined
  }
  return typeof value === 'number' ? `${value}px` : value
}

export const Skeleton = (props: TSkeletonPropTypes): ReactElement => {
  const {
    variant = DEFAULT_VARIANT,
    animation = DEFAULT_ANIMATION,
    width,
    height,
    count = 1,
    children,
    style,
    className = '',
    dataId = ''
  } = props

  const hasChildren = children !== undefined && children !== null
  const safeCount = count > 1 ? count : 1

  const inlineStyle: CSSProperties = {
    ...(width !== undefined ? { width: toCSSSize(width) } : null),
    ...(height !== undefined ? { height: toCSSSize(height) } : null),
    ...style
  }

  const rootClassName = classnames(
    'skeleton',
    `skeleton--${variant}`,
    `skeleton--anim-${animation}`,
    {
      'skeleton--has-children': hasChildren,
      'skeleton--auto-height': hasChildren && height === undefined,
      'skeleton--auto-width': hasChildren && width === undefined
    },
    className
  )

  if (hasChildren) {
    return (
      <span className={rootClassName} style={inlineStyle} data-id={dataId}>
        <span className="skeleton__children" aria-hidden="true">
          {children}
        </span>
      </span>
    )
  }

  if (safeCount === 1) {
    return (
      <span
        className={rootClassName}
        style={inlineStyle}
        data-id={dataId}
        role="status"
        aria-label="Loading"
      />
    )
  }

  const items: ReactElement[] = []
  for (let i = 0; i < safeCount; i += 1) {
    items.push(
      <span
        key={i}
        className={rootClassName}
        style={inlineStyle}
        data-id={dataId ? `${dataId}-${i}` : ''}
        aria-hidden={i === 0 ? undefined : true}
        role={i === 0 ? 'status' : undefined}
        aria-label={i === 0 ? 'Loading' : undefined}
      />
    )
  }

  return <span className="skeleton-group">{items}</span>
}
