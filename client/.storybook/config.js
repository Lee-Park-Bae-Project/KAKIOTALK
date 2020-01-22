import { configure, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';

addParameters({
  options: {
    // theme: themes.normal,
  },
});

configure(require.context('../src', true, /\.stories\.(js|mdx|tsx)$/), module);