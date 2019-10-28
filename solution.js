let input = [
  [4, 3, 5], [2, 6, 9], [7, 8, 1],
  [6, 8, 2], [5, 7, 1], [4, 9, 3],
  [1, 9, 7], [8, 3, 4], [5, 6, 2],
  [8, 2, 6], [1, 9, 5], [3, 4, 7],
  [3, 7, 4], [6, 8, 2], [9, 1, 5],
  [9, 5, 1], [7, 4, 3], [6, 2, 8],
  [5, 1, 9], [3, 2, 6], [8, 7, 4],
  [2, 4, 8], [9, 5, 7], [1, 3, 6],
  [7, 6, 3], [4, 1, 8], [2, 5, 9]
]

const isValidSudoku = (set) => {
  let rows = checkRows(set)
  console.log(rows)

  // write checkColumns function

  // write checkSquares function

}

const checkRows = (set) => {

  if (set.length === 0) {
    return 'No errors'
  }
  let newArray = [];
  for (i = 0; i <= 2; i++) {
    newArray.push(set[i])
  }
  if ([...new Set(newArray.flat())].length === 9) {
    set.splice(0, 3)
  } else {
    return 'There was an error on a row'
  }

  return checkRows(set)
}


checkRows(input)