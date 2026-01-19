import React, { lazy } from 'react'
import { ISVGIconProps, TSVGIconType } from '../../type'

export const TYPE_MAPPING: { [key: string]: TSVGIconType } = {
  warning: 'warning',
  success: 'success',
  error: 'danger',
  information: 'information'
}

export const ICONS_MAPPING: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<ISVGIconProps>>
> = {
  warning: lazy(() => import('../SVGIcons/IconWarningFilled')),
  success: lazy(() => import('../SVGIcons/IconCheckmarkFilled')),
  error: lazy(() => import('../SVGIcons/IconErrorCircleFilled')),
  information: lazy(() => import('../SVGIcons/IconInfoFilled'))
}

export const DEFAULT_DURATION = 6000
