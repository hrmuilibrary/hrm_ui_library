import React, { useMemo } from 'react'
import { generateDataTestId } from '../../../utils/helpers'
import { Text } from '../../Text'
import { TCollapseItemTitleV2 } from '../types'
import classNames from 'classnames'
import IconChevronDown from '../../SVGIcons/IconChevronDown'
import IconChevronUp from '../../SVGIcons/IconChevronUp'
import { ICommon } from '../../../type'

interface ITitleProps extends ICommon {
  dataId: string
  isOpen: boolean
  iconAlignment: 'left' | 'right'
  hasIconBorder: boolean
  title: TCollapseItemTitleV2
}
export const Title = ({
  dataId,
  title,
  isOpen,
  iconAlignment,
  hasIconBorder,
  theme = 'light'
}: ITitleProps) => {
  const { text = '', weight = 'bolder', size = 'medium', color } = title

  const titleText = useMemo(
    () =>
      typeof text === 'string' ? (
        <Text
          size={size}
          type={color}
          weight={weight}
          dataId={generateDataTestId('title', dataId)}
          theme={theme}
        >
          {text}
        </Text>
      ) : (
        text
      ),
    [text, size, color, weight, dataId]
  )

  const icon = useMemo(
    () => (
      <div
        className={classNames('collapse-icon', {
          'icon-border': hasIconBorder,
          'icon-open': isOpen
        })}
      >
        {!isOpen ? <IconChevronDown size={'small'} /> : <IconChevronUp size={'small'} />}
      </div>
    ),
    [isOpen, hasIconBorder]
  )

  return (
    <div className="collapse__header__inner flexbox justify-content--between" data-theme={theme}>
      {iconAlignment === 'left' ? (
        <>
          {icon}
          {titleText}
        </>
      ) : (
        <>
          {titleText}
          {icon}
        </>
      )}
    </div>
  )
}
