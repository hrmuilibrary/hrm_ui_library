import React, { ReactElement } from 'react'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'
import classnames from 'classnames'
import { Text } from '../Text'
import { Button } from '../Button'
import { TAlertProps } from './types'
import IconDismissFilled from '../SVGIcons/IconDismissFilled'
import { IconDynamicComponent } from '../../helperComponents/IconDynamicComponent'

export const Alert = (props: TAlertProps): ReactElement => {
  const {
    buttonProps,
    type = 'information',
    position = 'inline',
    text,
    subtext,
    closeIcon,
    onClose,
    className = '',
    dataTestId = ''
  } = props

  return (
    <div
      className={classnames('alert', `alert--${type} alert--${position}`, className)}
      data-test-id={dataTestId}
    >
      <div className="alert__content">
        <IconDynamicComponent
          Component={ICONS_MAPPING[type]}
          size="small"
          type={TYPE_MAPPING[type]}
          dataTestId={dataTestId ? `${dataTestId}-icon` : ''}
        />
        <div className="alert__text pl-8">
          <div>
            <Text
              type="primary"
              size="standard"
              weight="regular"
              lineHeight="large"
              dataTestId={dataTestId ? `${dataTestId}-text` : ''}
            >
              {text}
            </Text>
            {subtext ? (
              <Text
                className={'mt-4'}
                type="secondary"
                size="small"
                weight="regular"
                lineHeight="large"
                dataTestId={dataTestId ? `${dataTestId}-subtext` : ''}
              >
                {subtext}
              </Text>
            ) : null}
          </div>
          {buttonProps ? (
            <div className="alert__actions">
              {buttonProps.confirm && (
                <Button
                  size="medium"
                  type="secondary"
                  dataTestId={dataTestId ? `${dataTestId}-confirm` : ''}
                  {...buttonProps.confirm}
                />
              )}
              {buttonProps.cancel && (
                <Button
                  size="medium"
                  type="tertiary"
                  className="ml-12"
                  dataTestId={dataTestId ? `${dataTestId}-cancel` : ''}
                  {...buttonProps.cancel}
                />
              )}
            </div>
          ) : null}
        </div>
        {closeIcon ? (
          <IconDismissFilled
            type={TYPE_MAPPING[type]}
            size="xsmall"
            className="ml-12 pointer"
            onClick={onClose}
            dataTestId={dataTestId ? `${dataTestId}-close` : ''}
          />
        ) : null}
      </div>
    </div>
  )
}
