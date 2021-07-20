const box = document.querySelector(".box")

const addColorBtn = document.querySelector("#add-color");
const removeColorBtn = document.querySelector("#remove-color");
const toggleColorBtn = document.querySelector("#toggle-color");
const resetListenersBtn = document.querySelector("#reset-listeners");

function handleAddColor() {
    box.classList.add("red");
}

function handleRemoveColor() {
    box.classList.remove("red");
}

function handleColorToggle() {
    box.classList.toggle("red");
}

function handleEnlarge() {
    box.classList.add("box-big");
}

function handleShrink() {
    box.classList.remove("box-big");
}


addColorBtn.addEventListener("click", handleAddColor);
removeColorBtn.addEventListener("click", handleRemoveColor);
toggleColorBtn.addEventListener("click", handleColorToggle);