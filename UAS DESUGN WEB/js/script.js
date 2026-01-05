const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

if (hour >= 5 && hour <= 11) {
  greeting.innerHTML = "Selamat Pagi 👋";
} else if (hour >= 12 && hour <= 14) {
  greeting.innerHTML = "Selamat Siang ☀️";
} else if (hour >= 15 && hour <= 17) {
  greeting.innerHTML = "Selamat Sore 🌤️";
} else {
  greeting.innerHTML = "Selamat Malam 🌙";
}
