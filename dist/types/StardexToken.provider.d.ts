/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { ContractBase, IContractConstructor, IEmptyClient } from "./contractContextBase";
import { StardexTokenClient, StardexTokenQueryClient } from "./StardexToken.client";
export declare class StardexToken extends ContractBase<StardexTokenClient, StardexTokenQueryClient, IEmptyClient> {
    constructor({ address, cosmWasmClient, signingCosmWasmClient }: IContractConstructor);
}
