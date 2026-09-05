const { describe, it } = require("node:test");
const assert = require("node:assert/strict");
const { XorshiftRandom } = require("../xorshift-random.js");

describe("XorshiftRandom", () => {
  it("returns a float in [0, 1) for seeded calls", () => {
    for (const seed of [0, 1, 42, 12345, -7, 2147483647]) {
      for (let i = 0; i < 200; i++) {
        const v = XorshiftRandom(seed);
        assert.equal(typeof v, "number");
        assert.ok(Number.isFinite(v), `not finite for seed ${seed}`);
        assert.ok(v >= 0 && v < 1, `out of range [0, 1): ${v} (seed ${seed})`);
      }
    }
  });

  it("returns a float in [0, 1) for unseeded calls", () => {
    for (let i = 0; i < 1000; i++) {
      const v = XorshiftRandom();
      assert.ok(v >= 0 && v < 1, `out of range [0, 1): ${v}`);
    }
  });

  it("is deterministic for the same seed", () => {
    assert.equal(XorshiftRandom(42), XorshiftRandom(42));
    assert.equal(XorshiftRandom(12345), XorshiftRandom(12345));
  });

  it("differs across seeds (basic sanity)", () => {
    const seen = new Set([1, 2, 3, 4, 5].map((s) => XorshiftRandom(s)));
    assert.ok(seen.size > 1, "all seeds produced the same value");
  });

  it("unseeded calls vary", () => {
    const seen = new Set(Array.from({ length: 20 }, () => XorshiftRandom()));
    assert.ok(seen.size > 1, "unseeded calls all returned the same value");
  });
});
