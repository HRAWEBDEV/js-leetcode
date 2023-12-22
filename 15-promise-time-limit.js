const timeLimit = (fn, t) => {
 return (...args) => {
  const resultPromise = fn(...args);
  const timeLimitWatcher = new Promise((_, reject) => {
   setTimeout(() => reject('Time Limit Exceeded'), t);
  });
  return Promise.race([resultPromise, timeLimitWatcher]);
 };
};
