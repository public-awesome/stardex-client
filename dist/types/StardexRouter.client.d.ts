/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { Uint128, Binary, Decimal, SwapOperation, ConfigResponse, SimulateSwapOperationsResponse } from "./StardexRouter.types";
export interface StardexRouterReadOnlyInterface {
    contractAddress: string;
    config: () => Promise<ConfigResponse>;
    simulateSwapOperations: ({ offerAmount, operations }: {
        offerAmount: Uint128;
        operations: SwapOperation[];
    }) => Promise<SimulateSwapOperationsResponse>;
}
export declare class StardexRouterQueryClient implements StardexRouterReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    config: () => Promise<ConfigResponse>;
    simulateSwapOperations: ({ offerAmount, operations }: {
        offerAmount: Uint128;
        operations: SwapOperation[];
    }) => Promise<SimulateSwapOperationsResponse>;
}
export interface StardexRouterInterface extends StardexRouterReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    executeSwapOperations: ({ maxSpread, minimumReceive, operations, to }: {
        maxSpread?: Decimal;
        minimumReceive?: Uint128;
        operations: SwapOperation[];
        to?: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    executeSwapOperation: ({ maxSpread, operation, single, to }: {
        maxSpread?: Decimal;
        operation: SwapOperation;
        single: boolean;
        to?: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class StardexRouterClient extends StardexRouterQueryClient implements StardexRouterInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    executeSwapOperations: ({ maxSpread, minimumReceive, operations, to }: {
        maxSpread?: string | undefined;
        minimumReceive?: string | undefined;
        operations: SwapOperation[];
        to?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    executeSwapOperation: ({ maxSpread, operation, single, to }: {
        maxSpread?: string | undefined;
        operation: SwapOperation;
        single: boolean;
        to?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
