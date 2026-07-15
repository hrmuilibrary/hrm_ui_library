import React, { useState } from 'react'
import * as yup from 'yup'
import { MultiSelectV2 as _MultiSelectV2 } from '../components/MultiSelectV2'
import { StoryFn, type StoryObj } from '@storybook/react'
import { TMultiSelectOption, TMultiSelectV2PropTypes } from '../components/MultiSelectV2/types'
import { FormContainer } from '../components/FormContainer'
import { FormField } from '../components/FormField'
import { Button } from '../components/Button'

export default {
  title: 'MultiSelectV2',
  component: _MultiSelectV2,
  argTypes: {
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' }
    }
  }
}

const OPTIONS: TMultiSelectOption[] = [
  {
    id: '1',
    name: 'Ann Smith',
    initials: 'AS',
    meta: 'HR Manager · People',
    badge: 'You',
    highlighted: true
  },
  { id: '2', name: 'John Doe', initials: 'JD', meta: 'Engineer · Engineering' },
  { id: '3', name: 'Maria Petrosyan', initials: 'MP', meta: 'Designer · Product' },
  { id: '4', name: 'David Grant', initials: 'DG', meta: 'Recruiter · People' }
]

const Template: StoryFn<TMultiSelectV2PropTypes> = (args) => {
  const [selectedItems, setSelectedItems] = useState<TMultiSelectOption[]>(
    () => args.selectedItems ?? []
  )

  const onAdd = (item: TMultiSelectOption) => setSelectedItems((prev) => [...prev, item])
  const onRemove = (id: string) => setSelectedItems((prev) => prev.filter((item) => item.id !== id))

  return (
    <div style={{ maxWidth: 400 }}>
      <_MultiSelectV2 {...args} selectedItems={selectedItems} onAdd={onAdd} onRemove={onRemove} />
    </div>
  )
}

export const MultiSelectV2: StoryObj<TMultiSelectV2PropTypes> = Template.bind({})

MultiSelectV2.args = {
  options: OPTIONS,
  label: 'Participants',
  placeholder: 'Search and select people',
  selectedItems: [OPTIONS[0]],
  helperText: 'Add people to notify about this trip.',
  required: true,
  size: 'medium',
  dataTestIdPrefix: 'multi-select-v2'
}

// -----------SIZES---------

const SizesTemplate = (): React.ReactElement => {
  const [values, setValues] = useState<Record<string, TMultiSelectOption[]>>({
    small: [],
    medium: [],
    large: []
  })

  return (
    <div style={{ maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['small', 'medium', 'large'] as const).map((size) => (
        <_MultiSelectV2
          key={size}
          size={size}
          label={size}
          options={OPTIONS}
          placeholder="Search and select people"
          selectedItems={values[size]}
          onAdd={(item) => setValues((prev) => ({ ...prev, [size]: [...prev[size], item] }))}
          onRemove={(id) =>
            setValues((prev) => ({ ...prev, [size]: prev[size].filter((i) => i.id !== id) }))
          }
        />
      ))}
    </div>
  )
}

export const Sizes: StoryObj = SizesTemplate.bind({})

// -----------CUSTOM DROPDOWN WIDTH---------

export const CustomDropdownWidth: StoryObj<TMultiSelectV2PropTypes> = Template.bind({})

CustomDropdownWidth.args = {
  options: OPTIONS,
  label: 'Reviewers',
  placeholder: 'Add a reviewer...',
  dropdownWidth: 320,
  dataTestIdPrefix: 'multi-select-v2-fixed-width'
}

// -----------REQUIRED FIELD WITH ERROR---------

export const RequiredWithError: StoryObj<TMultiSelectV2PropTypes> = Template.bind({})

RequiredWithError.args = {
  options: OPTIONS,
  label: 'Skills',
  placeholder: 'Add a skill...',
  required: true,
  hasError: true,
  error: 'Select at least one option.',
  dataTestId: 'multi-select-v2-error'
}

// -----------DISABLED---------

export const Disabled: StoryObj<TMultiSelectV2PropTypes> = Template.bind({})

Disabled.args = {
  options: OPTIONS,
  label: 'Participants',
  selectedItems: [OPTIONS[0], OPTIONS[1]],
  disabled: true,
  dataTestId: 'multi-select-v2-disabled'
}

// -----------WITH FORM CONTAINER---------

const VALIDATION_SCHEME = yup.object({
  managers: yup.array().min(1, 'validation').required('validation')
})

const WithFormContainerTemplate = (): React.ReactElement => {
  const onSubmit = (data: any) => {
    // eslint-disable-next-line no-console
    console.log(data)
  }

  return (
    <div style={{ maxWidth: 400 }}>
      <FormContainer
        onSubmit={onSubmit}
        validationScheme={VALIDATION_SCHEME}
        initialValues={{ managers: [] }}
        dataTestId="multi-select-v2-form"
      >
        <>
          <FormField
            name="managers"
            As={(props) => (
              <_MultiSelectV2
                {...props}
                options={OPTIONS}
                placeholder="Search and select people"
                label={'label'}
              />
            )}
          />
          <Button buttonActionType="submit" buttonText="Save" className="mt-16" />
        </>
      </FormContainer>
    </div>
  )
}

export const WithFormContainer: StoryObj = WithFormContainerTemplate.bind({})
