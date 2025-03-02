//Task 1: Creating a Book Class
class Book {
    constructor(title, author, isbn, copies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    }; //book info
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }; //displaying book details
    updateCopies(quantity) {
        this.copies += quantity;
    }; //updating book copies
}; //book class

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log(book1.getDetails()); //Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 5

book1.updateCopies(-1);
console.log(book1.getDetails()); //Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4

//Task 2: Creating a Borrower Class
class Borrower {
    constructor(name, borrowerId) {
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = []; //array of borrowed book titles
    }; //borrower info
   borrowBook(book) {
        this.borrowedBooks.push(book);
    }; //adds book to borrowedBooks list
    returnBook(book) {
        this.borrowedBooks = this.borrowedBooks.filter((borrowedBook) => borrowedBook !== book);
    }; //returning book, removing from borrowedBooks list
}; //borrower class

const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); //["The Great Gatsby"]

borrower1.returnBook("The Great Gatsby");
console.log(borrower1.borrowedBooks); //[]

//Task 3: Creating a Library Class
class Library {
    constructor() {
        this.books = [];
        this.borrowers = [];
    }; //library info
    addBook(book) {
        this.books.push(book);
    }; //adds book to books list
    listBooks() {
        this.books.forEach((book) => console.log(book.getDetails()));
    }; //logs all book details
};

const library = new Library();
library.addBook(book1);
library.listBooks();
//Title: The Great Gatsby, Author: F. Scott Fitzgerald, ISBN: 123456, Copies: 4