let body = document.getElementById('body');

console.log(body);

let requestURL = 'books.json';
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    let books = request.response;
    console.log(books);
    for (let i = 0; i < books.length; i++) {
        let title = books[i].title;
        let authors = books[i].authors;
        let publisher = books[i].publisher;
        let type = books[i].type;
        let link = books[i].link;
        
        body.innerHTML += `<div class="book-item">
        <h1>${title}</h1>
        <p class="book-authors">${authors}</p>
        <p class="book-desc">${type}<br/>${publisher}</p>
        <a href="${link}" class="btn btn--white">Скачать</a>
        </div>`
    }
}