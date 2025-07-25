import React, { useEffect } from 'react'
import * as yup from 'yup'
import {
  FormField,
  FormContainer as _FormContainer,
  Button,
  DropzoneFileUpload,
  SimpleDatePicker,
  Input,
  useFormProps
} from '../index'

export default {
  title: 'Form Container',
  component: _FormContainer
}

const OPTIONS: TSelectOptions = [
  {
    value: 'armenia',
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 'italy',
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 'france',
    label: 'France',
    meta: 'FR'
  },
  {
    value: 'spain',
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 'germany',
    label: 'Germany',
    meta: 'De'
  }
]

const OPTIONS_CITIES: TSelectOptions = [
  {
    value: 'yerevan',
    label: 'Yerevan'
  },
  {
    value: 'rome',
    label: 'Rome'
  },
  {
    value: 'paris',
    label: 'Paris'
  },
  {
    value: 'aaaa',
    label: 'iiii'
  }
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OPTIONS_GROUPED: TSelectGroupOptions = [
  {
    title: 'Countries',
    data: OPTIONS
  },
  {
    title: 'Cities',
    data: OPTIONS_CITIES
  }
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RADIO_OPTIONS = [
  {
    label: 'Text1',
    value: '1'
  },
  {
    label: 'Text2',
    value: '2'
  },
  {
    label: 'Text3',
    value: '3'
  }
]

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const OPTIONS_COUNTRIES: TSelectOptions = [
  {
    value: 1,
    label: 'Armenia',
    meta: 'AM'
  },
  {
    value: 2,
    label: 'Italy',
    meta: 'IT'
  },
  {
    value: 3,
    label: 'France',
    meta: 'FR'
  },
  {
    value: 4,
    label: 'Spain',
    meta: 'SP'
  },
  {
    value: 5,
    label: 'Germany',
    meta: 'De'
  },
  {
    value: 6,
    label: 'Australia',
    meta: 'AU'
  },
  {
    value: 7,
    label: 'Hungary',
    meta: 'HY'
  },
  {
    value: 8,
    label: 'Georgia',
    meta: 'GE'
  },
  {
    value: 9,
    label: 'Brazil',
    meta: 'BR'
  },
  {
    value: 10,
    label: 'Norway',
    meta: 'NR'
  },
  {
    value: 11,
    label: 'Mexico',
    meta: 'MC'
  }
]

const VALIDATION_SCHEME = yup.object({
  // conditions: yup.string().required('validation').nullable()
  firstname: yup.string().required('validation')
})

const CustomInput = () => {
  const { trigger, onSubmit } = useFormProps()

  const handleBlurEvent = async (event: React.FocusEvent<HTMLInputElement>) => {
    const isValid = await trigger?.('firstname')
    if (isValid && onSubmit) {
      onSubmit()
    }
  }
  return (
    <FormField
      name="firstname"
      As={(props) => <Input handleBlurEvent={handleBlurEvent} {...props} />}
    />
  )
}

const Template = (): React.ReactElement => {
  const INITIAL_VALUES = {
    firstname: ''
  }

  return (
    <div style={{ maxWidth: 300 }}>
      <_FormContainer
        onSubmit={(data) => console.log('data', data)}
        validationScheme={VALIDATION_SCHEME}
        initialValues={INITIAL_VALUES}
      >
        <>
          <CustomInput />
          {/*// @ts-ignore*/}
          {/*<FormField name="date" As={(props) => <SimpleDatePicker {...props} />} />*/}

          <Button buttonActionType="submit" buttonText={'Ok'} className="mt-16" />
        </>
      </_FormContainer>
    </div>
  )
}

export const FormContainer = Template.bind({})
