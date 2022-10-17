import { SocialButton } from './SocialButton'
import { Meta } from '@storybook/react'
import { StoryObj } from '@storybook/react'


export default {
    title: 'components/SocialButton',
    component: SocialButton,
    args: {
        social: 'gg',
    }
} as Meta

export const Default: StoryObj = {}