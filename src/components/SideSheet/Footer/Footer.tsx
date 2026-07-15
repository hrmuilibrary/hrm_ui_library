import React, { ReactElement, useCallback } from 'react'
import { TButtonPropTypes } from '../../Button/types'
import { Button } from '../../Button'
import { TCheckboxInfo } from '../types'
import { Checkbox } from '../../Checkbox'

type TProps = {
  isLoading?: boolean
  footerButtons?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
    extraButton?: TButtonPropTypes
  }
  onClose: (e?: TClickEventType) => void
  onSubmit?: (isSelected: boolean) => void
  checkboxInfo?: TCheckboxInfo
  dataTestId?: string
}
export const Footer = ({
  isLoading,
  footerButtons,
  onClose,
  onSubmit,
  checkboxInfo,
  dataTestId = ''
}: TProps): ReactElement | null => {
  const [isSelected, setIsSelected] = React.useState(checkboxInfo?.isChecked || false)

  const handleSubmit = useCallback(() => {
    onSubmit?.(isSelected)
  }, [onSubmit, isSelected])

  if (!footerButtons) {
    return null
  }

  const { extraButton, confirm, cancel } = footerButtons
  return (
    <div className="side-sheet__footer" data-test-id={dataTestId ? `${dataTestId}-footer` : ''}>
      {checkboxInfo ? (
        <div className="side-sheet__footer_checkbox">
          <Checkbox
            label={checkboxInfo.label}
            selectedValue={isSelected}
            onClick={setIsSelected}
            dataTestId={dataTestId ? `${dataTestId}-checkbox` : ''}
          />
        </div>
      ) : null}

      <div className="side-sheet__footer_buttons">
        {extraButton ? (
          <Button
            size="large"
            type="secondary"
            {...footerButtons.extraButton}
            className="mr-12"
            dataTestId={dataTestId ? `${dataTestId}-extra` : ''}
          />
        ) : null}
        {
          <Button
            type="secondary"
            size="large"
            className="mr-12"
            onClick={onClose}
            {...cancel}
            dataTestId={dataTestId ? `${dataTestId}-cancel` : ''}
          />
        }
        <Button
          type="primary"
          size="large"
          onClick={handleSubmit}
          disabled={isLoading}
          {...confirm}
          dataTestId={dataTestId ? `${dataTestId}-confirm` : ''}
        />
      </div>
    </div>
  )
}
