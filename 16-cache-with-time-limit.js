class TimeLimitCache {
 caches = new Map();
 constructor() {}
 set(key, value, duration) {
  let found = this.caches.get(key);
  if (found) clearTimeout(found.ref);
  this.caches.set(key, {
   value,
   ref: setTimeout(() => this.caches.delete(key), duration),
  });
 }
 get(key) {
  return this.caches.has(key) ? this.caches.get(key).value : -1;
 }
 count() {
  this.caches.size;
 }
}
