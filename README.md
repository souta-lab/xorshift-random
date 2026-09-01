# mersenne-random

Mersenne Twister–based fast pseudo-random number generator for JavaScript.

> **Note:** This is a non-cryptographic PRNG. Do not use it where cryptographic security is required — use `crypto.getRandomValues()` instead.

## Usage

```html
<script src="MersenneRandom.js"></script>
<script>
  console.log(MersenneRandom());       // 0 <= x < 1
  console.log(MersenneRandom(12345));  // seeded
</script>
```

```js
import { MersenneRandom } from "./MersenneRandom.js";
MersenneRandom(42);
```

## API

- `MersenneRandom(seed?)` — returns a float in `[0, 1)`. Optional integer seed for reproducibility.

## References

- https://zenn.dev/ame_x/articles/b3ada5021ed174

## License

MIT
