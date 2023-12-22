const expect = (val) => {
 return {
  toBe(compareVal) {
   if (val === compareVal) return true;
   throw new Error('Not Equal');
  },
  notToBe(compareVal) {
   if (val !== compareVal) return true;
   throw new Error('Equal');
  },
 };
};
