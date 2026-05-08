import { TLineChartProps, TLineChartDataItemWithPercentage } from './types'

export const generateLinePath = (
  data: TLineChartProps['data']
): TLineChartDataItemWithPercentage[] => {
  if (!data || data.length === 0) return []

  const points = data.reduce((acc, { quantity }) => acc + quantity, 0)

  return data.map((item) => {
    return { ...item, percentage: (item.quantity / points) * 100 }
  })
}

export const formatWithDots = (num: number) => {
  return new Intl.NumberFormat('en-US', {
    useGrouping: true
  })
    .format(num)
    .replace(/,/g, '.')
}
