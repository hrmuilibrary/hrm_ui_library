import React, { forwardRef, ReactElement, useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { Input } from '../../Input'
import { DateFormat, IRangeDatePickerProps, TRangePickerValues } from '../types'
import { useImportFilesDynamically } from '../hooks'
import { isSameDay } from '../../../utils/helpers'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'
import { Modal } from '../../Modal'
import { CustomHeader } from '../CustomHeader/CustomHeader'
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
      dataIdPrefix,
      modalOptions,
      ...rest
    } = props
    useImportFilesDynamically(dayjsLocale)
    const startYear = minDate ? minDate.getFullYear() : 1900
    const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5

    const dateInitialValue =
      value !== undefined && Array.isArray(value) ? value : (currentDates as TRangePickerValues)

    const [rangeArray, setRangeDate] = useState<TRangePickerValues>(dateInitialValue)
    const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false)
    const [isApplied, setIsApplied] = useState<boolean>(false)

    const onChange = (date: TRangePickerValues): void => {
      if (date && Array.isArray(date)) {
        setRangeDate(date)
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
      if (isCalendarOpen && !isApplied) {
        return
      }
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

    const onApply = () => {
      if (changeHandler) {
        changeHandler(rangeArray)
      }
      if (setFieldValue && name) {
        setFieldValue(name, rangeArray)
      }
      setIsApplied(true)
      closeDatepicker()
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
          title={modalOptions?.title}
          onClose={closeDatepicker}
          buttonProps={{
            confirm: {
              buttonText: modalOptions?.btnConfirmText,
              onClick: onApply
            },
            cancel: {
              buttonText: modalOptions?.btnCancelText,
              onClick: closeDatepicker
            }
          }}
          closeIcon={true}
        >
          <div className="flexbox justify-content--between mb-16 gap-16">
            <Input readOnly value={formatDate(startDate, format)} />
            <Input readOnly value={formatDate(endDate, format)} />
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
                locale={locale}
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
