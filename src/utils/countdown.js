function calculateCountdown(maghribTime) {
  const now = new Date();

  const [hour, minute] = maghribTime.split(":");

  const iftar = new Date();
  iftar.setHours(hour);
  iftar.setMinutes(minute);
  iftar.setSeconds(0);

  if (iftar < now) {
    return "İftar vakti geçti";
  }

  const diff = iftar - now;

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  return `${hours} saat ${minutes} dakika kaldı`;
}

module.exports = { calculateCountdown };