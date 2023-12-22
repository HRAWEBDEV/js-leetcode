const once = (fn) => {
 let isFirstCall = true;
 return (...args) => {
  const result = isFirstCall ? fn(...args) : undefined;
  isFirstCall = false;
  return result;
 };
};
