const memoize = (fn) => {
 const cachedHistory = {};
 return (...args) => {
  const key = JSON.stringify(args);
  if (key in cachedHistory) return cachedHistory[key];
  const result = fn.apply(this, args);
  cachedHistory[key] = result;
  return result;
 };
};
