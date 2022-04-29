let gallery;
let galleryItems;
let slideShowStarted = false;
let slideIndex = 0;

let guerillaSlideIndex = 1;

// Next/previous controls
function plusSlides(n) {
  showGuerillaSlides((guerillaSlideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showGuerillaSlides((guerillaSlideIndex = n));
}

function showGuerillaSlides(n) {
  let i;
  let slides = document.getElementsByClassName("guerilla-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    guerillaSlideIndex = 1;
  }
  if (n < 1) {
    guerillaSlideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[guerillaSlideIndex - 1].style.display = "flex";
  dots[guerillaSlideIndex - 1].className += " active";
}

document.addEventListener("DOMContentLoaded", function (event) {
  gallery = document.querySelector(".gallery-container");
  if (gallery) {
    galleryItems = gallery.querySelectorAll(".gallery-item");
    showSlides();
    // showPhotos(slideIndex);
  }
  if (document.getElementsByClassName("guerilla-slide").length > 0) {
    showGuerillaSlides(guerillaSlideIndex);
  }
});

function plusPhoto(n) {
  showPhotos((slideIndex += n));
}

// Thumbnail image controls
function currentPhoto(n) {
  showPhotos((slideIndex = n));
}

function showPhotos(n) {
  let i;
  let slides = document.getElementsByClassName("gallery-item");
  let dots = document.getElementsByClassName("gallery-dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" gallery-active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " gallery-active";
}

function showSlides() {
  let i;
  let slides = gallery.querySelectorAll(".gallery-item");
  let dots = document.getElementsByClassName("gallery-dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" gallery-active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " gallery-active";
  setTimeout(showSlides, 3000);
}

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function toggleMenu() {
  var x = document.getElementsByTagName("nav");
  if (x[0].style.display === "block") {
    x[0].style.display = "none";
    document.getElementById("menuCloseIcon").style.display = "none";
    document.getElementById("menuOpenIcon").style.display = "block";
    document.body.style.overflow = "auto";
  } else {
    x[0].style.display = "block";
    document.body.style.overflow = "hidden";
    document.getElementById("menuCloseIcon").style.display = "block";
    document.getElementById("menuOpenIcon").style.display = "none";
  }
}

let prevScrollpos = 0;
window.onscroll = function () {
  const currentScrollPos = window.pageYOffset;
  const navbar = document.getElementById("navbar");
  if (navbar) {
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-20%";
    }
  }
  prevScrollpos = currentScrollPos;
};

function sendForm() {}

const form = document.getElementById("myForm");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    // handle the form data

    const hen = document.getElementById("hen").checked;
    const field = document.getElementById("field").checked;
    const patch = document.getElementById("garden").checked;
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const animal = document.getElementById("animal").value;
    const note = document.getElementById("note").value;

    let url;

    if (hen) {
      const option = "adopce slepice";
      const baseUrl =
        "https://docs.google.com/forms/d/1wa6JQ8A5scCZgTKim5aCj-Xo3BQoOBjFtvpeZ-hd5RQ";
      const params = `/formResponse?entry.1129579714=${option}&entry.440058418=${name}&entry.1940677981=${email}&entry.609218601=${phone}&entry.1837425085=${animal}&entry.385425575=${note}`;
      url = baseUrl + params;
    } else if (patch) {
      const option = "vlastní záhonek";
      const baseUrl =
        "https://docs.google.com/forms/d/1ebURV3eJuB9SpIyYRRhzN0fjopaFCLrGXJPLVoE1OZE";
      const params = `/formResponse?entry.1992948661=${option}&entry.927632810=${name}&entry.445593250=${email}&entry.1237515599=${phone}&entry.1209230437=${note}`;
      url = baseUrl + params;
    } else if (field) {
      const option = "vlastní políčko";
      const baseUrl =
        "https://docs.google.com/forms/d/1ebURV3eJuB9SpIyYRRhzN0fjopaFCLrGXJPLVoE1OZE";
      const params = `/formResponse?entry.1992948661=${option}&entry.927632810=${name}&entry.445593250=${email}&entry.1237515599=${phone}&entry.1209230437=${note}`;
      url = baseUrl + params;
    }

    fetch(url, { method: "POST", mode: "no-cors" })
      .then((response) => {
        alert("Formulář odeslán | Form sent");
        console.log(response);
      })
      .catch(function (e) {
        console.error("Error:", e);
        alert(
          "Stala se chyba, zkuste prosím znovu později. | An error occured, please try again later."
        );
      });
  });
}

function toggleLang(langId) {
  const location = window.location;

  let newPath;

  if (langId === "cs") {
    newPath = location.pathname.replace("/en", "");
  } else {
    newPath = "/en" + location.pathname;
  }

  const newUrl = location.origin + newPath;
  location.assign(newUrl);
}
