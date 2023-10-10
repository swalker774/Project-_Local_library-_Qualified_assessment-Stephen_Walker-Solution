function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => book.borrows[0].returned === false).length
}

function getMostCommonGenres(books) {
  const bookGenres = {}
  const bookGenresSorted = []
  books.forEach((count) => {
    if(bookGenres[count.genre]) {
      bookGenres[count.genre] += 1
    }
    else{
      bookGenres[count.genre] = 1
    }
  }) 
  let previousMax = []
  for(let i =0; i<5; i++) {
    let maximum = 0
    let maxIndex;
    for(let j in Object.values(bookGenres)) {
      if(maximum < Object.values(bookGenres)[j] && !previousMax.includes(j)){
        maximum = Object.values(bookGenres)[j]
        maxIndex = j
      }
    //  console.log(Object.keys(bookGenres)[j])
    }
    previousMax.push(maxIndex)
    bookGenresSorted.push({name: Object.keys(bookGenres)[maxIndex], count: maximum})
  }
  return bookGenresSorted
}

function getMostPopularBooks(books) {
  const bookBorrows = {}
  const bookBorrowsSorted = []
  books.forEach((count) => {
      bookBorrows[count.title] = count.borrows.length
  }) 
  let previousMax = []
  for(let i =0; i<5; i++) {
    let maximum = 0
    let maxIndex;
    for(let j in Object.values(bookBorrows)) {
      if(maximum < Object.values(bookBorrows)[j] && !previousMax.includes(j)){
        maximum = Object.values(bookBorrows)[j]
        maxIndex = j
      }
    //  console.log(Object.keys(bookGenres)[j])
    }
    previousMax.push(maxIndex)
    bookBorrowsSorted.push({name: Object.keys(bookBorrows)[maxIndex], count: maximum})
  }
  return bookBorrowsSorted
}

function getMostPopularAuthors(books, authors) {
    const bookAuthor = {}
  const bookAuthorSorted = []
  books.forEach((count) => {
      if(bookAuthor[count.authorId]) {
      bookAuthor[count.authorId] += count.borrows.length
    }
    else{
      bookAuthor[count.authorId] = count.borrows.length
    }
  }) 
  let previousMax = []
  for(let i =0; i<5; i++) {
    let maximum = 0
    let maxIndex;
    for(let j in Object.values(bookAuthor)) {
      if(maximum < Object.values(bookAuthor)[j] && !previousMax.includes(j)){
        maximum = Object.values(bookAuthor)[j]
        maxIndex = j
      }
    }
    previousMax.push(maxIndex)
    let author = authors.filter((author) => author.id == Object.keys(bookAuthor)[maxIndex])
    console.log(author)
    bookAuthorSorted.push({name:author[0].name.first + " " + author[0].name.last, count: maximum})
  }
  return bookAuthorSorted
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
