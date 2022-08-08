import { BaseContract, Contract } from "./classes/Contract.ts";
import {
	ConstructorOptions,
	FallthroughProvider,
} from "./providers/FallthroughProvider.ts";
import {
	JsonRpcProvider,
	jsonRpcProvider,
} from "./providers/JsonRpcProvider.ts";
import { tinyBig, TinyBig } from "./shared/tiny-big/tiny-big.ts";
import { BlockResponse, BlockTag, RPCBlock } from "./types/Block.types.ts";
import {
	ContractTypes,
	JSONABI,
	JSONABIArgument,
} from "./types/Contract.types.ts";
import { Filter, FilterByBlockHash } from "./types/Filter.types.ts";
import { Network } from "./types/Network.types.ts";
import {
	BlockTransactionResponse,
	Log,
	RPCLog,
	RPCTransaction,
	RPCTransactionReceipt,
	RPCTransactionRequest,
	TransactionReceipt,
	TransactionRequest,
	TransactionResponse,
} from "./types/Transaction.types.ts";
import { computeAddress } from "./utils/compute-address.ts";
import { computePublicKey } from "./utils/compute-public-key.ts";
import { etherToGwei } from "./utils/ether-to-gwei.ts";
import { etherToWei } from "./utils/ether-to-wei.ts";
import { gweiToEther } from "./utils/gwei-to-ether.ts";
import { hashMessage } from "./utils/hash-message.ts";
import { isAddress } from "./utils/is-address.ts";
import { splitSignature } from "./utils/split-signature.ts";
import { toChecksumAddress } from "./utils/to-checksum-address.ts";
import { toUtf8Bytes } from "./utils/to-utf8-bytes.ts";
import { weiToEther } from "./utils/wei-to-ether.ts";

export * from "./utils/bytes.ts";
export * from "./utils/hash-message.ts";
export * from "./utils/keccak256.ts";
export * from "./utils/solidity-keccak256.ts";
export {
	etherToWei,
	etherToGwei,
	isAddress,
	jsonRpcProvider,
	JsonRpcProvider,
	FallthroughProvider,
	tinyBig,
	toChecksumAddress,
	weiToEther,
	gweiToEther,
	hashMessage,
	splitSignature,
	toUtf8Bytes,
	computeAddress,
	computePublicKey,
	/* classes */
	Contract,
	TinyBig,
};
export type {
  BaseContract,
	BlockResponse,
	ContractTypes,
	Filter,
	FilterByBlockHash,
	JSONABI,
	JSONABIArgument,
	Network,
	TransactionResponse,
	RPCBlock,
	RPCTransaction,
	RPCTransactionReceipt,
	TransactionRequest,
	RPCTransactionRequest,
	TransactionReceipt,
	BlockTag,
	RPCLog,
	Log,
	BlockTransactionResponse,
	ConstructorOptions,
};
