let userAge = prompt('what is your age')

document.querySelector('#age').innerText = userAge


if(userAge > 18){

    document.querySelector('.result').innerText = 'You are adult, you can drink Coke'

} else {

    document.querySelector('.result').innerText = 'You are child, you can drink Milk'

}
