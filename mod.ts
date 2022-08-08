//I am using this for testing, but here we should expose the interface to the outside world - Looks like this will be a copy of index file in the future.

import { crypto, Big } from "./deps.ts";
import { JsonRpcProvider } from "./src/providers/JsonRpcProvider.ts";

export async function getHelloWorld(): Promise<string> {
	const provider = new JsonRpcProvider();
	const balance = await provider.getBalance(
		"0x7cB57B5A97eAbe94205C07890BE4c1aD31E486A8"
	);
	return `Balance: ${balance.toString()}`;
}

console.log(await getHelloWorld());
