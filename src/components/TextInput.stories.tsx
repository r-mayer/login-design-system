import { TextInput } from './TextInput'
import { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'


export default {
    title: 'components/TextInput',
    component: TextInput,
    args: {
        placeholder: 'Type yout text',
        type: 'email'
    }
} as Meta

export const Default: StoryObj = {}