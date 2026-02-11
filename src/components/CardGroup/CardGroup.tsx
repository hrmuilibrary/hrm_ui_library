import React from 'react'
import { ICardGroupProps } from './types'
import { CardGroupContext } from './CardGroupContext'
import { CardGroup as _CardGroup } from './CardGroupComponent/CardGroup'
import { CardGroupHead } from './CardGroupComponent/CardHead'
import { CardGroupBody } from './CardGroupComponent/CardBody'

const CardComponent = ({ children, ...rest }: ICardGroupProps): React.ReactElement => {
  return (
    <CardGroupContext.Provider value={{ ...rest }}>
      <_CardGroup>{children}</_CardGroup>
    </CardGroupContext.Provider>
  )
}

export const CardGroup = Object.assign(CardComponent, {
  Head: CardGroupHead,
  Body: CardGroupBody
})
