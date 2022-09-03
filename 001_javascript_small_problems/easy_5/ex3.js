
const halvsies = array => {
  let middle = array.length % 2 === 0 ? 
    parseInt(array.length / 2) : parseInt(array.length / 2) + 1;

  return [array.slice(0, middle), array.slice(middle)]
};

console.log(
  halvsies([1, 2, 3, 4]),       // [[1, 2], [3, 4]]
  halvsies([1, 5, 2, 4, 3]),    // [[1, 5, 2], [4, 3]]
  halvsies([5]),                // [[5], []]
  halvsies([]),                 // [[], []]
);
