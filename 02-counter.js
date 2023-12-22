const createCounter = (n) => {
 let counter = -1;
 return () => {
  return n + ++counter;
 };
};
