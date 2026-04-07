function containsSearchString(source: string | number, searchString: string): boolean {
  const sourceWords = String(source).toLowerCase()
  const targetWords = searchString.toLowerCase().split(/\s+/)

  return targetWords.every((word) => sourceWords.includes(word))
}

export const filterSearchData = (data: TSelectOptions, searchString: string): TSelectOptions => {
  if (!searchString) {
    return data
  }
  return data.filter(({ label }) => containsSearchString(label, searchString))
}
