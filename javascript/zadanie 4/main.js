
const favoriteAnimalContainer = document.querySelector('#fav-animal');
const animalsContainer = document.querySelector(".animals");
const addAnimal = document.querySelector(".add-btn");

animalsContainer.addEventListener('click', function (event) {
    const favAnimalEmoji = event.target.innerText;
    favoriteAnimalContainer.innerText = favAnimalEmoji;
});

addAnimal.addEventListener('click', function (event) {
    const newAnimalEmoji = prompt("what animal do you want to add?");
});

    if (newAnimalEmoji === null || newAnimalEmoji.trim() === "") {
        return;
    }


const animalTile = document.createElement("div");
animalTile.className = "box";
animalTile.innerText = newAnimalEmoji;

animalsContainer.append(animalTile);