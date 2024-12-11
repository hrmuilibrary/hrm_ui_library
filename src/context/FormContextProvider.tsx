import { useContext } from 'react'
import { FormContext, TFormContextProps } from './types'

export const WithFormFeedback = ({
  children
}: {
  children?: (context: TFormContextProps) => React.ReactElement | null
}): React.ReactElement | null => {
  const context = useContext(FormContext)

  return children ? children(context) : null
}
