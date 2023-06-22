import { startWidget } from './modules/widgetService.js';

export const initWidget = async (app, city = 'Москва') => {
  app.textContent = '';
  const widget = await startWidget(city);
  app.append(widget);
};

const app = document.querySelector('#app');

initWidget(app);
