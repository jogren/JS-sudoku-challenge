# JS Sudoku Challenge

#### write a function which checks rows (these have indices: 0-2, 3-5, 6-8, 9-11, 12-14, 15-17, etc.)
- base case: if(array.length === 0) return no error
- This function will be recursive which deletes the row after checking for duplicates


#### write a function which checks the columns (first column: these are the zero index in arrays at index 0, 3, 6, 9, 12, 15, 18, etc.)
- base case: if(array.length === 0) return no error
- This function will be recursive which deletes the column after checking for duplicates


#### write a function which checks the squares([0, 3, 6], [9, 12, 15], [18, 21, 24], etc.) Delete square after checked
- base case: if(array.length === 0) return no error
- This function will be recursive which deletes the square after checking for duplicates


General strategy: 
- I wrote out the entire array in a notebook and looked for patterns. 
- I noticed that rows were grouped in 3s (0-2, 3-5, 6-8, etc.)
- I noticed that columns were grouped by every third array and specificed by the index of the smaller array (index 0 of arrays: 0, 3, 6, 9, 12, etc.)
- I also noticed that squares were grouped in a similar fashion as columns, but taking the enire inner array (all of [0, 3, 6])