# xorshift-random

Xorshift-based fast pseudo-random number generator for JavaScript.

> **Note:** Non-cryptographic PRNG. For cryptographic use, use `crypto.getRandomValues()` instead.

## Install

```sh
npm install xorshift-random
```

(or copy the single file `xorshift-random.js` — zero dependencies).

## Usage

```html
<script src="xorshift-random.js"></script>
<script>
  console.log(XorshiftRandom());       // 0 <= x < 1
  console.log(XorshiftRandom(12345));  // seeded (deterministic)
</script>
```

```js
// ESM
import { XorshiftRandom } from "xorshift-random/xorshift-random.mjs";

// CommonJS
const { XorshiftRandom } = require("xorshift-random");

XorshiftRandom(42);
```

## Test

```sh
npm test
```

## API

- `XorshiftRandom(seed?)` — returns a float in `[0, 1)`. Optional integer seed.

## How it works

Uses Xorshift (x ^= x << 7; x ^= x >>> 9) with a 4-state stir loop. Fast and lightweight, not cryptographically secure.

## References

- https://zenn.dev/ame_x/articles/b3ada5021ed174

## License

MIT
