const numberUp = document.querySelector("#increase");
const numberDown = document.querySelector("#decrease");
const number = document.querySelector("#number");

let result = document.querySelector("#number");

function handleIncrease() {
    if (number + 1 > number)
        return number + 1
}


function handleDecrease()


numberUp.addEventListener("click", handleIncrease);
numberDown.addEventListener("click", handleDecrease);

