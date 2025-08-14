




// var navbar = document.querySelector("nav");
var navbarlink1 = document.getElementById("navlink1");
var navbarlink2 = document.getElementById("navlink2");
var navbarlink3 = document.getElementById("navlink3");
var navbarlink4 = document.getElementById("navlink4");
var navbarlink5 = document.getElementById("navlink5");
// var navbarbutton = document.getElementById("join-button");
// var navbarbuttontext = document.getElementById("join-button-text");

window.onscroll = function () {
  // pageYOffset or scrollY
  if (window.pageYOffset > 200) {
    // navbar.classList.add("scrolled");
    navbarlink1.classList.add("scroll");
    navbarlink2.classList.add("scroll");
    navbarlink3.classList.add("scroll");
    navbarlink4.classList.add("scroll");
    navbarlink5.classList.add("scroll");
    // navbarbutton.classList.add("scroll");
    // navbarbuttontext.classList.add("scroll");
  } else {
    // navbar.classList.remove("scrolled");
    navbarlink1.classList.remove("scroll");
    navbarlink2.classList.remove("scroll");
    navbarlink3.classList.remove("scroll");
    navbarlink4.classList.remove("scroll");
    navbarlink5.classList.remove("scroll");
    // navbarbutton.classList.remove("scroll");
    // navbarbuttontext.classList.remove("scroll");
  }
};


/*alcher 2026 js*/
     const testimonials = [
  {
    pfp: "IMAGES/pfp1.png",
    image: "IMAGES/pfp1.png",
    name: "- John Doe",
    text: "John's testimonial goes here. Amazing stuff!  John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff! John's testimonial goes here. Amazing stuff!   ",
  },
  {
    pfp: "IMAGES/pfp2.png",
    image: "IMAGES/pfp2.png",
    name: "- Jane Smith",
    text: "Jane loved the experience. So should you!",
  },
  {
    pfp: "IMAGES/pfp3.png",
    image: "IMAGES/pfp3.png",
    name: "- Max Turner",
    text: "This platform is insanely good. Kudos!",
  },
  {
    pfp: "IMAGES/pfp4.png",
    image: "IMAGES/pfp4.png",
    name: "- Alicia Belarus",
    text: "Alicia's feedback is glowing, just like this UI.",
  },
  {
    pfp: "IMAGES/pfp5.png",
    image: "IMAGES/pfp5.png",
    name: "- Rajiv Gandhi",
    text: "Great testimonials, smooth experience!",
  },
  {
    pfp: "IMAGES/pfp6.png",
    image: "IMAGES/pfp6.png",
    name: "- Angel Priya",
    text: "Clean design, and I loved the flow!",
  },
];

let currentIndex = 0;



const mainImage = document.querySelector(".frame2 > div img");
const textElement = document.querySelector(".text");
const nameElement = document.querySelector(".name");

function renderTestimonial(index) {
  const data = testimonials[index];
  mainImage.src = data.image;
  textElement.textContent = data.text;
  nameElement.textContent = data.name;
  updateActiveDot(); // new
}


document.querySelector(".left-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial(currentIndex);
});

document.querySelector(".right-arrow").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length;
  renderTestimonial(currentIndex);
});


document.querySelectorAll(".pfp img").forEach((img, index) => {
  img.addEventListener("click", () => {
    currentIndex = index;
    renderTestimonial(currentIndex);
    
  });
});


renderTestimonial(currentIndex);
const dotsContainer = document.querySelector(".dots-container");

// Create dots dynamically
testimonials.forEach((_, index) => {
  const dot = document.createElement("span");
  dot.classList.add("dot");
  if (index === currentIndex) dot.classList.add("active");

  dot.addEventListener("click", () => {
    currentIndex = index;
    renderTestimonial(currentIndex);
    updateActiveDot();
  });

  dotsContainer.appendChild(dot);
});

function updateActiveDot() {
  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === currentIndex);
  });
}


// Mobile swipe support
let startX = 0;

document.querySelector(".frame2").addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

document.querySelector(".frame2").addEventListener("touchend", (e) => {
  const endX = e.changedTouches[0].clientX;
  const diff = startX - endX;

  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      // swipe left
      currentIndex = (currentIndex + 1) % testimonials.length;
    } else {
      // swipe right
      currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    }
    renderTestimonial(currentIndex);
  }
});


     
     
     const upApos = document.querySelector(".up-apos img");
      const downApos = document.querySelector(".down-apos img");

      let prevAngleUp = 0;
      let prevAngleDown = 0;

      document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        rotateToCursor(
          upApos,
          mouseX,
          mouseY,
          (angle) => (prevAngleUp = angle)
        );
        rotateToCursor(
          downApos,
          mouseX,
          mouseY,
          (angle) => (prevAngleDown = angle)
        );
      });

      function rotateToCursor(el, mouseX, mouseY, updatePrevAngle) {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;

        const dx = mouseX - cx;
        const dy = mouseY - cy;
        const angleRad = Math.atan2(dy, dx);
        const angleDeg = angleRad * (180 / Math.PI);

        el.style.transform = `rotate(${angleDeg}deg)`;
        updatePrevAngle(angleDeg);
      }


  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faq = question.parentElement;
      faq.classList.toggle("open");
    });
  });
/*Alcher 2026 end*/
  

 
  