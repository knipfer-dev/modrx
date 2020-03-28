import App from './App.js';

const app = new App({
  target: document.querySelector('#app'),
  props: {
    ready: false,
  },
});

window.initMap = function ready() {
  app.$set({ ready: true });
};
