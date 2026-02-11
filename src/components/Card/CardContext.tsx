import { createContext, useContext } from 'react'
import { ICardProps } from './types'

interface ICardContext extends Omit<ICardProps, 'children'> {
  toggleIsExpanded?: React.Dispatch<React.SetStateAction<boolean>>
}

export const CardContext = createContext<ICardContext>({
  isExpanded: false,
  isExpandable: true
})
export const useCardContext = () => useContext(CardContext)
