# xorshift-random

Xorshift-based fast pseudo-random number generator for JavaScript.

> **Note:** Non-cryptographic PRNG. For cryptographic use, use `crypto.getRandomValues()` instead.

## Usage

```html
<script src="xorshift-random.js"></script>
<script>
  console.log(XorshiftRandom());       // 0 <= x < 1
  console.log(XorshiftRandom(12345));  // seeded
</script>
```

```js
import { XorshiftRandom } from "./xorshift-random.js";
XorshiftRandom(42);
```

## API

- `XorshiftRandom(seed?)` — returns a float in `[0, 1)`. Optional integer seed.

## How it works

Uses Xorshift (x ^= x << 7; x ^= x >>> 9) with a 4-state stir loop. Fast and lightweight, not cryptographically secure.

## References

- https://zenn.dev/ame_x/articles/b3ada5021ed174

## License

MIT
