export const getLocalStorageItem = (key: string): unknown => {
  const storedValue = localStorage.getItem(key)
  if (!storedValue) {
    return storedValue
  }
  try {
    return JSON.parse(storedValue)
  } catch (e) {
    return storedValue
  }
}
export const setLocalStorageItem = (key: string, value: unknown): void => {
  if (typeof value === 'string') {
    localStorage.setItem(key, value)
    return
  }
  localStorage.setItem(key, JSON.stringify(value))
}
