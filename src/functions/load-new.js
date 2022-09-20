import genContact from '../pages/contact';
import genHome from '../pages/home';
import genMenu from '../pages/menu';
import dumpMain from './dump';


const loadNew = function(request) {
    const main = document.querySelector('.main');
    main.setAttribute('id', 'moving-out');
    setTimeout(function() {
        main.setAttribute('id', 'waiting');
    }, 900)
    setTimeout(function() {
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