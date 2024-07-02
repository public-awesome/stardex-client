/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { StardexPairStableClient, StardexPairStableQueryClient } from "./StardexPairStable.client";
export class StardexPairStable extends ContractBase<StardexPairStableClient, StardexPairStableQueryClient, IEmptyClient> {
  constructor({
    address,
    cosmWasmClient,
    signingCosmWasmClient
  }: IContractConstructor) {
    super(address, cosmWasmClient, signingCosmWasmClient, StardexPairStableClient, StardexPairStableQueryClient, undefined);
  }
}