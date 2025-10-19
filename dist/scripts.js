const btn = document.getElementById("openBtn");
const player = document.getElementById("player");
const video = document.getElementById("loveVideo");
const soundBtn = document.getElementById("soundBtn");

btn.addEventListener("click", () => {
  btn.style.animation = "fadeOutWrapper 1s ease forwards";
  setTimeout(() => {
    btn.style.display = "none";
    player.style.display = "flex";

    video.muted = false;
    video.play().catch(err => {
      console.log("Autoplay có thể bị chặn, cần click thêm:", err);
    });

    soundBtn.textContent = "🔊";
  }, 1000);
});

soundBtn.addEventListener("click", () => {
  video.muted = !video.muted;
  soundBtn.textContent = video.muted ? "🔇" : "🔊";
});
