const state = {};
const carouselList = document.querySelector('.hiw__animals');
const carouselItems = document.querySelectorAll('.hiw__animal');
const elems = Array.from(carouselItems);

carouselList.addEventListener('click', function (event) {
    var newActive = event.target;
    var isItem = newActive.closest('.hiw__animal');

    if (!isItem || newActive.classList.contains('hiw__animal_active')) {
        return;
    };

    update(newActive);
});

const update = function (newActive) {
    const newActivePos = newActive.dataset.pos;

    const current = elems.find((elem) => elem.dataset.pos == 0);
    const prev = elems.find((elem) => elem.dataset.pos == -1);
    const next = elems.find((elem) => elem.dataset.pos == 1);
    const first = elems.find((elem) => elem.dataset.pos == -2);
    const last = elems.find((elem) => elem.dataset.pos == 2);

    current.classList.remove('hiw__animal_active');

    [current, prev, next, first, last].forEach(item => {
        var itemPos = item.dataset.pos;

        item.dataset.pos = getPos(itemPos, newActivePos)
    });
};

const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
        return -current
    }

    return diff;
}








const PICLEN = 8;
const leftBtn = document.querySelector(".piz-arrow.left");
const rightBtn = document.querySelector(".piz-arrow.right");

let pets = document.querySelectorAll(".animal");
let slider = [];

for (let i = 0; i < pets.length; i++) {
    slider[i] = pets[i].src;
    pets[i].remove();
}

let nextdraw = 1;
let i = 0;
let animalLinks = document.querySelectorAll(".piz__animal");

function draw() {
    let img = document.createElement("img");
    img.src = slider[nextdraw];
    img.classList.add("animal");
    while (i < animalLinks.length) {
        animalLinks[i].appendChild(img);
        break;
    }
    i++;
    nextdraw + 1 == slider.length ? nextdraw = 0 : nextdraw++;
}
let n = 0;
while (n < PICLEN) {
    draw();
    n++;
}


leftBtn.addEventListener("click", () => {
    let pets = document.querySelectorAll(".animal");
    for (let j = 0; j < pets.length; j++) {
        pets[j].remove();
    }
    for (let j = 0; j <= PICLEN; j++) {
        draw((i = j));
    }


});
rightBtn.addEventListener("click", () => {
    let pets = document.querySelectorAll(".animal");
    for (let i = 0; i < pets.length; i++) {
        pets[i].remove();
    }
    for (let j = PICLEN; j >= 0; j--) {
        draw((i = j));
    }
});