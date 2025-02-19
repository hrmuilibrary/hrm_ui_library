import React from 'react'
import { Button } from '../../Button'
import { TSelectFooterPropTypes } from '../types'
import { Checkbox } from '../../Checkbox'
import { SELECT_TRANSLATIONS } from '../localization'

export const Footer = (props: TSelectFooterPropTypes): React.ReactElement => {
  const { language, buttonProps, onApply, onCancel, hasChange = true, checkboxInfo } = props
  const [isSelected, setIsSelected] = React.useState(checkboxInfo?.isChecked || false)

  const confirmButtonProps = {
    buttonText: SELECT_TRANSLATIONS[language].confirmButtonText,
    ...(buttonProps?.confirm || {})
  }
  const cancelButtonProps = {
    buttonText: SELECT_TRANSLATIONS[language].cancelButtonText,
    ...(buttonProps?.cancel || {})
  }

  return (
    <div className="select__footer">
      <div>
        {checkboxInfo ? (
          <Checkbox label={checkboxInfo.label} selectedValue={isSelected} onClick={setIsSelected} />
        ) : null}
      </div>
      <div className={'select__footer__right flexbox'}>
        <Button
          {...cancelButtonProps}
          type="tertiary"
          size="medium"
          className="mr-12"
          onClick={onCancel}
        />
        <Button
          disabled={!hasChange && isSelected === !!checkboxInfo?.isChecked}
          {...confirmButtonProps}
          type="primary"
          size="medium"
          onClick={() => onApply(isSelected)}
        />
      </div>
    </div>
  )
}
