const createCounter = (val) => {
 let init = val;
 return {
  increament() {
   return ++init;
  },
  decreament() {
   return --init;
  },
  reset() {
   init = 0;
   return init;
  },
 };
};
