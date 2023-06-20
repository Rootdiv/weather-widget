import { renderWidgetToday, renderWidgetOther, renderWidgetForecast } from './render.js';

export const startWidget = () => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  renderWidgetToday(widget);
  renderWidgetOther(widget);
  renderWidgetForecast(widget);

  return widget;
};
