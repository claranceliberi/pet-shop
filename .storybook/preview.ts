import { setup } from '@storybook/vue3';

import "../assets/css/tailwind.css"
import "primevue/resources/themes/lara-light-blue/theme.css"
import { registerPrimeVue } from '../plugins/registerPrimeVue';


setup((app) => {
  registerPrimeVue(app)
});


export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  };
