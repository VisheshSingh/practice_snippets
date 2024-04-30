const BookProtos = {
  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

const book1 = Object.create(BookProtos);
console.log(book1);
book1.title = 'Book1';
book1.author = 'Author 1';
book1.year = 2021;
console.log(book1);
console.log(book1.getSummary());
