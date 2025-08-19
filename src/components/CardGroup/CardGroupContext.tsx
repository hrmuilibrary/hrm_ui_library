import { createContext, useContext } from 'react'
import { TCardGroupProps } from './types'

interface ICardGroupContext extends Omit<TCardGroupProps, 'children'> {}

export const CardGroupContext = createContext<ICardGroupContext>({})
export const useCardGroupContext = () => useContext(CardGroupContext)
