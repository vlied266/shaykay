// ============================================
// LENIS SMOOTH SCROLL
// ============================================

const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: "vertical",
  gestureDirection: "vertical",
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ============================================
// GSAP SETUP
// ============================================

gsap.registerPlugin(ScrollTrigger);

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

const navbar = document.querySelector(".navbar");

ScrollTrigger.create({
  trigger: "body",
  onUpdate: (self) => {
    if (self.getVelocity() > 0 || self.progress > 0.05) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  },
});

// ============================================
// HERO SECTION ANIMATIONS
// ============================================

const heroContent = document.querySelector(".hero-content");
const heroMedia = document.querySelector(".hero-media");

if (heroContent) {
  gsap.from(heroContent, {
    opacity: 0,
    y: 40,
    duration: 1,
  });
}

if (heroMedia) {
  gsap.from(heroMedia, {
    opacity: 0,
    y: 60,
    scale: 1.05,
    duration: 1.2,
    delay: 0.3,
  });

  gsap.to(heroMedia, {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
      end: "bottom center",
      scrub: 1,
    },
    scale: 0.98,
    ease: "none",
  });
}

// ============================================
// SECTION REVEAL ANIMATIONS
// ============================================

const sections = document.querySelectorAll(
  ".featured-project, .capabilities-intro, .approach-statement, .process-intro, .process-stage, .tools-field, .selected-work, .work-features, .start-cta, .about-section, .credibility-strip, .testimonials, .trust-statement, .final-showcase, .final-statement"
);

sections.forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 40%",
      scrub: false,
    },
  });
});

// ============================================
// MEDIA ANIMATIONS
// ============================================

const mediaElements = document.querySelectorAll(
  ".featured-visual, .stage-visual-main, .stage-visual-secondary, .showcase-media, .work-item, .about-item, .capability-visual"
);

mediaElements.forEach((media) => {
  gsap.from(media, {
    opacity: 0,
    scale: 1.05,
    duration: 1,
    scrollTrigger: {
      trigger: media,
      start: "top 75%",
      end: "top 35%",
      scrub: false,
    },
  });
});

// ============================================
// STAGGERED TEXT ANIMATIONS
// ============================================

const headings = document.querySelectorAll(
  ".hero-heading, .featured-heading, .intro-heading, .statement-heading, .process-heading, .tools-heading, .work-heading, .start-heading, .showcase-heading, .final-statement h2"
);

headings.forEach((heading) => {
  const lines = heading.innerText.split("\n");
  if (lines.length > 1) {
    heading.innerHTML = lines
      .map((line) => `<span style="display: block; overflow: hidden;"><span style="display: block;">${line}</span></span>`)
      .join("");

    const spans = heading.querySelectorAll("span span");
    gsap.from(spans, {
      y: "100%",
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      scrollTrigger: {
        trigger: heading,
        start: "top 80%",
      },
    });
  }
});

// ============================================
// WORK GALLERY STAGGER
// ============================================

const workItems = document.querySelectorAll(".work-item");

workItems.forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: index * 0.1,
    scrollTrigger: {
      trigger: ".work-gallery",
      start: "top 70%",
    },
  });
});

// ============================================
// APPROACH ITEMS STAGGER
// ============================================

const approachItems = document.querySelectorAll(".approach-item");

approachItems.forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: index * 0.15,
    scrollTrigger: {
      trigger: ".approach-grid",
      start: "top 75%",
    },
  });
});

// ============================================
// TESTIMONIAL STAGGER
// ============================================

const testimonialItems = document.querySelectorAll(".testimonial-item");

testimonialItems.forEach((item, index) => {
  gsap.from(item, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: index * 0.1,
    scrollTrigger: {
      trigger: ".testimonials-carousel",
      start: "top 70%",
    },
  });
});

// ============================================
// TOOLS GRID ANIMATION
// ============================================

const toolsGrid = document.querySelector(".tools-grid");
if (toolsGrid) {
  const toolLabels = toolsGrid.querySelectorAll(".tool-label");

  toolLabels.forEach((label, index) => {
    gsap.to(label, {
      opacity: 0.3 + Math.random() * 0.7,
      duration: 2 + Math.random() * 2,
      delay: index * 0.05,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      scrollTrigger: {
        trigger: ".tools-field",
        start: "top center",
      },
    });
  });
}

// ============================================
// SMOOTH SCROLL TO ANCHORS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      lenis.scrollTo(target, {
        offset: -70,
        duration: 1.5,
      });
    }
  });
});

// ============================================
// VIDEO PLAYBACK
// ============================================

const videos = document.querySelectorAll("video");

videos.forEach((video) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(video);
});

// ============================================
// HOVER EFFECTS (DESKTOP)
// ============================================

if (window.innerWidth > 768) {
  const interactiveElements = document.querySelectorAll(
    ".work-item, .featured-visual, .showcase-media"
  );

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(element, {
        scale: 1.015,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    });
  });
}

// ============================================
// RESIZE HANDLER
// ============================================

window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
});

// ============================================
// INITIALIZATION
// ============================================

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
  console.log("Portfolio loaded successfully");
});

// ============================================
// DISABLE SCROLL WHEN NOT NEEDED
// ============================================

document.addEventListener("touchstart", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
  }
});
