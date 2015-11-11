import tape from 'tape';
import fmap from '../src/fmap';

const Maybe = val => ({
    val: val,
    fmap: fn => val ? Maybe(fn(val)) : Maybe(null)
});

tape('fmap.js', t => {
    let description, expected, actual;
    const add1 = x => x + 1,
        fAdd1 = add1::fmap();

    // --
    description = 'Can handle normal values';
    actual = fAdd1(2);
    expected = 3;
    t.equal(actual, expected, description);

    // --
    description = 'Can handle Maybe values';
    actual = fAdd1(Maybe(2)).val;
    expected = 3;
    t.equal(actual, expected, description);

    // --
    description = 'Can handle Maybe values with null';
    actual = fAdd1(Maybe(null)).val;
    expected = null;
    t.equal(actual, expected, description);

    // --
    description = 'Can take a value when wrapping'
    actual = add1::fmap(2);
    expected = 3;
    t.equal(actual, expected, description);

    // --
    description = 'Can take a Maybe value when wrapping'
    actual = add1::fmap(Maybe(2)).val;
    expected = 3;
    t.equal(actual, expected, description);

    // --
    description = 'Can take a Maybe value with null when wrapping'
    actual = add1::fmap(Maybe(null)).val;
    expected = null;
    t.equal(actual, expected, description);

    // --
    description = 'Can be used in a callback to (this is bound correctly)';
    actual = [Maybe(2)].map(m => add1::fmap(m).val)[0];
    expected = 3;
    t.equal(actual, expected, description);

    // --
    description = 'Can be used in a callback to (this is bound correctly)';
    actual = [Maybe(2)].map(add1::fmap)[0].val;
    expected = 3;
    t.equal(actual, expected, description);

    t.end();
});
