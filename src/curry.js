export default function curry (...args) {
    return (args.length >= this.length)
        ? this(...args)
        : (...args2) => this::curry(...args, ...args2);
}

/**
 * Basic currying of a function.
 *
 * This implementation uses the length of the function to determine when to
 * actually call the function.
 */
