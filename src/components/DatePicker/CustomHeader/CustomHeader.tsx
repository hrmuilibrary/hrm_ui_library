import React, { ReactElement } from 'react'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'
import { ButtonSelect } from '../../Select'
import { getYearOptions, noop } from '../../../utils/helpers'
import IconChevronLeft from '../../SVGIcons/IconChevronLeft'
import IconChevronRight from '../../SVGIcons/IconChevronRight'
import { generateMonthOptions } from './helpers'

interface TProps extends ReactDatePickerCustomHeaderProps {
  startYear: number
  endYear: number
  dataPrefix?: string
  isMobile?: boolean
  locale?: string
}

export const CustomHeader = (props: TProps): ReactElement => {
  const {
    date,
    dataPrefix,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    startYear,
    endYear,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
    locale,
    isMobile = false
  } = props

  const months = generateMonthOptions(locale)

  const getMonthLabel = (month: number) => {
    const selectMonth = months.find((item) => item.value === month)
    return selectMonth?.label.toString()
  }

  const month = date?.getMonth()
  const year = date?.getFullYear()

  return (
    <div className="flexbox custom_header_container">
      <IconChevronLeft
        size="small"
        className="cursor-pointer"
        dataId={dataPrefix ? `${dataPrefix}-prev-month-button` : ''}
        onClick={prevMonthButtonDisabled ? noop : decreaseMonth}
        type={prevMonthButtonDisabled ? 'disabled' : 'primary'}
      />
      <div className="selects_container">
        <ButtonSelect
          size="small"
          type="tertiary"
          className="date_picker_select"
          offsets={isMobile ? {} : { top: 42, left: 48 }}
          placeHolder={getMonthLabel(month)}
          dataId={dataPrefix ? `${dataPrefix}-month-select` : ''}
          options={months}
          selectedItem={month}
          setSelectedItem={(m) => changeMonth(m as number)}
          dropdownWidth={150}
          isRequiredField
        />
        <ButtonSelect
          type="tertiary"
          className="date_picker_select"
          offsets={isMobile ? {} : { top: 42, left: 138 }}
          placeHolder={year.toString()}
          dataId={dataPrefix ? `${dataPrefix}-year-select` : ''}
          size="small"
          options={getYearOptions(startYear, endYear)}
          selectedItem={year}
          setSelectedItem={(y) => changeYear(y as number)}
          dropdownWidth={100}
          isRequiredField
        />
      </div>
      <IconChevronRight
        size="small"
        className="cursor-pointer"
        dataId={dataPrefix ? `${dataPrefix}-next-month-button` : ''}
        onClick={nextMonthButtonDisabled ? noop : increaseMonth}
        type={nextMonthButtonDisabled ? 'disabled' : 'primary'}
      />
    </div>
  )
}
