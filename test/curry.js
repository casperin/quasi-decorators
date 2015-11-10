import tape from 'tape';
import curry from '../src/curry';


tape('curry.js', t => {
    const add = ((a, b, c) => a + b + c)
      ::curry();

    t.equal(add(1, 2, 4), 7);
    t.equal(add(1, 2)(4), 7);
    t.equal(add(1)(2, 4), 7);
    t.equal(add(1)(2)(4), 7);
    t.equal(add(1)()(2)()()(4), 7);

    const a1 = add(1),
          a3 = a1()()()(2)();

    t.equal(a1(1, 0), 2);
    t.equal(a1(0, 2), 3);
    t.equal(a3(1), 4);
    t.equal(a3(2), 5);
    t.equal(a3()()(3), 6);

    t.end();
})

