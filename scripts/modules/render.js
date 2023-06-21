import { getCurrentDateTime } from './utils.js';

export const renderWidgetToday = (widget, data) => {
  const { currentDate, time, week } = getCurrentDateTime();

  widget.insertAdjacentHTML(
    'beforeend',
    `<div class="widget__today">
      <div class="widget__date-block">
        <p class="widget__date">${currentDate}</p>
        <p class="widget__time">${time}</p>
        <p class="widget__day">${week}</p>
      </div>
      <div class="widget__icon">
        <img class="widget__img" src="./icon/${data.weather[0].icon}.svg" alt="Погода" />
      </div>
      <div class="widget__weather">
        <div class="widget__city">
          <p>${data.name}</p>
          <button class="widget__change-city" aria-label="Изменить город"></button>
        </div>
        <p class="widget__temp-big">${data.main.temp}°C</p>
        <p class="widget__felt">ощущается</p>
        <p class="widget__temp-small">${data.main.feels_like}°C</p>
      </div>
    </div>`,
  );
};

export const renderWidgetOther = (widget, data) => {
  widget.insertAdjacentHTML(
    'beforeend',
    `<div class="widget__other">
      <div class="widget__wind">
        <p class="widget__wind-title">Ветер</p>
        <p class="widget__wind-speed">${data.wind.speed} м/с</p>
        <p class="widget__wind-text">&#8599;</p>
      </div>
      <div class="widget__humidity">
        <p class="widget__humidity-title">Влажность</p>
        <p class="widget__humidity-value">${data.main.humidity}%</p>
        <p class="widget__humidity-text">Т.Р: -0.2 °C</p>
      </div>
      <div class="widget__pressure">
        <p class="widget__pressure-title">Давление</p>
        <p class="widget__pressure-value">${(data.main.pressure * 0.75).toFixed(2)}</p>
        <p class="widget__pressure-text">мм рт.ст.</p>
      </div>
    </div>`,
  );
};

export const renderWidgetForecast = widget => {
  widget.insertAdjacentHTML(
    'beforeend',
    `<ul class="widget__forecast">
      <li class="widget__day-item">
        <p class="widget__day-text">ср</p>
        <img class="widget__day-img" src="./icon/02d.svg" alt="Погода" />
        <p class="widget__day-temp">18.4°/13.7°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">чт</p>
        <img class="widget__day-img" src="./icon/03d.svg" alt="Погода" />
        <p class="widget__day-temp">17.3°/11.3°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">пт</p>
        <img class="widget__day-img" src="./icon/04d.svg" alt="Погода" />
        <p class="widget__day-temp">16.5°/10.9°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">сб</p>
        <img class="widget__day-img" src="./icon/01d.svg" alt="Погода" />
        <p class="widget__day-temp">18.6°/12.5°</p>
      </li>
      <li class="widget__day-item">
        <p class="widget__day-text">вс</p>
        <img class="widget__day-img" src="./icon/03d.svg" alt="Погода" />
        <p class="widget__day-temp">17.3°/11.2°</p>
      </li>
    </ul>`,
  );
};

export const showError = (widget, error) => {
  widget.textContent = error.toString();
  widget.classList.add('widget_error');
};
