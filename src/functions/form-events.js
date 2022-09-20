function formValidation(e) {

    const inputs = Array.from(document.querySelectorAll('input'));
    const message = document.querySelector('textarea');
    const main = document.querySelector('.main');
    if(main.firstChild.classList.value == 'map') {
        if(e.target.type != 'text' && e.target.type != 'textarea') {
            for(let i = 0; i < inputs.length; i++) {
                if(inputs[i].value == "") {
                    inputs[i].labels[0].removeAttribute('id');
                }
            }
            if(message.value == "") {
                message.labels[0].removeAttribute('id');
                }
            }
        }
    }

const bindFormEvents = function() {

    const inputs = Array.from(document.querySelectorAll('input'));
    const message = document.querySelector('textarea');

    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('click', function() {
            if(inputs[i].checkValidity()) {
                inputs[i].labels[0].setAttribute('id', 'valid');
            } else if(!inputs[i].checkValidity() || inputs[i].value == "") {
                inputs[i].labels[0].setAttribute('id', 'invalid');
            }
        });
        inputs[i].addEventListener('input', function() {
            if(inputs[i].checkValidity()) {
                inputs[i].labels[0].setAttribute('id', 'valid');
            } else {
                inputs[i].labels[0].setAttribute('id', 'invalid');
            }
        });
    }
    
    message.addEventListener('click', function() {
        message.labels[0].setAttribute('id', 'valid');
    })
    
    document.addEventListener('click', formValidation);
}

export default bindFormEvents;