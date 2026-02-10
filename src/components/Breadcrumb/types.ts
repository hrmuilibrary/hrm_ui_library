import { ICommon } from '../../type'

export type TBreadCrumbItem = {
  value: number | string
  label: string | React.ReactElement
  onClick: () => void
}
export interface TBreadCrumbProps extends IFormCompProps, ICommon {
  breadCrumbItems: TBreadCrumbItem[]
  className?: string
  selectedValue: number | string
  onSelect: (value: string | number) => void
}
