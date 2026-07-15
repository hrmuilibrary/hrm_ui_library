import { IBaseProps } from '../../type'
export interface TUnderConstructionProps extends IBaseProps {
  size?: string
  className?: string
  mainMessage?: string
  paragraphMessage?: string
  illustration?: string
  language?: string
}

export type TUnderConstructionTranslations = {
  mainMessage: string
  paragraphMessage: string
}
