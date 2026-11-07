const today = new Date();
today.setHours(0, 0, 0, 0);

const performanceDate = new Date(2026, 7, 8);
const millisecondsPerDay = 24 * 60 * 60 * 1000;
const difference = performanceDate.getTime() - today.getTime();
const days = Math.ceil(Math.abs(difference) / millisecondsPerDay);
const countdown = document.getElementById('倒數');

if (countdown) {
  countdown.textContent = difference >= 0
    ? `還有 ${days} 天`
    : `已於 ${days} 天前登場`;
}