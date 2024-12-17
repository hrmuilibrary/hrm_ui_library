import dayjs from 'dayjs'
import { getDayJSLocale } from './locale'

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
