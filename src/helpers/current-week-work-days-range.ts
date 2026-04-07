export const getCurrentWeekWorkdaysRange = (): [Date, Date] => {
  const today = new Date()
  const start = new Date(today)
  const end = new Date(today)

  const day = today.getDay()
  const diffToMonday = day === 0 ? -6 : 1 - day

  start.setDate(today.getDate() + diffToMonday)

  return [start, end]
}
