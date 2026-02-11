import React from 'react'
import { Text } from '../../Text'
import { ICommon } from '../../../type'

type TLoadingProps = ICommon & {
  loadingText?: string
}

export const Loading = (props: TLoadingProps): React.ReactElement => {
  const { loadingText = 'Results loading ...', theme = 'light' } = props
  return (
    <div style={{ padding: 20 }} data-theme={theme}>
      <Text theme={theme}>{loadingText}</Text>
    </div>
  )
}
