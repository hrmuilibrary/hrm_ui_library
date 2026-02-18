import React, { ReactElement, useId, useState } from 'react'
import classnames from 'classnames'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { useAnimation } from '../../hooks/useAnimation'
import { Button } from '../Button'
import { Text } from '../Text'
import { TModalConfirmationPropTypes } from './types'
import { useEscapeKey } from '../../hooks/useEscapeKey'

export const ModalConfirmation = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  className = '',
  size = 'small',
  buttonProps,
  dataIdPrefix,
  closeOnOutsideClick = true,
  iconProps,
  subtitle
}: TModalConfirmationPropTypes): ReactElement | null => {
  const { animationState, shouldRender } = useAnimation({
    isOpen,
    enterDuration: 400,
    exitDuration: 200
  })

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId())
  useHideBodyScroll(isOpen)
  useEscapeKey(onClose, { enabled: isOpen })

  if (!shouldRender) {
    return null
  }

  return (
    <div
      className={classnames(
        'modal modal--confirmation',
        `modal--${size}`,
        `modal--${animationState}`,
        className
      )}
    >
      <div
        className={classnames(
          'modal__container',
          'text-center',
          `modal__container--${animationState}`
        )}
        ref={setContainerRef}
      >
        <div className={'modal__content'}>
          {iconProps?.Component ? (
            <div className="modal__icon mb-32">
              <iconProps.Component size={'xlarge'} />
            </div>
          ) : null}
          {title ? (
            <Text
              weight="bolder"
              lineHeight="large"
              size="large"
              dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
            >
              {title}
            </Text>
          ) : null}
          {subtitle ? <Text className={'mt-12'}>{subtitle}</Text> : null}

          {buttonProps ? (
            <div className="modal__footer mt-32">
              <Button
                type="secondary"
                className="modal__footer__btn mr-16"
                onClick={onClose}
                dataId={dataIdPrefix ? `${dataIdPrefix}-modal-cancel-button` : ''}
                {...(buttonProps.cancel || {})}
              />
              <Button
                type="danger"
                className={'modal__footer__btn'}
                onClick={onSubmit}
                dataId={dataIdPrefix ? `${dataIdPrefix}-modal-confirm-button` : ''}
                {...buttonProps.confirm}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
