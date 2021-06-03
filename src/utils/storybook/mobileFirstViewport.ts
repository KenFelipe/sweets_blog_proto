import _ from 'lodash'

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

const vpSetDefault = { ...MINIMAL_VIEWPORTS }

const customMobileLabel = {
  mobile1: 'small',
  mobile2: 'large',
  tablet: 'tablet',
}

const vpCustomSetToMerged = {
  styles: {
    border: '0',
  },
}

const vpSetMerged = _.mapValues(vpSetDefault, obj =>
  _.merge(obj, vpCustomSetToMerged),
)

const customVpSet = Object.keys(vpSetMerged).reduce(
  (accumulator, key) => ({
    ...accumulator,
    [key]: {
      layout: 'fullscreen',
      viewport: {
        defaultViewport: key,
        viewports: {
          ...vpSetMerged,
        },
      },
    },
  }),
  {},
)

const customVpSetWithCustomLabel = _.mapKeys(
  customVpSet,
  (_, key) => customMobileLabel[key],
)

export const mobileFirstViewportParams = {
  ...customVpSetWithCustomLabel,
}
