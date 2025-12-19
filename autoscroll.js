document.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.getElementById("autoScrollBox");
  const toggleBtn = document.getElementById("scrollToggleBtn");
  const speedSelect = document.getElementById("scrollSpeedSelect");

  let isScrolling = false;
  let scrollSpeed = parseFloat(speedSelect.value); // base speed value
  let lastTime = null;

  function animate(time) {
    if (!lastTime) lastTime = time;
    const delta = time - lastTime;
    lastTime = time;

    if (isScrolling) {
      // ✅ FIXED FORMULA (non-linear, smooth perception)
      const adjustedSpeed = Math.sqrt(scrollSpeed) * 10;
      const distance = (adjustedSpeed * delta) / 1000;

      scrollBox.scrollTop += distance;
    }

    requestAnimationFrame(animate);
  }

  function startScrolling() {
    isScrolling = true;
    lastTime = null;
    toggleBtn.textContent = "⏸ Pause Auto Scroll";
  }

  function stopScrolling() {
    isScrolling = false;
    toggleBtn.textContent = "▶ Start Auto Scroll";
  }

  toggleBtn.addEventListener("click", () => {
    isScrolling ? stopScrolling() : startScrolling();
  });

  speedSelect.addEventListener("change", (e) => {
    scrollSpeed = parseFloat(e.target.value);
  });

  requestAnimationFrame(animate);
});
