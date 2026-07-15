export const getOptionDataTestId = (
  dataTestId: string | undefined,
  value: TItemValue,
  index: number
): string => {
  if (!dataTestId) {
    return ''
  }
  const key = typeof value === 'string' || typeof value === 'number' ? value : index
  return `${dataTestId}-option-${key}`
}
