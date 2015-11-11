import tape from 'tape';
import then from '../src/then';

// A fn that returns a promise that resolves immediately
const promise = val => new Promise(resolve => resolve(val));
// A fn that returns a promise that rejects immediately
const rejectedPromise = val => new Promise((resolve, reject) => reject(val));

tape('then.js', t => {
   let description, actual, expected;
   const add1 = x => x + 1,
       tAdd1 = add1::then();

    description = 'Can handle normal values';
    actual = tAdd1(2);
    expected = 3;
    t.equal(actual, expected, description);

    description = 'Can handle promises';
    expected = 3;
    tAdd1(promise(2))
        .then(v => t.equal(v, expected, description));

    description = 'Can handle promises as input';
    expected = 3;
    add1::then(promise(2))
        .then(v => t.equal(v, expected, description));

    description = 'Can be used in a map';
    expected = 3;
    [promise(2)].map(add1::then)[0]
        .then(v => t.equal(v, expected, description));

    description = 'Can be used in a map';
    tAdd1(rejectedPromise(2))
        .catch(v => t.equal(v, 2, description));


    t.end();
});

