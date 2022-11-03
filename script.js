//Main menu button choice functional
const hostingBTN = document.querySelector("#hosting");
const domainBTN = document.querySelector("#domain");
const seoBTN = document.querySelector("#seo");
const emailBTN = document.querySelector("#email");

const titleMain = document.querySelector("#title-main");
const descriptionMain = document.querySelector("#description-main");

hostingBTN.addEventListener("click", () => {
  titleMain.textContent = "Premium Web Hosting for Your Website";
  descriptionMain.textContent =
    "Blazing fast web hosting for individuals and businesses of all sizes backed by 24 x 7 x 365 Support.";
  hostingBTN.classList.add("selected-li");
  domainBTN.classList.remove("selected-li");
  seoBTN.classList.remove("selected-li");
  emailBTN.classList.remove("selected-li");
});

domainBTN.addEventListener("click", () => {
  titleMain.textContent = "Choose the Best Domain for Website";
  descriptionMain.textContent =
    "Choose from 300 domain endings. We'll make sure you find the right domain.";
  hostingBTN.classList.remove("selected-li");
  domainBTN.classList.add("selected-li");
  seoBTN.classList.remove("selected-li");
  emailBTN.classList.remove("selected-li");
});

seoBTN.addEventListener("click", () => {
  titleMain.textContent = "Get best optimization of Your Website";
  descriptionMain.textContent =
    "With our 20-in-1 toolkit working behind the scenes, you’ll become an SEO rockstar.";
  hostingBTN.classList.remove("selected-li");
  domainBTN.classList.remove("selected-li");
  seoBTN.classList.add("selected-li");
  emailBTN.classList.remove("selected-li");
});

emailBTN.addEventListener("click", () => {
  titleMain.textContent = "Create Your Personal Business Email";
  descriptionMain.textContent =
    "We will set up advertising and all functionality to your business email for communication with customers.";
  hostingBTN.classList.remove("selected-li");
  domainBTN.classList.remove("selected-li");
  seoBTN.classList.remove("selected-li");
  emailBTN.classList.add("selected-li");
});

//PACKAGES FUNCTIONAL
const basicBTN = document.querySelector("#basic-package");
const premiumBTN = document.querySelector("#premium-package");

const checkboxMonthYear = document.querySelector(".checkbox");
const year = document.querySelector("#year");
const month = document.querySelector("#month");

const starterPrice = document.querySelector("#starter-price");
const standardPrice = document.querySelector("#standard-price");
const supremPrice = document.querySelector("#suprem-price");

checkboxMonthYear.addEventListener("change", () => {
  if (!this.checked) {
    console.log("not checked");
    year.classList.toggle("active-date");
    month.classList.toggle("active-date");
  }

  if (
    month.classList.contains("active-date") &&
    basicBTN.classList.contains("active")
  ) {
    starterPrice.textContent = "$2.80";
    standardPrice.textContent = "$4.20";
    supremPrice.textContent = "$7.00";
  } else if (
    month.classList.contains("active-date") &&
    premiumBTN.classList.contains("active")
  ) {
    starterPrice.textContent = "$15.30";
    standardPrice.textContent = "$27.70";
    supremPrice.textContent = "$42.10";
  } else {
    console.log("not btn1");
  }

  if (
    year.classList.contains("active-date") &&
    basicBTN.classList.contains("active")
  ) {
    starterPrice.textContent = "$24.99";
    standardPrice.textContent = "$44.99";
    supremPrice.textContent = "$74.99";
  } else if (
    year.classList.contains("active-date") &&
    premiumBTN.classList.contains("active")
  ) {
    starterPrice.textContent = "$179.99";
    standardPrice.textContent = "$329.99";
    supremPrice.textContent = "$499.99";
  } else {
    console.log("not btn2");
  }
});

basicBTN.addEventListener("click", () => {
  basicBTN.classList.add("active");
  premiumBTN.classList.remove("active");
});

premiumBTN.addEventListener("click", () => {
  basicBTN.classList.remove("active");
  premiumBTN.classList.add("active");
});
