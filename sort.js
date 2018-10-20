/*
* Write a function to sort the following array of objects by movie value.
*/

let testFour = [
  {
    movie: "Ghostbusters",
    director: "Ivan Reitman",
    year: 1984
  },
  {
    movie: "Good Will Hunting",
    director: "Gus Van Sant",
    year: 1997
  },
  {
    movie: "Resident Evil",
    director: "Paul W.S. Anderson",
    year: 2002
  },
  {
    movie: "E.T. the Extra-Terrestrial",
    director: "Steven Spielberg",
    year: 1882
  }
];

function sortArr(arr) {
  return arr.sort(function (a, b) {
    if (a.movie < b.movie) return -1;
    if (a.movie > b.movie) return 1;
    return 0;
  })
}

const result = sortArr(testFour);
console.log(JSON.stringify(result));