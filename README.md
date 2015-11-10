# Decorators for functions I'd like to see.

Since `decorators` (in babel) doesn't currently work on functions, but the `::` binder does, all of
these functions operate on this, and assumes that it is a function.

## Usage

    const add = ((x, y) => x + y)
        ::curry();

`add` is now curried.

## Caution

`decorators` are too new to use in production yet. So use this library with some caution.

