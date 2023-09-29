// //traversing dom

// //how to get parent node 
// let itemlist = document.querySelector('#items')
// console.log('find parent node', itemlist.parentNode)
// //modify the parentnode
// // itemlist.parentNode.style.backgroundColor = 'gray';
// // console.log('parent find parent', itemlist.parentNode.parentNode.parentNode)


// //parentElement this same thing of the parent node
// console.log(itemlist.parentElement)
// itemlist.parentElement.style.backgroundColor = 'gray';
// console.log('parent find parent', itemlist.parentElement.parentElement.parentElement)

// //childNodes
// console.log(itemlist.childNodes)

// //children
// console.log(itemlist.children)
// //access the list element using children and modify 
// itemlist.children[1].style.backgroundColor = 'red'

// //firstchild 
// console.log('it access the firstchild ele property', itemlist.firstChild)

// //firstchildElement using firstEelechild
// console.log(itemlist.firstElementChild)
// itemlist.firstElementChild.textContent = 'hello 1 change the content of the firstchild';

// //lastchild 
// console.log('it access the lastchild ele property', itemlist.lastChild)

// //lastchildElement using lastEelechild
// console.log(itemlist.lastElementChild)
// //modify the textcontent
// itemlist.lastElementChild.textContent = 'hello 2 change the content of the lastchild';

// //NEXTSIBLING
// console.log('nextsibling', itemlist.nextSibling)
// //NEXTELEMENTSIBLING
// // console.log(itemlist.nextElementSibling)

// //PREVIOUSSIBLING
// console.log(itemlist.previousSibling)
// //PREVIOUSELEMENTSIBLING
// console.log('previous element list', itemlist.previousElementSibling)
// itemlist.previousElementSibling.style.color = 'lightblue'


//createElement
//create div element for the html
let newdiv = document.createElement('div')
console.log(newdiv)

//add class the created new div
newdiv.className = 'hello'

//add id the created newdiv
newdiv.id = 'hello1'

//add new attribute in created div
newdiv.setAttribute('title', 'hellodiv')

//create the text node create the content
let newDivText = document.createTextNode('hello word')

//add text to newdiv
newdiv.appendChild(newDivText)


//create the new div inside the header node and .continer node
let container = document.querySelector('header .container')
//create before the header and h1
let h1 = document.querySelector('header h1')

//modify the font new created element
newdiv.style.fontSize = '30px'

//insert the newdiv before the h1
container.insertBefore(newdiv, h1)


//now go head and add hello word before item1

let item = document.querySelector('div .list-group')
let li1 = document.querySelector('div li')

let newh2 = document.createElement('h1')
console.log(newh2)
newh2.id = 'hello2'

let h2TextNode = document.createTextNode('HeLLo word')

newh2.appendChild(h2TextNode)

console.log(item)
newh2.style.fontSize = '40px'
newh2.style.backgroundColor = 'orange'
newh2.style.textAlign = 'center'
newh2.style.fontWeight = 'Bold'
newh2.style.color = 'green'

item.insertBefore(newh2, li1)

