export const formatHour = (hour: number): string => {
  return hour < 10 ? `0${hour}` : `${hour}`
}
export const formatMinute = (minute: number): string => {
  return minute < 10 ? `0${minute}` : `${minute}`
}
