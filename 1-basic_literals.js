const s1 = 'john doe';
const n1 = 100;
const isHappy = true;

const Book = {
  title: 'Book 1',
  author: 'John Doe',
  year: 2024,

  getSummary: function () {
    return `${this.title} was written by ${this.author} in the year ${this.year}`;
  },
};

console.log(Book);
