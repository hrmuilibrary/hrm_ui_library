import classNames from 'classnames'
import React, { ReactElement, useMemo } from 'react'
import { Text } from '../Text'
import { StepTypes, TStepProps } from './types'
import { PROGRESS_STATUSES } from './consts'
import IconDismissCircle from '../SVGIcons/IconDismissCircle'
import IconCheckmarkCircle from '../SVGIcons/IconCheckmarkCircle'

export const Step = (props: TStepProps): ReactElement => {
  const {
    width,
    step,
    stepSize = 'large',
    index,
    activeStep,

    stepType,
    onStepClick,
    dataId = ''
  } = props
  const { label, subText, value, status } = step
  const isActive = activeStep === value
  const isCompleted = status === PROGRESS_STATUSES.completed
  const isRejected = status === PROGRESS_STATUSES.rejected
  const isReview = status === PROGRESS_STATUSES.reviewed

  const textType = useMemo(() => {
    if (isActive && !isRejected) {
      return 'brand'
    }
    if (isCompleted || isRejected) {
      return 'inverse'
    }
    return 'tertiary'
  }, [isCompleted, isRejected, isActive])

  const onClick = () => {
    if (onStepClick) {
      onStepClick(value)
    }
  }

  const stepItemContent = useMemo(() => {
    if (stepType === StepTypes.number) {
      return (
        <Text
          type={textType}
          size={stepSize == 'large' ? 'medium' : 'small'}
          weight={stepSize == 'large' ? 'semibold' : 'regular'}
          dataId={dataId ? `${dataId}-number` : ''}
        >{`${index}`}</Text>
      )
    }
    if (stepType === StepTypes.dot) {
      if (isActive) {
        return <span className={classNames('step__circle__dot')} />
      }
      if (isCompleted) {
        const iconSize = stepSize == 'large' ? 'small' : 'xsmall'
        if (isRejected) {
          return (
            <IconDismissCircle
              size={iconSize}
              type="inverse"
              dataId={dataId ? `${dataId}-icon` : ''}
            />
          )
        }
        return (
          <IconCheckmarkCircle
            size={iconSize}
            type="inverse"
            dataId={dataId ? `${dataId}-icon` : ''}
          />
        )
      }
    }
    return null
  }, [index, stepType, stepSize, isCompleted, isActive, isRejected, textType, dataId])

  return (
    <div
      className={classNames('step', `step--${stepSize}`, {
        active: isActive,
        completed: isCompleted && !isActive,
        rejected: isRejected,
        review: isReview
      })}
      style={{ width }}
      onClick={onClick}
      data-id={dataId}
    >
      <div className="step__top">
        <div className="step__circle">{stepItemContent}</div>
      </div>
      <div className="step__label">
        <Text
          size={stepSize == 'large' ? 'standard' : 'small'}
          weight="semibold"
          lineHeight={'large'}
          className="text-truncate"
          dataId={dataId ? `${dataId}-label` : ''}
        >
          {label}
        </Text>
        <Text
          size={stepSize == 'large' ? 'small' : 'xsmall'}
          className="text-truncate"
          dataId={dataId ? `${dataId}-subtext` : ''}
        >
          {subText}
        </Text>
      </div>
    </div>
  )
}
