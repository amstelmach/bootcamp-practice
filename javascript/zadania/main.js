
//zadanie z funkcji

function checkIfAdult (age) {
    if (age < 18) {
        return true
    } else {
        return false
    }
}

console.log(checkIfAdult(19));

function checkIfAdult (age) {
    if (age < 18) {
        return 'Przepraszamy ale musisz być pełnoletni'
    } else {
        return false
    }
}

console.log(checkIfAdult(17));

function checkIfAdult (age, isFromUs) {
    if (isFromUs) {
        if (age >= 21) {
            return true
        }

        return false
    }
    return age >= 18
}

// zapamiętywanie danych w przeglądarce

const user1 = {
    id: 123,
    name: 'Alan'
}

const user2 = {
    id: 222,
    name: 'Janusz'
}

function saveUserToLS(user) {
    const objectAsString = JSON.stringify(user)
    window.localStorage.setItem(user.id, objectAsString)
}

saveUserToLS(user1)
saveUserToLS(user2)


function getUserFromLS(id) {
    const er = window.localStorage.getItem(id)
    console.log(er)
}



console.log(getUserFromLS(123))