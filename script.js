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
  titleMain.textContent = "Choose the Best Domain for Your Website";
  descriptionMain.textContent =
    "We'll make sure you find the right domain and that it's got a secure home online.";
  hostingBTN.classList.remove("selected-li");
  domainBTN.classList.add("selected-li");
  seoBTN.classList.remove("selected-li");
  emailBTN.classList.remove("selected-li");
});

seoBTN.addEventListener("click", () => {
  titleMain.textContent = "Get best optimization of your website";
  descriptionMain.textContent =
    "Get more traffic to your website. With our 20-in-1 toolkit working behind the scenes, you’ll become an SEO rockstar.";
  hostingBTN.classList.remove("selected-li");
  domainBTN.classList.remove("selected-li");
  seoBTN.classList.add("selected-li");
  emailBTN.classList.remove("selected-li");
});

emailBTN.addEventListener("click", () => {
    titleMain.textContent = "Create your personal business email";
    descriptionMain.textContent =
      "We will set up advertising and all functionality to your business email for communication with customers.";
    hostingBTN.classList.remove("selected-li");
    domainBTN.classList.remove("selected-li");
    seoBTN.classList.remove("selected-li");
    emailBTN.classList.add("selected-li");
  });
