import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
// automatically import all files ending in *.stories.js
addParameters({
  options: {
    theme: themes.dark,
  },
  viewport: { viewports: INITIAL_VIEWPORTS },
});
configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);