const submitBtn = document.querySelector('.submit-btn');
const alert = document.querySelector('.error');
const email = document.querySelector('.form-input');

 matchEmail = 'blablabla';

submitBtn.addEventListener('click', function(){
    if((email.value) !== matchEmail){
        alert.style.display = 'block'
        document.querySelector(".error").textContent = "please add valid email";
        document.querySelector(".form-input").style.borderColor = "red";
    }
})


