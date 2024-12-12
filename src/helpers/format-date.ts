import dayjs from 'dayjs'

export const formatDate = (value: string | Date | null | undefined, format: string): string => {
  if (!value) {
    return ''
  }
  return dayjs(value).format(format)
}
