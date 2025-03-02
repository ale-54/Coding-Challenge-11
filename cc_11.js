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
