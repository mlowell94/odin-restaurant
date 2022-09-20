import loadNew from './load-new';
import drop from '../assets/drop.wav';

const bindEvents = function() {
    const dropSound = new Audio(drop);
    dropSound.volume = 0.05;
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    home.addEventListener('click', function() {
        loadNew('home');
    })
    menu.addEventListener('click', function() {
        loadNew('menu');
    })
    contact.addEventListener('click', function() {
        loadNew('contact');
    })
    home.addEventListener('mouseenter', function() {
        dropSound.play();
    })
    menu.addEventListener('mouseenter', function() {
        dropSound.play();
    })
    contact.addEventListener('mouseenter', function() {
        dropSound.play();
    })


}

export default bindEvents;