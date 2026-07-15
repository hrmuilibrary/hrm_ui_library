// Shared base props for every component (QA/test hooks, future common attrs)
export interface IBaseProps {
  dataTestId?: string
}

// Props which will pass FormField to component
export interface IFormCompProps extends IBaseProps {
  hasError?: boolean
  isValid?: boolean
  value?: TFormValue
  onChange?: TOnChange
  name?: string
  setFieldValue?: (
    name: string,
    value: TFormValue,
    shouldValidate?: { shouldValidate: boolean }
  ) => void
}
