import React from 'react'
import { LineChart as _LineChart } from '../components/LineChart'
import type { StoryFn, StoryObj } from '@storybook/react'
import { TLineChartProps } from '../components/LineChart/types'

export default {
  title: 'LineChart',
  component: _LineChart,
  argTypes: {
    data: [
      {
        quantity: 700,
        dataCurrency: 'AMD',
        label: 'taxes',
        color: 'blue'
      },
      {
        quantity: 7000,
        dataCurrency: 'AMD',
        label: 'taxes',
        color: 'green'
      },
      {
        quantity: 2000,
        dataCurrency: 'AMD',
        label: 'taxes',
        color: 'yellow'
      },
      {
        quantity: 1200,
        dataCurrency: 'AMD',
        label: 'taxes',
        color: 'red'
      }
    ]
  }
}

const Template: StoryFn<TLineChartProps> = (args) => {
  return <_LineChart {...args} />
}

export const LineChart: StoryObj<TLineChartProps> = Template.bind({})

LineChart.args = {
  data: [
    {
      quantity: 700,
      dataCurrency: 'AMD',
      label: 'taxes lorem',
      color: 'blue'
    },
    {
      quantity: 7000,
      dataCurrency: 'AMD',
      label: 'taxes',
      color: 'green',
      isHidden: true
    },
    {
      quantity: 2000,
      dataCurrency: 'AMD',
      label: 'taxes ipsum',
      color: 'yellow'
    },
    {
      quantity: 1200,
      dataCurrency: 'AMD',
      label: 'taxes dolor sit',
      color: 'red'
    }
  ],
  dataTestId: 'line-chart-1'
}
