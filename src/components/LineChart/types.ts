import { ReactNode } from 'react'

export type TLineChartColor = 'blue' | 'purple' | 'yellow' | 'pink' | 'green' | 'grey' | 'red'

export type TLineChartDataItem = {
  quantity: number
  dataCurrency?: string
  label: string
  color: TLineChartColor
  isHidden?: boolean
}

export interface TLineChartDataItemWithPercentage extends TLineChartDataItem {
  percentage: number
}

export type TLineChartProps = {
  data: Array<TLineChartDataItem>
}
