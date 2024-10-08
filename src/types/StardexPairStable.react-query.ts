/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { AssetInfo, Addr, Binary, InstantiateMsg, ExecuteMsg, Uint128, Decimal, Cw20ReceiveMsg, Asset, QueryMsg, Uint64, MigrateMsg, NullableUint128, ConfigResponse, CumulativePricesResponse, OracleObservation, PairType, PairInfo, PoolResponse, ReverseSimulationResponse, ArrayOfAsset, SimulationResponse } from "./StardexPairStable.types";
import { StardexPairStableQueryClient, StardexPairStableClient } from "./StardexPairStable.client";
export const stardexPairStableQueryKeys = {
  contract: ([{
    contract: "stardexPairStable"
  }] as const),
  address: (contractAddress: string | undefined) => ([{
    ...stardexPairStableQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  pair: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "pair",
    args
  }] as const),
  pool: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "pool",
    args
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  share: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "share",
    args
  }] as const),
  simulation: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "simulation",
    args
  }] as const),
  reverseSimulation: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "reverse_simulation",
    args
  }] as const),
  cumulativePrices: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "cumulative_prices",
    args
  }] as const),
  queryComputeD: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "query_compute_d",
    args
  }] as const),
  assetBalanceAt: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "asset_balance_at",
    args
  }] as const),
  observe: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "observe",
    args
  }] as const),
  simulateWithdraw: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "simulate_withdraw",
    args
  }] as const),
  simulateProvide: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexPairStableQueryKeys.address(contractAddress)[0],
    method: "simulate_provide",
    args
  }] as const)
};
export const stardexPairStableQueries = {
  pair: <TData = PairInfo,>({
    client,
    options
  }: StardexPairStablePairQuery<TData>): UseQueryOptions<PairInfo, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.pair(client?.contractAddress),
    queryFn: () => client ? client.pair() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  pool: <TData = PoolResponse,>({
    client,
    options
  }: StardexPairStablePoolQuery<TData>): UseQueryOptions<PoolResponse, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.pool(client?.contractAddress),
    queryFn: () => client ? client.pool() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  config: <TData = ConfigResponse,>({
    client,
    options
  }: StardexPairStableConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  share: <TData = ArrayOfAsset,>({
    client,
    args,
    options
  }: StardexPairStableShareQuery<TData>): UseQueryOptions<ArrayOfAsset, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.share(client?.contractAddress, args),
    queryFn: () => client ? client.share({
      amount: args.amount
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  simulation: <TData = SimulationResponse,>({
    client,
    args,
    options
  }: StardexPairStableSimulationQuery<TData>): UseQueryOptions<SimulationResponse, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.simulation(client?.contractAddress, args),
    queryFn: () => client ? client.simulation({
      askAssetInfo: args.askAssetInfo,
      offerAsset: args.offerAsset
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  reverseSimulation: <TData = ReverseSimulationResponse,>({
    client,
    args,
    options
  }: StardexPairStableReverseSimulationQuery<TData>): UseQueryOptions<ReverseSimulationResponse, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.reverseSimulation(client?.contractAddress, args),
    queryFn: () => client ? client.reverseSimulation({
      askAsset: args.askAsset,
      offerAssetInfo: args.offerAssetInfo
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  cumulativePrices: <TData = CumulativePricesResponse,>({
    client,
    options
  }: StardexPairStableCumulativePricesQuery<TData>): UseQueryOptions<CumulativePricesResponse, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.cumulativePrices(client?.contractAddress),
    queryFn: () => client ? client.cumulativePrices() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  queryComputeD: <TData = Uint128,>({
    client,
    options
  }: StardexPairStableQueryComputeDQuery<TData>): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.queryComputeD(client?.contractAddress),
    queryFn: () => client ? client.queryComputeD() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  assetBalanceAt: <TData = NullableUint128,>({
    client,
    args,
    options
  }: StardexPairStableAssetBalanceAtQuery<TData>): UseQueryOptions<NullableUint128, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.assetBalanceAt(client?.contractAddress, args),
    queryFn: () => client ? client.assetBalanceAt({
      assetInfo: args.assetInfo,
      blockHeight: args.blockHeight
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  observe: <TData = OracleObservation,>({
    client,
    args,
    options
  }: StardexPairStableObserveQuery<TData>): UseQueryOptions<OracleObservation, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.observe(client?.contractAddress, args),
    queryFn: () => client ? client.observe({
      secondsAgo: args.secondsAgo
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  simulateWithdraw: <TData = ArrayOfAsset,>({
    client,
    args,
    options
  }: StardexPairStableSimulateWithdrawQuery<TData>): UseQueryOptions<ArrayOfAsset, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.simulateWithdraw(client?.contractAddress, args),
    queryFn: () => client ? client.simulateWithdraw({
      lpAmount: args.lpAmount
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  simulateProvide: <TData = Uint128,>({
    client,
    args,
    options
  }: StardexPairStableSimulateProvideQuery<TData>): UseQueryOptions<Uint128, Error, TData> => ({
    queryKey: stardexPairStableQueryKeys.simulateProvide(client?.contractAddress, args),
    queryFn: () => client ? client.simulateProvide({
      assets: args.assets,
      slippageTolerance: args.slippageTolerance
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface StardexPairStableReactQuery<TResponse, TData = TResponse> {
  client: StardexPairStableQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface StardexPairStableSimulateProvideQuery<TData> extends StardexPairStableReactQuery<Uint128, TData> {
  args: {
    assets: Asset[];
    slippageTolerance?: Decimal;
  };
}
export function useStardexPairStableSimulateProvideQuery<TData = Uint128>({
  client,
  args,
  options
}: StardexPairStableSimulateProvideQuery<TData>) {
  return useQuery<Uint128, Error, TData>(stardexPairStableQueryKeys.simulateProvide(client?.contractAddress, args), () => client ? client.simulateProvide({
    assets: args.assets,
    slippageTolerance: args.slippageTolerance
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableSimulateWithdrawQuery<TData> extends StardexPairStableReactQuery<ArrayOfAsset, TData> {
  args: {
    lpAmount: Uint128;
  };
}
export function useStardexPairStableSimulateWithdrawQuery<TData = ArrayOfAsset>({
  client,
  args,
  options
}: StardexPairStableSimulateWithdrawQuery<TData>) {
  return useQuery<ArrayOfAsset, Error, TData>(stardexPairStableQueryKeys.simulateWithdraw(client?.contractAddress, args), () => client ? client.simulateWithdraw({
    lpAmount: args.lpAmount
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableObserveQuery<TData> extends StardexPairStableReactQuery<OracleObservation, TData> {
  args: {
    secondsAgo: number;
  };
}
export function useStardexPairStableObserveQuery<TData = OracleObservation>({
  client,
  args,
  options
}: StardexPairStableObserveQuery<TData>) {
  return useQuery<OracleObservation, Error, TData>(stardexPairStableQueryKeys.observe(client?.contractAddress, args), () => client ? client.observe({
    secondsAgo: args.secondsAgo
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableAssetBalanceAtQuery<TData> extends StardexPairStableReactQuery<NullableUint128, TData> {
  args: {
    assetInfo: AssetInfo;
    blockHeight: Uint64;
  };
}
export function useStardexPairStableAssetBalanceAtQuery<TData = NullableUint128>({
  client,
  args,
  options
}: StardexPairStableAssetBalanceAtQuery<TData>) {
  return useQuery<NullableUint128, Error, TData>(stardexPairStableQueryKeys.assetBalanceAt(client?.contractAddress, args), () => client ? client.assetBalanceAt({
    assetInfo: args.assetInfo,
    blockHeight: args.blockHeight
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableQueryComputeDQuery<TData> extends StardexPairStableReactQuery<Uint128, TData> {}
export function useStardexPairStableQueryComputeDQuery<TData = Uint128>({
  client,
  options
}: StardexPairStableQueryComputeDQuery<TData>) {
  return useQuery<Uint128, Error, TData>(stardexPairStableQueryKeys.queryComputeD(client?.contractAddress), () => client ? client.queryComputeD() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableCumulativePricesQuery<TData> extends StardexPairStableReactQuery<CumulativePricesResponse, TData> {}
export function useStardexPairStableCumulativePricesQuery<TData = CumulativePricesResponse>({
  client,
  options
}: StardexPairStableCumulativePricesQuery<TData>) {
  return useQuery<CumulativePricesResponse, Error, TData>(stardexPairStableQueryKeys.cumulativePrices(client?.contractAddress), () => client ? client.cumulativePrices() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableReverseSimulationQuery<TData> extends StardexPairStableReactQuery<ReverseSimulationResponse, TData> {
  args: {
    askAsset: Asset;
    offerAssetInfo?: AssetInfo;
  };
}
export function useStardexPairStableReverseSimulationQuery<TData = ReverseSimulationResponse>({
  client,
  args,
  options
}: StardexPairStableReverseSimulationQuery<TData>) {
  return useQuery<ReverseSimulationResponse, Error, TData>(stardexPairStableQueryKeys.reverseSimulation(client?.contractAddress, args), () => client ? client.reverseSimulation({
    askAsset: args.askAsset,
    offerAssetInfo: args.offerAssetInfo
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableSimulationQuery<TData> extends StardexPairStableReactQuery<SimulationResponse, TData> {
  args: {
    askAssetInfo?: AssetInfo;
    offerAsset: Asset;
  };
}
export function useStardexPairStableSimulationQuery<TData = SimulationResponse>({
  client,
  args,
  options
}: StardexPairStableSimulationQuery<TData>) {
  return useQuery<SimulationResponse, Error, TData>(stardexPairStableQueryKeys.simulation(client?.contractAddress, args), () => client ? client.simulation({
    askAssetInfo: args.askAssetInfo,
    offerAsset: args.offerAsset
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableShareQuery<TData> extends StardexPairStableReactQuery<ArrayOfAsset, TData> {
  args: {
    amount: Uint128;
  };
}
export function useStardexPairStableShareQuery<TData = ArrayOfAsset>({
  client,
  args,
  options
}: StardexPairStableShareQuery<TData>) {
  return useQuery<ArrayOfAsset, Error, TData>(stardexPairStableQueryKeys.share(client?.contractAddress, args), () => client ? client.share({
    amount: args.amount
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableConfigQuery<TData> extends StardexPairStableReactQuery<ConfigResponse, TData> {}
export function useStardexPairStableConfigQuery<TData = ConfigResponse>({
  client,
  options
}: StardexPairStableConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(stardexPairStableQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStablePoolQuery<TData> extends StardexPairStableReactQuery<PoolResponse, TData> {}
export function useStardexPairStablePoolQuery<TData = PoolResponse>({
  client,
  options
}: StardexPairStablePoolQuery<TData>) {
  return useQuery<PoolResponse, Error, TData>(stardexPairStableQueryKeys.pool(client?.contractAddress), () => client ? client.pool() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStablePairQuery<TData> extends StardexPairStableReactQuery<PairInfo, TData> {}
export function useStardexPairStablePairQuery<TData = PairInfo>({
  client,
  options
}: StardexPairStablePairQuery<TData>) {
  return useQuery<PairInfo, Error, TData>(stardexPairStableQueryKeys.pair(client?.contractAddress), () => client ? client.pair() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexPairStableClaimOwnershipMutation {
  client: StardexPairStableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableClaimOwnershipMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableClaimOwnershipMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableClaimOwnershipMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.claimOwnership(fee, memo, funds), options);
}
export interface StardexPairStableDropOwnershipProposalMutation {
  client: StardexPairStableClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableDropOwnershipProposalMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableDropOwnershipProposalMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableDropOwnershipProposalMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.dropOwnershipProposal(fee, memo, funds), options);
}
export interface StardexPairStableProposeNewOwnerMutation {
  client: StardexPairStableClient;
  msg: {
    expiresIn: number;
    owner: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableProposeNewOwnerMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableProposeNewOwnerMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableProposeNewOwnerMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.proposeNewOwner(msg, fee, memo, funds), options);
}
export interface StardexPairStableUpdateConfigMutation {
  client: StardexPairStableClient;
  msg: {
    params: Binary;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}
export interface StardexPairStableSwapMutation {
  client: StardexPairStableClient;
  msg: {
    askAssetInfo?: AssetInfo;
    beliefPrice?: Decimal;
    maxSpread?: Decimal;
    offerAsset: Asset;
    to?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableSwapMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableSwapMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableSwapMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.swap(msg, fee, memo, funds), options);
}
export interface StardexPairStableWithdrawLiquidityMutation {
  client: StardexPairStableClient;
  msg: {
    assets?: Asset[];
    minAssetsToReceive?: Asset[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableWithdrawLiquidityMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableWithdrawLiquidityMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableWithdrawLiquidityMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.withdrawLiquidity(msg, fee, memo, funds), options);
}
export interface StardexPairStableProvideLiquidityMutation {
  client: StardexPairStableClient;
  msg: {
    assets: Asset[];
    autoStake?: boolean;
    minLpToReceive?: Uint128;
    receiver?: string;
    slippageTolerance?: Decimal;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableProvideLiquidityMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableProvideLiquidityMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableProvideLiquidityMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.provideLiquidity(msg, fee, memo, funds), options);
}
export interface StardexPairStableReceiveMutation {
  client: StardexPairStableClient;
  msg: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexPairStableReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexPairStableReceiveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexPairStableReceiveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receive(msg, fee, memo, funds), options);
}