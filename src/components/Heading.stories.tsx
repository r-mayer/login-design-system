import { Heading } from './Heading'
import { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'


export default {
    title: 'components/Heading',
    component: Heading,
    args: {
        children: 'Lorem ipsum.',
        size: 'md',
    }
} as Meta

export const Default: StoryObj = {}

export const Small: StoryObj = {
    args: {
        size: 'sm',
    }
}

export const Large: StoryObj = {
    args: {
        size: 'lg',
    }
}