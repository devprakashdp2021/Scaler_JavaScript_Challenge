
function generateSubsets(arr, len) {
  const subsets = [];
  const generate = (start, subset) => {
    if (subset.length === len) {
      subsets.push(subset);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      generate(i + 1, subset.concat(arr[i]));
    }
  };
  generate(0, []);
  return subsets;
}
