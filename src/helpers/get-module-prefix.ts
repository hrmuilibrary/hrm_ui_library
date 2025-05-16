export const getModulePrefix = (): string => {
  const prefix = window.location.pathname.split('/')[1] || 'cr'
  return `/${prefix}`
}
