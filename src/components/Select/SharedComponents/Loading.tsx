import React from 'react'
import { Text } from '../../Text'

type TLoadingProps = {
  loadingText?: string
}

export const Loading = (props: TLoadingProps): React.ReactElement => {
  const { loadingText = 'Results loading ...' } = props
  return (
    <div style={{ padding: 20 }}>
      <Text>{loadingText}</Text>
    </div>
  )
}
