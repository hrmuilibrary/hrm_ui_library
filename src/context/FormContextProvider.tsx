import { useContext, ReactElement } from 'react'
import { FormContext, TFormContextProps } from './types'

export const WithFormFeedback = ({
  children
}: {
  children?: (context: TFormContextProps) => ReactElement | null
}): ReactElement | null => {
  const context = useContext(FormContext)

  return children ? children(context) : null
}
