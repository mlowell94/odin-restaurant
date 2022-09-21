const resizeEvent = function() {
    const main = document.querySelector('.main');

    window.addEventListener('resize', function() {
        console.log(main.firstChild.tagName)
        if(main.firstChild.tagName == 'H1') {
            if(window.innerWidth < 1240) {
                main.style.display = 'flex'
            } else {
                main.style.display = 'grid';
            }
        }
    })
}

export default resizeEvent;