import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import { getDayJSLocale } from './locale'

dayjs.extend(utc)

export const formatDate = (
  value: string | Date | null | undefined,
  format: string,
  defaultValue = ''
): string => {
  const isValid = dayjs(value).isValid()
  if (!isValid) {
    return defaultValue
  }

  return dayjs(value).locale(getDayJSLocale()).format(format)
}

export const formatDateUTC = (
  value: string | Date | null | undefined,
  format: string,
  defaultValue = ''
): string => {
  const isValid = dayjs(value).isValid()
  if (!isValid) {
    return defaultValue
  }

  return dayjs.utc(value).locale(getDayJSLocale()).format(format)
}
