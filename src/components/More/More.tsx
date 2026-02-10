import React, { useState } from 'react'
import { Text } from '../Text'
import { TMorePropTypes } from './types'
import { Button } from '../Button'

export const More = (props: TMorePropTypes): React.ReactElement => {
  const {
    textProps = {},
    expandedText,
    collapsedText,
    buttonText = {
      expand: 'Ավելին',
      collapse: 'Փակել'
    },
    theme = 'light'
  } = props
  const [isExpanded, setIsExpanded] = useState(false)

  const expand = (e: TClickEventType) => {
    e.stopPropagation()
    setIsExpanded(true)
  }
  const collapse = (e: TClickEventType) => {
    e.stopPropagation()
    setIsExpanded(false)
  }

  return (
    <Text {...textProps} className={'more'} theme={theme}>
      {`${isExpanded ? expandedText : collapsedText}`}
      <Button
        theme={theme}
        className={'more__btn ml-4'}
        type="link"
        buttonText={isExpanded ? buttonText.collapse : buttonText.expand}
        onClick={isExpanded ? collapse : expand}
      />
    </Text>
  )
}
