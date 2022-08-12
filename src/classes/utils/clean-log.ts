import { toChecksumAddress } from '../../utils/to-checksum-address.ts';
import type { Log, RPCLog } from './../../types/Transaction.types.ts';
import { hexToDecimal } from './hex-to-decimal.ts';

/**
 * Converts RPC log receipt response to more JS-friendly format
 *
 * @param log the log to clean
 * @param receiptLog if the log is part of a transaction receipt. Used to remove certain keys from log
 * @example
 */
export function cleanLog(log: RPCLog, receiptLog: boolean): Log {
  const cleanedLog = {
    ...log,
  } as unknown as Log;

  (Object.keys(log) as Array<keyof RPCLog>).forEach(async (key) => {
    switch (key) {
      case 'address':
        cleanedLog[key] = await toChecksumAddress(log[key]);
        break;
      case 'blockNumber':
      case 'logIndex':
      case 'transactionIndex':
        cleanedLog[key] = Number(hexToDecimal(log[key]));
        break;
      case 'removed':
        if (receiptLog) {
          delete cleanedLog[key];
        } else if (log[key] == null) {
          cleanedLog[key] === false;
        }
        break;
    }
  });

  return cleanedLog;
}
