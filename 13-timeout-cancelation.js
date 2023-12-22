const cancellable = (fn, args, t) => {
 let timeoutId = null;
 timeoutId = setTimeout(() => fn(...args), t);
 return () => timeoutId && clearTimeout(timeoutId);
};
