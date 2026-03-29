const animatedBlocks = document.querySelectorAll(
  ".hero-copy, .quick-card, .section-head, .card, .photo-card, .split-card, .contact-wrap"
);

animatedBlocks.forEach((el) => {
  el.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

animatedBlocks.forEach((el) => {
  revealObserver.observe(el);
});
