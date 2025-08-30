let area = document.querySelector('textarea')
let total = document.querySelector('.number')
let remaining = document.querySelector('.remaining')
area.addEventListener('input',(e)=>{
let numberOfCharecters = e.target.value.length
total.innerHTML = numberOfCharecters
switch(true ){
    case (numberOfCharecters <=50): 
    total.style.color = 'green'
    break;
    case(numberOfCharecters >50 && numberOfCharecters <=100):
    total.style.color = 'blue'
    break;
    case(numberOfCharecters >100 && numberOfCharecters <=150):
    total.style.color = 'orange'
    break;
    case(numberOfCharecters >170 && numberOfCharecters <=200):
    total.style.color = 'red'
    break;

}

let reVal =  200 - (e.target.value.length)
remaining.innerHTML = reVal

switch(true ){
    case (reVal <=50): 
    remaining.style.color = 'red'
    break;
    case(reVal >50 && reVal <=100):
     remaining.style.color = 'orange'
    break;
    case(reVal >100 && reVal <=150):
      remaining.style.color = 'blue'
    break;
    case(reVal >170 && reVal <=200):
      remaining.style.color = 'green'
    break;

}


})