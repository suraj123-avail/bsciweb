// Hero button action
document.getElementById("heroBtn").addEventListener("click", () => {
  document.getElementById("heroText").innerText =
    "JavaScript Makes Websites Dynamic 🚀";
});

// Contact form
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMsg").innerText =
    "Thanks! Your message has been sent successfully.";
});

