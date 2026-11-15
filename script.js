function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function scrollSkills(direction) {
  const container = document.querySelector("#Skills .container");
  if (container) {
    const scrollAmount = 280 * direction;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }
}

// Enable horizontal mouse wheel scrolling over the skills container
document.addEventListener("DOMContentLoaded", () => {
  const skillsContainer = document.querySelector("#Skills .container");
  if (skillsContainer) {
    skillsContainer.addEventListener(
      "wheel",
      (e) => {
        if (e.deltaY !== 0) {
          e.preventDefault();
          skillsContainer.scrollBy({ left: e.deltaY, behavior: "smooth" });
        }
      },
      { passive: false }
    );
  }
});
