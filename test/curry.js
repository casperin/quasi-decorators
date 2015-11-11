import tape from 'tape';
import curry from '../src/curry';


tape('curry.js', t => {
    const add = ((a, b, c) => a + b + c)
      ::curry();

    t.equal(add(1, 2, 4), 7, 'curry #1');
    t.equal(add(1, 2)(4), 7, 'curry #2');
    t.equal(add(1)(2, 4), 7, 'curry #3');
    t.equal(add(1)(2)(4), 7, 'curry #4');
    t.equal(add(1)()(2)()()(4), 7, 'curry #5');

    const a1 = add(1),
          a3 = a1()()()(2)();

    t.equal(a1(1, 0), 2, 'curry #6');
    t.equal(a1(0, 2), 3, 'curry #7');
    t.equal(a3(1), 4, 'curry #8');
    t.equal(a3(2), 5, 'curry #9');
    t.equal(a3()()(3), 6, 'curry #10');

    const sub = ((a, b) => b - a)::curry;

    t.equal(sub(2, 3), 1, 'curry #11');
    t.equal([4].map(sub(7))[0], -3, 'curry #12');

    t.end();
})

