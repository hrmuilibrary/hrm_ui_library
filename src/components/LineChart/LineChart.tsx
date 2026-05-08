import React from 'react'
import { TLineChartProps } from './types'
import classNames from 'classnames'
import { Text } from '../Text'
import { Divider } from '../Divider'
import { generateLinePath, formatWithDots } from './helper'

export const LineChart = ({ data }: TLineChartProps): React.ReactElement => {
  const linePathes = generateLinePath(data)
  let percent = 0

  return (
    <div>
      <div className="bar">
        {linePathes.map(({ percentage, color }, i) => {
          const start = percent
          const end = start + percentage
          percent = end
          return (
            <div
              key={`line-chart-segment-${i}`}
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
                >
                  <div className="flexbox align-items--center">
                    <span className={classNames('status__circle', `status__circle--${color}`)} />
                    <Text type="disabled">{label}</Text>
                  </div>
                  <div>
                    <Text>
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
