// //GET ELEMENTTAGNAME //

let list = document.getElementsByTagName('li')
console.log(list)
list[0].textContent = 'hello'
list[0].style.fontWeight = 'bold'
list[0].style.backgroundColor = 'yellow'

// for (var i = 0; i < list.length; i++) {
//     // list[i].style.backgroundColor = 'red'
// }

// add new list element and edit the element
list[4].style.fontWeight = 'bold'
list[4].style.backgroundColor = 'red'
list[4].textContent = 'this list element is edited'