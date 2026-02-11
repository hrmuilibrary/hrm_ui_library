import React, { useState } from 'react'
import { Button } from '../../Button'
import { Menu } from '../../Menu'
import { Text } from '../../Text'
import { TMenuItem } from '../../Menu/types'
import IconMore from '../../SVGIcons/IconMore'
import { ICommon } from '../../../type'

type TProps = ICommon & {
  selectActions: TMenuItem[]
  innerLabel?: string
}
export const Actions = (props: TProps): React.ReactElement | null => {
  const { selectActions, innerLabel, theme = 'light' } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [buttonRef, setButtonRef] = useState<HTMLDivElement | null>(null)

  const open = () => setIsMenuOpen(true)
  const close = () => setIsMenuOpen(false)

  return selectActions.length ? (
    <div className="action-bar" data-theme={theme}>
      {innerLabel ? (
        <Text size="xsmall" type="secondary" className="action-bar__label" theme={theme}>
          {innerLabel}
        </Text>
      ) : null}
      <div ref={setButtonRef} className="action-bar__right">
        <Button
          type="tertiary"
          onClick={open}
          iconProps={{ Component: IconMore }}
          size="small"
          theme={theme}
        />
        {buttonRef ? (
          <Menu
            menuItems={selectActions}
            parentRef={buttonRef}
            onClose={close}
            position="bottom-left"
            isOpen={isMenuOpen}
            theme={theme}
          />
        ) : null}
      </div>
    </div>
  ) : null
}
