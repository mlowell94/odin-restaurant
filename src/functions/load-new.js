import genContact from '../pages/contact';
import genHome from '../pages/home';
import genMenu from '../pages/menu';
import dumpMain from './dump';

// function for animating an old main falling out and la new one falling in.

const loadNew = function(request) {
    const main = document.querySelector('.main');
    main.setAttribute('id', 'moving-out');
    setTimeout(function() {
        main.setAttribute('id', 'waiting');
    }, 900)
    setTimeout(function() {
        console.log(request);
        dumpMain()
        if(request == 'home') {
            genHome();
        } else if(request == 'menu') {
            genMenu();
        } else if(request == 'contact') {
            genContact();
        }
        main.setAttribute('id','moving-in');
    }, 1100);
}

export default loadNew;