
document.addEventListener('scroll', () => {
    const navArrowUp = document.getElementById('navUp');
    const navArrowDown = document.querySelector('#navDown');
    const nav = document.querySelector('#mainNav');
    const rect = nav.getBoundingClientRect();

    const isInViewport = rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    
    console.log("I'm in here");
    console.log(isInViewport);
    console.log(navArrowUp);
    if (!isInViewport) {
        navArrowUp.classList.remove('hideArrow');
        navArrowUp.classList.add('showArrow');
    }

});