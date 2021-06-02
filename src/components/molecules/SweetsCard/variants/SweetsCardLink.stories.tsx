import { Story, Meta } from '@storybook/react'
import {
  SweetsCardLink,
  SweetsCardLinkProps,
} from './SweetsCardLink'

import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

import { Primary as OriginalPrimaryStory } from '../SweetsCard.stories'

export default {
  title: 'Molecules/SweetsCardLink',
  component: SweetsCardLink,
  parameters: {
    ...mobileFirstViewportParams,
  },
} as Meta

const Template: Story<SweetsCardLinkProps> = args => (
  <SweetsCardLink {...args} />
)

export const Primary = Template.bind({})
Primary.storyName = 'Primary'
Primary.args = {
  ...OriginalPrimaryStory.args,
  href: 'https://www.google.com',
}
