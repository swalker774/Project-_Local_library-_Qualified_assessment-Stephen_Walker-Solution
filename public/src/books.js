function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
  return books.find((author) => author.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  let booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false))
  let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true))
  let array = [[...booksBorrowed], [...booksReturned]]
  return array
}


function getBorrowersForBook(book, accounts) {
  return book.borrows 
   .map((borrows) => {
    let account = accounts.find((account) => account.id === borrows.id)
   return {...borrows, ...account} 
  })
  .slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
