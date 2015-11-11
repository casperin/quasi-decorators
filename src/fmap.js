export default function fmap (x) {
    const wrappedFn = x => typeof x.fmap === 'function'
        ? x.fmap(this)
        : this(x);

    return x ? wrappedFn(x) : wrappedFn;
};
