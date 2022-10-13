import data from './cardsData.js';

const worksSection = document.getElementById('works-container');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navBar = document.getElementById('mobile_navbar');
const toggleBtn = document.getElementById('toggle');
let mobNavItems = document.getElementsByClassName('mob-nav-item');
mobNavItems = Array.prototype.slice.call(mobNavItems);

toggleBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(0)';
});

closeMenuBtn.addEventListener('click', () => {
  navBar.style.transform = 'translateX(-100%)';
});

mobNavItems.forEach((mobNavItem) => {
  mobNavItem.addEventListener('click', () => {
    navBar.style.transform = 'translateX(-100%)';
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const mobImg = [];
  const desktopImage = [];
  const projectNames = [];
  const projectInfo = [];
  const projectDescriptions = [];
  const projectSkills = [];
  let response = data.map((res) => {
    mobImg.push(res.mobileImg);
    desktopImage.push(res.desktopImg);
    projectNames.push(res.name);
    projectInfo.push(res.project_info);
    projectDescriptions.push(res.description);
    projectSkills.push(res.project_skills);
    return `<article class="project-card first-project">
    <img
      class="project-img mobile-img"
      src="${res.mobileImg}"
      alt="Snapshoot for the project image"
    />
    <img
      class="project-img desktop-img"
      src="${res.desktopImg}"
      alt="Snapshoot for the project image"
    />
    <div class="works-content-container">
      <h2 class="project-name">${res.name}</h2>
      <div class="project-details">
        <h3>${res.project_info[0]}</h3>
        <img
          src="./design/assets/Counter.svg"
          alt="Decorative separator dot image"
        />
        <h3>${res.project_info[1]}</h3>
        <img
          src="./design/assets/Counter.svg"
          alt="Decorative separator dot image"
        />
        <h3>${res.project_info[2]}</h3>
      </div>
      <p class="project-description">
      ${res.description}
      </p>
      <ul class="project-used-techs">
        <li>${res.project_skills[0]}</li>
        <li>${res.project_skills[1]}</li>
        <li>${res.project_skills[2]}</li>
      </ul>
      <button class="call-to-action-btns">${res.project_button}</button>
    </div>
  </article>`;
  });

  const projectCards = document.getElementsByClassName('project-card');
  response = response.join('');
  worksSection.innerHTML = response;

  const modalContainer = document.createElement('div');
  modalContainer.classList.add('modal-container');
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modalContainer.append(modal);
  worksSection.append(modalContainer);
  modalContainer.setAttribute('id', 'modal-container');

  Array.prototype.slice.call(projectCards).forEach((eachCard, index) => {
    const cardBtn = eachCard.childNodes[5].childNodes[9];

    cardBtn.addEventListener('click', () => {
      document.body.classList.add('stop-scrolling');
      modalContainer.style.transform = 'translateX(0)';
      modal.innerHTML = `
      <img id="close-modal" src="./design/assets/close-modal.svg" />
      <h2 class="project-name">${projectNames[index]}</h2>
      <div class="project-details">
        <h3>${projectInfo[index][0]}</h3>
        <img src="./design/assets/Counter.svg" alt="Decorative separator dot image">
        <h3>${projectInfo[index][1]}</h3>
        <img src="./design/assets/Counter.svg" alt="Decorative separator dot image">
        <h3>${projectInfo[index][2]}</h3> 
      </div>
      <img class="modal-desktop-img" src="${desktopImage[index]}" />
      <div class="modal-details">
        <p>${projectDescriptions}</p>
        <div>
        <ul class="project-used-techs modal-used-techs">
          <li>${projectSkills[index][0]}</li>
          <li>${projectSkills[index][1]}</li>
          <li>${projectSkills[index][2]}</li>
        </ul>
        <div class="see-more-btns">
          <a onclick="window.open('https://z4cope.github.io/Mobile-portfolio/')" target="_blank" class="call-to-action-btns modal-btn">See live <img src="./design/assets/see-more.svg" /></a>
          <a onclick="window.open('https://github.com/z4cope/Mobile-portfolio')" target="_blank" class="call-to-action-btns modal-btn">See Source <img src="./design/assets/github-link.svg" /></a>
        </div>
        </div>
      </div>
      `;
      const closeBtn = document.getElementById('close-modal');
      closeBtn.addEventListener('click', () => {
        modalContainer.style.transform = 'translateX(-100%)';
        document.body.classList.remove('stop-scrolling');
      });
    });
  });
});

const userForm = document.getElementsByTagName('form')[0];
const userEmail = document.getElementById('user-email');
let validValue = false;
const messageContainer = document.getElementById('message-box');
let validEmailValue;

userEmail.addEventListener('input', (e) => {
  validEmailValue = e.target.value.toLowerCase();
  if (validEmailValue === e.target.value) {
    validValue = true;
  } else {
    validValue = false;
  }
});

userForm.addEventListener('submit', (e) => {
  if (!validValue) {
    const message = document.createElement('p');
    message.innerText = 'Please fill your email properly in lower case';
    messageContainer.append(message);
    messageContainer.style.opacity = '1';
    e.preventDefault();
  }
});

const userFormData = {
  name: '',
  email: '',
  message: '',
};

userForm.elements.inputName.addEventListener('blur', () => {
  userFormData.name = userForm.elements.inputName.value;
});

userForm.elements.inputEmail.addEventListener('blur', () => {
  userFormData.email = userForm.elements.inputEmail.value;
});

userForm.elements.inputMessage.addEventListener('blur', () => {
  userFormData.message = userForm.elements.inputMessage.value;
  window.localStorage.setItem('userFormData', JSON.stringify(userFormData));
});

userForm.elements.inputName.value = JSON.parse(
  window.localStorage.getItem('userFormData'),
).name;

userForm.elements.inputEmail.value = JSON.parse(
  window.localStorage.getItem('userFormData'),
).email;

userForm.elements.inputMessage.value = JSON.parse(
  window.localStorage.getItem('userFormData'),
).message;
