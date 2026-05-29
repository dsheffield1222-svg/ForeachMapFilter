const double = arr => arr.map(num => num * 2);

function squareAndFunctions(nums) {
  const squares = nums.map(num => num ** 2);
  const evens = squares.filter(square => square % 2 === 0);

  return evens;
}