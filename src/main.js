document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE MENU LOGIC ---
  const menuBtn = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuBtn.classList.toggle("is-active"); // For hamburger animation
    });

    // Close menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
      });
    });
  }

  // --- 2. PRICING TABS LOGIC ---
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabPanels = document.querySelectorAll(".tab-panel");

  tabButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabButtons.forEach((b) => b.classList.remove("active"));
      tabPanels.forEach((p) => p.classList.remove("active"));

      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      const panel = document.getElementById(target);
      if (panel) panel.classList.add("active");
    });
  });

  // --- 3. FAQ ACCORDION LOGIC ---
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const header = item.querySelector(".faq-header");
    header.addEventListener("click", () => {
      const isActive = item.classList.contains("active");
      faqItems.forEach((i) => i.classList.remove("active"));
      if (!isActive) item.classList.add("active");
    });
  });

  // --- 4. FORM SUBMISSION ---
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Request Sent! FirstSead Driving School will contact you shortly.");
      bookingForm.reset();
    });
  }
});

// --- 5. SMOOTH SCROLLING LOGIC ---
// This targets all anchor tags that start with #
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault(); // Stop the "jump"

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// --- LOADING SPINNER LOGIC ---
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");

  // Add a slight delay (500ms) so the user actually sees the nice spinner
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 500);
});
