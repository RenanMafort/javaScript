//Objetos
let book = {
    author: "Renan",
    pages: 204,
    chapters: {
        chap1 : "Resumo",
        chap2: "Inicio"
    },
    printBook: function() {
        console.log("Printing....");
    }
}

//book.printBook();

//Factory
function createBook(title,author,pages) {
    const book = {
        title: title,
        author: author,
        pages: pages,
    
        printBook: function() {
            console.log("Printing....");
        }
    }

    return book;
}

const book1 = createBook("Não sei","Renan",204);
console.log(book1);

book1.testandoNewProperties = "HELLO WORLD!";

console.log(book1);

//Constructor
function CreateObject(title, author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let objectExample = new CreateObject("Renan","Sereia",290);
console.log(objectExample.author);
console.log(objectExample);