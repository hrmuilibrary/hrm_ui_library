import React, { lazy, ReactElement, Suspense } from 'react'
import { ISVGIconProps } from '../SVGIcons/types'
import type { TIconName } from '../SVGIcons/icon-names'

interface IconDynamicComponentProps extends ISVGIconProps {
  componentName: TIconName
}

export const IconDynamicComponent = ({
  componentName,
  ...rest
}: IconDynamicComponentProps): ReactElement | null => {
  if (!componentName) {
    return null
  }

  const toPascalCase = (value: string): string =>
    value
      .replace(/^[a-z]/, (m) => m.toUpperCase())
      .replace(/[A-Z]/g, (m) => ` ${m}`)
      .trim()
      .split(/\s|_|-/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

  const resolvedName = toPascalCase(componentName)
  const exportName = `Icon${resolvedName}`

  // Dynamically load the component based on the componentName prop
  const Component = lazy((): any =>
    import('../../components/SVGIcons').then((mod: any) => ({
      default: mod[exportName] ?? (() => null)
    }))
  )

  return (
    <Suspense fallback={null}>
      <Component {...rest} />
    </Suspense>
  )
}
