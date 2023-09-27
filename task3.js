//GET ELEMENTBY CLASS //

let list = document.getElementsByClassName("list-group-item")
console.log(list)
console.log(list[1])


let header = document.getElementsByClassName('title')
console.log(header)
header[0].style.fontWeight = 'bold';
header[0].style.backgroundColor = 'gray'


// list[1].textContent ='hello'
// list[1].style.fontWeight = 'bold';
// list[1].style.backgroundColor ='yellow'


// //give an error
// // list.style.backgroundColor ='blue';

// for(let i =0; i<list.length; i++){
//     list[i].style.backgroundColor='gray'
// }

list[2].style.fontWeight = 'bold';
list[2].style.backgroundColor = 'green';


for (let i = 0; i < list.length; i++) {
    list[i].style.fontWeight = 'bold'
}