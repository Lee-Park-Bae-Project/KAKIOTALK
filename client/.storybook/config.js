import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// automatically import all files ending in *.stories.js
const customViewports = {
  Desktop: {
    name: 'Desktop',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
};
addParameters({
  options: {
    theme: themes.dark,
  },
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      ...customViewports,
    },
  },
});
configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);