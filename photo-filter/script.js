const labels = document.querySelectorAll(".filters label")
const filters = document.querySelector(".filters");
const inputs = filters.querySelectorAll(".filters input");
const outputs = filters.querySelectorAll(".filters output");
const resetBtn = document.querySelector(".btn-reset");
const image = document.querySelector('.editor img');
let activeBtn = document.querySelector(".btn-active");

labels.forEach((el) => {
    const input = el.querySelector("input");
    const output = el.querySelector("output");
    input.addEventListener("input", (e) => {
        let value = e.target.value;
        const suffix = e.target.dataset.sizing;
        output.value = value + suffix;

        document.documentElement.style.setProperty(`--${e.target.name}`, output.value);
    });
});


resetBtn.addEventListener('click', () => {
    active(resetBtn);
    outputs[0].value = inputs[0].value = 0;
    outputs[1].value = inputs[1].value = 0;
    outputs[2].value = inputs[2].value = 0;
    outputs[3].value = inputs[3].value = 100;
    outputs[4].value = inputs[4].value = 0;
    inputs.forEach((item) => {
        document.documentElement.style.setProperty(
            `--${item.name}`,
            item.value + item.getAttribute('data-sizing')
        );
    });
})


function active(btn) {
    activeBtn.classList.remove('btn-active');
    btn.classList.add('btn-active');
    activeBtn = btn;
    console.log(btn)
}
const loadBtn = document.querySelector('.btn-load')
const loadInput = document.querySelector("#btnInput")


loadInput.addEventListener('change', (loadImg) => {
    active(loadBtn);
    const file = loadInput.files[0];
    loadImg.target.value = "";
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
        image.src = event.target.result;
    });
    reader.readAsDataURL(file);
});

const nextBtn = document.querySelector('.btn-next');
let imgNum = 0;
const nextPic = () => {
    active(nextBtn);
    imgNum === 20 ? imgNum = 1 : imgNum++;
    let imgNumberSrc = '';
    if (imgNum < 10) {
        imgNumberSrc += '0' + imgNum;
    } else imgNumberSrc += imgNum.toString();
    hours = new Date().getHours();
    const daytime = {
        0: "night",
        1: "morning",
        2: "day",
        3: "evening"
    }
    image.src = `https://raw.githubusercontent.com/rolling-scopes-school/stage1-tasks/assets/images/${daytime[Math.floor(hours/6)]}/${imgNumberSrc}.jpg`
}
nextBtn.addEventListener('click', nextPic);

function saveImg() {
    const canvas = document.createElement('canvas');
    const img = new Image();
    active(saveBtn);
    img.setAttribute('crossOrigin', 'anonymous');
    img.src = image.src;
    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");

        let blur = inputs[0].value * image.naturalHeight / image.height.toString();
        ctx.filter = `blur(${blur}px) invert(${inputs[1].value/100}) sepia(${inputs[2].value/100}) saturate(${inputs[3].value/100}) hue-rotate(${inputs[4].value}deg)`;

        ctx.drawImage(img, 0, 0);
        const link = document.createElement('a');
        link.download = 'image.png';
        link.href = canvas.toDataURL();
        link.click();
        link.delete;
    };
}

const saveBtn = document.querySelector(".btn-save")
saveBtn.addEventListener('click', saveImg);

const FULLSCREEN = document.querySelector('.fullscreen');
FULLSCREEN.addEventListener('click', () => {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
})