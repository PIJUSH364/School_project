'use strict';

//======notification======//
///////////////////////////

const notifiacation = document.querySelector('.notifiacation');
const got_it = document.querySelector('.notifiacation_button');

got_it.addEventListener('click', function () {
  notifiacation.classList.add('notifiacation_hidden');
});

// /////////////////////////////////////

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// ///////////////////////////////////////
// // Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);
  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tab
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// ________DropDownMenu______

const dropDownMenuIcon = document.querySelector('.dropDownMenuIcon');
const removeMenu = document.querySelector('.removeMenu');
const listDown = document.querySelector('.listDown');

dropDownMenuIcon.addEventListener('click', function (e) {
  console.log('lol');
  dropDownMenuIcon.style.display = 'none';
  removeMenu.style.display = 'block';
  listDown.style.display = 'flex';
});

removeMenu.addEventListener('click', function (e) {
  dropDownMenuIcon.style.display = 'flex';
  removeMenu.style.display = 'none';
  listDown.style.display = 'none';
});
