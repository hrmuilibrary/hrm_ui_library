import React, { useEffect, useState } from 'react'
import { TCardProps } from './types'
import { CardContext } from './CardContext'
import { Card as _Card } from './CardComponent/Card'
import { CardHead } from './CardComponent/CardHead'
import { CardBody } from './CardComponent/CardBody'
import { noop } from '../../utils/helpers'

const CardComponent = ({
  children,
  isExpanded,
  isExpandedFromParent,
  ...rest
}: TCardProps): React.ReactElement => {
  const [isCardExpanded, toggleIsExpanded] = useState<boolean>(isExpanded ?? false)

  useEffect(
    () =>
      typeof isExpandedFromParent === 'boolean' ? toggleIsExpanded(isExpandedFromParent) : noop,
    [isExpandedFromParent]
  )

  return (
    <CardContext.Provider value={{ ...rest, isExpanded: isCardExpanded, toggleIsExpanded }}>
      <_Card>{children}</_Card>
    </CardContext.Provider>
  )
}

export const Card = Object.assign(CardComponent, {
  Head: CardHead,
  Body: CardBody
})
