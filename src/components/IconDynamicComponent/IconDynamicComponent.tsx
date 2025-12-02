import React, { lazy, ReactElement, Suspense, useMemo } from 'react'
import { ISVGIconProps } from '../SVGIcons/types'
import { TIconName } from '../SVGIcons/icon-names'

interface IconDynamicComponentProps extends ISVGIconProps {
  componentName: TIconName
}

export const IconDynamicComponent = ({
  componentName,
  ...rest
}: IconDynamicComponentProps): ReactElement | null => {
  const toPascalCase = (value: string): string =>
    value
      .replace(/^[a-z]/, (m) => m.toUpperCase())
      .replace(/[A-Z]/g, (m) => ` ${m}`)
      .trim()
      .split(/\s|_|-/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')

  const exportName = useMemo(() => {
    if (!componentName) return null
    return `Icon${toPascalCase(componentName)}`
  }, [componentName])

  const Component = useMemo(() => {
    if (!exportName) return null

    return lazy((): any =>
      import('../../components/SVGIcons').then((mod: any) => ({
        default: mod[exportName] ?? (() => null)
      }))
    )
  }, [exportName])

  if (!Component) return null

  return (
    <Suspense fallback={null}>
      <Component {...rest} />
    </Suspense>
  )
}
