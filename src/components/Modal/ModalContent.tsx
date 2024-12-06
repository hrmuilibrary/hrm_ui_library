import React, { ReactElement, ReactNode } from 'react'

import { ButtonIcon } from '../ButtonIcon'
import IconDismiss from '../SVGIcons/IconDismiss'
import { Positions } from '../Tooltip/types'

import { Button } from '../Button'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { TButtonPropTypes } from '../Button/types'
import { noop } from '../../utils/helpers'

type TProps = {
  title?: string
  subtitle?: string
  dataIdPrefix?: string
  closeIcon?: boolean
  onClose: () => void
  children?: ReactNode
  className?: string
  withFooter?: boolean
  confirmBtnTooltipText?: string
  buttonProps?: {
    cancel?: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  onSubmit?: () => void
}
export const ModalContent = ({
  title,
  subtitle,
  dataIdPrefix,
  closeIcon,
  onClose,
  children,
  withFooter = true,
  confirmBtnTooltipText,
  buttonProps,
  onSubmit
}: TProps): ReactElement => {
  return (
    <>
      {title ? (
        <div className="modal__header">
          <div>
            <Text
              lineHeight="large"
              size="large"
              weight={'bolder'}
              dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
            >
              {title}
            </Text>
            {subtitle ? (
              <Text className={'mt-12'} dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}>
                {subtitle}
              </Text>
            ) : null}
          </div>
          {closeIcon ? (
            <ButtonIcon
              className={'modal__close ml-16'}
              dataId={dataIdPrefix ? `${dataIdPrefix}-modal-close-button` : ''}
              iconProps={{ Component: IconDismiss }}
              onClick={onClose}
            />
          ) : null}
        </div>
      ) : null}

      <div className="modal__content scrollbar scrollbar--vertical">{children}</div>
      {withFooter && buttonProps ? (
        <div className="modal__footer">
          <Button
            type="tertiary"
            className="modal__footer__btn mr-16"
            onClick={onClose}
            dataId={dataIdPrefix ? `${dataIdPrefix}-modal-cancel-button` : ''}
            {...(buttonProps.cancel || {})}
          />
          {confirmBtnTooltipText ? (
            <Tooltip
              text={confirmBtnTooltipText as string}
              id={'confirm-btn-tooltip'}
              position={Positions.TOP_CENTER}
            />
          ) : null}
          <Button
            id={'confirm-btn-tooltip'}
            className={'modal__footer__btn'}
            type="primary"
            onClick={onSubmit ? onSubmit : noop}
            dataId={dataIdPrefix ? `${dataIdPrefix}-modal-confirm-button` : ''}
            {...buttonProps.confirm}
          />
        </div>
      ) : null}
    </>
  )
}
