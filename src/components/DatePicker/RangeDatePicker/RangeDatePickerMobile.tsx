import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from '../types'
import { useImportFilesDynamically } from '../hooks'
import { isSameDay } from '../../../utils/helpers'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'
import { Modal } from '../../Modal'
import { CustomHeader } from '../CustomHeader/CustomHeader'
import { MONTHS } from '../../../consts'
import { formatDate } from '../../../helpers'

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
      }
    }

    useEffect(() => {
      setRangeDate(dateInitialValue)
    }, [dateInitialValue])

    if (!Array.isArray(rangeArray)) {
      return null
    }

    const checkRange = () => {
      const [startDate, endDate] = rangeArray
      if (!startDate || !endDate) {
        onChange([null, null])
      }
    }

    const renderCurrentSelectedDate = (rangeArray: (Date | undefined)[]) => {
      const [startDate, endDate] = rangeArray
      const startDateFormatted = formatDate(startDate, format)
      const endDateFormatted = formatDate(endDate, format)

      if (isSameDay(startDate, endDate) || !endDate) {
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

    const [startDate, endDate] = rangeArray

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
          buttonProps={{
            confirm: { buttonText: 'Apply' }
          }}
          closeIcon={true}
        >
          <div className="flexbox justify-content--between mb-16 gap-16">
            <Input readOnly value={formatDate(startDate, 'DD.MM.YYYY')} />
            <Input readOnly value={formatDate(endDate, 'DD.MM.YYYY')} />
          </div>
          <DatePicker
            {...rest}
            inline
            locale={locale}
            minDate={minDate}
            maxDate={maxDate}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            disabled={disabled}
            onChange={onChange}
            onClickOutside={checkRange}
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
