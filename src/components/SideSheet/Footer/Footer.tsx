import React, { ReactElement, useCallback } from 'react'
import { TButtonPropTypes } from '../../Button/types'
import { Button } from '../../Button'
import { TCheckboxInfo } from '../types'
import { Checkbox } from '../../Checkbox'
import { ICommon } from '../../../type'

type TProps = ICommon & {
  isLoading?: boolean
  footerButtons?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
    extraButton?: TButtonPropTypes
  }
  onClose: (e?: TClickEventType) => void
  onSubmit?: (isSelected: boolean) => void
  checkboxInfo?: TCheckboxInfo
}
export const Footer = ({
  isLoading,
  footerButtons,
  onClose,
  onSubmit,
  checkboxInfo,
  theme = 'light'
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
    <div className="side-sheet__footer" data-theme={theme}>
      {checkboxInfo ? (
        <div className="side-sheet__footer_checkbox">
          <Checkbox
            theme={theme}
            label={checkboxInfo.label}
            selectedValue={isSelected}
            onClick={setIsSelected}
          />
        </div>
      ) : null}

      <div className="side-sheet__footer_buttons">
        {extraButton ? (
          <Button
            theme={theme}
            size="large"
            type="secondary"
            {...footerButtons.extraButton}
            className="mr-12"
          />
        ) : null}
        {
          <Button
            theme={theme}
            type="secondary"
            size="large"
            className="mr-12"
            onClick={onClose}
            {...cancel}
          />
        }
        <Button
          theme={theme}
          type="primary"
          size="large"
          onClick={handleSubmit}
          disabled={isLoading}
          {...confirm}
        />
      </div>
    </div>
  )
}
