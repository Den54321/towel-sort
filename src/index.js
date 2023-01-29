
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix == undefined) return [];
  if(matrix.length !==0 )
  return matrix.reduce((result, item, index) =>
   {
     if(index % 2 !== 0) return result = result.concat(item.reverse());
     else return result = result.concat(item);
   });
  else return [];
}
