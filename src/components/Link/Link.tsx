import React, { ReactElement } from 'react'
import { LinkPropTypes } from './types'
import classNames from 'classnames'

export const Link = (props: LinkPropTypes): ReactElement => {
  const {
    children,
    afterLink,
    beforeLink,
    className = '',
    url,
    dataTestId = '',
    target,
    type = 'brand',
    onclick
  } = props
  return beforeLink || afterLink ? (
    <span className={className}>
      {beforeLink}
      <a
        onClick={(e) => {
          if (onclick) {
            e.preventDefault()
            onclick()
          }
        }}
        href={url}
        className={`link link-${type}`}
        data-test-id={dataTestId ? `${dataTestId}-link` : ''}
        target={target}
      >
        {children}
      </a>
      {afterLink}
    </span>
  ) : (
    <a
      onClick={(e) => {
        if (onclick) {
          e.preventDefault()
          onclick()
        }
      }}
      href={url}
      className={classNames(`link ${className} link-${type}`)}
      data-test-id={dataTestId ? `${dataTestId}-link` : ''}
      target={target}
    >
      {children}
    </a>
  )
}
