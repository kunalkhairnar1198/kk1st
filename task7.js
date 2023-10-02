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

    console.log('call the addItem', 1)
    //Get input value
    let newItem = document.getElementById('item').value;
    //create new li element
    let li = document.createElement('li')
    //add class
    li.className = 'list-group-item'
    console.log(li)
    //add text node with input value
    li.appendChild(document.createTextNode(newItem))



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
    addBtn.className = 'btn btn-success btn-sm float-right add'
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