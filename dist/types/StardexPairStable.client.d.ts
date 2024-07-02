/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { AssetInfo, Binary, Uint128, Decimal, Asset, Uint64, NullableUint128, ConfigResponse, CumulativePricesResponse, OracleObservation, PairInfo, PoolResponse, ReverseSimulationResponse, ArrayOfAsset, SimulationResponse } from "./StardexPairStable.types";
export interface StardexPairStableReadOnlyInterface {
    contractAddress: string;
    pair: () => Promise<PairInfo>;
    pool: () => Promise<PoolResponse>;
    config: () => Promise<ConfigResponse>;
    share: ({ amount }: {
        amount: Uint128;
    }) => Promise<ArrayOfAsset>;
    simulation: ({ askAssetInfo, offerAsset }: {
        askAssetInfo?: AssetInfo;
        offerAsset: Asset;
    }) => Promise<SimulationResponse>;
    reverseSimulation: ({ askAsset, offerAssetInfo }: {
        askAsset: Asset;
        offerAssetInfo?: AssetInfo;
    }) => Promise<ReverseSimulationResponse>;
    cumulativePrices: () => Promise<CumulativePricesResponse>;
    queryComputeD: () => Promise<Uint128>;
    assetBalanceAt: ({ assetInfo, blockHeight }: {
        assetInfo: AssetInfo;
        blockHeight: Uint64;
    }) => Promise<NullableUint128>;
    observe: ({ secondsAgo }: {
        secondsAgo: number;
    }) => Promise<OracleObservation>;
    simulateWithdraw: ({ lpAmount }: {
        lpAmount: Uint128;
    }) => Promise<ArrayOfAsset>;
    simulateProvide: ({ assets, slippageTolerance }: {
        assets: Asset[];
        slippageTolerance?: Decimal;
    }) => Promise<Uint128>;
}
export declare class StardexPairStableQueryClient implements StardexPairStableReadOnlyInterface {
    client: CosmWasmClient;
    contractAddress: string;
    constructor(client: CosmWasmClient, contractAddress: string);
    pair: () => Promise<PairInfo>;
    pool: () => Promise<PoolResponse>;
    config: () => Promise<ConfigResponse>;
    share: ({ amount }: {
        amount: Uint128;
    }) => Promise<ArrayOfAsset>;
    simulation: ({ askAssetInfo, offerAsset }: {
        askAssetInfo?: AssetInfo | undefined;
        offerAsset: Asset;
    }) => Promise<SimulationResponse>;
    reverseSimulation: ({ askAsset, offerAssetInfo }: {
        askAsset: Asset;
        offerAssetInfo?: AssetInfo | undefined;
    }) => Promise<ReverseSimulationResponse>;
    cumulativePrices: () => Promise<CumulativePricesResponse>;
    queryComputeD: () => Promise<Uint128>;
    assetBalanceAt: ({ assetInfo, blockHeight }: {
        assetInfo: AssetInfo;
        blockHeight: Uint64;
    }) => Promise<NullableUint128>;
    observe: ({ secondsAgo }: {
        secondsAgo: number;
    }) => Promise<OracleObservation>;
    simulateWithdraw: ({ lpAmount }: {
        lpAmount: Uint128;
    }) => Promise<ArrayOfAsset>;
    simulateProvide: ({ assets, slippageTolerance }: {
        assets: Asset[];
        slippageTolerance?: string | undefined;
    }) => Promise<Uint128>;
}
export interface StardexPairStableInterface extends StardexPairStableReadOnlyInterface {
    contractAddress: string;
    sender: string;
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    provideLiquidity: ({ assets, autoStake, minLpToReceive, receiver, slippageTolerance }: {
        assets: Asset[];
        autoStake?: boolean;
        minLpToReceive?: Uint128;
        receiver?: string;
        slippageTolerance?: Decimal;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawLiquidity: ({ assets, minAssetsToReceive }: {
        assets?: Asset[];
        minAssetsToReceive?: Asset[];
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    swap: ({ askAssetInfo, beliefPrice, maxSpread, offerAsset, to }: {
        askAssetInfo?: AssetInfo;
        beliefPrice?: Decimal;
        maxSpread?: Decimal;
        offerAsset: Asset;
        to?: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ params }: {
        params: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    dropOwnershipProposal: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    claimOwnership: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export declare class StardexPairStableClient extends StardexPairStableQueryClient implements StardexPairStableInterface {
    client: SigningCosmWasmClient;
    sender: string;
    contractAddress: string;
    constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string);
    receive: ({ amount, msg, sender }: {
        amount: Uint128;
        msg: Binary;
        sender: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    provideLiquidity: ({ assets, autoStake, minLpToReceive, receiver, slippageTolerance }: {
        assets: Asset[];
        autoStake?: boolean | undefined;
        minLpToReceive?: string | undefined;
        receiver?: string | undefined;
        slippageTolerance?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    withdrawLiquidity: ({ assets, minAssetsToReceive }: {
        assets?: Asset[] | undefined;
        minAssetsToReceive?: Asset[] | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    swap: ({ askAssetInfo, beliefPrice, maxSpread, offerAsset, to }: {
        askAssetInfo?: AssetInfo | undefined;
        beliefPrice?: string | undefined;
        maxSpread?: string | undefined;
        offerAsset: Asset;
        to?: string | undefined;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    updateConfig: ({ params }: {
        params: Binary;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    proposeNewOwner: ({ expiresIn, owner }: {
        expiresIn: number;
        owner: string;
    }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    dropOwnershipProposal: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
    claimOwnership: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
