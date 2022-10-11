const closeMenuBtn = document.getElementById("close-menu-btn");
const navBar = document.getElementById("mobile_navbar");
const toggleBtn = document.getElementById("toggle");
let mobNavItems = document.getElementsByClassName("mob-nav-item");
mobNavItems = Array.prototype.slice.call(mobNavItems);
const projectCards = document.querySelectorAll(".project-card");
const cards = [];

for (let i = 0; i < projectCards.length; i++) {
  const cardObject = {
    name: projectCards[i].childNodes[5].childNodes[1],
    projectDetails: projectCards[i].childNodes[5].childNodes[3],
    description: projectCards[i].childNodes[5].childNodes[5],
    desktopImage: projectCards[i].childNodes[3],
    mobileImage: projectCards[i].childNodes[1],
    techs: projectCards[i].childNodes[5].childNodes[7],
    liveVersion: "https://z4cope.github.io/Mobile-portfolio/",
    srcLink: "https://github.com/z4cope/Mobile-portfolio",
  };
  console.log(projectCards[i].childNodes[5].childNodes[3]);
  cards.push(cardObject);
}

console.log(cards);

toggleBtn.addEventListener("click", () => {
  navBar.style.transform = "translateX(0)";
});

closeMenuBtn.addEventListener("click", () => {
  navBar.style.transform = "translateX(-100%)";
});

mobNavItems.forEach((mobNavItem) => {
  mobNavItem.addEventListener("click", () => {
    navBar.style.transform = "translateX(-100%)";
  });
});
