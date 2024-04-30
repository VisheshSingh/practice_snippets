class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getSummary() {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  }

  revise(year) {
    this.year = year;
    this.revised = true;
  }
}

const Book1 = new Book('Book1', 'John Doe', 2023);
console.log(Book1);
Book1.revise(2024);
console.log(Book1);
console.log(Book1.getSummary());
