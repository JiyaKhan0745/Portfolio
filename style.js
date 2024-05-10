const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonials = document.querySelectorAll(".testimonials");

let counter = 0;

testimonials.forEach((testimonial, index) => {
  testimonial.style.left = `${index * 100}%`;
});

const moveSliderBack = () => {
  if (counter > 0) {
    counter--;
    slideTestimony();
  }
};

const moveSliderForward = () => {
  if (counter < testimonials.length - 1) {
    counter++;
    slideTestimony();
  }
};

const slideTestimony = () => {
  testimonials.forEach((testimonial, index) => {
    testimonial.style.left = `${(index - counter) * 100}%`;
  });
};

testimonialsContainer.addEventListener("transitionend", () => {
  if (counter === testimonials.length - 1) {
    testimonialsContainer.style.transition = "none";
    counter = 0;
    slideTestimony();
    testimonialsContainer.offsetWidth; // Trigger reflow
    testimonialsContainer.style.transition = ""; // Reset transition
  }
});
