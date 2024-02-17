import type { Meta, StoryObj } from '@storybook/react'
import { Card } from '@quest/ui'

const meta = {
  title: 'Example/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'center',
  },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const EmptyMd: Story = {
  render: args => (
    <div
      style={{
        alignItems: 'flex-start',
        display: 'grid',
        gap: '24px',
        gridTemplateColumns: 'repeat(2, 1fr)',
        width: 1140,
      }}
    >
      <Card {...args}>
        <div
          style={{
            padding: '14px',
            width: '32px',
            height: '32px',
            borderRadius: '16px',
            backgroundColor: 'rgba(217, 217, 255, 0.11)',
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            style={{ height: '100%', width: '100%' }}
            className='line-icon'
          >
            <g fill='#B0B8C1' fill-rule='evenodd'>
              <path d='M12 21.326a5.055 5.055 0 013.575-1.48H22a1 1 0 001-1V4.674a1 1 0 00-1-1h-6.425A5.056 5.056 0 0012 5.155'></path>
              <path
                fill-opacity='.6'
                d='M12 21.326a5.055 5.055 0 00-3.575-1.48H2a1 1 0 01-1-1V4.674a1 1 0 011-1h6.425c1.341 0 2.627.533 3.575 1.481'
              ></path>
            </g>
          </svg>
        </div>
        <div
          style={{
            marginLeft: '16px',
            alignItems: 'stretch',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
        >
          <span
            style={{
              margin: 0,
              padding: 0,
              fontWeight: 'bold',
              fontSize: '20px',
              color: '#ffffff',
              lineHeight: '1.6',
              textAlign: 'start',
            }}
          >
            API & SDK
          </span>
          <span
            style={{
              margin: 0,
              padding: 0,
              fontWeight: 500,
              fontSize: '15px',
              color: '#b0b8c1',
              lineHeight: '1.6',
            }}
          >
            {' '}
            API와 SDK 스펙 문서를 제공해드려요.
          </span>
        </div>
      </Card>
      <Card {...args}></Card>
      <Card {...args}></Card>
      <Card {...args}></Card>
    </div>
  ),
}
