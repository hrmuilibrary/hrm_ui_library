import React, { LegacyRef, ReactElement } from 'react'
import { DROPDOWN_AND_INPUT_GAP } from '../../../consts'
import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace
} from '../../../hooks'
import { ICommon } from '../../../type'

type TProps = ICommon & {
  isOpen: boolean
  children: ReactElement
  setDropdownRef: LegacyRef<HTMLDivElement>
  align?: 'left' | 'right'
  inputRef: HTMLDivElement | HTMLButtonElement | null
  dropdownRef: HTMLDivElement | null
  containerRef: HTMLDivElement | null
  dropdownWidth: number | undefined
  offsets?: {
    top?: number
    left?: number
    right?: number
  }
}
export const DesktopWrapper = (props: TProps): ReactElement | null => {
  const {
    offsets,
    setDropdownRef,
    align,
    isOpen,
    children,
    inputRef,
    dropdownRef,
    containerRef,
    dropdownWidth,
    theme = 'light'
  } = props

  const { bottom, left, top, right } = useGetElemPositions(inputRef)
  const { width: containerWidth } = useGetElemSizes(containerRef)
  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: inputRef
  })

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: inputRef
  })

  return isOpen ? (
    <div
      className="select__options"
      ref={setDropdownRef}
      style={{
        left: align === 'left' ? offsets?.left || left : right - (dropdownWidth || containerWidth),
        right:
          align === 'right' ? offsets?.right || left : right - (dropdownWidth || containerWidth),
        width: dropdownWidth || containerWidth,
        ...(hasBottomSpace || !hasTopSpace
          ? { top: offsets?.top || bottom }
          : { bottom: window.innerHeight - top + DROPDOWN_AND_INPUT_GAP })
      }}
      data-theme={theme}
    >
      {children}
    </div>
  ) : null
}
