const addText = document.querySelector("#add-text");

const displayText = document.querySelector("#display-text");

addText.addEventListener('keyup', function(){
    displayText.textContent = (addText.value);
})