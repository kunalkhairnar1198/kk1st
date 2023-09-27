//QUERYSELECTOR //

//use id # selctor and then modify it
let header = document.querySelector('#main-header')
header.style.borderBottom = 'solid 4px black'

//change the input value modification
let input = document.querySelector('input')
input.value = 'enter the value'

//chage the button value
let submit = document.querySelector('input[type="submit"]');
submit.value = 'SEND'


// //if you have a css class use the .selector 
// let item = document.querySelector('.list-group-item');
// item.style.color = 'red'


// //if you have modify first item then use :last-child
// let lastitem = document.querySelector('.list-group-item:last-child');
// lastitem.style.color = 'blue'

// //if you have modify nth item in the selector use nthchild selector
// let seconditem = document.querySelector('.list-group-item:nth-child(2)');
// seconditem.style.backgroundColor = 'green'
// seconditem.style.borderBottom = 'solid 4px gray'

// //invisible iteme
// let thirdele = document.querySelector('.list-group-item:nth-child(3)');
// thirdele.style.display = 'none';
// // console.log(thirdele)

//QUERYSELECTORALL //
//modify the title elements
let titles = document.querySelectorAll('.title');
console.log(titles)
titles[0].style.color = 'red'
titles[0].textContent = 'Hello add items'


//modify odd even colors
let odd = document.querySelectorAll('li:nth-child(odd)')
console.log(odd)
let even = document.querySelectorAll('li:nth-child(even)')


for (let i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'green'
    even[i].style.backgroundColor = 'white'
}

//task 5
//modify color list item 
let itemli = document.querySelectorAll('li')
// console.log(itemli)
itemli[1].style.color = 'green'