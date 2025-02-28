export const isDeepEqual = <T extends Record<string, unknown>>(obj1: T, obj2: T): boolean => {
  if (obj1 === obj2) return true;
  if (!obj1 || !obj2 || typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length || !keys1.every((key) => keys2.includes(key))) {
    return false;
  }

  return keys1.every((key) => isDeepEqual(obj1[key] as T, obj2[key] as T));
};


