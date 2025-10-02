const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}


const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));


const blurHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50 ?
    header.classList.add("blur-header") :
    header.classList.remove("blur-header");
};
window.addEventListener("scroll", blurHeader);


const contactForm = document.getElementById("contact-form");
const contactMessage = document.getElementById("contact-message");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_3tdnr0c",
      "template_0kwzekc",
      "#contact-form",
      "apmlagYUIz_6eFqtw"
    )
    .then(
      () => {
        contactMessage.textContent = "Message sent successfully ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 5000);
        contactForm.reset();
      },
      () => {
        contactMessage.textContent = "Message not sent (service error) ❌";
      }
    );
};

contactForm.addEventListener("submit", sendEmail);


const scrollUp = () => {
  const scrollUpButton = document.getElementById("scroll-up");
  window.scrollY >= 350 ?
    scrollUpButton.classList.add("show-scroll") :
    scrollUpButton.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);


const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionsClass = document.querySelector(
      ".nav__menu a[href*=" + sectionId + "]"
    );

    if (sectionsClass) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    }
  });
};
window.addEventListener("scroll", scrollActive);


const music = document.getElementById('background-music');
const musicControlButton = document.getElementById('music-control');
const musicIcon = musicControlButton.querySelector('i');

musicControlButton.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    musicIcon.classList.remove('ri-play-line');
    musicIcon.classList.add('ri-pause-line');
  } else {
    music.pause();
    musicIcon.classList.remove('ri-pause-line');
    musicIcon.classList.add('ri-play-line');
  }
});


const sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  delay: 400,
});

sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`);
sr.reveal(`.home__image`, {
  origin: 'bottom'
});
sr.reveal(`.about__data, .skills__content`, {
  origin: "left"
});
sr.reveal(`.about__image, .skills__data`, {
  origin: "right"
});


particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ff00ff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      }
    },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#8A2BE2",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "repulse": {
        "distance": 100,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      }
    }
  },
  "retina_detect": true
});


const educationSwiper = new Swiper('.education__container.swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1152: {
      slidesPerView: 3,
    }
  }
});

const projectsSwiper = new Swiper('.projects__container.swiper', {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1152: {
      slidesPerView: 3,
    }
  }
});


const educationCards = document.querySelectorAll('.education__card.swiper-slide');

educationCards.forEach(card => {
  card.addEventListener('click', function(event) {
    // Cek apakah elemen yang diklik adalah link (<a>) atau berada di dalam link.
    // Jika ya, jangan lakukan apa-apa (biarkan link berfungsi normal).
    if (event.target.closest('.education__card-front a')) {
      return;
    }

    this.classList.toggle('is-flipped');
  });
});
