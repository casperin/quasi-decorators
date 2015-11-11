export default function then (x) {
    const wrappedFn = x => typeof x.then === 'function'
        ? x.then(this)
        : this(x);

    return x ? wrappedFn(x) : wrappedFn;
};

