export default function then (x) {
    const wrappedFn = x => typeof x.then === 'function'
        ? x.then(this)
        : this(x);

    return x ? wrappedFn(x) : wrappedFn;
};

/**
 * Changes a function so it can handle Promises as well as regular values. It
 * does this by adding the function to the `.then()` chain.
 *
 * Assumed for the function is that it only takes one argument.
 */

