import dogsData from './data.js';
import Dog from './Dog.js';

let waiting = false;
let currentDog = getNewDog();
currentDog.render();

document.addEventListener('click', e => {
    const elementId = e.target.id;
    if (!waiting && isUserClickLikeBtn(elementId)) {
        currentDog.hasBeenLiked = true;
        currentDog.showUserOpinion();
        runWaitingDelay();
    }
    else if (!waiting && isUserClickDislikeBtn(elementId)) {
        currentDog.hasBeenLiked = false;
        currentDog.showUserOpinion();
        runWaitingDelay();
    }
});

function isUserClickLikeBtn(elementId) {
    return elementId === 'like-btn' || elementId === 'like-img';
}

function isUserClickDislikeBtn(elementId) {
    return elementId === 'dislike-btn' || elementId === 'dislike-img';
}

function runWaitingDelay() {
    const delayAmount = 2000;
    waiting = true;
    setTimeout( () => {
        swapCurrentDog();
        waiting = false;
    }, delayAmount);
}

function getNewDog() {
    const nextDogObject = dogsData.shift();
    dogsData.push(nextDogObject); // to loops on dog objects
    return new Dog(nextDogObject);
}

function swapCurrentDog() {
    currentDog = getNewDog();
    currentDog.render();
}
