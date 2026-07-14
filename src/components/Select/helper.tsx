export const getOptionDataId = (
  dataId: string | undefined,
  value: TItemValue,
  index: number
): string => {
  if (!dataId) {
    return ''
  }
  const key = typeof value === 'string' || typeof value === 'number' ? value : index
  return `${dataId}-option-${key}`
}
