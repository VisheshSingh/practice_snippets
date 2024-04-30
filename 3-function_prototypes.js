function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

Book.prototype.getSummary = function () {
  return `${this.title} was written by ${this.author} in the year ${this.year}`;
};

Book.prototype.getAge = this.getAge = function () {
  const age = new Date().getFullYear() - this.year;
  return `${this.title} is ${age} years old`;
};

const book1 = new Book('Book1', 'jane doe', 2021);
console.log(book1);
console.log(book1.getSummary());
