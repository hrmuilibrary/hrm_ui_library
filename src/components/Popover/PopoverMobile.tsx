import React, { ReactElement } from 'react'
import { TPopoverMobileProps } from './types'
import { Modal } from '../Modal'
import { Link } from '../Link'
import { Text } from '../Text'

export const PopoverMobile = (props: TPopoverMobileProps): ReactElement | null => {
  const { dataId, text, linkAddons, mobileTitle, hideMessage, clicked = false, children } = props

  return (
    <>
      <Modal closeIcon title={mobileTitle} onClose={hideMessage} isOpen={clicked}>
        {clicked && (
          <>
            {linkAddons ? (
              <Link
                dataId={linkAddons.dataId}
                url={linkAddons.url}
                beforeLink={linkAddons.beforeLink}
                afterLink={linkAddons.afterLink}
                target={linkAddons.target}
                className={'popover__link'}
              >
                {text}
              </Link>
            ) : (
              <Text
                dataId={dataId ? `${dataId}-popover-text` : ''}
                type="primary"
                weight="regular"
                lineHeight="medium"
                size="small"
              >
                {text}
              </Text>
            )}
          </>
        )}
      </Modal>
      {children}
    </>
  )
}
