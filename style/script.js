const sound = document.getElementById('popsound');
const nyanCat = document.getElementById('nyan-cat');
const meow = document.getElementById('meosound');

nyanCat.addEventListener('click', () => {
  meow.play();
});

nyanCat.addEventListener('touchstart', () => {
  meow.play();
});

const messages = [
  "❤️ Chúc cậu thật nhiều sức khỏe ❤️", "Chúc cậu luôn luôn xinh đẹp 🌹",
  "Sức khỏe là quan trọng nhất đấy nhé 🎁",
  "Nhớ ăn uống, nghỉ ngơi đầy đủ nhé 😊",
  "Nhớ chăm sóc bản thân thật tốt nhaaa 🏡",
  "Mỗi ngày đều là một món quà, hãy tận hưởng nó nhaa 🎉",
  "Chúc cậu một ngày thật tuyệt vời và tràn đầy niềm vui nhaaa 🌈",

];

let messageIndex = 0;

function showRandomMessage(event) {
  sound.play();
  const msg = document.createElement("div");
  msg.className = "message";
  msg.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  // Random colors for a more lively feel
  const colors = ["#fff0f6", "#f0f5ff", "#f6ffed", "#fffbe6", "#fff2e8"];
  const borderColors = ["#ff4081", "#2f54eb", "#52c41a", "#faad14", "#ff7a45"];
  const colorIdx = Math.floor(Math.random() * colors.length);
  msg.style.backgroundColor = colors[colorIdx];
  msg.style.borderColor = borderColors[colorIdx];
  msg.style.color = borderColors[colorIdx];

  const directions = [0, Math.PI/2, Math.PI, 3*Math.PI/2];
  const angle = directions[Math.floor(Math.random() * directions.length)];
  
  // Calculate a safe distance within the viewport
  const maxDistance = Math.min(window.innerWidth, window.innerHeight) * 0.25;
  const distance = Math.floor(Math.random() * maxDistance) + 80;

  const dx = Math.cos(angle) * distance + "px";
  const dy = Math.sin(angle) * distance + "px";
  msg.style.setProperty('--dx', dx);
  msg.style.setProperty('--dy', dy);

  // Position starting from the button's center
  const rect = event.currentTarget.getBoundingClientRect();
  const startX = rect.left + rect.width / 2;
  const startY = rect.top + rect.height / 2;

  msg.style.left = startX + "px";
  msg.style.top = startY + "px";
  msg.style.position = "fixed";

  document.body.appendChild(msg);

  setTimeout(() => msg.remove(), 3000);
}

