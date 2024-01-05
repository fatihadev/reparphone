document.addEventListener('DOMContentLoaded', function () {
    const changingText = document.getElementById('changingText');
    const dynamicWord = document.getElementById('dynamicWord');
    const words = ['Wifi', 'Caméra', 'Micro', 'Capteurs'];
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
