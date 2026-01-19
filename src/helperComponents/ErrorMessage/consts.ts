import React, { lazy } from 'react'
import { ISVGIconProps } from '../../type'

export const ICONS_MAPPING: Record<
  string,
  React.LazyExoticComponent<React.ComponentType<ISVGIconProps>>
> = {
  infoFilled: lazy(() => import('../../components/SVGIcons/IconInfoFilled'))
}
