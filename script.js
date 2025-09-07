
// Hero section form submit alert
const form = document.querySelector("form");
form.addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  form.reset();
});

// Scroll-triggered animations
const faders = document.querySelectorAll('.about-container, .projects-container');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

