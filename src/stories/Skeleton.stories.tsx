import React, { useEffect, useState } from 'react'
import { type Meta, type StoryFn, type StoryObj } from '@storybook/react'

import { Skeleton as _Skeleton, TSkeletonPropTypes } from '../components/Skeleton'
import { SKELETON_ANIMATIONS, SKELETON_VARIANTS } from '../components/Skeleton/consts'

export default {
  title: 'Skeleton',
  component: _Skeleton,
  argTypes: {
    variant: {
      options: SKELETON_VARIANTS,
      control: { type: 'radio' }
    },
    animation: {
      options: SKELETON_ANIMATIONS,
      control: { type: 'radio' }
    },
    width: { control: { type: 'text' } },
    height: { control: { type: 'text' } },
    count: { control: { type: 'number', min: 1, max: 10, step: 1 } }
  }
} as Meta

// ---------- Playground ----------

const Template: StoryFn<TSkeletonPropTypes> = (args) => (
  <div style={{ width: 320 }}>
    <_Skeleton {...args} />
  </div>
)

export const Playground: StoryObj<TSkeletonPropTypes> = Template.bind({})
Playground.args = {
  variant: 'text',
  animation: 'pulse',
  width: 280,
  height: undefined,
  count: 1
}

// ---------- Variants ----------

const sectionStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, minmax(240px, 320px))',
  gap: 32,
  padding: 16
}

const cellStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 8
}

const labelStyle: React.CSSProperties = {
  fontSize: 12,
  textTransform: 'uppercase',
  letterSpacing: 0.4,
  color: '#717784'
}

export const Variants: StoryFn = () => (
  <div style={sectionStyle}>
    <div style={cellStyle}>
      <span style={labelStyle}>Text</span>
      <_Skeleton variant="text" width={280} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Circular</span>
      <_Skeleton variant="circular" width={56} height={56} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Rectangular</span>
      <_Skeleton variant="rectangular" width={280} height={120} />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Rounded</span>
      <_Skeleton variant="rounded" width={280} height={120} />
    </div>
  </div>
)

// ---------- Animations ----------

export const Animations: StoryFn = () => (
  <div style={sectionStyle}>
    <div style={cellStyle}>
      <span style={labelStyle}>Pulse (default)</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="pulse" />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>Wave</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="wave" />
    </div>
    <div style={cellStyle}>
      <span style={labelStyle}>None</span>
      <_Skeleton variant="rounded" width={280} height={80} animation="none" />
    </div>
  </div>
)

// ---------- Multiple lines (count) ----------

export const TextLines: StoryFn = () => (
  <div style={{ width: 360, padding: 16 }}>
    <_Skeleton variant="text" count={4} />
    <_Skeleton variant="text" width="60%" />
  </div>
)

// ---------- Inferred from children ----------

export const InferredFromChildren: StoryFn = () => (
  <div style={{ display: 'flex', gap: 16, alignItems: 'center', padding: 16 }}>
    <_Skeleton variant="circular">
      <div style={{ width: 48, height: 48 }} />
    </_Skeleton>
    <_Skeleton variant="text">
      <span style={{ fontSize: 24, fontWeight: 600 }}>The quick brown fox</span>
    </_Skeleton>
  </div>
)

// ---------- Card-loading example with toggle ----------

const cardStyle: React.CSSProperties = {
  width: 320,
  border: '1px solid #E1E4EA',
  borderRadius: 12,
  padding: 16,
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  background: '#fff'
}

const headerRowStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 12
}

export const CardLoadingExample: StoryFn = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handle = window.setTimeout(() => setLoading(false), 2000)
    return () => window.clearTimeout(handle)
  }, [])

  return (
    <div style={{ display: 'flex', gap: 24, padding: 16, alignItems: 'flex-start' }}>
      <div style={cardStyle}>
        {loading ? (
          <>
            <div style={headerRowStyle}>
              <_Skeleton variant="circular" width={40} height={40} animation="wave" />
              <div style={{ flex: 1 }}>
                <_Skeleton variant="text" width="60%" animation="wave" />
                <_Skeleton variant="text" width="40%" animation="wave" />
              </div>
            </div>
            <_Skeleton variant="rounded" width="100%" height={140} animation="wave" />
            <_Skeleton variant="text" count={3} animation="wave" />
          </>
        ) : (
          <>
            <div style={headerRowStyle}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  background: '#72BF44'
                }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>People Space</div>
                <div style={{ color: '#717784', fontSize: 12 }}>Updated just now</div>
              </div>
            </div>
            <div
              style={{
                width: '100%',
                height: 140,
                borderRadius: 8,
                background: 'linear-gradient(135deg, #72BF44, #1FC16B)'
              }}
            />
            <p style={{ margin: 0, color: '#2B303B', lineHeight: 1.5 }}>
              Loaded! The skeleton is replaced once the real content is ready.
            </p>
          </>
        )}
      </div>
      <button
        type="button"
        onClick={() => setLoading((value) => !value)}
        style={{
          padding: '8px 12px',
          borderRadius: 8,
          border: '1px solid #CACFD8',
          background: '#fff',
          cursor: 'pointer'
        }}
      >
        Toggle loading
      </button>
    </div>
  )
}
