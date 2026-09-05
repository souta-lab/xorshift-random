// ESM wrapper: side-effect import sets globalThis.XorshiftRandom, then re-export it.
import "./xorshift-random.js";

export const XorshiftRandom = globalThis.XorshiftRandom;
export default XorshiftRandom;
