document.addEventListener("DOMContentLoaded", () => {
  // Download CV button
  const downloadBtn = document.getElementById("downloadCV");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const link = document.createElement("a");
      link.href = "files/Abdessamed_CV.pdf";
      link.download = "Abdessamed_CV.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  // Nav smooth scroll and active state
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelectorAll("nav ul li a").forEach((nav) => nav.classList.remove("active"));
      this.classList.add("active");

      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Go to Top button logic
  const goTopBtn = document.getElementById("goTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      goTopBtn.style.display = "block";
    } else {
      goTopBtn.style.display = "none";
    }
  });

  goTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
});
