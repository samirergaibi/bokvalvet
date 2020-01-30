function dateToString(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Maj",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Okt",
    "Nov",
    "Dec"
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const theDate = date.getDate();
  return `${theDate} ${months[month]} ${year}`;
}

export default dateToString;
