import { TSelectTranslations } from './types'

export const SELECT_TRANSLATIONS: { [key: string]: TSelectTranslations } = {
  en: {
    emptyListMainMessage: "Sorry, we couldn't find any results",
    clearAllLabel: 'Clear all',
    selectAllLabel: 'Select all',
    overflowText: '%s selected',
    innerLabel: ' ',
    confirmButtonText: 'Apply',
    cancelButtonText: 'Cancel'
  },
  ru: {
    emptyListMainMessage: 'К сожалению, результаты не найдены',
    clearAllLabel: 'Очистить все',
    selectAllLabel: 'Выбрать все',
    overflowText: '%s Выбрано',
    innerLabel: ' ',
    confirmButtonText: 'Применить',
    cancelButtonText: 'Отменить'
  },
  hy: {
    emptyListMainMessage: 'Որևէ արդյունք չի գտնվել',
    clearAllLabel: 'Մաքրել բոլորը',
    selectAllLabel: 'Ընտրել բոլորը',
    overflowText: '%s Ընտրված',
    innerLabel: ' ',
    confirmButtonText: 'Կիրառել',
    cancelButtonText: 'Չեղարկել'
  }
}
