// Xorshift-based fast pseudo-random number generator.
// Reference: https://zenn.dev/ame_x/articles/b3ada5021ed174
//
// Non-cryptographic. For cryptographic use, use `crypto.getRandomValues()` instead.

var UINT32_MAX_PLUS_1 = 4294967296; // 2^32

// Counter to keep unseeded calls distinct even within the same millisecond.
var autoIncrement = 0;

// Linear congruential step used for state stirring (kept from the original design).
function next(x, a, c, m) {
  return (x * a + c) % m;
}

// XorshiftRandom(seed?) — returns a float in [0, 1).
// Same seed => same sequence (deterministic). Omitted seed => nondeterministic.
function XorshiftRandom(seed) {
  var MaxInt64 = Number.MAX_SAFE_INTEGER;

  // Local state: derive everything from the seed so calls are reproducible.
  var st = seed == null
    ? (Date.now() + (autoIncrement++)) | 0
    : seed | 0;
  if (st === 0) st = 0x9E3779B9; // all-zero state would stick at 0

  // Local xorshift32 step operating on this call's state only.
  function rand01() {
    st ^= st << 7;
    st ^= st >>> 9;
    return (st >>> 0) / UINT32_MAX_PLUS_1; // always in [0, 1)
  }

  // Initial value: the seed itself when given, otherwise draw from the state.
  var x = seed == null ? rand01() * MaxInt64 : seed;
  var s0 = rand01() * MaxInt64;
  var s1 = rand01() * MaxInt64;
  var s2 = rand01() * MaxInt64;
  var s3 = rand01() * MaxInt64;

  // Stirring loop.
  for (var i = 0; i < 624; i++) {
    var r64 = rand01() * MaxInt64;
    x = next(x, s0, s1, MaxInt64);
    s0 = s1;
    s1 = s2;
    s2 = s3;
    s3 = r64;
  }

  return x / MaxInt64;
}

// Universal export: browser global, CommonJS, side-effect ESM import.
if (typeof globalThis !== "undefined") {
  globalThis.XorshiftRandom = XorshiftRandom;
}
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = { XorshiftRandom };
}
