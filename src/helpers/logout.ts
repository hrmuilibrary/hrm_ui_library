import { clearStorage } from '../utils/helpers'
import { getModulePrefix } from './get-module-prefix'

export const logout = (path: string = "/auth/logout") => {
  clearStorage()
  const currentUrl = `${window.location.pathname}${window.location.search}`
  const encodedReturnUrl = encodeURIComponent(currentUrl)
  window.location.href = `${getModulePrefix()}${path}?returnUrl=${encodedReturnUrl}`
}
