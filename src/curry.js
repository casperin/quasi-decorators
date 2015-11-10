export default function curry (...args) {
    return (args.length >= this.length)
        ? this(...args)
        : (...args2) => this::curry(...args, ...args2);
}
