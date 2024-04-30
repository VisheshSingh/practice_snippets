function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

function Magazine(title, author, year, month) {
  Book.call(this, title, author, year);
  this.month = month;
}

const book1 = new Book('Book1', 'jane doe', 2021);
console.log(book1);
console.log(book1.getSummary());

// Inheritance with prototype
Magazine.prototype = Object.create(Book.prototype);

// Magazine constructor
Magazine.prototype.constructor = Magazine;
const mag1 = new Magazine('Mag1', 'Peter Parker', 2020, 'Feb');
console.log(mag1);
