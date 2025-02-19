import { DayJSLocale, TranslationLocale } from '../type'
import { getLocalStorageItem } from './storage'

export const getActiveLanguageCode = (): string =>
  (getLocalStorageItem('selectedLanguage') as string) || 'en-US'

export const getTranslationLocale = (): string => {
  const activeLangCode = getActiveLanguageCode()
  return TranslationLocale[activeLangCode as keyof typeof TranslationLocale] || 'en'
}

export const getDayJSLocale = (): string => {
  // Todo: need to check if it is works correctly when change language
  const activeLangCode = getActiveLanguageCode()
  return DayJSLocale[TranslationLocale[activeLangCode as keyof typeof TranslationLocale]] || 'en'
}
