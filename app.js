




document.querySelectorAll('.btn').forEach((item)=>{
    item.addEventListener('click',()=>{
        alert('hellooooo World')
    })
})

 //let

let age =100;
let name ='simi';

console.log(age);
console.log(name);

//var

var country = 'nigeria';
console.log(country);
var tribe = 'yoruba';
console.log(tribe);

//const
const PIE = 3.142;
console.log(PIE);

//let vs cost vs var


// var---- declare, re-declare and re-assign
var gender ='male';
var gender ='female'
gender = 'transgender'
console.log(gender)

// let-- declare and re-assign
let state = 'Lagos';
state = 'Enugu';
console.log(state);

//const-- declare only
const Fullname ='yomi';
console.log(Fullname);

//-- constrainst in variable naming
// variable names can only contain letters, number,underscore,dollar sign but can start with a number.
//--dont give spaces, use carmel case.
// --reserved names cant be used as a variable name, aince its reserved
// --please when naming variable, use a meaningfull name 

// Data types( primitive and non primitive...)
// 1)string, used for storing letters and dey r denoted by a single ('') or double (" ")qoutes
// 2)numbers,used for numbers
// 3)booleen, true or false statement 
// 4)null,empty
// 5)underfine
// 6)object(arrays,dates)
// 7)symbols
// 8)bigInt

// strings
let continent ='Africa';
console.log(continent);

let firstName = 'Simi';
let lastName = 'Bola';
let fullName = firstName +' ' + lastName
console.log(fullName);
console.log(lastName);
console.log(lastName);

// string properties and methods 

let email = 'askjeeves@hotmail.com';
console.log(email);
let emaillength = email.length + ' ' + 'letters'
console.log(emaillength);

// getting position
let city = 'surulere';
console.log(city [1]);

// method,dey r functions dt are related 2 a particular data type
let trainee = 'boluwatife';
console.log(trainee);
let traineeUpperCase = trainee.toUpperCase()
console.log(traineeUpperCase)
let newTrainee = 'JOSEPH';
console.log(newTrainee);
let newTraineeLowerCase = newTrainee.toLowerCase()
console.log(newTraineeLowerCase)

// indexof()

let newEmail = 'techstudio@gmail.com';
console.log(newEmail);
let newEmailIndex = newEmail.indexOf('@')
console.log(newEmailIndex)

// lastIndex

let applicant = 'Saror';
console.log(applicant)
let lastIndexOfApplicant= applicant.lastIndexOf('r')
console.log(lastIndexOfApplicant)

//slice()
let religion = 'christianity';
console.log(religion)
let sliceReligion = religion.slice(0,6)
console.log(sliceReligion)

//replace()
let profession = 'developer';
console.log(profession)
let replaceProfession = profession.replace('d','z')
console.log(replaceProfession)

let animal = 'hippopotamus';
console.log(animal);
//uppercase
let animalUpperCase = animal.toUpperCase()
console.log(animalUpperCase)
//lowercase
let animalLowerCase =animal.toLowerCase();
console.log(animalLowerCase)
//position of t
let animalIndex = animal.indexOf('t');
console.log(animalIndex)
// position of last o
let animallastIndexOfAnimal = animal.lastIndexOf('o')
console.log(animallastIndexOfAnimal)
// pot to show
let sliceAnimal = animal.slice( 5,8);
console.log(sliceAnimal)
let replaceAnimal = animal.replace( 'h', 'd')
console.log(replaceAnimal)

// number
let year = 2022;
console.log(year)
let score = 100;
console.log(score)
let score2 = 200;
console.log(score2)


// math operators
// +, -, /, *,**,


let finalscore = score + score2
console.log(finalscore)

let minus = score - score2
console.log(minus)

let multiply = score * score2
console.log(multiply);

let div = score / score2
console.log(div)
// ========

let num = 10;
console.log(num)

let num2 = 3;
console.log(num2)

let indices = num ** num2
console.log(indices);

let modulus = num % num2
console.log(modulus);


// decremental and incremental values

let newYear = year + 1
console.log(newYear)

year--
year++
console.log(year);
let anotherYear = 2025
anotherYear *= 2
console.log(anotherYear)


let continent2 = 'africa';
console.log(continent2)


let language = 'pidgin_English';
console.log(language)



let ghanaPopulation = 500
console.log(ghanaPopulation);


let finlandPopulation = 800
console.log(finlandPopulation)


let country2 = 'nigeria';
console.log(country2)




let nigeriaPopulation = 1000
console.log(nigeriaPopulation);

let nigeriadiv = nigeriaPopulation/2
console.log(nigeriadiv)

let newNigeria = nigeriaPopulation + 1
console.log(newNigeria)


console.log(nigeriaPopulation  > finlandPopulation)
console.log(nigeriaPopulation < finlandPopulation)

console.log(ghanaPopulation > finlandPopulation)
console.log( ghanaPopulation < finlandPopulation)

let description = country2 + ' ' + 'is in'+ ' ' + continent2 + ' ' + "and it's" + ' ' + nigeriaPopulation + ' '+ 'people speak' + ' ' + language

console.log(description)


// concatinating variables with strings 

let blog = 50

let statement = 'the blogs has' + ' ' + blog + ' ' + 'likes'
console.log(statement)

statement = 'the blogs has ' + blog + ' likes'
console.log(statement)


let traineeScore = 90;
let traineeName = 'simi'
let school = 'aguda grammer school';
let response = 'praise did you know ' + traineeName + ' attends ' + school + ' and ' + ' had ' + traineeScore  +  ' in her test '

console.log( response)


// template litrals or strings ( uses backtics and interpolations)

let newResponse = `praise did you know ${traineeName} attends ${ school} and had ${ traineeScore} in her test.`
console.log(newResponse)
console.log(newResponse)


let classAvailable = 'python fullstacks course';
let bootCamp = ' Techstudio Academy';
let stateLocation = 'Lagos';
let regFeeInNaira = 300
let prospectiveTrainee = 'joseph'


let adminSay = 'Hello ' + prospectiveTrainee + bootCamp + ' offers ' + classAvailable + ' in ' + stateLocation + ' and the ' + ' registration fee is ' + regFeeInNaira

console.log(adminSay);

let adminSay2 = `hello ${prospectiveTrainee} ${bootCamp} offer ${classAvailable } in ${stateLocation} and the registration fee is ${regFeeInNaira}`

console.log(adminSay2)


// arrays are used for storing collections of strings, numbers, booleans and other data types and are represented by square brackets

let favFood1 = 'beans';
let favFood2 = 'eba';
let favFood3 = 'rice';


let segFavFoods = ['beans', 'eba' , 'rice', 'yam']

console.log(segFavFoods)

// array properties 

let lengthOfsegFavFoods = segFavFoods.length

console.log(lengthOfsegFavFoods)

let singleFood = segFavFoods[0]
console.log(singleFood)

segFavFoods[0] = 'starch'
console.log(segFavFoods)

// arrays methods

let includes = segFavFoods.includes('corn')
console.log(includes)


let join = segFavFoods.join('_')
console.log(join)

let concat = segFavFoods.concat(['egusi', 'ogbono'])
console.log(concat)

let push = segFavFoods.push('efo-riro')
console.log(push)
console.log(segFavFoods)

// pop

let pop = segFavFoods.pop()
console.log(pop)
console.log(segFavFoods)


let colors = []
colors.push('pink' ,'yellow')
 console.log(colors)


//  assignment
        // question(1)
let classNames = ['temilolu','tokunbo', 'saro', 'hammed' ,'praise'  , 'joseph'  , 'adam'   , 'joseph b','jasper', 'tomi' , 'simi','yomi' ]
console.log(classNames)

    //  question(2)
let singleName= classNames[0]
console.log(singleName)
classNames[0]= 'pappi'
console.log(classNames)


    //   question (3)

 push = classNames.push( 'amos','mike')
 console.log(push)


    //  question 4

pop = classNames.pop()
console.log(pop)

console.log(classNames)


// question 5


let unshift = classNames.unshift( 'zack' ,'bobby')
console.log(unshift)

console.log(classNames)


// question 6
let shift = classNames.shift('zack')
console.log(shift)

console.log(classNames)


// question 7

concat = classNames.concat(['queen', 'segun' , 'pius ', 'emeka'])
console.log(concat)


// ===========
// oct 13th 2022

// spread operator and the destructring use for merging items and listing item....

let numbers = [1,2,3,4,5,6]
let newNumbers = [7,8,9]
concat = numbers.concat(newNumbers)
console.log(concat)

// with spread operator

let newCon = [...numbers, ...newNumbers]
console.log(newCon)

console.log(...newNumbers)

let numbers2 = numbers[0]
console.log(numbers2)

let numbers3 = numbers[1]
console.log(numbers3)


// destructuring

// const [1,2,3,4,5,6] = numbers
let names = ['pius' ,'sam' ,'sandra','peter','path', 'nath', 'buhari', 'jide']
let [ zero, first, second, third,...remaning] = names

console.log(zero)
console.log(first)
console.log(second)

console.log(...remaning)
// typeof

let scores = 50
console.log(scores);
console.log(typeof scores)
let pikinName = 'aki'
console.log(pikinName)
console.log(typeof pikinName)
let pc = ['dell','hp', 'acer']
console.log(pc)
console.log(typeof pc)


let cart = null
console.log(cart)
console.log(typeof cart)

// type conversion and coersion--- conversion is when we manually convert from one data type to another data type but coersion is when java script does d conversion for you behind the scene...

// coversion

let newNumberss = Number('1986')
let addedNumber = newNumberss + 18
console.log(addedNumber)


// lets try and convert sth dts not actually a number 
let personName = Number('eggy')
console.log(personName)
console.log(typeof NaN)
console.log(String (23),23)

// coersion

console.log('i am'+  String(22) + 'years old')
console.log(22)

console.log('22' * 3)
console.log('22' > '2')

// =====================

let z = Number ('1') + 1
let w = z - 1 
console.log(w)

// comparison operators
// >,<,==,===,!=,


let YEAR = 2023
console.log(YEAR > 2001)
console.log(YEAR < 2001 )
console.log(YEAR >= 2001)
console.log(YEAR <= 2001)
console.log(YEAR != 2001)


// loose comparision operator ==, only cheqs for value and not data type 

let SCORE = '100'
let SCORE2 = SCORE == 100
let SCORE3 = SCORE != 100

console.log(SCORE2)
console.log(SCORE3)

// strict comparison operator == cheq for value and data type

let SCORE4 = SCORE === 100
let SCORE5 = SCORE !==100


console.log(SCORE4)
console.log(SCORE5)


// control flow loops and conditional statement 

console.log('lifting weigth repeatition 1' )
console.log('lifting weigth repeatition 2' )
console.log('lifting weigth repeatition 3' )
console.log('lifting weigth repeatition 4' )
console.log('lifting weigth repeatition 5' )
console.log('lifting weigth repeatition 6' )
console.log('lifting weigth repeatition 7' )
console.log('lifting weigth repeatition 8' )
console.log('lifting weigth repeatition 9' )
console.log('lifting weigth repeatition 10' )


// for loop uses the for-keyword, initializer, condition ,final expression and block code

for (let i = 0; i < 10; i++) {
    console.log( 'eggy lifts weight ' + i )
}

let guys = ['mama', 'papa', 'pikin', 'cousin']

for(let i = 0; i < guys.length; i++) {
    console.log(guys[i].toUpperCase())
}

let babes = ['fatima', 'ada', 'joke','cassandra']

let i = 0

while (i < babes.length) {
    console.log (babes[i].toUpperCase())
    i++
}

// ============================ for in

for (p in babes) {
    console.log(babes[p].toUpperCase)
}


// ====================for of

for (let b of babes) {
    console.log(b.toUpperCase())
}



// assignment

// for loop

let color = ['blue', 'pink', 'black', 'red']

for (let h = 0; h < color.length; h++ ) {
    console.log(color[h].toUpperCase())
}

// while loop
 
color = ['blue', 'pink', 'black', 'red']
 
 let h = 0;

while ( h < color.length) {
    console.log( color[h].toUpperCase())
    h++

}

// for in loop

color = ['blue', 'pink', 'black', 'red']
  
 for (r in color) {
    console.log( color[r].toUpperCase())
}

//  for of loop

color = ['blue', 'pink', 'black', 'red']
 
 for (let c of color) {
    console.log( c.toUpperCase())
 }


//  conditional statements if , else , else if

// if


let AGES = 50
if(AGES === 5 ){
    console.log('oga u qualify')
}else{
    console.log('error')
}

let password = 'pas'

if (password.length >=12){
    console.log( 'that \'s a very strong password')
} else if ( password.length >= 8 ) {
    console.log('password is good ')
} else if ( password.length >= 4){
    console.log( 'password is weak')
}else {
    console.log('please password should be atleast 4 chars long')
}


// logical operators 
// || (double pipe ) mean logical  or
// &&  (ampersand)means  logical and 

//  FOR LOGICAL AND

// true && true = false
// true && false = false
// false && true = false
// false && false = false 

 console.log(true && true)
 console.log(true && false)
 console.log(false && true )
 console.log(false && false)



// FOR LOGICAL OF

// true || true = true
// true || false = true
// false || false = false
// false || true= true



console.log(true || true)
console.log(true || false)
console.log(false || true )
console.log(false || false)


let PASSWORD = 'pass'
if ( PASSWORD.length >= 7 && PASSWORD.includes ('@')) {
    console.log('super strong password')
} else if( PASSWORD.length >= 5 || PASSWORD.includes ('@')){
    console.log ('password is good ')

}else{
    console.log( 'password isnt\'t good enough')
}


let newpassword = 'type a new password'

if(newpassword.length >= 12 && newpassword.includes('@')) {
    alert ('very very strong')
} else {
    if (newpassword.length >= 8 || newpassword.includes('@') ) {

    }else{
        alert('password shud b atleast 8 chrs')
    }
}


let newgmail = prompt ( 'type a gmail')

if(newgmail.length >= 12 && newgmail.includes('*')){
    alert('super strong')
}else if (newgmail.length >= 12 && newgmail.includes('@')){
     alert('password is strong')
}else if( newgmail.length >= 12 && newgmail.includes('@')) {
    alert ('password is weak')
}else{
    alert( 'please password should have atleast 6 characters and contain @ or *')

}


// break and continue 

let result = [20 ,40, 0 , 50, 100, 15]

for(let i = 0;i < result.length; i++) {

    // ?what if we dnt wnt 2 log 2 awa console 0? and 20
    if (result [i] === 0 || result[i] === 20) {
        continue
    }

    if (result[i]=== 100){
        break
    }
    console.log (result [i]);

}


// // switch statement 

let grade = 'z'


if(grade === 'a'){
    console.log('you got a')
}else if (grade === 'b'){
    console.log('you got b')
}else if(grade === 'c') {
    console.log('you got c') 
}else if(grade === 'd'){
    console.log('you got d')
}else{
    console.log('you failed')
}

// 

let points = 'B'

switch(points) {
    case 'A' :
        console.log('you got A')
        break
    case 'B' :
        console.log ('you got B')
        break
    case 'C' :
        console.log( 'you got C')
        break
    case 'D' :
        console.log( 'you got D')
        break
    default:
        console.log('you failed')
}


// assignment 

//  use if statement 

let segunbmi = 60/9**2
let mariambmi = 70/10**2

if(segunbmi >= mariambmi) {
    console.log( 'segun \'s bmi is more than mariam ' )
}else {
    console.log( 'segun\'s bmi is not more than mariam ')
}


// task 1


let numberinputed = prompt ( 'enter a number')
if (numberinputed % 2 === 0) {
    alert ('not weird')
}else{
    alert('weird')
}

let N = 2

if ( N % 2 ===0) {
    console.log('not weird')

}else{
    console.log('weird')
}



for(let i = 1; i <= 5; i++)
  if (i === 3) {
    continue
  }
 console.log(i)




//  task 3 

// segun details

let segunheight = 10


let segunmass = 60 


let segunBMI = segunmass / segunheight ** 2

console.log (segunBMI)


// mariam details


let mariamheight = 9


let mariammass = 60


let mariamBMI = mariammass / mariamheight ** 2

console.log (mariamBMI)



if( segunBMI > mariamBMI) {
    console.log( 'segun\'s BMI is greater than mariam BMI')
}else{
    console.log('mariam\'s BMI is greater than segun BMI')
}


// ternary operator ( this can be use instead of if statement)

let figure = 3 

figure >= 3 ? console.log ('figure is greater than 3 ') : console.log ('figure is\'t greater than 3')


let decision = segunBMI > mariamBMI ? 'segun  bmi is greater than mariam bmi ' : 'mariam bmi is greater than segun bmi '


console.log(decision)


// global scope , local (block and function) scope 

let AGE = 1000

if ( true ) {
    let AGE = 2000
    console.log('inside 1st code block : ' + AGE);
  if (true ) {
    let AGE = 3000
    console.log('inside 2nd code block : ' + AGE )
  }
}

console.log ( 'outside block code: ' + AGE)


// function 
// its only when you call, invoke or run the ftn dt ftn would work 
// three types of functions , declaration , expression and arrow function 
// function declaration 

// function declaration 

function team () {
    console.log('tomiwa dn comot class ')
}
team()

// function expression 
// it doesnt accept hoisting 

let speak = function(){
    let name = 'simi'
    console.log(name)
}


speak()


// arrow function 


let colour = () => {
    let mycolor = 'yellow'
    console.log(mycolor)
}

colour()

// parameters and arguments functions 

const speaks = function( name){
    let person = `hi  ${name}`

    console.log(person);

}

speaks ('hammed')

// declaration 

function spoken (names) {
    let person = 'hello my name is ' + names
    console.log(person)
}


spoken ('temi')


// arrow 

let speaker = (day) => {
    let statement = `good ${day}`
    console.log(statement)
}

speaker ('afternoon')

const greet = function (name, time ) {
    let say = `good ${time}  ${name}`

    console.log(say);

}

greet('joseph', 'evening ')



// ==================

let calcAge = year =>{
    let personYear = 2022 - year
    console.log(personYear)

}

calcAge(1990)


function calcAges (year) {
    let personYear = 2022 - year
    console.log(personYear)
}


calcAges (1990)



const calcage = function( year){
    let personyear= 2022 - year

    console.log(personyear)

}

calcage ('1990')



// returning variables from a function 

let programme = () => {
    let stack = ' python '
    return stack
  
}

let newstack = programme()
let newtrainers = 'i am currently enrolled in ' + newstack + 'class'

console.log(newtrainers)

function word (food) {
    let expantiate =`hello david did you know simi ate ${food} wraps of fufu`
    console.log(expantiate)
    return expantiate
}

let newExpantiate = word (20)


let reterate = newExpantiate + 'after class'
console.log(reterate)



// assignment 

// alpha details 

let alpha1 = 88
let alpha2 = 91
let alpha3 = 120

// spartans details 

let spartans1 = 60
let spartans2 = 70
let spartans3 = 80


let alphaaverage = 88 + 91 + 120 /3

let spartansaverage = 60 + 70 + 80 /3


if( alphaaverage > spartansaverage) {
    console.log ( 'team alpha is the winner ')
}else {
    console.log ( 'team spartans is the winner ')
}
//  for ternary 

let winner = alphaaverage > spartansaverage? 'alpha is the winner  ' : 'spartans is the winner  '


console.log(winner)


// assignment solution 


let spartanScore = [60 + 70 + 80]
console.log(spartanScore)
let alphaScore = [88 + 91 + 120]
console.log(alphaScore)


let spartanAve = spartanScore/3
console.log(spartanAve)

let alpaAve = alphaScore/3
console.log(alpaAve)

// conditional statement 

let condition1 = alpaAve > spartanAve

if (condition1) {
    console.log( 'alpha wins')
}else{
    console.log( 'spartans wins')
}


//===================

let setOfScores = [1,0,200]
let fees = [60,80,0,120]
let peeps = ['segun' ,'adam', 'praise', 'tomiwa']

function details (numbers,sth,myth) {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === 0) {
            continue
        }
        console.log(numbers[i]);
    }

    for (let i = 0; i < sth.length; i++) {
        if (sth[i] === 0) {
            continue
        }
        console.log(sth[i]);
    }

    for (let i = 0; i < myth.length; i++) {
        if (myth[i]=== 0 ) {
            continue
        }
        console.log(myth[i])
    }
}

details(setOfScores,fees,peeps)


// higher order function and cal back function 
// higher order functions accepts another function as an argument or returns another function as a result 
// call back functions are functions a passed to another function as an argument and executed inside that function 




function sayHello () {
    return 'hi'
}

let report = (talk) => {
    let state = `${talk()} boston did we see last week`
    console.log(state)
}

report (sayHello)


//==========================

function callBak() {
    let period= 'afternoon'
    let explain =`hey, i can't come this ${period}`  
    return explain  
}

function higherOrder(accessCallBk){
    let completeWord = 'anymore'
    console.log(accessCallBk())
    let discuss=`${accessCallBk()} ${completeWord}  `
    console.log(discuss)

}


higherOrder(callBak)




// assignment 

let alphascores = [43+ 21 + 73]
console.log(alphascores)


let spartansscores =[63+55 +47 ]
console.log(spartansscores)



let calcAverage = (alphascores) =>{
    let alphaAverages =  alphascores /3
    console.log(alphaAverages)
    
    

}

calcAverage(alphascores)

let calcAverage2 = (spartansscores) =>{
    let spartanAverage = spartansscores/3
    console.log(spartanAverage)
}

calcAverage2(spartansscores)




function checkWinner (spartanAverage,alphaAverages) {
    if (spartanAverage >= alphaAverages * 2) {
      console.log(`Alpha wins ${spartanAverage} vs ${alphaAverages}`);
    }else{
      console.log(`Spartan Wins ${alphaAverages} vs ${spartanAverage}`);
    }
  }
  checkWinner('spartanAverage','alphaAverages')




// test 2 



let alphascores2 = [87+ 55 + 39]
console.log(alphascores2)


let spartansscores2 =[21+33 +27]
console.log(spartansscores2)



let calcAverage_2= (alphascores2) =>{
    let alphaAverages2 =  alphascores2 /3
    console.log(alphaAverages2)
    
    

}

calcAverage_2(alphascores2)

let calcAverage3 = (spartansscores2) =>{
    let spartanAverage2 = spartansscores2/3
    console.log(spartanAverage2)
}

calcAverage_2(spartansscores2)



function checkWinner_2 (alphaAverages2,spartanAverage2) {
    if (alphaAverages2 >= spartanAverage2 * 2) {
      console.log(`Alpha wins ${alphaAverages2} vs ${spartanAverage2}`);
    }else{
      console.log(`Spartan Wins ${spartanAverage2} vs ${alphaAverages2}`);
    } 
  }
  checkWinner_2('spartansscores2', 'alphascores2')




// Objects---- objects literal , math object, dates 
// higher order function (foreach ,  map , filter) 
// dom( document object model ) 

let client1 = {
    firstName: 'simi',
    lastName: 'akintola',
    hasDriversLincense: false,
    favFood : ['eba ', 'fufu'],
    phone : '07088888888',

}

console.log(client1)


// object ,key and value pairs , denoted curly braces

let userArray = ['david', 'akpan', 2022-1985, 'developer', ['onome', 'faith','ade']]

console.log(userArray)


let customer = {
    firstname: 'david', 
    lastName: 'akpan',
    dob:2022 - 1985,
    profession:'developer',
    friends:['onome', 'faith','ade'],
    date:Date()
 }
console.log(customer);    

let newCustomer ={
    country:'Nigeria',
    state:'Lagos'

}

let allCustomers = {...customer,...newCustomer}
console.log(allCustomers)

// dot vs bracket notation 

let newApplicant = {
    firstname: 'alaska',
    lastname: 'bobby',
    skincolor: 'yellow',
    tribe: 'yoruba',
    age: 40,
    address: {
        stateOfOrigin: 'oyo',
        stateOfResidence: 'lagos',
        lga:'surulere'

    },
    favfoods:['amala', 'ewa', 'egusi', 'banga'],
    canDrive:true,
    profession: 'senior Dev',
    phone:80888888


}

// dot notation 
// accessing firstname
let newApplicantFirstname = newApplicant.firstname
console.log(newApplicantFirstname)
// accessing phone
let newApplicantPhone = newApplicant.phone
console.log(newApplicantPhone)
// accessing lga 
let newApplicantlga = newApplicant.address.lga
console.log(newApplicantlga)
// accessing fave foods 
let newApplicantFavFood = newApplicant.favfoods
console.log(newApplicantFavFood)
// acessing given favfood 

let givenFavFoods = newApplicant.favfoods
console.log(givenFavFoods[3] = 'okro')
console.log(givenFavFoods)


// bracket donation
// accessing phone 
let bracketAppliantPhone = newApplicant['phone']
console.log(bracketAppliantPhone)

// accessing favfoods

let bracketAppliantfavefoods = newApplicant['favfoods']
console.log(bracketAppliantfavefoods[2]= 'ogbolor')
console.log(bracketAppliantfavefoods)
console.log(newApplicant['address']['lga'])



// destructuring objects 

let account = {
    namess:'object',
    agess:50,
    colorss:'black'
}


let nameAccount = account.namess
console.log(nameAccount)

let ageAccount = account.agess
console.log(ageAccount)

let colorAccount = account.colorss
console.log(colorAccount)


let {namess, agess, colorss} = account

console.log(namess)
console.log(agess)
console.log(colorss)

// object method 

let passenger = {
    firstName: 'bayo',
    lastname: 'emeka',
    year:2022,
    busFairInNaira:200,
    pocketMoneyInNaira:1000,
    currentDate:Date(),
    calcbal:function(){
        let statement = `${this.firstName} has ${this.pocketMoneyInNaira - this.busFairInNaira}`
        return statement
    }
}

console.log(passenger.calcbal())

// higher order function (foreach, map , filter) 


let PEOPLE = [
    {name: 'alasker',  age:40 , position: 'game developer'},
    {name: 'simi',  age:50 , position: 'front-end dev'},
    {name: 'daniel',  age:60 , position: 'backend dev'},
    {name: 'jasper',  age:70 , position: 'mobile app developer'}
]

for(let i = 0; i < PEOPLE.length; i++){
    console.log(PEOPLE[i])
}


// foreach() method 

// it doesnt return a new array 

PEOPLE.forEach(function(person) {
  console.log(person)
})

// map ()
// it returns a new array
// it dosent changes the sizes of original array 
// uses value from d original array 
// it loops


let anodaPerson = PEOPLE.map((person)=>{
    return person
})


console.log(anodaPerson)

//filter()
// it loops 
// it returns based on condition

for (let i =0; i < PEOPLE.length; i++) {
    if (PEOPLE[i].name === 'simi') {
        console.log(PEOPLE[i])
    }
}


let filteredPerson = PEOPLE.filter(function(p){
    return p.name === 'simi'
})

console.log(filteredPerson)


// assignment 1




// segun_M  76 
// segun_h  1.99 

let segunBodyMassIdex = 76/(1.99 * 1.99)
console.log(segunBodyMassIdex)

let mariamBodyMassIndex = 80/(2.1 * 2.1)
console.log(mariamBodyMassIndex)


let segun_info= {
    name : 'segun',
    bodymassindex: 19.1,
    
    calcbal:function(){
        let statement = `${this.name} BMI ${this.bodymassindex} `
        return statement
    }


}

console.log(segun_info.calcbal())



let mariam_info= {
    name : 'mariam',
    bodymassindex: 18.1,
    
    calcbal:function(){
        let statement = `${this.name} BMI ${this.bodymassindex} `
        return statement
    }


}

console.log(mariam_info.calcbal())


function higherBMI ( segun_info, mariam_info ){
    if( segunBodyMassIdex > mariamBodyMassIndex){
        console.log(`${segun_info} is higher than ${mariam_info}` )
    }else{
        console(`${segun_info} is lower than ${mariam_info}`)
    }

 }

higherBMI(segun_info.calcbal(),mariam_info.calcbal())


// assignment 2 

let companies = [
    
    {name: 'company One', category: 'Finance', start: 1981, end: 2003 },
    {name: 'company Two', category: 'Retail', start: 1992, end: 2008 },
    {name: 'company Three', category: 'Auto', start: 1999, end: 2007 },
    {name: 'company Four', category: 'Retail', start: 1989, end: 2010 },
    {name: 'company Five', category: 'Technology', start: 2009, end: 2014 },
    {name: 'company Six', category: 'Finance', start: 1987, end: 2010 },
    {name: 'company Seven', category: 'Auto', start: 1986, end: 1996 },
    {name: 'company Eight', category: 'technology', start: 1981, end: 1989 },

]

let agesss = [30,15,10,5,40,80,2,20,21,25]




//  name of company only 

companies.forEach(function(company) {
    console.log(company.name)
})

 
// company that lasted 10 years 
let tenYears = companies.filter(company=> (company.end -company.start > 10))

console.log(tenYears) 





// ages that is greater or equal to 21 


let over21 = agesss.filter(agesss =>( agesss >= 21))
    



console.log(over21)

// =========================================================================================================================================
const DATA =[
    {id: 1, title: 'fisrt'},
    {id: 2, title: 'second '},
    {id:3 , title: 'third '},
    {id:4 , title: 'fourth'},
]

// for loop 
for(let i = 0; i < DATA.length; i++){
    console.log(DATA[i])
}

// map 
let newDATA = DATA.map(function(datum){
    console.log(datum)
})

// for loop and filter 

for(let i = 0; i < DATA.length; i++){
    if(DATA[i].id % 2 === 0){
        console.log(DATA[i]);
    }
}

// filter 

let filteredDATA = DATA.filter((evenFiltred)=> evenFiltred.id % 2 === 0)
console.log(filteredDATA)

// find index 

let itemIdx = DATA.findIndex((idx)=> idx.id === 2)
console.log(itemIdx)


// find 
let item = DATA.find (function (item){
    return item.id === 2
})

console.log(item)
 

// reduce is jux like (), reduce (), also runs a callback for each element of an array . d diff here is dt reduce passes d result of dis callbak (d accumulator ) from one array element to anoda 


const numbered = [1,2,3,4,5,6]
const sum = numbered.reduce((result,item)=> result + item,0)
console.log(sum)


// math object 

let floor = 4.96666
let floorResult = Math.floor(floor)

console.log(floorResult)
//  ceil 
let ceil = 4.5000
let ceilResult = Math.ceil(ceil)
console.log(ceilResult)


// round 
let nums = 2.4000
let numsResult = Math.round (nums)
console.log(numsResult)

// pow 

let pow = Math.pow(2,2)
console.log(pow)


// random 
let random = Math.floor (Math.random() * 6 ) + 1
console.log(random)


// dates

// let board = 'eskimi'
// console.log(board)


const months = [

    'jan',
    'feb',
    'mar',
    'apr',
    'may',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dec',
];
const DAYS = [
    'sun',
    'mon',
    'tue',
    'wed',
    'thur',
    'fri',
    'sat'

]


const date = new Date()
const month = date.getMonth()
console.log(months[month])

const day = date.getDay()
console.log(date[day])

const yearr = date.getFullYear()
const STATEMENT =`${DAYS[day]}  ${
    months[month]
} ${date.getDate()} ${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`

console.log(date)
console.log(STATEMENT)    

// =========================================================================

function colored (){
    console.log('this is a ftn')
}

setTimeout(colored,3000)
console.log('outside d colored ftn')


// 25th oct 2022 assignment

const BILL = 430
const TIP = BILL <= 300 && BILL >=  50? BILL * 0.15 : BILL * 0.2
console.log(TIP);


const statements = `bill was ${BILL}, tip was ${TIP}, and total was ${BILL+ TIP}`;
console.log(statements)



let interval = setInterval (()=>{
    let date = new Date()
    console.log(date)
},2000)

setTimeout(function(){
    let delay = `hi i would take some seconds to display`
    console.log(delay)

    clearInterval(interval)
},8000)


// when we write awa html and view on d , browser views it as DOM(document object model) 
// js is similar to css 
// - select d element or grp of elements u want 2 affect 
// - decide d effect u want to apply 2d selection 
// - dere r many diff ways to atually apply to the effect 




























































