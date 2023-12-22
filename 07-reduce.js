const reduce = (arr, fn, init) => {
 let acc = init;
 for (let i = 0; i < arr.length; i++) {
  acc = fn(acc, arr[i]);
 }
 return acc;
};
