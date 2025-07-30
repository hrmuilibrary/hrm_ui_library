import React, { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'
import { TCollapseV2Props } from '../types'
import classNames from 'classnames'
import { generateDataTestId } from '../../../utils/helpers'
import { Title } from './Title'

export const Collapse = (props: TCollapseV2Props): React.ReactElement => {
  const {
    title,
    className,
    isOpen: isCollapseOpen = false,
    iconAlignment = 'left',
    hasIconBorder = false,
    toggle,
    dataId,
    children,
    id
  } = props

  const [isOpen, toggleIsOpen] = useState(isCollapseOpen)

  const onToggle = useCallback(() => {
    toggleIsOpen((prevVal) => {
      toggle && toggle(!prevVal)
      return !prevVal
    })
  }, [])

  return (
    <div
      className={classNames('collapse', { 'collapse--opened': isOpen }, className)}
      id={`${id || ''}`}
      data-id={generateDataTestId('collapse-item', dataId)}
    >
      <div className="collapse__header" onClick={onToggle}>
        <Title
          hasIconBorder={hasIconBorder}
          iconAlignment={iconAlignment}
          isOpen={isOpen}
          dataId={dataId as string}
          title={title}
        />
      </div>
      <AnimatePresenceWrapper initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          >
            <div className="collapse__content">
              <Divider type="primary" isHorizontal className={'collapse__divider'} />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresenceWrapper>
    </div>
  )
}
