const dogPost = document.getElementById('dog-post');
const dogPostData = document.getElementById('dog-post-data');
const badgeImg = document.getElementById('badge-img');

class Dog {
    // Attributes of dogData: name, avatar, age, bio, hasBeenSwiped, hasBeenLiked
    constructor(dogData) {
        Object.assign(this, dogData);
    }

    render() {
        const { name, age, bio, avatar } = this;
        dogPostData.innerHTML = `
        <h1>${name}, ${age}</h1> 
        <p>${bio}</p>`;
        
        badgeImg.style.display = 'none';
        dogPost.style.backgroundImage = `url('${avatar}')`;
    }

    showUserOpinion() {
        badgeImg.src = this.hasBeenLiked ? 'images/badge-like.png' : 'images/badge-nope.png';
        badgeImg.style.display = 'block';
    }
}

export default Dog;
