/*-------Quote Generator------ */

const quoteElement = document.getElementById("quote");
const authorElement = document.getElementById("author");
const quoteContainer = document.querySelector(".quote-container");

let quotes = [];
const url = "https://type.fit/api/quotes";

async function fetchData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    quotes = [...data];
    console.log(quotes);
  } catch (error) {
    console.log(error);
  }
}

fetchData().then(() => {
  generateQuote();
  setInterval(generateQuote, 10000);
});

// generateQuote();
function generateQuote() {
  let randomIndex = Math.floor(Math.random() * quotes.length);

  quoteContainer.classList.remove("fade-in");

  setTimeout(() => {
    quoteElement.textContent = quotes[randomIndex].text;
    authorElement.textContent = quotes[randomIndex].author;

    // Add fade-in effect
    quoteContainer.classList.add("fade-in");
  }, 5000);
}

/*--------Smooth Section Scrolling------------- */

document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

/*---------------- Change Theme------------------ */

//Get change toggle mode button
const changeModeButton = document.querySelector("#btn-change-theme-color");
const formImgEl = document.querySelector("#form-svg");
//Get body element
const body = document.body;

const btnText = document.querySelector(".btn_text");
const btnIcon = document.querySelector(".theme_icon");

// Add click event listener to mode Button
changeModeButton.addEventListener("click", function () {
  body.classList.toggle("summer_theme");
  if (body.classList.contains("summer_theme")) {
    formImgEl.setAttribute("src", "./assets/images/form_img_summer_theme.svg");
    btnText.textContent = "Brogrammer Edition";
    btnIcon.classList.replace("bi-thermometer-sun", "bi-cloud-moon-fill");
  } else {
    formImgEl.setAttribute("src", "./assets/images/form_img.svg");
    btnText.textContent = "Summer Edition";
    btnIcon.classList.replace("bi-cloud-moon-fill", "bi-thermometer-sun");
  }
});

/*---------------- Welcome on Loading Page --------------*/

const animatedEl = document.querySelector(".right_welcome");

const heroSectionEl = document.querySelector("#landing-page");
const animationSectionEl = document.querySelector(".animation_section");
const headerEl = document.querySelector(".header_container");

// disable scrolling
document.body.style.overflow = "hidden";
// landingPageContainer.classList.add("bg-color-landing");

animatedEl.addEventListener("animationend", () => {
  // do something
  setTimeout(() => {
    animationSectionEl.classList.add("hidden");
    // landingPageContainer.classList.remove("bg-color-landing");
    heroSectionEl.classList.remove("hidden");
    heroSectionEl.classList.add("show");

    headerEl.classList.remove("hidden");
    headerEl.classList.add("show");

    document.body.style.overflow = "visible";
  }, 1500);

  setTimeout(() => {
    animationSectionEl.style.display = "none";
  }, 3000);
});

/*------------Scroll to the top button----------- */
const scrollToTopButton = document.getElementById("scrollToTopButton");

// Show the button when user scrolls down the page
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Scroll to the top when the button is clicked
scrollToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*------------------From Validation----------------- */

/*---------------- Make submit form send email to grigonickos@....--------------- */
