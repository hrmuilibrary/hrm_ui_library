import React, { ReactElement, ReactNode } from 'react'
import classNames from 'classnames'

import IconDismiss from '../SVGIcons/IconDismiss'
import { Positions } from '../Tooltip/types'

import { Button } from '../Button'
import { Text } from '../Text'
import { Tooltip } from '../Tooltip'
import { TButtonPropTypes } from '../Button/types'
import { noop } from '../../utils/helpers'
import { TModalHeaderIconColor, TTitleSize } from './types'

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
  titleSize?: TTitleSize
  headerIcon?: React.ReactNode
  headerIconColor?: TModalHeaderIconColor
  headerStatus?: React.ReactNode
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
  onSubmit,
  headerIcon,
  headerIconColor = 'brand',
  headerStatus,
  titleSize = 'large'
}: TProps): ReactElement => {
  return (
    <>
      {title ? (
        <div className="modal__header">
          <div className="modal__header-content">
            {headerIcon ? (
              <div
                className={classNames(
                  'modal__header-icon',
                  `modal__header-icon--${headerIconColor}`
                )}
              >
                {headerIcon}
              </div>
            ) : null}

            <div className="modal__header-text">
              <div className="modal__header-title-row">
                <Text
                  className="modal__header-title"
                  lineHeight="large"
                  size={titleSize}
                  weight={'bolder'}
                  dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
                >
                  {title}
                </Text>
                {headerStatus ? <div className="modal__header-status">{headerStatus}</div> : null}
              </div>
              {subtitle ? (
                <Text
                  className={'mt-12'}
                  dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
                >
                  {subtitle}
                </Text>
              ) : null}
            </div>
          </div>
          {closeIcon ? (
            <Button
              className={'modal__close ml-16'}
              dataId={dataIdPrefix ? `${dataIdPrefix}-modal-close-button` : ''}
              iconProps={{ Component: IconDismiss }}
              onClick={onClose}
              type="tertiary"
              size={titleSize === 'medium' ? 'small' : 'large'}
            />
          ) : null}
        </div>
      ) : null}

      <div className="modal__content scrollbar scrollbar--vertical">{children}</div>
      {withFooter && buttonProps ? (
        <div className="modal__footer">
          {buttonProps.cancel && (
            <Button
              type="tertiary"
              className="modal__footer__btn mr-16"
              onClick={onClose}
              dataId={dataIdPrefix ? `${dataIdPrefix}-modal-cancel-button` : ''}
              {...(buttonProps.cancel || {})}
            />
          )}
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
