const clubMembers = [
  {
    name: 'Club romance',
    members: [
      {
        name: 'John Doe',
        books: [
          { title: 'Club romance 1', author: 'Pete adams', id: 'ey01' },
          { title: 'Club romance 2', author: 'James Anderson', id: 'b6qy' },
        ],
      },
    ],
  },
  {
    name: 'Thriller killer',
    members: [
      {
        name: 'Amy Fowler',
        books: [
          { title: 'Sleeping murder', author: 'Agatha Christie', id: '27he' },
          { title: 'Moving Finger', author: 'Agatha Christie', id: 'qwm8' },
        ],
      },
    ],
  },
];

// Task is to find the book with id: '27he';
function* iterateBooks(books) {
  for (let i = 0; i < books.length; i++) {
    yield books[i];
  }
}

// const it = iterateBooks(clubMembers[0].members[0].books);
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

function* iterateMembers(members) {
  for (let i = 0; i < members.length; i++) {
    const clubMember = members[i];
    yield* iterateBooks(clubMember.books);
  }
}

// const members = iterateMembers(clubMembers[0].members);
// console.log(members.next());
// console.log(members.next());
// console.log(members.next());

function* iterateClubs(clubs) {
  for (let i = 0; i < clubs.length; i++) {
    const club = clubs[i];
    yield* iterateMembers(club.members);
  }
}

// const clubMems = iterateClubs(clubMembers);
// console.log(clubMems.next());
// console.log(clubMems.next());
// console.log(clubMems.next());
// console.log(clubMems.next());

function findMember(id) {
  const clubMems = iterateClubs(clubMembers);
  let result = clubMems.next();

  while (!result.done) {
    if (result.value.id === id) {
      return result.value;
    } else {
      result = clubMems.next();
    }
  }
}

console.log(findMember('27he'));
