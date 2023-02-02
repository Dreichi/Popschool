const subTitle = document.getElementById('subTitle');
let txt = "(Fullstack)"

function typewrittersubTitle(word, index) {
    if(index < word.length) {
        setTimeoutsubTitle(() => {
            subTitle.innerHTML += `<span>${word[index]}</span>`
            typewrittersubTitle(txt, index +1)
        }, 100);
    if(index < word.length) {
        setTimeoutsubTitle()
    }
    }
}

setTimeoutsubTitle(() => {
    typewrittersubTitle(txt, 0)
}, 500);

