import movingMushroom from '../assets/mushroom-icon-active.gif';
import genHome from "../pages/home"
import  bindEvents from './nav-events';
import resizeEvent from './resize-event';


// Creates content that will always be on the page, and initiates animations that are only going to fire once.

function createMain() {
    const content = document.createElement('div');
    content.setAttribute('id', 'content')
    document.body.appendChild(content);

    const rightSide = document.createElement('div');
    rightSide.classList.add('r-side');
    content.appendChild(rightSide);

    const leftSide = document.createElement('div');
    leftSide.classList.add('l-side');
    content.appendChild(leftSide)

    const nav = document.createElement('div');
    nav.classList.add('nav');

    const navShroomRight = document.createElement('img');
    navShroomRight.src = movingMushroom;

    const navShroomLeft = document.createElement('img');
    navShroomLeft.src = movingMushroom;

    const unorderedList = document.createElement('ul');
    
    const home = document.createElement('li');
    const homeButton = document.createElement('span');
    homeButton.textContent = 'home'
    home.setAttribute('id','home');
    home.appendChild(homeButton);

    const menu = document.createElement('li');
    const menuButton = document.createElement('span');
    menuButton.textContent = 'menu';
    menu.setAttribute('id','menu');
    menu.appendChild(menuButton);

    const contact = document.createElement('li');
    const contactButton = document.createElement('span');
    contactButton.textContent = 'contact';
    contact.setAttribute('id', 'contact');
    contact.appendChild(contactButton);

    unorderedList.appendChild(home);
    unorderedList.appendChild(menu);
    unorderedList.appendChild(contact);

    nav.appendChild(navShroomLeft);
    nav.appendChild(unorderedList);
    nav.appendChild(navShroomRight);

    content.appendChild(nav);

    const main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(main);

    setTimeout(function() { for(let i = 0; i < 2; i++) {
       navShroomRight.setAttribute('id', 'pushed');
       navShroomLeft.setAttribute('id', 'pushed');
            }
        },  500)
    
    setTimeout(function() {unorderedList.setAttribute('id','loaded')}, 1000);
    bindEvents();
    genHome();
    resizeEvent();
} 

export { createMain }
