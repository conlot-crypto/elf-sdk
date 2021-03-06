/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  IInterestTokenFactory,
  IInterestTokenFactoryInterface,
} from "../IInterestTokenFactory";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "tranche",
        type: "address",
      },
      {
        internalType: "string",
        name: "strategySymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "expiration",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "underlyingDecimals",
        type: "uint8",
      },
    ],
    name: "deployInterestToken",
    outputs: [
      {
        internalType: "contract InterestToken",
        name: "interestToken",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IInterestTokenFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IInterestTokenFactoryInterface {
    return new utils.Interface(_abi) as IInterestTokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IInterestTokenFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IInterestTokenFactory;
  }
}
