const compose = (functions) => {
 return (x) => {
  return functions.reduceRight((acc, cur) => {
   acc = cur(acc);
   return acc;
  }, x);
 };
};
