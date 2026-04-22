function containsSearchString(source: string, tokens: string[]): boolean {
  return tokens.reduce(
    ({ contains, sourceStr }, w) => {
      const remainingStr = sourceStr.replace(w, '')

      return {
        contains: contains && remainingStr.length < sourceStr.length,
        sourceStr: remainingStr
      }
    },
    { contains: true, sourceStr: source }
  ).contains
}

export const filterSearchData = (data: TSelectOptions, searchString: string): TSelectOptions => {
  if (!searchString) {
    return data
  }
  const tokens = searchString
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .sort((a, b) => b.length - a.length)
  return data.filter(({ label }) => containsSearchString(label.toString().toLowerCase(), tokens))
}
