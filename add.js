document.addEventListener('DOMContentLoaded', function() {
let myLibrary = [];


// add book to myLibrary array.
bookForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;

    let book = {
        name: name,
        author: author,
        pages: pages,
        read: read
    }

    // create a new Row on click
    let table = document.getElementById('main');
    let row = document.createElement('tr');
    let c1 = document.createElement('td');
        c1.textContent = name;
    let c2 = document.createElement('td');
        c2.textContent = author;
    let c3 = document.createElement('td');
        c3.textContent = pages;
        console.log(read)
    let c4 = document.createElement('td');
        if (read) {
            c4.textContent = 'Yes';
        } else {
            c4.textContent = 'No';
        }
    let c5 = document.createElement('td');
        
    let button = document.createElement('button');
        button.textContent = 'Delete';
        c5.appendChild(button);

    
    // append the cells to the newly formed row
    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(c4);
    row.appendChild(c5);
    // append the row to the table
    table.appendChild(row);
    
    myLibrary.push(book)
    console.log(myLibrary);

    myLibrary[0].name

})


let deleteButtons = document.getElementsByClassName('delete');

deleteButtons.onclick = function() {
    console.log('deleted')
}

        




});


