let userAge = prompt('what is your age')

document.querySelector('#age').innerText = userAge


if(userAge <= 10){

    document.querySelector('.result').innerText = 'You can drink Milk'

} else if(userAge <= 18){

    document.querySelector('.result').innerText = 'You can drink Coke'

} else if(userAge <= 22){

    document.querySelector('.result').innerText = 'You can drink Beer'

} else{

    document.querySelector('.result').innerText = 'You can drink Wine'

}