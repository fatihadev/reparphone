document.addEventListener('DOMContentLoaded', function () {
    const changingText = document.getElementById('changingText');
    const dynamicWord = document.getElementById('dynamicWord');
    const words = ['Reparateurs', 'Créatifs', 'Innovants'];
    let wordIndex = 0;

    function typeAndDelete() {
        const currentWord = words[wordIndex];
        const wordLength = currentWord.length;
        let currentIndex = 0;

        const typingInterval = setInterval(function () {
            dynamicWord.textContent = currentWord.substring(0, currentIndex);
            currentIndex++;

            if (currentIndex > wordLength) {
                clearInterval(typingInterval);
                setTimeout(deleteWord, 1000); // Delay before deleting the word
            }
        }, 150); // Adjust the typing speed if needed
    }

    function deleteWord() {
        const currentWord = dynamicWord.textContent;
        const wordLength = currentWord.length;
        let currentIndex = wordLength;

        const deletingInterval = setInterval(function () {
            dynamicWord.textContent = currentWord.substring(0, currentIndex);
            currentIndex--;

            if (currentIndex === 0) {
                clearInterval(deletingInterval);
                wordIndex = (wordIndex + 1) % words.length;
                setTimeout(typeAndDelete, 500); // Delay before typing the next word
            }
        }, 100); // Adjust the deleting speed if needed
    }

    // Initial call to start the animation
    typeAndDelete();
});


/* toggle icon*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/* scroll sections active link*/

let sections = document.querySelectorAll('section')
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* remove toggle icon and navbar click navbar link*/

    // menuIcon.classList.toggle('bx-x');
    // navbar.classList.toggle('active');
    

}

ScrollReveal({ 
    reset: true ,
    distance: '80px',
    duration: 2000,
    delay: 200

});

ScrollReveal().reveal('.home-content, .heading, .icon-media', {origin:'top'});
ScrollReveal().reveal('.home-img, .tarifs-container, .galerie-box, .contact', {origin:'bottom'});





