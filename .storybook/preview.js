import { ThemeProvider } from 'styled-components';
import { GlobalStyle, darkTheme, defaultTheme } from '../src/utils'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'Default theme',
    values: [
      {
        name: 'Default theme',
        value: '#fff',
      },
      {
        name: 'Dark Theme',
        value: '#050449',
      },
    ],
  },
}

export const decorators = [
  (Story, ctx) => {
    const currentBackground = ctx.globals.backgrounds?.value;

    const getTheme = () => {
      if(currentBackground) {
        if(currentBackground === "#fff" || currentBackground === "transparent") {
          return defaultTheme;
        } else {
          return darkTheme;
        }
      }

      return defaultTheme;
    }

    return (
      <ThemeProvider theme={getTheme}>
        <Story />
      </ThemeProvider>
    )
  },
];
