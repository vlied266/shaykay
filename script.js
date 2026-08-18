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
// HERO MEDIA PARALLAX
// ============================================
const heroMedia = document.querySelector(".hero-media");
if (heroMedia) {
  gsap.to(heroMedia, {
    scrollTrigger: {
      trigger: ".hero",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
    y: 100,
    ease: "none",
  });
}

// ============================================
// SECTION REVEAL ANIMATIONS
// ============================================
const revealElements = document.querySelectorAll(
  ".section-heading, .section-description, .approach-column, .project-block"
);

revealElements.forEach((element) => {
  gsap.from(element, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    scrollTrigger: {
      trigger: element,
      start: "top 85%",
      end: "top 50%",
      scrub: false,
      markers: false,
    },
  });
});

// ============================================
// PROCESS STAGES STAGGER
// ============================================
const processStages = document.querySelectorAll(".process-stage");

processStages.forEach((stage, index) => {
  gsap.from(stage, {
    opacity: 0,
    y: 60,
    duration: 0.9,
    scrollTrigger: {
      trigger: stage,
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    },
  });

  const media = stage.querySelector(".process-media");
  if (media) {
    gsap.from(media, {
      scale: 1.05,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: stage,
        start: "top 75%",
        end: "top 35%",
        scrub: false,
        markers: false,
      },
    });
  }
});

// ============================================
// TOOLKIT MARQUEE ANIMATION
// ============================================
const toolkitTracks = document.querySelectorAll(".toolkit-track");

toolkitTracks.forEach((track, index) => {
  const direction = index % 2 === 0 ? -1 : 1;
  const speed = 100 + index * 20;

  // Clone items for infinite scroll
  const items = track.querySelectorAll("span");
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  gsap.to(track, {
    x: direction * speed + "%",
    duration: 40 + index * 10,
    ease: "none",
    repeat: -1,
    scrollTrigger: {
      trigger: ".toolkit",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      markers: false,
    },
  });
});

// ============================================
// PROJECT HOVER EFFECTS (DESKTOP ONLY)
// ============================================
if (window.innerWidth > 768) {
  const projectBlocks = document.querySelectorAll(".project-block");

  projectBlocks.forEach((project) => {
    const media = project.querySelector(".project-media, .media-placeholder");
    const title = project.querySelector(".project-title");

    if (media) {
      project.addEventListener("mouseenter", () => {
        gsap.to(media, {
          scale: 1.015,
          duration: 0.4,
          ease: "power2.out",
        });

        const video = media.querySelector("video");
        if (video) {
          video.play();
        }
      });

      project.addEventListener("mouseleave", () => {
        gsap.to(media, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      });
    }
  });
}

// ============================================
// CAPABILITIES SCROLL SNAP
// ============================================
const capabilitiesTrack = document.querySelector(".capabilities-track");
if (capabilitiesTrack) {
  // Smooth scroll initialization handled by Lenis
  let isScrolling = false;

  capabilitiesTrack.addEventListener("wheel", (e) => {
    if (!isScrolling) {
      isScrolling = true;
      setTimeout(() => {
        isScrolling = false;
      }, 1000);
    }
  });
}

// ============================================
// FEATURED MEDIA SCALE
// ============================================
const featuredMedia = document.querySelector(".featured-media");
if (featuredMedia) {
  gsap.from(featuredMedia, {
    scale: 1.08,
    opacity: 0,
    duration: 1.2,
    scrollTrigger: {
      trigger: ".featured-work",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
      markers: false,
    },
  });
}

// ============================================
// APPROACH COLUMNS STAGGER
// ============================================
const approachColumns = document.querySelectorAll(".approach-column");
approachColumns.forEach((column, index) => {
  gsap.from(column, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: index * 0.15,
    scrollTrigger: {
      trigger: ".approach",
      start: "top 70%",
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });
});

// ============================================
// TESTIMONIAL CARDS ANIMATION
// ============================================
const testimonialBlocks = document.querySelectorAll(".testimonial-block");
testimonialBlocks.forEach((block, index) => {
  gsap.from(block, {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: index * 0.1,
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 70%",
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });
});

// ============================================
// ABOUT SECTION ANIMATION
// ============================================
const aboutMedia = document.querySelector(".about-media");
const aboutContent = document.querySelector(".about-content");

if (aboutMedia) {
  gsap.from(aboutMedia, {
    opacity: 0,
    x: -60,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });
}

if (aboutContent) {
  gsap.from(aboutContent, {
    opacity: 0,
    x: 60,
    duration: 1,
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      end: "top 30%",
      scrub: false,
      markers: false,
    },
  });
}

// ============================================
// CTA SECTION ANIMATION
// ============================================
const ctaDark = document.querySelector(".cta-dark");
if (ctaDark) {
  gsap.from(ctaDark.querySelector(".section-label"), {
    opacity: 0,
    y: 20,
    duration: 0.8,
    scrollTrigger: {
      trigger: ".cta-dark",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    },
  });

  gsap.from(ctaDark.querySelector(".section-heading"), {
    opacity: 0,
    y: 40,
    duration: 0.8,
    delay: 0.1,
    scrollTrigger: {
      trigger: ".cta-dark",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    },
  });
}

// ============================================
// SMOOTH SCROLL TO ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && document.querySelector(href)) {
      e.preventDefault();
      const target = document.querySelector(href);
      lenis.scrollTo(target, {
        offset: -100,
        duration: 1.5,
      });
    }
  });
});

// ============================================
// HEADER LINK ACTIVE STATE
// ============================================
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveLink() {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveLink);

// ============================================
// VIDEO AUTOPLAY ON MOBILE
// ============================================
function handleVideoAutoplay() {
  const videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (window.innerWidth < 768) {
              video.play().catch(() => {});
            }
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);
  });
}

handleVideoAutoplay();

// ============================================
// RESIZE HANDLER
// ============================================
window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach((trigger) => trigger.refresh());
});

// ============================================
// LOAD COMPLETE
// ============================================
window.addEventListener("load", () => {
  ScrollTrigger.refresh();
  console.log("Portfolio loaded successfully");
});

// ============================================
// CUSTOM CURSOR (OPTIONAL - can be enabled)
// ============================================
const createCustomCursor = () => {
  if (window.innerWidth < 768) return;

  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.innerHTML = '<span class="cursor-text">PLAY</span>';
  document.body.appendChild(cursor);

  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, {
      left: mouseX,
      top: mouseY,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  // Show cursor on project hover
  const projectMedias = document.querySelectorAll(".project-media");
  projectMedias.forEach((media) => {
    media.addEventListener("mouseenter", () => {
      cursor.style.opacity = "1";
      cursor.style.pointerEvents = "auto";
    });

    media.addEventListener("mouseleave", () => {
      cursor.style.opacity = "0";
      cursor.style.pointerEvents = "none";
    });
  });
};

// Uncomment to enable custom cursor
// createCustomCursor();

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    console.log("Escape pressed");
  }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Throttle scroll events
let ticking = false;
function update() {
  ticking = false;
}

document.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(update);
    ticking = true;
  }
});

// Log page performance
if (window.performance && window.performance.timing) {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const perfData = window.performance.timing;
      const pageLoadTime =
        perfData.loadEventEnd - perfData.navigationStart;
      console.log("Page Load Time:", pageLoadTime + "ms");
    }, 0);
  });
}
