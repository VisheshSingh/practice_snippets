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

class Magazine extends Book {
  constructor(title, author, year, month) {
    super(title, author, year);
    this.month = month;
  }
}
const mag1 = new Magazine('Mag1', 'Jane Doe', 2021);
console.log(mag1);
mag1.revise(2022);
console.log(mag1);
console.log(mag1.getSummary());
