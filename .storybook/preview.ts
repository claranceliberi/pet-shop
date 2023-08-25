import { setup } from '@storybook/vue3';

import "../assets/css/tailwind.css"

import { registerPrimeVue } from '../plugins/primeVue/registerPrimeVue';


setup( (app) => {
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
