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

export const getCurrentWeekWorkdaysRange = (): [Date, Date] => {
  const today = new Date()
  const start = new Date(today)
  const end = new Date(today)
  const day = today.getDay()
  const diffToMonday = day === 0 ? -6 : 1 - day
  start.setDate(today.getDate() + diffToMonday)
  return [start, end]
}
