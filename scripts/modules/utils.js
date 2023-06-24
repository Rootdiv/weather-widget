export const getCurrentDateTime = () => {
  const date = new Date();

  const formatDate = new Intl.DateTimeFormat('ru-RU', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
  const currentDate = formatDate.replace('.', '').replace(' г.', '');

  const time = new Intl.DateTimeFormat('ru-RU', {
    hour: '2-digit',
    minute: '2-digit',
  }).format(date);

  const week = new Intl.DateTimeFormat('ru-RU', {
    weekday: 'long',
  }).format(date);

  return { currentDate, time, week };
};

export const calculateDewPoint = (temp, humidity) => {
  const a = 17.27;
  const b = 237.7;

  const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
  const dewPoint = (b * ft) / (a - ft);

  return dewPoint.toFixed(1);
};

export const convertPressure = pressure => {
  const mmHg = pressure * 0.750063755419211;
  return mmHg.toFixed(2);
};

export const getWeatherForecastData = data => {
  const forecast = data.list.filter(
    item => new Date(item.dt_txt).getHours() === 12 && new Date(item.dt_txt).getDate() > new Date().getDate(),
  );

  const forecastData = forecast.map(item => {
    const date = new Date(item.dt_txt);

    const dayOfWeek = new Intl.DateTimeFormat('ru-RU', {
      weekday: 'short',
    }).format(date);

    const weatherIcon = item.weather[0].icon;
    const tempArr = [];

    for (let i = 0; i < data.list.length; i++) {
      const temp = data.list[i].main.temp;
      const tempDate = new Date(data.list[i].dt_txt);

      if (tempDate.getDate() === date.getDate()) {
        tempArr.push(temp.toFixed(1));
      }
    }

    const minTemp = Math.min(...tempArr);
    const maxTemp = Math.max(...tempArr);

    return {
      dayOfWeek,
      weatherIcon,
      minTemp,
      maxTemp,
    };
  });

  return forecastData;
};
