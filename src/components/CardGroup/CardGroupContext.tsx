import { createContext, useContext } from 'react'
import { ICardGroupProps } from './types'

interface ICardGroupContext extends Omit<ICardGroupProps, 'children'> {}

export const CardGroupContext = createContext<ICardGroupContext>({})
export const useCardGroupContext = () => useContext(CardGroupContext)
