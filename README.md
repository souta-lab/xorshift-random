# xorshift-random

Xorshift-based fast pseudo-random number generator for JavaScript.

> **Note:** Non-cryptographic PRNG. For cryptographic use, use `crypto.getRandomValues()` instead.

## Install

This package is not published on npm. Use one of the following instead:

```sh
# Copy the single file (zero dependencies)
curl -O https://raw.githubusercontent.com/souta-lab/xorshift-random/main/xorshift-random.js

# ...or clone the repo
git clone https://github.com/souta-lab/xorshift-random.git
```

Then run the test suite locally:

```sh
npm test
```

## Usage

```html
<script src="xorshift-random.js"></script>
<script>
  console.log(XorshiftRandom());       // 0 <= x < 1
  console.log(XorshiftRandom(12345));  // seeded (deterministic)
</script>
```

```js
// ESM (local file)
import { XorshiftRandom } from "./xorshift-random.mjs";

// CommonJS (local file)
const { XorshiftRandom } = require("./xorshift-random.js");

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
