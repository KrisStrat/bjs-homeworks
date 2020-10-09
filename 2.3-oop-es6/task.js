class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }
  fix() {
    this.newState = this.state * 3 / 2;
    return this.newState;
  }
  set state(this.newState) {
    if (this.newState < 0) {
      this._state = 0;
    }
    else if (this.newState > 100) {
      this._state = 100;
    }
    else if {
      this._state = this.newState;
    }
  }
  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.type = "Magazine";
  }
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, author ) {
    this.author = author;
    this.type = "Book" ;
  }
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    this.type = "Novel";
  }
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    this.type = "Fantastic";
  }
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, author) {
    this.type = "Detective";
  }
}

//Task 2

class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }
  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }
  findBookBy(type, value) {
    let key ;
    for (let i = 0, i < this.books.length , i++) {
      let actualBook = this.books[i];
      for (key in actualBook ) {
        if (key === type && actualBook[key] === value) {
          return book;
        }
        else if (key === type && actualBook[key] != value) {
          return null;
        }
      }
    }
  }

   giveBookByName(bookName) {
     for (let a = 0; a < this.books.length , a++) {
       let searchingBook = this.books[a] ;
       if (searchingBook.name === bookName) {
         this.books.splice(a,1);
         return searchingBook;
       }
     }     
   }
}
