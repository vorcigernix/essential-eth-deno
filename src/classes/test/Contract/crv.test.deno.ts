import { assertEquals } from "../../../../test_deps.ts";
import {
	Contract as EthersContract,
	providers,
} from "https://cdn.ethers.io/lib/ethers-5.2.esm.min.js";
import type { TinyBig } from "../../../shared/tiny-big/tiny-big.ts";
import { JsonRpcProvider } from "../../../providers/JsonRpcProvider.ts";
import { rpcUrls } from "../../../providers/test/rpc-urls.ts";
import { Contract as EssentialEthContract } from "../../Contract.ts";
import { abi } from "./crv-abi.ts";

// The JSONABI
const JSONABI = abi;

const rpcURL = rpcUrls.mainnet;
const ethersProvider = new providers.StaticJsonRpcProvider(rpcURL);
const essentialEthProvider = new JsonRpcProvider(rpcURL);

// https://etherscan.io/address/0x575CCD8e2D300e2377B43478339E364000318E2c
const contractAddress = "0x575CCD8e2D300e2377B43478339E364000318E2c";

const ethersContract = new EthersContract(
	contractAddress,
	JSONABI as any,
	ethersProvider
);
const essentialEthContract = new EssentialEthContract(
	contractAddress,
	JSONABI,
	essentialEthProvider
);

ethersProvider.getBalance

Deno.test("crv contract test", async (t) => {
	const address = "0xf8cd644baf494d13406187cf8628754dca0a10c2";
	await t.step({
		name: "should fetch 'uint256' balanceOf",
		fn: async () => {
			const [ethersBalanceOf, essentialEthBalanceOf] = await Promise.all([
				// @ts-ignore
				ethersContract.balanceOf(address, {
					gasLimit: 40955,
				}) as TinyBig,
				essentialEthContract.balanceOf(address, {
					gasLimit: 40955,
				}) as TinyBig,
			]);
			assertEquals(
				ethersBalanceOf.toString(),
				essentialEthBalanceOf.toString()
			);
		},
		ignore: false,
		// these default to the parent test or step's value
		sanitizeOps: true,
		sanitizeResources: true,
		sanitizeExit: true,
	});

	const url = new URL("./foo.js", "https://deno.land/");
	assertEquals(url.href, "https://deno.land/foo.js");
});
