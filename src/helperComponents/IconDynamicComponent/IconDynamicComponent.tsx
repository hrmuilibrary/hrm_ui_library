import React, { ReactElement, Suspense, ComponentType, LazyExoticComponent } from 'react'
import { ISVGIconProps } from '../../type/'

interface IconDynamicComponentProps extends ISVGIconProps {
  Component: LazyExoticComponent<ComponentType<ISVGIconProps>>
}

export const IconDynamicComponent = ({
  Component,
  ...rest
}: IconDynamicComponentProps): ReactElement | null => {
  if (!Component) return null

  return (
    <Suspense fallback={null}>
      <Component {...rest} />
    </Suspense>
  )
}
