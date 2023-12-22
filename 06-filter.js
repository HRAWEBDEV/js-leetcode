const filter = (arr, fn) => {
 const filteredResult = [];
 for (let i = 0; i < arr.length; i++) {
  fn(arr[i], i) && filteredResult.push(arr[i]);
 }
 return filteredResult;
};
