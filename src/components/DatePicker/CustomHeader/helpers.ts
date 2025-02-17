import { MONTHS } from '../localization'

export const generateMonthOptions = (locale = 'hy'): TSelectOptions => {
  let defaultLocale = locale
  if (!MONTHS[locale]) {
    defaultLocale = 'hy'
  }
  return MONTHS[defaultLocale].map((month, index) => ({
    label: month,
    value: index
  }))
}
