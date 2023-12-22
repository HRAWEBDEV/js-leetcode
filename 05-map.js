const map = (arr, fn) => {
 const mappedResult = [];
 for (let i = 0; i < arr.length; i++) {
  mappedResult[i] = fn(arr[i], i);
 }
 return mappedResult;
};
