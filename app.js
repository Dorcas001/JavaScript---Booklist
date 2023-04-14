const title = document.querySelector('#title');
const author = document.querySelector('#author');
const isbn = document.querySelector('#isbn');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', addBook);

// functions
function addBook(e){
    e.preventDefault();
    if (title.value == "" && author.value == "" && isbn.value == "") {
        // alert warning
        title.classList.add('warning');
        author.classList.add('warning');
        isbn.classList.add('warning');
    }else if(title.value ==""){
        title.classList.add('warning');

    }
    else if(author.value ==""){
        alert('author field is empty');
    }
    else if(isbn.value ==""){
        alert('isbn field is empty');
    } else{
        // creattion of table row
        const newRow = document.createElement('tr');
        bookList.appendChild(newRow);
        // creation of  table data
        const titleData = document.createElement('td')
        newRow.appendChild(titleData);
        titleData.innerText = title.value; 
        // creation of author data
        const authorDetail = document.createElement('td')
        newRow.appendChild(authorDetail);
        authorDetail.innerText = author.value;

        const isbnData= document.createElement('td')
        newRow.appendChild(isbnData);
        isbnData.innerText = isbn.value; 
    } 
    title.value =""
    author.value = ""
    isbn.value = "" 
}
// search function
const searchForm = document.querySelector('#authorSearch');
let filtered = [];
searchForm.addEventListener('keyup', e=>{
    let currentValue = e.target.value.toLowerCase();
    for (let i = 0; i< newRow.length; i++);{
        titleData = newRow[i].getElementByTagName('titleData')[0];
    }
    // console.log(currentValue);
//     let searchControl = document.querySelectorAll('div.title');
//     Array.from(searchControl).forEach(titles =>{
//         if(titles.textContent.toLowerCase().includes(currentValue)){
//             titles.parentNode.style.display = 'block';

//         } else {titles.parentNode.style.display = 'none';
//         }
//     })
})