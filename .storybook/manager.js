import { addons } from "@storybook/addons";
import { create } from '@storybook/theming';

const myTheme = create({
  base: 'light',
  brandTitle: 'Galay UI',
  brandImage: 'https://stockbit.com/assets/img/stockbit.svg',
  brandTarget: '_self',
});

addons.setConfig({
  theme: myTheme,
});
