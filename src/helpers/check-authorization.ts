import { notify } from '../components/Snackbar'
import { STATUS_CODE, MESSAGE_TYPE } from '../type'
import { getTranslationLocale } from './locale'
import { getModulePrefix } from './get-module-prefix'

const ROUTE_CONFIGS = {
  authorization: {
    login: '/auth/login',
    logout: '/auth/logout',
    session: '/auth/session'
  }
}

const LOCALIZATION: { [key: string]: { [key: string]: string } } = {
  en: {
    permissionDenied: 'Permission denied',
    badRequest: 'An unexpected error occurred. Please contact support for assistance.'
  },
  ru: {
    permissionDenied: 'Доступ запрещен',
    badRequest: 'Произошла непредвиденная ошибка. Обратитесь в службу поддержки за помощью.'
  },
  hy: {
    permissionDenied: 'Permission denied',
    badRequest: 'An unexpected error occurred. Please contact support for assistance.'
  }
}

export const checkAuthorization = (statusCode: STATUS_CODE): void => {
  const language = getTranslationLocale()
  if (statusCode === STATUS_CODE.UNAUTHORIZED) {
    const currentUrl = `${window.location.pathname}${window.location.search}`
    const encodedReturnUrl = encodeURIComponent(currentUrl)

    const appPrefix = getModulePrefix()

    fetch(`${window.location.origin}${appPrefix}${ROUTE_CONFIGS.authorization.session}`)
      .then((res) => res.json())
      .then((res) => {
        if (res?.isAuthenticated) {
          window.location.href = `${window.location.origin}${appPrefix}${ROUTE_CONFIGS.authorization.logout}`
        } else {
          window.location.href = `${window.location.origin}${appPrefix}${ROUTE_CONFIGS.authorization.login}?returnUrl=${encodedReturnUrl}`
        }
      })
      .catch(() => {
        window.location.href = `${window.location.origin}${appPrefix}${ROUTE_CONFIGS.authorization.login}?returnUrl=${encodedReturnUrl}`
      })
  }
  if (statusCode === STATUS_CODE.PERMISSION_DENIED) {
    notify({
      text: LOCALIZATION[language].permissionDenied,
      type: MESSAGE_TYPE.error,
      toastId: new Date().getTime()
    })
  }
  if (statusCode === STATUS_CODE.BAD_REQUEST || statusCode === STATUS_CODE.SERVER_ISSUE) {
    notify({
      text: LOCALIZATION[language].badRequest,
      type: MESSAGE_TYPE.error,
      toastId: new Date().getTime()
    })
  }
}
