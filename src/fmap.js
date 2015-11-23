import then from './then';

export default function fmap (x) {
    const wrappedFn = x => typeof x.fmap === 'function'
        ? x.fmap(this)
        : this(x);

    return x ? wrappedFn(x) : wrappedFn;
};

/**
 * Changes a function to be able to handle functors. Interestingly, this
 * function is semantically the same as `then`. Probably because Promises are
 * functors at heart ;)
 */
