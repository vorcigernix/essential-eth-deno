import { crypto, Buffer } from "../../deps.ts";
import type { BytesLike } from "./bytes.ts";

/**
 * Hashes data into a Keccak256 hex string
 *
 * @param data the data to be hashed using Keccak256
 * @returns a hex string with data hashed using Keccak256
 * @example
 * ```javascript
 * keccak256('essential-eth');
 * // '0xc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470'
 *
 * keccak256('0x123');
 * // '0x5fa2358263196dbbf23d1ca7a509451f7a2f64c15837bfbb81298b1e3e24e4fa'
 * ```
 */
export async function keccak256(data: BytesLike): Promise<string> {
	let bufferableData;
	if (typeof data === "string") {
		bufferableData = Buffer.from(data.replace(/^0x/, ""), "hex");
	} else {
		bufferableData = Buffer.from(data as any);
	}
	const keccakstring = new Uint8Array(
		await crypto.subtle.digest("KECCAK-256", bufferableData)
	).toString();

	//const addressHash = "0x" + keccak.update(bufferableData).digest("hex");
	// adam: this is probably wrong, no idea what the above is doing
	const addressHash = "0x" + keccakstring;
	return addressHash;
}
