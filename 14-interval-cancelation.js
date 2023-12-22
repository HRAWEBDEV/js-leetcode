const cancellable = (fn, args, t) => {
 let intervalId = null;
 fn(...args);
 intervalId = setInterval(() => fn(...args), t);
 return () => intervalId && clearInterval(intervalId);
};
