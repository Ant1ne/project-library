
const books = [
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    year: 1925,
    genre: 'Fiction',
    rating: 4.2,
    description:
      'A classic novel set in the Roaring Twenties, it explores themes of wealth, love, and the American Dream through the enigmatic Jay Gatsby.',
    image: './books-images/the-great-gatsby.jpg'
  },
  {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960,
    genre: 'Fiction',
    rating: 4.5,
    description:
      'Set in the American South, this novel tackles issues of racism and injustice through the eyes of young Scout Finch.',
    image: './books-images/to-kill-a-mockingbird.jpg'
  },
  {
    title: '1984',
    author: 'George Orwell',
    year: 1949,
    genre: 'Science Fiction',
    rating: 4.4,
    description:
      'A dystopian classic that explores totalitarianism and the consequences of a surveillance state in a bleak future.',
    image: './books-images/1984.jpg'
  },
  {
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    year: 1813,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A timeless romance novel that examines societal expectations and the misunderstandings that can arise from pride and prejudice.',
    image: './books-images/pride-and-prejudice.jpg'
  },
  {
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    year: 1951,
    genre: 'Fiction',
    rating: 4,
    description:
      'Narrated by the teenage Holden Caulfield, the novel explores themes of alienation and the search for authenticity.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    year: 1937,
    genre: 'Fantasy',
    rating: 4.6,
    description:
      'A fantasy adventure novel that follows Bilbo Baggins on a quest to help a group of dwarves reclaim their homeland from a dragon.',
    image: './books-images/the-hobbit.jpg'
  },
  {
    title: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    year: 1997,
    genre: 'Fantasy',
    rating: 4.7,
    description:
      'The first book in the beloved Harry Potter series, it introduces readers to the magical world of Hogwarts and the young wizard Harry Potter.',
    image: "./books-images/harry-potter-and-the-sorcerer'.jpg"
  },
  {
    title: 'Moby-Dick',
    author: 'Herman Melville',
    year: 1851,
    genre: 'Adventure',
    rating: 4.1,
    description:
      'An epic tale of obsession, revenge, and the relentless pursuit of the great white whale, Moby Dick.',
    image: './books-images/moby-dick.jpg'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    author: 'J.R.R. Tolkien',
    year: 1954,
    genre: 'Fantasy',
    rating: 4.55,
    description:
      'The first volume of the epic fantasy trilogy follows Frodo Baggins and the Fellowship on their quest to destroy the One Ring.',
    image: './books-images/the-lord-of-the-rings.jpg'
  },
  {
    title: 'The Shining',
    author: 'Stephen King',
    year: 1977,
    genre: 'Horror',
    rating: 4.3,
    description:
      "A psychological horror novel that tells the story of the Torrance family's terrifying experiences at the haunted Overlook Hotel.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Chronicles of Narnia: The Lion, the Witch and the Wardrobe',
    author: 'C.S. Lewis',
    year: 1950,
    genre: 'Fantasy',
    rating: 4.15,
    description:
      'The first book in the Chronicles of Narnia series, it follows the adventures of children who discover the magical land of Narnia.',
    image: './books-images/the-chronicles-of-narnia.jpg'
  },
  {
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
    year: 2003,
    genre: 'Mystery',
    rating: 3.8,
    description:
      'A gripping mystery thriller that follows Harvard symbologist Robert Langdon as he unravels the secrets of the Da Vinci Code.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    year: 1988,
    genre: 'Fiction',
    rating: 4.25,
    description:
      'A philosophical novel that tells the story of Santiago, a shepherd boy, on his quest to discover his personal legend.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    year: 2008,
    genre: 'Science Fiction',
    rating: 4.3,
    description:
      "In a dystopian future, Katniss Everdeen becomes a symbol of rebellion when she volunteers to take her sister's place in the brutal Hunger Games.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Girl with the Dragon Tattoo',
    author: 'Stieg Larsson',
    year: 2005,
    genre: 'Mystery',
    rating: 4.1,
    description:
      'A gripping mystery novel featuring investigative journalist Mikael Blomkvist and the enigmatic hacker Lisbeth Salander.',
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Road',
    author: 'Cormac McCarthy',
    year: 2006,
    genre: 'Dystopian',
    rating: 4,
    description:
      "Set in a post-apocalyptic world, it follows a father and son's harrowing journey to survive and find safety.",
    image: './books-images/unknown.jpg'
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    year: 1979,
    genre: 'Science Fiction',
    rating: 4.35,
    description:
      "A comedic science fiction series that follows the misadventures of Arthur Dent after Earth's destruction.",
    image: './books-images/unknown.jpg'
  },
  {
    title: 'The Giver',
    author: 'Lois Lowry',
    year: 1993,
    genre: 'Dystopian',
    rating: 4.12,
    description:
      'A dystopian novel set in a seemingly perfect society where young Jonas discovers the dark truth beneath the surface.',
    image: './books-images/unknown.jpg'
  }
]

// Get book references to HTML elements by using books id
const booksContainer = document.getElementById("bookContainer");
const filterGenre = document.getElementById("filterGenre");
const filterRating = document.getElementById("filterRating");
const filterAlphaCentury = document.getElementById("AlphaCentury")

// Load books and display the list
const displayBooks = (array) => {
  booksContainer.innerHTML = "";
  array.forEach((book) => {
    booksContainer.innerHTML += `
    <div class="bookCard">
      <h3>
        ${book.title}
      </h3>
      <p>
        ${book.author}
      </p>
      <img 
        src=${book.image}
        alt="${book.title}"
      >
      <div class="bookInfo">
        <p class="rating">
          Rating: ${book.rating}
        </p>
        <p>
          Year: ${book.year}
        </p>
        <p>
          Genre: ${book.genre}
        </p>
      </div>
      <div class="bookDescription">
        <p>
          Description: ${book.description}
        </p>
      </div>
    </div>`;
  });
};

const allBooks = displayBooks(books);

// filter books by genre
const filterBooks = () => {
  const value = filterGenre.value;
  if (value === "all") {
    displayBooks(books);
  } else {
    // Only load filtered books based on genre
    const filteredBooks = books.filter((book) => book.genre === value);
    displayBooks(filteredBooks);
  }
};
filterGenre.addEventListener("change", filterBooks)

// sort rating highest to lowest
const sortHighest = (array) => {
  return array.sort((a, b) => b.rating - a.rating);
};

// sort rating lowest to highest
const sortLowest = (array) => {
  return array.sort((a, b) => a.rating - b.rating);
};

// filter books by rating
const filterRatingFunction = () => {
  const value = filterRating.value;
  if (value === "all") {
    displayBooks(books);
  } else if (value === "Highest") {
    const filteredList = sortHighest(books);
    displayBooks(filteredList);
  } else {
    const filteredList = sortLowest(books);
    displayBooks(filteredList);
  }
};
filterRating.addEventListener("change", filterRatingFunction);


// function filter the books from 21st century
const filterCentury = (array) => {
  return array.filter((book) => book.year >= 2000);
};
// function sort with alphabetical order
const sortAlphabetical = (array) => {
  return array.sort((a, b) => a.title.localeCompare(b.title));
};

const filterAlphaCentFunction = () => {
  const value = filterAlphaCentury.value;
  if (value === "all") {
    displayBooks(books);
  } else if (value === "Alphabetical") {
    const filteredList = sortAlphabetical(books);
    displayBooks(filteredList);
  } else {
    const filteredList = filterCentury(books);
    displayBooks(filteredList);
  }
};
filterAlphaCentury.addEventListener("change", filterAlphaCentFunction);

// function search: by title or author
const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredBooks = books.filter((book) => {
    const titleFound = book.title.toLowerCase().includes(searchTerm);
    const authorFound = book.author.toLowerCase().includes(searchTerm);
    return titleFound || authorFound;
  });
  booksContainer.innerHTML = "";
  displayBooks(filteredBooks);
});