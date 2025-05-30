const memoise = (fn, context) => {
  let cache = new Map();
  return function (...args) {
    let cacheKey = JSON.stringify(args);
    if (!cache.has(cacheKey)) {
      cache.set(cacheKey,fn.apply(context || this, args));
    }
    return cache.get(cacheKey);
  };
};
