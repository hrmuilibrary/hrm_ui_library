import { CSSProperties, ReactNode } from 'react'

export type TSkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded'
export type TSkeletonAnimation = 'pulse' | 'wave' | 'none'

export interface TSkeletonPropTypes {
  /** Visual shape of the placeholder. */
  variant?: TSkeletonVariant
  /** Animation style. Pass `'none'` to disable. */
  animation?: TSkeletonAnimation
  /** Width as a number (px) or any valid CSS length / percentage. */
  width?: number | string
  /** Height as a number (px) or any valid CSS length / percentage. */
  height?: number | string
  /** Render N stacked skeletons. Useful for placeholder paragraphs. */
  count?: number
  /**
   * If provided, the skeleton wraps the children and infers its size from them
   * while the children remain invisible (used as a layout guide).
   */
  children?: ReactNode
  /** Inline style overrides applied to every rendered skeleton element. */
  style?: CSSProperties
  className?: string
  dataId?: string
}
