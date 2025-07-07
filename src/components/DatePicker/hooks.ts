/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react'
import { registerLocale } from 'react-datepicker'
import { locale } from 'dayjs'
import {hy} from 'date-fns/locale/hy'
import {enGB} from 'date-fns/locale/en-GB'
import {ru} from 'date-fns/locale/ru'
import 'dayjs/locale/hy-am'
import 'dayjs/locale/ru'
import 'dayjs/locale/en'
import { DayJSLocale } from '../../type'

registerLocale('hy', hy)
registerLocale('en', enGB)
registerLocale('ru', ru)

export function useImportFilesDynamically(dayjsLocale: string): void {
  const [_, setIsFilesLoaded] = useState(false)

  useEffect(() => {
    if (dayjsLocale) {
      ;(async () => {
        setIsFilesLoaded(false)
        locale(DayJSLocale[dayjsLocale as keyof typeof DayJSLocale])
        setTimeout(() => {
          setIsFilesLoaded(true)
        }, 0)
      })()
    }
  }, [dayjsLocale])
}
