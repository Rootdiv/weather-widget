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
