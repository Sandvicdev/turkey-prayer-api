function calculateCountdown(maghribTime) {
  const now = new Date();

  const [hour, minute] = maghribTime.split(":").map(Number);

  const iftar = new Date();
  iftar.setHours(hour, minute, 0, 0);

  // Eğer iftar geçtiyse yarının iftarını ayarla
  if (now >= iftar) {
    iftar.setDate(iftar.getDate() + 1);
  }

  const diff = iftar - now;

  const totalSeconds = Math.floor(diff / 1000);

  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

module.exports = { calculateCountdown };
