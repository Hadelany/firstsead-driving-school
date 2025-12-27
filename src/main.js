document.addEventListener("DOMContentLoaded", () => {
  // --- 1. MOBILE MENU LOGIC ---
  const menuBtn = document.getElementById("mobile-menu");
  const navList = document.getElementById("nav-list");

  if (menuBtn && navList) {
    menuBtn.addEventListener("click", () => {
      navList.classList.toggle("active");
      menuBtn.classList.toggle("is-active");
    });

    document.querySelectorAll(".nav-links a").forEach((link) => {
      link.addEventListener("click", () => {
        navList.classList.remove("active");
        menuBtn.classList.remove("is-active");
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

  // --- 4. FORM SUBMISSION WITH VALIDATION ---
  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = bookingForm.querySelector('input[type="text"]').value;
      const phone = bookingForm.querySelector('input[type="tel"]').value;
      const service = bookingForm.querySelector("select").value;

      if (phone.length < 11) {
        alert("Please enter a valid Nigerian phone number.");
        return;
      }
      if (service === "") {
        alert("Please select a training package.");
        return;
      }

      alert(
        `Thank you ${name}! Your request for ${service} has been sent. We will call you at ${phone} shortly.`
      );
      bookingForm.reset();
    });
  }

  // --- 5. SMOOTH SCROLLING ---
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
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

  // --- 6. SCROLL REVEAL LOGIC ---
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", reveal);
  reveal();

  // --- 7. TESTIMONIAL SLIDER LOGIC ---
  const container = document.getElementById("testimonial-container");
  const dotsContainer = document.getElementById("slider-dots");
  const nextBtn = document.getElementById("nextTestimonial");
  const prevBtn = document.getElementById("prevTestimonial");

  if (container && dotsContainer) {
    const cards = container.querySelectorAll(".testimonial-card");

    // Create dots
    cards.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        container.scrollTo({
          left: container.offsetWidth * index,
          behavior: "smooth",
        });
      });
      dotsContainer.appendChild(dot);
    });

    // Update dots on scroll
    container.addEventListener("scroll", () => {
      const scrollIndex = Math.round(
        container.scrollLeft / container.offsetWidth
      );
      const allDots = dotsContainer.querySelectorAll(".dot");
      allDots.forEach((dot, index) => {
        dot.classList.toggle("active", index === scrollIndex);
      });
    });

    // Buttons
    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        container.scrollBy({ left: container.offsetWidth, behavior: "smooth" });
      });
    }
    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        container.scrollBy({
          left: -container.offsetWidth,
          behavior: "smooth",
        });
      });
    }
  }
}); // End of DOMContentLoaded (Line 144 approx)

// --- LOADING SPINNER LOGIC ---
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("fade-out");
  }, 500);
});
