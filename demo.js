// // EXAMINE THE DOCUMENT OBJECT MODEL//
// // console.log(document)

// console.log(document.domain)
// console.log(document.URL)

// console.log(document.title)

// // document.title = 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// //find index value in html page
// console.log(document.all[10])
// // document.all[10].textContent ='hello'
// console.log(document.forms[0])
// console.log(document.links)


// console.log(document.images)


//GET ELEMENTBYID
// console.log(document.getElementById('header-title'))
// var headerTitle = document.getElementById('header-title')
// console.log(headerTitle)
// var header = document.getElementById('main-header')
// console.log(header)
// headerTitle.textContent = "hello"
// headerTitle.innerText = 'goodby'
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = "<h3>Hello kunal</h3>"
// header.style.borderBottom = 'solid 3px #000';

//change the html element style using a dom manipulation'
var header = document.getElementById('text')
console.log(header)
header.style.fontWeight = 'bold';
header.style.color = 'green';
header.style.borderBottom = 'solid 3px #000';

