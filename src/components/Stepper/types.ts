import { IBaseProps } from '../../type'
export interface TStepperContentWrapperProps extends IBaseProps {
  isPrevDisabled: boolean
  isNextDisabled: boolean
  prevHandler: () => void
  nextHandler: () => void
  activeStepIndex: number
  stepCount: number
}
declare type TComp = (props: TStepperContentWrapperProps) => React.ReactElement

export interface TStepperProps extends IBaseProps {
  list: TComp[]
  activeStep?: number
  setActiveStep?: (step: number) => void
}
