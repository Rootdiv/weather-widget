import { startWidget } from './modules/widgetService.js';

const initWidget = async app => {
  const widget = await startWidget();
  app.append(widget);
};

const app = document.querySelector('#app');

initWidget(app);
