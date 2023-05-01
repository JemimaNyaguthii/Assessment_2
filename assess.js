
// const books = [
//     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
//     isAvailable: true },
//     { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
//     isAvailable: false },
//     { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
//     1866, isAvailable: true },
//     { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
//     isAvailable: false },
//     { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
//     ];
// Create a function called getAvailableBooks that returns an array of all available
// books.

    const books=[   
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger', publicationYear: 1951,
       isAvailable: true },
       { title: 'Great Expectations', author: 'Charles Dickens', publicationYear: 1861,
        isAvailable: false },
       { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', publicationYear:
        1866, isAvailable: true },
         { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', publicationYear: 1925,
         isAvailable: false },
         { title: 'The Odyssey', author: 'Homer', publicationYear: -800, isAvailable: true },
      ];
      function getAvailableBooks(books){
books.forEach(getAvailableBooks=>{   
    books.title
});
 }
    console.log(getAvailableBooks(books))

// Create a function getBooksByAuthor that takes an author's name as an argument and
// returns an array of all books by that author.

function getBooksByAuthor(author){
    return getBooksByAuthor.map(books =>books.author )
}
console.log(getBooksByAuthor(author))

// Create a function addNewBook that takes a book object as an argument and adds it
// to the library, ensuring that the new book has all required properties (title, author,
// publicationYear, and isAvailable).

function addNewBook(){
   return books.Doll
}
console.log(addNewBook)
// Create a function checkoutBook that takes a book title as an argument and changes
// the book's isAvailable property to false. If the book is not found in the  library, the
// function should return a message indicating that the book is not available.

function checkOutBook(){
    for(let books=0;books<books.length;i++)
    if (isAvailable==true)
        {
            return false
        }
        else {
            return "Book not found"
        }

}
console.log(checkOutBook)
// Create a function returnBook that takes a book title as an argument and changes the
// book's isAvailable property to true. If the book is not found in the library, the function
// should return a message indicating that the book does not belong to the library.
function returnBook(){
    books.forEach(b =>{ 
        if( isAvailable!=true){
            return true
        }
        else{
            return "book does not belong to the library"
        }  
    });
}
console.log(returnBook)

