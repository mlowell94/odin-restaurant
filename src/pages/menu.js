import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import m4 from '../assets/m4.png';
import m5 from '../assets/m5.png';
import m6 from '../assets/m6.png';;

const genMenu = function() {

    const main = document.querySelector('.main');

    main.style.width = '75vw';

    if(window.innerWidth < 1240) {
        main.style.display = 'flex'
    } else {
        main.style.display = 'grid';
    }
    
    main.style.gridTemplateColumns = '1fr 1fr 1fr';
    main.style.gridTemplateRows = '1fr 9fr 9fr 1fr';
    main.style.gridGap = '3px';
    main.style.justifyItems = 'center';
    main.style.margin = '0 auto';


    let optionArray = [];
    let menuHeaderTop = document.createElement('h1');
    menuHeaderTop.textContent = "Only Mushrooms has all the mushrooms you could hope for! Our offerings include:"
    let menuHeaderBottom = document.createElement('h1');
    menuHeaderBottom.textContent = "... and more!!!"

    main.appendChild(menuHeaderTop);

    for(let i = 0; i < 6; i++) {
        let temp = document.createElement('div');
        temp.classList.add('option');
        optionArray[i] = temp;
    }
    for(let i = 1; i < 7; i++) {
        let temp = document.createElement('img');
        let whatItIs = document.createElement('span');
        switch(i) {
            case 1:
                temp.src = m1;
                whatItIs.textContent = '"Virulent Redcap"';
                break;
            case 2:
                temp.src = m2;
                whatItIs.textContent = '"Hamburger-Shaped Mushroom"';
                break;
            case 3: 
                temp.src = m3;
                whatItIs.textContent = '"Treeflesh"';
                break;
            case 4:
                temp.src = m4;
                whatItIs.textContent = '"Bag of pasta I got from the fridge"';
                break;
            case 5:
                temp.src = m5;
                whatItIs.textContent = '"Common Puffball"';
                break;
            case 6:
                temp.src = m6
                whatItIs.textContent = '"Found these in walmart tbh"';
                break;
            default:
                whatItIs.textContent = '"how did u get here"';
        }
        optionArray[i-1].appendChild(temp);
        optionArray[i-1].appendChild(whatItIs);
        main.appendChild(optionArray[i-1]);
    }
    main.appendChild(menuHeaderBottom);
}

export default genMenu;