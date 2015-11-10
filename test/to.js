import tape from 'tape';
import to from '../src/to';

tape('to.js', t => {
    const add1 = x => x + 1;
    const double = x => x * 2;
    const sub3 = x => x - 3;

    const add1ThenDouble = add1 :: to(double);
    t.equal(add1ThenDouble(2), 6);
    t.equal(add1ThenDouble(-3), -4);

    const add1ThenDoubleThenSub3 = add1 :: to(double) :: to(sub3);
    t.equal(add1ThenDoubleThenSub3(10), 19);
    t.equal(add1ThenDoubleThenSub3(-3), -7);

    t.end();
})

