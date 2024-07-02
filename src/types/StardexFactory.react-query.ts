/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { PairType, InstantiateMsg, PairConfig, TrackerConfig, ExecuteMsg, AssetInfo, Addr, Binary, QueryMsg, ArrayOfPairType, ConfigResponse, FeeInfoResponse, PairInfo, PairsResponse } from "./StardexFactory.types";
import { StardexFactoryQueryClient, StardexFactoryClient } from "./StardexFactory.client";
export const stardexFactoryQueryKeys = {
  contract: ([{
    contract: "stardexFactory"
  }] as const),
  address: (contractAddress: string | undefined) => ([{
    ...stardexFactoryQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  pair: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "pair",
    args
  }] as const),
  pairs: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "pairs",
    args
  }] as const),
  feeInfo: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "fee_info",
    args
  }] as const),
  blacklistedPairTypes: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "blacklisted_pair_types",
    args
  }] as const),
  trackerConfig: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexFactoryQueryKeys.address(contractAddress)[0],
    method: "tracker_config",
    args
  }] as const)
};
export const stardexFactoryQueries = {
  config: <TData = ConfigResponse,>({
    client,
    options
  }: StardexFactoryConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  pair: <TData = PairInfo,>({
    client,
    args,
    options
  }: StardexFactoryPairQuery<TData>): UseQueryOptions<PairInfo, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.pair(client?.contractAddress, args),
    queryFn: () => client ? client.pair({
      assetInfos: args.assetInfos
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  pairs: <TData = PairsResponse,>({
    client,
    args,
    options
  }: StardexFactoryPairsQuery<TData>): UseQueryOptions<PairsResponse, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.pairs(client?.contractAddress, args),
    queryFn: () => client ? client.pairs({
      limit: args.limit,
      startAfter: args.startAfter
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  feeInfo: <TData = FeeInfoResponse,>({
    client,
    args,
    options
  }: StardexFactoryFeeInfoQuery<TData>): UseQueryOptions<FeeInfoResponse, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.feeInfo(client?.contractAddress, args),
    queryFn: () => client ? client.feeInfo({
      pairType: args.pairType
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  blacklistedPairTypes: <TData = ArrayOfPairType,>({
    client,
    options
  }: StardexFactoryBlacklistedPairTypesQuery<TData>): UseQueryOptions<ArrayOfPairType, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.blacklistedPairTypes(client?.contractAddress),
    queryFn: () => client ? client.blacklistedPairTypes() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  trackerConfig: <TData = TrackerConfig,>({
    client,
    options
  }: StardexFactoryTrackerConfigQuery<TData>): UseQueryOptions<TrackerConfig, Error, TData> => ({
    queryKey: stardexFactoryQueryKeys.trackerConfig(client?.contractAddress),
    queryFn: () => client ? client.trackerConfig() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface StardexFactoryReactQuery<TResponse, TData = TResponse> {
  client: StardexFactoryQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface StardexFactoryTrackerConfigQuery<TData> extends StardexFactoryReactQuery<TrackerConfig, TData> {}
export function useStardexFactoryTrackerConfigQuery<TData = TrackerConfig>({
  client,
  options
}: StardexFactoryTrackerConfigQuery<TData>) {
  return useQuery<TrackerConfig, Error, TData>(stardexFactoryQueryKeys.trackerConfig(client?.contractAddress), () => client ? client.trackerConfig() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryBlacklistedPairTypesQuery<TData> extends StardexFactoryReactQuery<ArrayOfPairType, TData> {}
export function useStardexFactoryBlacklistedPairTypesQuery<TData = ArrayOfPairType>({
  client,
  options
}: StardexFactoryBlacklistedPairTypesQuery<TData>) {
  return useQuery<ArrayOfPairType, Error, TData>(stardexFactoryQueryKeys.blacklistedPairTypes(client?.contractAddress), () => client ? client.blacklistedPairTypes() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryFeeInfoQuery<TData> extends StardexFactoryReactQuery<FeeInfoResponse, TData> {
  args: {
    pairType: PairType;
  };
}
export function useStardexFactoryFeeInfoQuery<TData = FeeInfoResponse>({
  client,
  args,
  options
}: StardexFactoryFeeInfoQuery<TData>) {
  return useQuery<FeeInfoResponse, Error, TData>(stardexFactoryQueryKeys.feeInfo(client?.contractAddress, args), () => client ? client.feeInfo({
    pairType: args.pairType
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryPairsQuery<TData> extends StardexFactoryReactQuery<PairsResponse, TData> {
  args: {
    limit?: number;
    startAfter?: AssetInfo[];
  };
}
export function useStardexFactoryPairsQuery<TData = PairsResponse>({
  client,
  args,
  options
}: StardexFactoryPairsQuery<TData>) {
  return useQuery<PairsResponse, Error, TData>(stardexFactoryQueryKeys.pairs(client?.contractAddress, args), () => client ? client.pairs({
    limit: args.limit,
    startAfter: args.startAfter
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryPairQuery<TData> extends StardexFactoryReactQuery<PairInfo, TData> {
  args: {
    assetInfos: AssetInfo[];
  };
}
export function useStardexFactoryPairQuery<TData = PairInfo>({
  client,
  args,
  options
}: StardexFactoryPairQuery<TData>) {
  return useQuery<PairInfo, Error, TData>(stardexFactoryQueryKeys.pair(client?.contractAddress, args), () => client ? client.pair({
    assetInfos: args.assetInfos
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryConfigQuery<TData> extends StardexFactoryReactQuery<ConfigResponse, TData> {}
export function useStardexFactoryConfigQuery<TData = ConfigResponse>({
  client,
  options
}: StardexFactoryConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(stardexFactoryQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexFactoryClaimOwnershipMutation {
  client: StardexFactoryClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryClaimOwnershipMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryClaimOwnershipMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryClaimOwnershipMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.claimOwnership(fee, memo, funds), options);
}
export interface StardexFactoryDropOwnershipProposalMutation {
  client: StardexFactoryClient;
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryDropOwnershipProposalMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryDropOwnershipProposalMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryDropOwnershipProposalMutation>(({
    client,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.dropOwnershipProposal(fee, memo, funds), options);
}
export interface StardexFactoryProposeNewOwnerMutation {
  client: StardexFactoryClient;
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
export function useStardexFactoryProposeNewOwnerMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryProposeNewOwnerMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryProposeNewOwnerMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.proposeNewOwner(msg, fee, memo, funds), options);
}
export interface StardexFactoryDeregisterMutation {
  client: StardexFactoryClient;
  msg: {
    assetInfos: AssetInfo[];
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryDeregisterMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryDeregisterMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryDeregisterMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.deregister(msg, fee, memo, funds), options);
}
export interface StardexFactoryCreatePairMutation {
  client: StardexFactoryClient;
  msg: {
    assetInfos: AssetInfo[];
    initParams?: Binary;
    pairType: PairType;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryCreatePairMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryCreatePairMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryCreatePairMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.createPair(msg, fee, memo, funds), options);
}
export interface StardexFactoryUpdatePairConfigMutation {
  client: StardexFactoryClient;
  msg: {
    config: PairConfig;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryUpdatePairConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryUpdatePairConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryUpdatePairConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updatePairConfig(msg, fee, memo, funds), options);
}
export interface StardexFactoryUpdateTrackerConfigMutation {
  client: StardexFactoryClient;
  msg: {
    tokenFactoryAddr?: string;
    trackerCodeId: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryUpdateTrackerConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryUpdateTrackerConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryUpdateTrackerConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateTrackerConfig(msg, fee, memo, funds), options);
}
export interface StardexFactoryUpdateConfigMutation {
  client: StardexFactoryClient;
  msg: {
    coinRegistryAddress?: string;
    feeAddress?: string;
    generatorAddress?: string;
    tokenCodeId?: number;
    whitelistCodeId?: number;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexFactoryUpdateConfigMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexFactoryUpdateConfigMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexFactoryUpdateConfigMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.updateConfig(msg, fee, memo, funds), options);
}