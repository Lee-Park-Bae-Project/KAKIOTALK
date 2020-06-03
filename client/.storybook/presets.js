const path = require("path");
module.exports = [
  '@storybook/addon-docs/react/preset',
  {
    name: '@storybook/preset-create-react-app',
    options: {
      tsDocgenLoaderOptions: {
      }
    }
  },
  // {
  //   name: "@storybook/addon-docs",
  //   options: {
  //     configureJSX: true
  //   }
  // }
];
