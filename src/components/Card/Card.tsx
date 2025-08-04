import React, { useState } from 'react'
import { TCardProps } from './types'
import { CardContext } from './CardContext'
import { Card as _Card } from './CardComponent/Card'
import { CardHead } from './CardComponent/CardHead'
import { CardBody } from './CardComponent/CardBody'

const CardComponent = ({ children, isExpanded, ...rest }: TCardProps): React.ReactElement => {
  const [isCardExpanded, toggleIsExpanded] = useState<boolean>(isExpanded ?? false)

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
