import { startWidget } from './widgetService.js';

export const cityServiceSearch = widget => {
  const btn = document.querySelector('.widget__change-city');
  btn.addEventListener('click', () => {
    const form = document.createElement('form');
    form.className = 'widget__form';
    const inputCity = document.createElement('input');
    inputCity.className = 'widget__input';
    inputCity.placeholder = 'Введите город';
    inputCity.type = 'search';

    form.append(inputCity);
    widget.append(form);
    inputCity.focus();

    form.addEventListener('submit', async event => {
      event.preventDefault();
      widget.textContent = '';
      await startWidget(inputCity.value, widget);
      cityServiceSearch(widget);
    });
  });
};
