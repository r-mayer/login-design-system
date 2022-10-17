import { Button } from './Button'
import { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'


export default {
    title: 'components/Button',
    component: Button,
    args: {
        children: 'Click here',
    }
} as Meta

export const Default: StoryObj = {}