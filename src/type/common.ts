export type TThemeMode = 'light' | 'dark'

export interface ICommon {
  theme?: TThemeMode
}

export interface IFormProps {
  hasError?: boolean
  isValid?: boolean
  value?: TFormValue
  onChange?: TOnChange
  dataId?: string
  name?: string
  setFieldValue?: (
    name: string,
    value: TFormValue,
    shouldValidate?: { shouldValidate: boolean }
  ) => void
}

export type TChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>

export type TOnChange = (event: TChangeEventType) => void
