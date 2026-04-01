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

function containsSearchString(source: string | number, searchString: string): boolean {
  const sourceWords = String(source).toLowerCase()
  const targetWords = searchString.toLowerCase().split(/\s+/)

  return targetWords.every((word) => sourceWords.includes(word))
}

export const filterSearchData = (data: TSelectOptions, searchString: string): TSelectOptions => {
  return data.filter(({ label }) => containsSearchString(label, searchString))
}
