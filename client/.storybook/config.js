import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
// automatically import all files ending in *.stories.js
addParameters({
  options: {
    theme: themes.dark,
  },
});
configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);