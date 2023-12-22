const groupBy = (arr, fn) => {
 return arr.reduce((grouped, cur) => {
  const key = fn(cur);
  if (!grouped[key]) {
   grouped[key] = [];
  }
  grouped[key].push(cur);
  return grouped;
 }, {});
};

console.log(
 groupBy(
  [
   { id: 1, name: 'hamid' },
   { id: 1, name: 'hooman' },
   { id: 2, name: 'amir' },
  ],
  (item) => item.id
 )
);
