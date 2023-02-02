const title = document.getElementById('title');
let txt = 'Développeur Web & Mobile'
'(FULLSTACK)'

function typewritter(word, index) {
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewritter(txt, index +1)
        }, 100);
    if(index < word.length) {
        setTimeout()
    }
    }
}

setTimeout(() => {
    typewritter(txt, 0)
}, 500);

