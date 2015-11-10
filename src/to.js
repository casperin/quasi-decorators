export default function to (fn) {
  return (...args) => fn(this(...args));
}

/**
 * Much like piping.
 *
 * const add1 = x => x + 1;
 * const double = x => x * 2;
 * const add1ThenDouble = add1 :: to(double);
 *
 * add1ThenDouble(2); // 6
 */
