import phone from '../assets/phone.svg';
import clock from '../assets/clock.svg';
import loc from '../assets/loc.png';
import bindFormEvents from '../functions/form-events';

const genContact = function() {
    const main = document.querySelector('.main');
    main.style.display = 'flex';
    main.style.justifyContent = 'space-around';

    const map = document.createElement('div');
    map.classList.add('map');
    const info = document.createElement('div');
    info.classList.add('info');

    const mapImg = document.createElement('img');
    mapImg.src = loc;
    const mapText = document.createElement('h2');
    mapText.textContent = 'Come visit us at our storefront location!'
    map.appendChild(mapImg);
    map.appendChild(mapText);

    for(let i = 0; i < 2; i++) {
        const temp = document.createElement('div');
        const tempImg = document.createElement('img');
        const tempP = document.createElement('p');
        if(i == 0) {
            tempImg.src = clock;
            tempP.textContent = '3AM - 2AM';
            temp.appendChild(tempImg);
            temp.appendChild(tempP);
        } else {
            tempImg.src = phone;
            tempP.textContent = '111-111-1111';
            temp.appendChild(tempImg);
            temp.appendChild(tempP);
        }
        info.appendChild(temp);
    }

    const form = document.createElement('form');
    for(let i = 0; i < 4; i++) {
        const tempInput = document.createElement('input');
        const tempLabel = document.createElement('label');

        switch(i) {
            case 0:
                tempInput.setAttribute('type', 'text');
                tempInput.setAttribute('id', 'name');
                tempInput.setAttribute('name', 'name');
                tempInput.setAttribute('minlength', '3');
                tempInput.required = true;

                tempLabel.setAttribute('for', 'name');
                tempLabel.textContent = "Name";
                form.appendChild(tempLabel);
                form.appendChild(tempInput);
                break;
            case 1: 
                tempInput.setAttribute('type', 'text');
                tempInput.setAttribute('id', 'email');
                tempInput.setAttribute('pattern', '^[\\w-\\.]+@([\w-]+\\.)+[\\w-]{2,4}$');
                tempInput.setAttribute('name', 'email');
                tempInput.required = true;

                tempLabel.setAttribute('for', 'email');
                tempLabel.textContent = "Email";
                form.appendChild(tempLabel);
                form.appendChild(tempInput);
                break;
            case 2:
                const tempTextarea = document.createElement('textarea');
                tempTextarea.setAttribute('id', 'message');
                tempTextarea.setAttribute('name', 'message')

                tempLabel.setAttribute('for', 'message');
                tempLabel.textContent = "Say something nice :)";
                form.appendChild(tempLabel);
                form.appendChild(tempTextarea);
                break;
            case 3: 
                const button = document.createElement('button');
                button.textContent = 'submit';
                form.appendChild(button);
                break;
            default: 
                console.log('huh');
        }
    }
    info.appendChild(form);
    main.appendChild(map);
    main.appendChild(info);    
    bindFormEvents();
}

export default genContact;