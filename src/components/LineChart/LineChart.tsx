import React from 'react'
import { TLineChartProps } from './types'
import classNames from 'classnames'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { generateLinePath, formatWithDots } from './helper'

export const LineChart = ({ data, dataTestId = '' }: TLineChartProps): React.ReactElement => {
  const linePathes = generateLinePath(data)
  let percent = 0

  return (
    <div data-test-id={dataTestId}>
      <div className="bar">
        {linePathes.map(({ percentage, color }, i) => {
          const start = percent
          const end = start + percentage
          percent = end
          return (
            <div
              key={`line-chart-segment-${i}`}
              data-test-id={dataTestId ? `${dataTestId}-segment-${i}` : ''}
              className={classNames('bar__segment', `bar__segment--color-${color}`, {
                'bar__segment--first': i === 0,
                'bar__segment--last': i === linePathes.length - 1
              })}
              style={{
                flexBasis: `${percentage}%`
              }}
            />
          )
        })}
      </div>
      <div className="line-chart-status">
        {linePathes.map(
          ({ label, dataCurrency, color, quantity, isHidden }, i) =>
            !isHidden && (
              <>
                <div
                  className="flexbox justify-content--between pt-6 pb-6"
                  key={`line-chart-status-${i}`}
                  data-test-id={dataTestId ? `${dataTestId}-item-${i}` : ''}
                >
                  <div className="flexbox align-items--center">
                    <span className={classNames('status__circle', `status__circle--${color}`)} />
                    <Text type="tertiary" dataTestId={dataTestId ? `${dataTestId}-label-${i}` : ''}>
                      {label}
                    </Text>
                  </div>
                  <div>
                    <Text dataTestId={dataTestId ? `${dataTestId}-value-${i}` : ''}>
                      {formatWithDots(quantity)} {dataCurrency}
                    </Text>
                  </div>
                </div>
                {i !== linePathes.length - 1 && (
                  <Divider type="primary" isHorizontal color="grey" />
                )}
              </>
            )
        )}
      </div>
    </div>
  )
}
