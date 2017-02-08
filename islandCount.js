/*
Given a string representation of a 2d map, return the number of islands in the map. 
Land spaces are denoted by a zero, while water is denoted by a dot.
Two land spaces are considered connected if they are adjacent (but not diagonal).

NOTICE: Newline characters in the inputs have been replaced with <br /> tags to make the value easier to read. 
In other words, when you see a break, it's actually a '\n' character
 */

const countIslands = (mapStr) => {
  var map = [], islands = 0;
  mapStr.split('\n').forEach((array) => {
    var arr = array.split('');
    map.push(arr);
  })
  for(let i=0; i<map.length;i++) {
    for(let j=0; j<map[i].length;j++) {
      if(map[i][j] === '0') {
        islands++;
        search(map,i,j);
      }
    }
  }
  const search = (matrix, x, y) => {
    if(x<0 || x>=matrix.length || y<0 || y>=matrix[x].length || matrix[x][y]!=='0') {
      return; 
    }
    matrix[x][y] = 'X';
    search(matrix, x-1, y);
    search(matrix, x+1, y);
    search(matrix, x, y-1);
    search(matrix, x, y+1);
  }
  return islands;
}