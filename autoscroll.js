document.addEventListener("DOMContentLoaded", () => {
  const scrollBox = document.getElementById("autoScrollBox");
  const toggleBtn = document.getElementById("scrollToggleBtn");

  if (!scrollBox || !toggleBtn) {
    console.error("Elements not found");
    return;
  }

  let isScrolling = false;
  let scrollSpeed = 1; // TEMP: faster so you can SEE it

  function scrollLoop() {
    if (isScrolling) {
      scrollBox.scrollTop += scrollSpeed;

      // Stop at bottom
      if (
        scrollBox.scrollTop + scrollBox.clientHeight >=
        scrollBox.scrollHeight
      ) {
        isScrolling = false;
        toggleBtn.textContent = "▶ Start Auto Scroll";
      }
    }

    requestAnimationFrame(scrollLoop);
  }

  toggleBtn.addEventListener("click", () => {
    console.log("Scrolling:", isScrolling);
console.log("scrollTop:", scrollBox.scrollTop);
console.log("scrollHeight:", scrollBox.scrollHeight);
    isScrolling = !isScrolling;
    toggleBtn.textContent = isScrolling
      ? "⏸ Pause Auto Scroll"
      : "▶ Start Auto Scroll";
  });

  // START LOOP ONCE
  scrollLoop();
});
