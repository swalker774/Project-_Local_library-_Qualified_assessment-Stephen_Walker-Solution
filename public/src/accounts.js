function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}
/* parks.sort((parkA, parkB) =>
  parkA.name.toLowerCase() > parkB.name.toLowerCase() ? 1 : -1
); */
function sortAccountsByLastName(accounts) {
  return accounts.sort((account1, account2) => account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1);
}

function getTotalNumberOfBorrows(account, books) {
 let timesBorrowed = books.reduce((total, book) => {
  if(book.borrows.filter((borrow) => borrow.id === account.id).length){
    total += 1
  } 
   return total
 }, 0)
 return timesBorrowed
}
                
function getBooksPossessedByAccount(account, books, authors) {
  const booksBorrowed = books.filter((book) => book.borrows.some(borrow => borrow.id === account.id && !borrow.returned))
  return booksBorrowed.map((book) => {
   const author = authors.find((author) => author.id === book.authorId)
   return {...book, author}
  })
  }                      
 

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};











