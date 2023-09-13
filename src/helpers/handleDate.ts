export const formattedDate = (date: Date) => {
  const daysOfWeek = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  const dayOfWeek = daysOfWeek[date.getDay()];
  const months = [
    "янв",
    "фев",
    "мар",
    "апр",
    "май",
    "июн",
    "июл",
    "авг",
    "сен",
    "окт",
    "ноя",
    "дек",
  ];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  return dayOfMonth + " " + month + ". " + dayOfWeek;
};
export const minutesToHours = (minutes: number) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} минут`;
  } else if (remainingMinutes === 0) {
    return `${hours} ч`;
  } else {
    return `${hours} ч ${remainingMinutes} мин`;
  }
};
