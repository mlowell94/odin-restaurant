import headChefAsset from '../assets/head-chef.png';

const genHome = function() {
    const main = document.querySelector('.main');
    let heroText = document.createElement('div');
    heroText.classList.add('hero-text');

    let heroHeader = document.createElement('h1');
    let heroInfo = document.createElement('p');

    heroHeader.textContent = "Only Mushrooms?"
    heroInfo.textContent = "That's right! 'Only Mushrooms' is a restaurant to restaurant committed to serving you one thing and one thing only: mushrooms! From fleshy morels, to the toxic Amanita phalloides -- if it is a fungus you can rest assured it is among us! Each order is prepared with love every evening at 3:42 AM, and delivered by thaumaturgic means to your doorstop the same day!"

    heroText.appendChild(heroHeader);
    heroText.appendChild(heroInfo);

    let headChef = document.createElement('div');
    headChef.classList.add('head-chef');

    let headChefPhoto = document.createElement('img');
    headChefPhoto.src = headChefAsset;
    
    let headChefQuote = document.createElement('p');
    
    let emphasis = document.createElement('em');
    emphasis.textContent = "'My body produces constant spores as punishment for the sins I have wrought. Each harvest brings me great pain, but also one step closer to absolution. I am committed to great flavor at an affordable price.'";

    let endQuote = document.createElement('span');
    endQuote.textContent = " - Tiberius the Incorrigable, Head Chef";

    headChefQuote.appendChild(emphasis);
    headChefQuote.appendChild(endQuote);
    headChef.appendChild(headChefPhoto);
    headChef.appendChild(headChefQuote)

    main.style.display = "flex";
    main.style.justifyContent = "space-evenly";

    main.appendChild(heroText);
    main.appendChild(headChef);
}
export default genHome;