import React, {
  MouseEvent,
  ReactElement,
  TouchEvent,
  useEffect,
  useRef,
  useState,
  WheelEvent
} from 'react'
import { initialNumbersValue, returnSelectedValue } from '../helpers'
import { MINUTE_LENGTH } from '../consts'

interface IMinuteWheelProps {
  height: number
  value: string
  setValue: (value: string) => void
  use12Hours?: boolean
}

export const MinuteWheel = ({ height, value, setValue }: IMinuteWheelProps): ReactElement => {
  const [hours, setHours] = useState(
    initialNumbersValue(height, MINUTE_LENGTH, parseInt(value.slice(3, 6)))
  )

  const mainListRef = useRef<HTMLDivElement>(null)
  const [cursorPosition, setCursorPosition] = useState(0)
  const [firstCursorPosition, setFirstCursorPosition] = useState(0)
  const [currentTranslatedValue, setCurrentTranslatedValue] = useState(
    parseInt(
      initialNumbersValue(height, MINUTE_LENGTH, parseInt(value.slice(3, 6))).filter(
        (item) => item.number === value.slice(3, 6) && item.selected
      )[0]?.translatedValue
    )
  )
  const [startCapture, setStartCapture] = useState(false)
  const [showFinalTranslate, setShowFinalTranslate] = useState(false)
  // start and end times
  const [dragStartTime, setDragStartTime] = useState(0)
  const [dragEndTime, setDragEndTime] = useState(0)
  // drag type fast or slow
  const [dragType, setDragType] = useState<string | null>(null)
  // drag direction
  const [dragDirection, setDragDirection] = useState<string | null>(null)

  const handleMouseDown = (e: MouseEvent) => {
    setShowFinalTranslate(false)
    setFirstCursorPosition(e.clientY)
    setStartCapture(true)
    setDragStartTime(performance.now())
  }

  const handleTouchStart = (e: TouchEvent) => {
    setShowFinalTranslate(false)
    setFirstCursorPosition(e.targetTouches[0].clientY)
    setStartCapture(true)
    setDragStartTime(performance.now())
  }

  const handleMouseUp = () => {
    setStartCapture(false)
    setCurrentTranslatedValue((prev) => prev + cursorPosition)
    setShowFinalTranslate(true)
    setDragEndTime(performance.now())
    if (performance.now() - dragStartTime <= 100) {
      setDragType('fast')
    } else {
      setDragType('slow')
    }

    if (cursorPosition < 0) {
      setDragDirection('down')
    } else {
      setDragDirection('up')
    }
  }

  const handleMouseLeave = () => {
    setStartCapture(false)
    setCurrentTranslatedValue((prev) => prev + cursorPosition)
    setShowFinalTranslate(true)
    setDragEndTime(performance.now())
    if (performance.now() - dragStartTime <= 100) {
      setDragType('fast')
    } else {
      setDragType('slow')
    }

    if (cursorPosition < 0) {
      setDragDirection('down')
    } else {
      setDragDirection('up')
    }
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (startCapture) {
      setCursorPosition(e.clientY - firstCursorPosition)
    } else {
      setCursorPosition(0)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (startCapture) {
      setCursorPosition(e.targetTouches[0].clientY - firstCursorPosition)
    } else {
      setCursorPosition(0)
    }
  }

  // preview translation
  useEffect(() => {
    if (startCapture && mainListRef.current) {
      mainListRef.current.style.transform = `translateY(${
        currentTranslatedValue + cursorPosition
      }px)`
    }
  }, [cursorPosition])

  // final translation here
  useEffect(() => {
    if (showFinalTranslate) {
      if (dragEndTime - dragStartTime <= 100 && cursorPosition !== 0) {
        let currentValue = 0
        if (dragDirection === 'down') {
          currentValue = currentTranslatedValue - (120 / (dragEndTime - dragStartTime)) * 100
        } else if (dragDirection === 'up') {
          currentValue = currentTranslatedValue + (120 / (dragEndTime - dragStartTime)) * 100
        }
        let finalValue = Math.round(currentValue / height) * height
        if (finalValue < height * -177) finalValue = height * -177
        if (finalValue > height * 2) finalValue = height * 2

        if (mainListRef.current) {
          mainListRef.current.style.transform = `translateY(${finalValue}px)`
        }
        setCurrentTranslatedValue(finalValue)
      }
      if (dragEndTime - dragStartTime > 100 && cursorPosition !== 0) {
        let finalValue = Math.round(currentTranslatedValue / height) * height
        if (finalValue < height * -177) finalValue = height * -177
        if (finalValue > height * 2) finalValue = height * 2
        if (mainListRef.current) {
          mainListRef.current.style.transform = `translateY(${finalValue}px)`
        }
        setCurrentTranslatedValue(finalValue)
      }
      setCursorPosition(0)
    }
  }, [showFinalTranslate])

  // return to default position after drag end (handleTransitionEnd)
  const handleTransitionEnd = () => {
    returnSelectedValue(height, 60).map((item) => {
      if (parseInt(item.translatedValue) === currentTranslatedValue) {
        setValue(`${value.slice(0, 2)}:${item.number}`)
        setHours(() => {
          return initialNumbersValue(height, 60).map((hour) => {
            if (
              hour.number == item.number &&
              parseInt(hour.translatedValue) === currentTranslatedValue
            ) {
              return {
                ...hour,
                selected: true
              }
            }
            return hour
          })
        })
      }
    })
  }

  // handle click to select number
  const handleClickToSelect = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cursorPosition === 0 && e.currentTarget.dataset.translatedValue) {
      setCurrentTranslatedValue(parseInt(e.currentTarget.dataset.translatedValue))
    }
  }

  const isFastCondition = showFinalTranslate && dragType === 'fast'
  const isSlowCondition = showFinalTranslate && dragType === 'slow'

  /* ***************************   handle wheel scroll ************************* */

  const handleWheelScroll = (e: WheelEvent) => {
    if (e.deltaY > 0) {
      if (currentTranslatedValue < height * 2) {
        setCurrentTranslatedValue((prev) => prev + height)
      }
    } else if (currentTranslatedValue > height * -177) {
      setCurrentTranslatedValue((prev) => prev - height)
    }
  }

  return (
    <div
      className="react-time-picker-minute"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ height: height * 5 }}
      onWheel={handleWheelScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* <PickerEffects height={height} /> */}
      <div
        ref={mainListRef}
        className={`${isFastCondition && 'react-time-picker-fast'} ${
          isSlowCondition && 'react-time-picker-slow'
        }`}
        onTransitionEnd={handleTransitionEnd}
        style={{ transform: `translateY(${currentTranslatedValue}px)` }}
      >
        {hours.map((hourObj, index) => (
          <div
            key={index}
            className="react-time-picker-cell-minute"
            style={{ height: `${height}px` }}
          >
            <div
              className={`react-time-picker-cell-inner-minute${
                hourObj.selected ? ' react-time-picker-cell-inner-selected' : ''
              }`}
              onClick={handleClickToSelect}
              data-translated-value={hourObj.translatedValue}
            >
              {hourObj.number}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
