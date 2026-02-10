import { ICommon } from '../../type'

export interface TUnderConstructionProps extends ICommon {
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
