// let man = document.querySelector('h1')
// console.log(man)

// man.innerText = 'hammed'


// let btn = document.querySelector('.inc')

// function colored (){
//     let body = document.body
//     body.style.backgroundColor = 'brown'
// }

// btn.addEventListener('click', colored)

// const heading = document.querySelector ('h1')
// const rest = document.querySelector ('.res')


// function changeNumber (){
//     const heading = document.querySelector ('h1')
//     // const rest = document.querySelector ('.res')
//     man.innerText = '1'
// }

// rest.addEventListener('click',changeNumber)

let heading = document.querySelector('h1')
let inc = document.querySelector('.inc')
let res = document.querySelector('.res')
let dec = document.querySelector('.dec')


function DECREASE (){
    heading.innerText--
}

dec.addEventListener('click', DECREASE)


function INCREASE (){
    heading.innerText++
}
inc.addEventListener('click', INCREASE)


function RESET (){
    heading.innerText= ('0')
}
res.addEventListener('click', RESET)