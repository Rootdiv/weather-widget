import { fetchWeather, fetchForecast } from './APIService.js';
import { renderWidgetToday, renderWidgetOther, renderWidgetForecast, showError } from './render.js';

export const startWidget = async city => {
  const widget = document.createElement('div');
  widget.className = 'widget';

  const dataWeather = await fetchWeather(city);

  if (dataWeather.success) {
    renderWidgetToday(widget, dataWeather.data);
    renderWidgetOther(widget, dataWeather.data);
  } else {
    showError(widget, dataWeather.error);
  }

  const dataForecast = await fetchForecast(city);

  if (dataForecast.success) {
    renderWidgetForecast(widget, dataForecast.data);
  } else {
    showError(widget, dataForecast.error);
  }

  return widget;
};
