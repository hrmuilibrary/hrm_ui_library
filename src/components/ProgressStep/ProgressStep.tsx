import React, { ReactElement } from 'react'
import classnames from 'classnames'
import { Step } from './Step'
import { TProgressStepProps } from './types'

export const ProgressStep = (props: TProgressStepProps): ReactElement | null => {
  const {
    steps,
    stepType,
    activeStep,
    setActiveStep,
    stepSize = 'large',
    stepDirection = 'horizontal',
    dataTestId = ''
  } = props

  const singleStepWidth = `${100 / steps.length}%`

  return (
    <div
      className={classnames('progress-stepper', `progress-stepper--${stepDirection}`)}
      data-test-id={dataTestId}
    >
      {steps.map((step, index) => {
        return (
          <Step
            width={stepDirection == 'horizontal' ? singleStepWidth : '100%'}
            step={step}
            index={index + 1}
            key={step.value}
            activeStep={activeStep}
            onStepClick={setActiveStep}
            stepType={stepType}
            stepSize={stepSize}
            dataTestId={dataTestId ? `${dataTestId}-item-${index}` : ''}
          />
        )
      })}
    </div>
  )
}
