const PIANO = document.querySelector('.piano');
const COLLECTION = document.querySelectorAll('.piano-key');
const keys = {};
const audio = {};
var note = '';
var key = '';
var active = false;


for(let i = 0; i < COLLECTION.length; i++) {
  key=COLLECTION[i].dataset.letter;
  keys[key] = key; 
  note = COLLECTION[i].dataset.note;
  audio[note] = new Audio(`./assets/audio/${note}.mp3`);
}
function startSound(element,note) {
  audio[note].currentTime = 0;
  audio[note].play();
  element.classList.add('active');
}

function stopSound(element) {
  element.classList.remove('active');
}

PIANO.addEventListener('mousedown', (event) => {
  if(event.target.classList.contains('piano-key')) 
  {
    startSound(event.target, event.target.dataset.note);
    active = true;
  }
});

document.addEventListener('mouseup', (event) => {
 stopSound(event.target);
  active = false;
});

PIANO.addEventListener('mouseover', (event) => {
    if(event.target.classList.contains('piano-key') && active)
     {
      startSound(event.target, event.target.dataset.note);
   }
});

PIANO.addEventListener('mouseout', (event) => {
    if(event.target.classList.contains('piano-key') && active)
     {
   stopSound(event.target);
   } 
});



document.addEventListener('keydown', (event) => {
   if(keys[event.key]) 
   return;
    keys[event.key] = true;

    COLLECTION.forEach(element => {
      if(event.code === `Key${element.dataset.letter}`)
      {
        startSound(element, element.dataset.note);
      }
    });
});

document.addEventListener('keyup', (event) => {
    COLLECTION.forEach(element => {
    if(event.code === `Key${element.dataset.letter}`) 
    {
     stopSound(element);
      keys[event.key] = false;
    }
  });
});

const FULLSCREEN = document.querySelector('.fullscreen');
var FullscreenOn = false;
FULLSCREEN.addEventListener('click', () => {
  if (!FullscreenOn) {
    FullscreenOn = true;
    document.documentElement.requestFullscreen();
  } else {
    FullscreenOn = true;
    document.exitFullscreen();
  }
})

const NOTES = document.querySelector('.btn-notes');
const LETTERS = document.querySelector('.btn-letters');

LETTERS.addEventListener('click', () => {
  LETTERS.classList.add('btn-active');
  NOTES.classList.remove('btn-active');
  COLLECTION.forEach(element => {
   
   element.classList.remove('note');
   element.classList.add('letter');
  });
});

NOTES.addEventListener('click', () => {
  LETTERS.classList.remove('btn-active');
  NOTES.classList.add('btn-active');
  COLLECTION.forEach(element => {
    
    element.classList.add('note')
    element.classList.remove('letter');
  });
});
