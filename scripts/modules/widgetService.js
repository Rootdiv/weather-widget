import { fetchWeather } from './APIService.js';
import { renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from './render.js';

export const startWidget = async () => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  const dataWeather = await fetchWeather('Москва');
  console.log('dataWeather: ', dataWeather);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(widget, dataWeather.error);
  }
  renderWidgetForecast(widget);

  return widget;
};
