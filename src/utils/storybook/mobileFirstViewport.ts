import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

export const mobileFirstViewportParams = {
  layout: 'fullscreen',
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      mobile1: {
        ...MINIMAL_VIEWPORTS.mobile1,
        styles: {
          ...MINIMAL_VIEWPORTS.mobile1.styles,
          border: '0',
        },
      },
    },
    defaultViewport: 'mobile1',
  },
}
