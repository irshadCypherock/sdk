import { IDerivationPath, SignTxnStatus } from '../../proto/generated/types';

export type SignTxnEventHandler = (event: SignTxnStatus) => void;

export interface ISignTxnInput {
  prevTxnHash: string;
  prevIndex: number;
  value: string;
  scriptPubKey: string;

  chainIndex: number;
  addressIndex: number;

  prevTxn: string;
  sequence?: number;
}

export interface ISignTxnOutput {
  value: string;
  scriptPubKey: string;

  isChange: boolean;
  chainIndex?: number;
  addressIndex?: number;
}

export interface ISignTxnParams {
  walletId: Uint8Array;
  derivationPath: IDerivationPath[];
  onEvent?: SignTxnEventHandler;

  txn: {
    inputs: ISignTxnInput[];
    outputs: ISignTxnOutput[];
    locktime?: number;
    hashType?: number;
  };
}

export interface ISignTxnResult {
  signatures: string[];
}
