import React, { ReactElement } from 'react'
import { Input } from '../../Input'
import IconCalendarRight from '../../SVGIcons/IconCalendarRight'
import dayjs from 'dayjs'
import { ISimpleDatePickerProps } from '../types'
import { useImportFilesDynamically } from '../hooks'
import { Modal } from '../../Modal'
import { CustomHeader } from '../CustomHeader/CustomHeader'
import DatePicker from 'react-datepicker'
import { Label } from '../../../helperComponents'

export const SimpleDatePickerMobile = (props: ISimpleDatePickerProps): ReactElement => {
  const {
    size,
    dataId,
    helperText,
    label,
    placeholderText,
    format = 'M/D/YYYY',
    value,
    currentDate,
    minDate,
    maxDate,
    locale = 'hy',
    dataIdPrefix,
    modalOptions,
    name,
    changeHandler,
    setFieldValue,
    required,
    hasError,
    ...rest
  } = props

  const startYear = minDate ? minDate.getFullYear() : 1900
  const endYear = maxDate ? maxDate.getFullYear() : new Date().getFullYear() + 5

  const [isCalendarOpen, setIsCalendarOpen] = React.useState(false)
  useImportFilesDynamically(locale)

  const selectedDate =
    value !== undefined && Object.prototype.toString.call(value) === '[object Date]'
      ? value
      : currentDate

  const openDatepicker = () => {
    setIsCalendarOpen(true)
  }

  const closeDatepicker = () => {
    setIsCalendarOpen(false)
  }

  const onChange = (date: Date) => {
    if (setFieldValue && name) {
      setFieldValue(name, date)
    }
    if (changeHandler) {
      changeHandler(date)
    }
    closeDatepicker()
  }
  return (
    <>
      <Label text={label} required={required} invalid={hasError} />
      <Input
        size={size}
        onClick={openDatepicker}
        dataId={dataId}
        readOnly={true}
        helperText={helperText}
        datePlaceHolderText={label ? '' : placeholderText}
        rightIconProps={{ Component: IconCalendarRight, onClick: openDatepicker }}
        currentValue={selectedDate ? dayjs(selectedDate.toString()).format(format) : ''}
      />
      <Modal
        isOpen={isCalendarOpen}
        title={modalOptions?.title}
        onClose={closeDatepicker}
        withFooter={false}
        closeIcon={true}
      >
        <DatePicker
          minDate={minDate}
          maxDate={maxDate}
          selected={dayjs(selectedDate).isValid() ? selectedDate : null}
          locale={locale}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          // ref={calendarRef}
          inline={true}
          {...rest}
          onChange={onChange}
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
