export const filterOptions = (options: TSelectOptions, searchValue: string): TSelectOptions => {
  if (!searchValue) {
    return options
  }

  return options.filter((dataItem) => {
    return (
      typeof dataItem.label === 'string' &&
      dataItem.label.toLowerCase().includes(searchValue.toLowerCase())
    )
  })
}
