// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Accounting for fixed header
        behavior: "smooth",
      });
    }
  });
});

// Add a scroll effect to the navigation bar
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.padding = "0.5rem 0";
    header.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.padding = "1rem 0";
    header.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.2)";
  }
});

// Initialize on page load
document.addEventListener("DOMContentLoaded", function () {
  // Check if images exist and replace with placeholders if needed
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", function () {
      if (!this.getAttribute("data-error-handled")) {
        this.setAttribute("data-error-handled", "true");
        this.src = `https://via.placeholder.com/${this.width}x${this.height}?text=Image+Not+Found`;
      }
    });
  });
});
