import { Story, Meta } from '@storybook/react'
import { Footer, FooterProps } from './Footer'

export default {
  title: 'Organisms/Footer',
  component: Footer,
} as Meta

const Template: Story<FooterProps> = args => <Footer {...args} />

export const OnePerOne = Template.bind({})
OnePerOne.storyName = 'One per One'
OnePerOne.args = {
  licenceData: [
    {
      dz: [
        {
          label: 'google.com',
          url: 'https://google.com',
        },
      ],
    },
    {
      dz: [
        {
          label: 'youtube.com',
          url: 'https://youtube.com',
        },
      ],
    },
  ],
}

export const OnePerMulti = Template.bind({})
OnePerMulti.storyName = 'One per Multi'
OnePerMulti.args = {
  licenceData: [
    {
      dz: [
        {
          label: 'google.com',
          url: 'https://google.com',
        },
        {
          label: 'yahoo.com',
          url: 'https://yahoo.com',
        },
      ],
    },
    {
      dz: [
        {
          label: 'youtube.com',
          url: 'https://youtube.com',
        },
      ],
    },
  ],
}
