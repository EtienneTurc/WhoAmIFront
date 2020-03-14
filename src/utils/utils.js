function getDayInSeconds(date) {
  let millisecondsInDay = 1000 * 3600 * 24;
  return Math.floor(date / millisecondsInDay) * millisecondsInDay;
}

export { getDayInSeconds };
