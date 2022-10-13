/* Events !important */

/* Exercise #1 - Modal 
    - Create an invisible section;
    - Create a button when clicked show the invisible section;
    - When the section is visible, "ESC" key will make it invisible again.
*/
// Variable selecting the button id "OpenModal"
const bodyModal = document.querySelector('body')
const buttonOpenModal = document.getElementById('openModal');
const modalWrapper = document.querySelector('.modal-wrapper');
buttonOpenModal.onclick = function() {
    bodyModal.classList.add('modal');
    modalWrapper.classList.remove('invisible');
    buttonOpenModal.classList.add('invisible');
}
document.addEventListener('keydown',
    function(event) {
        const isEscKey = event.key === 'Escape'
        if(isEscKey) {
            bodyModal.classList.remove('modal')
            modalWrapper.classList.add('invisible')
            buttonOpenModal.classList.remove('invisible')
        }
    }
)

let meterLabel = document.querySelector('span#meterLabel');
console.log(meterLabel)
//Monitoring live input value
let input = document.querySelector('input')
//Change Label content for input text
input.onblur = function(event){
    // console.log(event.currentTarget.value)
    if (event.currentTarget.value === '' ){
        meterLabel.innerHTML = "N/A"    
    } else {
        meterLabel.innerHTML = event.currentTarget.value
    }
    return meterLabel
}

//Event listener
meterLabel.addEventListener('click',alertLabel)
// console.log(meterLabel)
function alertLabel(){
    console.log("Not a control")
}

//Add value to meter
const more = document.querySelector('#meterMore')
// console.log(more)
more.onclick = function(){
    let meterBarValue = document.querySelector('meter')
    meterBarValue.value += 1
    console.log(meterBarValue.value)
}
//Remove value to meter
const less = document.querySelector('#meterLess')
// console.log(more)
less.onclick = function(){
    let meterBarValue = document.querySelector('meter')
    meterBarValue.value -= 1
    console.log(meterBarValue.value)
}
//Toogle Dark Theme
function toggleDarkTheme() {
    let bodySel = document.querySelector('body')
    bodySel.classList.toggle('black')
}

/* Create and append elements */
// // Creating a footer and appending after the main
// let bodyJs = document.querySelector('body');
// let footerJs = document.createElement('footer');
// footerJs.innerHTML='<hr><span>gleidsonlm 2022</span>'
// let mainJs = document.querySelector('main');
// //mainJs.append(footerJs) //to append after main
// mainJs.insertBefore(footerJs, bodyJs.nextSibling) //to insert after main next element

/* Navigating elements */
// //Parent element and node
// let bodySel = document.querySelector('body')
// console.log(bodySel.parentElement)
// console.log(bodySel.parentNode)
// //Child element and node
// console.log(bodySel.childNodes) //returns node list, including text and comments
// console.log(bodySel.children) //returns html collection
// //First child
// console.log(bodySel.firstChild) //returns first node item, including text and comment
// console.log(bodySel.firstElementChild) //returns first html collection
// //Last child
// console.log(bodySel.lastChild) //returns first node item, including text and comment
// console.log(bodySel.lastElementChild) //returns first html collection
// //Siblings
// let mainSel = document.querySelector('main')
// console.log(mainSel.nextSibling) //return node
// console.log(mainSel.nextElementSibling) //return html col
// console.log(mainSel.previousSibling) //return node
// console.log(mainSel.previousElementSibling) //return html col

/* Handling styles and class */
// let bodySel = document.querySelector('body');
// //Handling style
// //Setting body background to black and text-color to white
// // bodySel.style.background='black';
// // bodySel.style.color='white';
// //Handling classList
// console.log(bodySel.classList)
// //Adding black theme and arial font-family
// bodySel.classList.add('black','arial')
// //Removing black theme
// bodySel.classList.remove('black')
// //Toogle black theme
// bodySel.classList.toggle('black')

/* Handling content */
//Handling elements attribute 
    // let headerAtt = document.querySelector('header')
    // //HTML has no class or id
    // console.log(headerAtt.getAttribute('class'))
    // console.log(headerAtt.getAttribute('id'))
    // //JS adding class
    // headerAtt.setAttribute('class','serif')
    // console.log(headerAtt.getAttribute('class') + " <- after setAttribute")
    // //JS adding id
    // headerAtt.setAttribute('id','head')
    // console.log(headerAtt.getAttribute('id') + " <- after setAttribute")
    // //JS removing both
    // headerAtt.removeAttribute('id')
    // headerAtt.removeAttribute('class')
    // console.log(headerAtt.getAttribute('id') + "<- after removeAttribute")
    // console.log(headerAtt.getAttribute('class') + "<- after removeAttribute")

//Handling content 'value' attribute (input,button,option/li/meter/progress/param)
// let meterBarValue = document.querySelector('meter')
// meterBarValue.value = "50"

// Handling content with innerHtml
//<span class="material-symbols-outlined">sentiment_satisfied</span>
// let domTitle = document.getElementById('firstTitle')
// domTitle.innerHTML += ' <span class="material-symbols-outlined">sentiment_satisfied</span>'

// Handling content with innerText
//domTitle.innerText += " :)"

// Handling content with textContent
// domTitle.textContent += " :)"

/* Selecting Elements */
//Get Element with query Selector (All) > return match node list
// console.log(document.querySelectorAll('meta'))
// let elements = document.querySelectorAll('meta')
// elements.forEach(el => console.log(el))

//Get Element with query Selector > return first match element
// console.log(document.querySelector('meta'))

//Get Element by its Tag Name
// console.log(document.getElementsByTagName('p')) > return html collection

//Get Element by its Class 
// console.log(document.getElementsByClassName('serif')) > return html collection

// Get Element by its ID
// console.log(document.getElementById('firstTitle')) > return element