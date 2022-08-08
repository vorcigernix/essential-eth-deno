import type { Big } from "../../deps.ts";
import type { TinyBig } from "../shared/tiny-big/tiny-big.ts";
import { tinyBig } from "../shared/tiny-big/tiny-big.ts";
import { validateType } from "../shared/validate-type.ts";

/**
 * Convert from Ether to Gwei
 *
 * No direct equivalent in ether.js; requires multiple functions to achieve.
 *
 * No direct equivalent in web3; requires multiple functions to achieve.
 *
 * @param etherQuantity the amount of ether to convert to gwei
 * @returns a number of gwei equivalent to the specified ether
 * @example
 * ```javascript
 * etherToGwei('1000').toString()
 * // '1000000000000'
 * etherToGwei(1000).toString()
 * // '1000000000000'
 * ```
 * @example
 * ```javascript
 * etherToGwei('1000').toNumber()
 * // 1000000000000
 * etherToGwei(1000).toNumber()
 * // 1000000000000
 * ```
 */
export function etherToGwei(
	etherQuantity: string | number | TinyBig | typeof Big
): TinyBig {
	validateType(etherQuantity, ["string", "number", "object"]);
	const result = tinyBig(etherQuantity).times("1000000000");
	return tinyBig(result);
}
