// document.body.style.backgroundColor = 'blue'
// document.body.style.color = 'red'
// document.getElementById('btn').style.color = 'purple'
// // lets assign to a variable if there  multiple things we want 2do on an Element, 2 avoid writing document. avoid DRY (do not repeat urself ) 


// let body = document.body.style
// body.backgroundColor = 'green'


// so let dive into it 
// the process of reaching and selecting elements is called querying the dom(document object model ), and we ave diff methods of querying d DOMException, please see below 
//============================================================getElementById('element')=====================================================
//----- getElementById ('element ') --- make sure d id matches 
// ----- We can assign 2 a  variable or jux go straight using document. getElementById continuosly 
// ------ lets do basic tins, so we understand cox we wud go in 2 complex situations which wud  inturn need d basic tins u learnt \


// lets select d h1 tag 

// document.getElementById('title').style.color = 'yellow'

// let h1 = document.getElementById('title');
// h1.style.color = 'yellow'

// let btn = document.getElementById('btn').style
// btn.backgroundColor = 'red'
// btn.color = 'white'


// // ========================================getElementByTagName("tagname")=====================================================================
// // HTML- collection = array-like object
// // index, lenght properties, but not all array methods wud work (cant use forEach)


// let Header = document.getElementsByTagName('h2')
// console.log(Header)

// let newHeader = [...Header]
// newHeader.forEach((h)=>{
//     h.style.color= 'orange'
//     console.log(newHeader)
// })


// //========================================getElementByClassname('className)====================================================================
// //----- with classname we can select multiple elements 
// //------ select d elements or group of elements u wants
// //------ decide d effect u want 2d selection


// let itemsListed = document.getElementsByClassName('special')
// console.log(itemsListed)


// itemsListed[2].style.color = 'purple'



// let koretListedItems = [...itemsListed]
// koretListedItems.forEach(function(xx){
//     console.log(xx)
// })

// //=============================================querySelector and querySelector=====================================
// //querySelector ('any css selector ') ---- selects single element
// //select d element or group of element u want 
// //decide d effect u wanat 2 apply 2d selection


// let anodaItem = document.querySelector('#title')
// console.log(anodaItem)
// anodaItem.style.color = 'red'


// let singlItems = document.querySelector('.special')
// console.log(singlItems)


// // querySelectorAll() ---- selects all, foreach wud work here
// const li = document.querySelectorAll('.special')
// console.log(li)
// li.forEach((itx)=>{
//     console.log(itx)
//     itx.style.color = 'green'
// })

// // innertext 
// let para = document.querySelector('p')
// console.log(para)

// para.innerText += 'and jasper is here'


// // textcontent 
// let Headers =  document.querySelector('h3')
// console.log(Headers.textContent)
// console.log(Headers.innerText)

// //innerHTML
// let change = document.querySelector('.html')
// change.innerHTML = '<h1> we dn change am finally </h1>'

// //changing attribute 

// const link = document.querySelector('a')
// console.log(link.getAttribute('href'));
// link.setAttribute('href','https://wwww.facebook.com')

// link.innerText = 'link to facebook'
// console.log(link.innerText)

// // classname
// //classlist


// const first = document.getElementById('first')
// const second = document.getElementById('second')
// const third = document.getElementById('third')

// const classValue = first.className
// console.log(classValue)

// //let cheq if an element has a class using contains 
// let result = second.classList.contains('colors')
// console.log(result)


// if(result){
//     console.log('it has it ')
// }else{
//     console.log('it doesnt')
// }


//events
//select elements
//addeventlistener()
//what event, what to do

const btn = document.querySelector('.btn')
const heading = document.querySelector('h2')

function changeColor(){
    let hasClass = heading.classList.contains('red')
    if(hasClass){
        heading.classList.remove('red')
    }else{
        heading.classList.add('red')
    }
}

btn.addEventListener('click',changeColor)