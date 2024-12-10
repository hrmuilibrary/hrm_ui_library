export interface TStepperContentWrapperProps {
  isPrevDisabled: boolean
  isNextDisabled: boolean
  prevHandler: () => void
  nextHandler: () => void
  activeStepIndex: number
  stepCount: number
}
declare type TComp = (props: TStepperContentWrapperProps) => React.ReactElement

export interface TStepperProps {
  list: TComp[]
  activeStep?: number
  setActiveStep?: (step: number) => void
}
