import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import dayjs from 'dayjs'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from '../types'
import { useImportFilesDynamically } from '../hooks'
import { isSameDay } from '../../../utils/helpers'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'
import { Modal } from '../../Modal'
import { CustomHeader } from '../CustomHeader/CustomHeader'
import { MONTHS } from '../../../consts'

export const RangeDatePickerMobile = forwardRef(
  (props: IRangeDatePickerProps): ReactElement | null => {
    const {
      value,
      currentDates = [],
      setFieldValue,
      name,
      changeHandler,
      dataId,
      format = DateFormat.LongDate,
      maxDate,
      minDate,
      locale = 'hy',
      dayjsLocale = 'hy-am',
      disabled,
      placeholderText,
      mobileTitle,
      months = MONTHS,
      dataIdPrefix,
      ...rest
    } = props
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
    const startYear = minDate ? minDate.getFullYear() : 1900
    const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5
    useImportFilesDynamically(dayjsLocale)

    const dateInitialValue = value !== undefined && Array.isArray(value) ? value : currentDates
    const [rangeArray, setRangeDate] = useState(dateInitialValue)

    const onChange = (date: TRangePickerValues): void => {
      if (date && Array.isArray(date)) {
        setRangeDate(date)
        if (changeHandler) {
          changeHandler(date)
        }
        if (setFieldValue && name) {
          setFieldValue(name, date)
        }
        if (date.every((d) => !!d)) {
          closeDatepicker()
        }
      }
    }

    useEffect(() => {
      setRangeDate(dateInitialValue)
    }, [dateInitialValue])

    if (!Array.isArray(rangeArray)) {
      return null
    }

    const formatDate = (date: Date | undefined): string => {
      return date ? dayjs(date).format(format) : ''
    }

    const checkRange = () => {
      const [startDate, endDate] = rangeArray
      if (!startDate || !endDate) {
        onChange([null, null])
      }
    }

    const renderCurrentSelectedDate = (rangeArray: (Date | undefined)[]) => {
      const [startDate, endDate] = rangeArray
      const startDateFormatted = formatDate(startDate)
      const endDateFormatted = formatDate(endDate)

      if (isSameDay(startDate, endDate) || !rangeArray[1]) {
        return startDateFormatted
      }

      return `${startDateFormatted} - ${endDateFormatted}`
    }

    const openDatepicker = () => {
      setIsCalendarOpen(true)
    }

    const closeDatepicker = () => {
      setIsCalendarOpen(false)
    }

    return (
      <>
        <Input
          readOnly
          onClick={openDatepicker}
          dataId={dataId}
          disabled={disabled}
          placeholder={placeholderText}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          currentValue={renderCurrentSelectedDate(rangeArray)}
          rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
        />
        <Modal
          isOpen={isCalendarOpen}
          title={mobileTitle}
          onClose={closeDatepicker}
          withFooter={false}
          closeIcon={true}
        >
          <DatePicker
            {...rest}
            inline
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            startDate={rangeArray[0] as Date}
            endDate={rangeArray[1] as Date}
            selectsRange
            disabled={disabled}
            onChange={onChange}
            onClickOutside={checkRange}
            monthsShown={1}
            renderCustomHeader={(props) => (
              <CustomHeader
                {...props}
                months={months}
                startYear={startYear}
                endYear={endYear}
                dataPrefix={dataIdPrefix}
                isMobile
              />
            )}
          />
        </Modal>
      </>
    )
  }
)

RangeDatePickerMobile.displayName = 'RangeDatePickerMobile'
