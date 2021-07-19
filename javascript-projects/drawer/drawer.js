
const button = document.querySelector('.toggleBtn');
const navigation = document.querySelector('.navigation');

function openList() {
    button.classList.toggle('active');
    navigation.classList.toggle('active');
}

button.addEventListener('click', openList);



//document.querySelector('.toggleBtn').onclick = function() {
  //  this.classList.toggle('active');
    //navigation.classList.toggle('active');
//}

// const navigation = document.querySelector('.navigation');

