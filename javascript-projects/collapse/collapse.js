

const collapse = document.getElementsByClassName('collBox');


for (i=0; i < collapse.length; i++) {
    collapse[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}