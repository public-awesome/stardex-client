/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { StardexStakeNativeClient, StardexStakeNativeQueryClient } from "./StardexStakeNative.client";
export class StardexStakeNative extends ContractBase<StardexStakeNativeClient, StardexStakeNativeQueryClient, IEmptyClient> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, StardexStakeNativeClient, StardexStakeNativeQueryClient, undefined);
  }
}