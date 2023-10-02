let form = document.getElementById('addForm')
let itemList = document.getElementById('items')

//form submit event
form.addEventListener('submit', addItem)

//how to delete event
itemList.addEventListener('click', removeItem)




//how to elements button or input output functionality of the form
//form submit events
function addItem(e) {
    e.preventDefault();

    // console.log('call the addItem', 1)
    //Get input value
    let newItem = document.getElementById('item').value;
    let desc = document.getElementById('item1').value;

    //create new li element
    let li = document.createElement('li')

    //add class
    li.className = 'list-group-item  '

    console.log(li)
    //add text node with input value
    let itemTextNode = li.appendChild(document.createTextNode(newItem + ' '))
    let descTextNode = li.appendChild(document.createTextNode(desc))

    // Append the text nodes to the li element
    li.appendChild(itemTextNode);
    li.appendChild(descTextNode);

    itemList.appendChild(li);
    console.log(itemList)


    //create delete button element
    let deleteBtn = document.createElement('button')
    //addclasses to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    //append node  text node
    deleteBtn.appendChild(document.createTextNode('x'))
    //append button to li
    li.appendChild(deleteBtn)
    //append li to list
    itemList.appendChild(li)

    let addBtn = document.createElement('button')
    //add class to add button
    addBtn.className = 'btn btn-success btn-sm mr-1 float-right add'
    //append node  text node
    addBtn.appendChild(document.createTextNode('add'))
    //add button to list
    li.appendChild(addBtn)
    //append li to list
    itemList.appendChild(li)


}


//Remove item 
function removeItem(e) {
    // e.preventDefault();
    if (e.target.classList.contains('delete')) {
        if (confirm('Are you sure?')) {
            let li = e.target.parentElement;
            itemList.removeChild(li)
        }
    }
}


//how to edit functionality add in the webpage
itemList.addEventListener('click', edit)

//add button in edit functionality
function edit(e) {
    e.preventDefault()
    console.log("edited")

    if (e.target.classList.contains('edit-add')) {
        let editItem = e.target.parentElement

    }
}

let filter = document.getElementById('filter')
filter.addEventListener('keyup', filterItems)
// how to filter function in js
function filterItems(e) {
    //convert text to lowercase
    let text = e.target.value.toLowerCase()
    // console.log(text)
    //get list
    let items = itemList.getElementsByTagName('li')
    // console.log(items)
    //convert to an array
    Array.from(items).forEach(function (item) {
        let itemName = item.firstChild.textContent;
        let Desc = item.childNodes[1].textContent.toLowerCase();
        // console.log(Desc)
        // console.log(itemName)
        if (itemName.toLowerCase().indexOf(text) != -1 || Desc.indexOf(text) != -1) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}