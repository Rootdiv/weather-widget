const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = '9f7e393f92baf0ef62e807536f23a06d';

export const fetchWeather = async city => {
  try {
    const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&units=metric&lang=ru`);
    if (!response.ok || response.status === 404) {
      throw Error('Ошибка запроса');
    }
    const data = await response.json();
    return { success: true, data };
  } catch (error) {
    return { success: false, error };
  }
};
