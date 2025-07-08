export const formatHourOrMinute = (value: number): string => {
  return `${value}`.padStart(2, '0')
}

export const initialNumbersValue = (
  heightValue = 54,
  numbersLength = 24,
  value: number | null = null
): {
  number: string
  translatedValue: string
  selected: boolean
  hidden?: boolean
}[] => {
  const arrayOfSelectedValue = [
    {
      number: '00',
      translatedValue: (heightValue * 2).toString(),
      selected: false
    },
    {
      number: '01',
      translatedValue: heightValue.toString(),
      selected: false
    }
  ]
  let count = 0
  for (let index = 0; index < 1; index++) {
    for (let j = 0; j < numbersLength; j++) {
      if ((index === 0 && j < 2) || (numbersLength === 13 && j === 0)) {
        continue
      }
      if (index === 0 && j === value) {
        if (j.toString().length === 1) {
          arrayOfSelectedValue.push({
            number: `0${j.toString()}`,
            translatedValue: `-${count}`,
            selected: true
          })
        } else {
          arrayOfSelectedValue.push({
            number: j.toString(),
            translatedValue: `-${count}`,
            selected: true
          })
        }
        count += heightValue
        continue
      }
      if (j.toString().length === 1) {
        arrayOfSelectedValue.push({
          number: `0${j.toString()}`,
          translatedValue: `-${count}`,
          selected: false
        })
      } else {
        arrayOfSelectedValue.push({
          number: j.toString(),
          translatedValue: `-${count}`,
          selected: false
        })
      }

      count += heightValue
    }
  }

  return arrayOfSelectedValue
}

export const returnSelectedValue = (
  heightValue = 54,
  numbersLength = 24
): {
  number: string
  translatedValue: string
  selected: boolean
  arrayNumber?: number
}[] => {
  const arrayOfSelectedValue: {
    number: string
    translatedValue: string
    selected: boolean
    arrayNumber?: number
  }[] = [
    {
      number: '00',
      translatedValue: (heightValue * 2).toString(),
      arrayNumber: 0,
      selected: false
    },
    {
      number: '01',
      translatedValue: heightValue.toString(),
      arrayNumber: 1,
      selected: false
    }
  ]
  let count = 0
  for (let index = 0; index < 2; index++) {
    for (let j = 0; j < numbersLength; j++) {
      if ((index === 0 && j < 2) || (numbersLength === 13 && j === 0)) {
        continue
      }
      if (j.toString().length === 1) {
        arrayOfSelectedValue.push({
          number: `0${j.toString()}`,
          translatedValue: `-${count}`,
          selected: false
        })
      } else {
        arrayOfSelectedValue.push({
          number: j.toString(),
          translatedValue: `-${count}`,
          selected: false
        })
      }

      count += heightValue
    }
  }
  return arrayOfSelectedValue
}
