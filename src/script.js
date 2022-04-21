let gallery;
let galleryItems;
let slideShowStarted = false;
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", function (event) {
  gallery = document.querySelector(".gallery-container");
  galleryItems = gallery.querySelectorAll(".gallery-item");
  showSlides();
});

function showSlides() {
  let i;
  let slides = gallery.querySelectorAll(".gallery-item");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "flex";
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

// document.addEventListener(
//   "scroll",
//   function () {
//     const messageText = isInViewport(gallery)
//       ? "The box is visible in the viewport"
//       : "The box is not visible in the viewport";

//     if (isInViewport(gallery)) {
//     }

//     console.log(messageText);
//   },
//   {
//     passive: true,
//   }
// );

// var getWindowSize = (function () {
//   var docEl = document.documentElement,
//     IS_BODY_ACTING_ROOT = docEl && docEl.clientHeight === 0;

//   // Used to feature test Opera returning wrong values
//   // for documentElement.clientHeight.
//   function isDocumentElementHeightOff() {
//     var d = document,
//       div = d.createElement("div");
//     div.style.height = "2500px";
//     d.body.insertBefore(div, d.body.firstChild);
//     var r = d.documentElement.clientHeight > 2400;
//     d.body.removeChild(div);
//     return r;
//   }

//   if (typeof document.clientWidth == "number") {
//     return function () {
//       return { width: document.clientWidth, height: document.clientHeight };
//     };
//   } else if (IS_BODY_ACTING_ROOT || isDocumentElementHeightOff()) {
//     var b = document.body;
//     return function () {
//       return { width: b.clientWidth, height: b.clientHeight };
//     };
//   } else {
//     return function () {
//       return { width: docEl.clientWidth, height: docEl.clientHeight };
//     };
//   }
// })();

// var minLeft, maxLeft;
// var scrollDownCount = 0;

// function verticalScroll(e) {
//   e.preventDefault();
//   if (e.deltaY < 0) {
//     document.getElementById("section-1").scrollIntoView({ behavior: "smooth" });
//   }
// }

// function horizontalScroll(e) {
//   e.preventDefault();
//   var deltaY = e.deltaY;
//   var preview = document.getElementById("preview");
//   var prevLeftString = window
//     .getComputedStyle(preview)
//     .getPropertyValue("left");

//   var prevLeft = prevLeftString.substring(0, prevLeftString.length - 2);
//   var computedLeft = prevLeft - deltaY / 3;

//   if (computedLeft < minLeft) {
//     computedLeft = minLeft;
//     if (scrollDownCount < 5) {
//       scrollDownCount += 1;
//     } else {
//       document
//         .getElementById("section-2")
//         .scrollIntoView({ behavior: "smooth" });
//       scrollDownCount = 0;
//     }
//   } else if (computedLeft > maxLeft) {
//     computedLeft = maxLeft;
//   }
//   preview.style.left = computedLeft + "px";
// }

document.addEventListener("DOMContentLoaded", function (event) {
  console.log("content loaded", event);
  // var preview = document.getElementById("preview");
  // var section1 = document.getElementById("section-1");
  // var previewItems = document.querySelectorAll(".preview-item");
  // var clientWidth = getWindowSize().width;

  // var computedWidth = 0;
  // var firstPreviewWidth = 0;

  // previewItems.forEach(function (item, index) {
  //   var itemWidthString = window
  //     .getComputedStyle(item)
  //     .getPropertyValue("width");
  //   var itemWidth = itemWidthString.substring(0, itemWidthString.length - 2);
  //   if (index === 0) {
  //     firstPreviewWidth = itemWidth;
  //   }
  //   computedWidth += +itemWidth;
  // });

  // var sectionPaddingString = window
  //   .getComputedStyle(section1)
  //   .getPropertyValue("padding-right");
  // var sectionPaddingRight = sectionPaddingString.substring(
  //   0,
  //   sectionPaddingString.length - 2
  // );

  // var left = clientWidth - firstPreviewWidth - sectionPaddingRight;

  // preview.style.left = left + "px";

  // maxLeft = left;
  // minLeft = left - computedWidth - clientWidth / 5;

  // console.log("sectionPaddingRight", sectionPaddingRight);
  // console.log("computedWidth", computedWidth);
  // console.log("left", left);
  // console.log("maxLeft", maxLeft);
  // console.log("minLeft", minLeft);
});

// function process_touchmove(event) {
//   console.log(event);
// }

// document
//   .getElementById("section-1")
//   .addEventListener("wheel", horizontalScroll);
// document.getElementById("section-2").addEventListener("wheel", verticalScroll);
// document.getElementById("preview").addEventListener("wheel", horizontalScroll);
// document
//   .getElementById("section-1-inner")
//   .addEventListener("touchmove", process_touchmove, false);
