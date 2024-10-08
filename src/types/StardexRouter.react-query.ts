/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { UseQueryOptions, useQuery, useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { StdFee, Coin } from "@cosmjs/amino";
import { InstantiateMsg, ExecuteMsg, Uint128, Binary, Decimal, SwapOperation, AssetInfo, Addr, Cw20ReceiveMsg, QueryMsg, MigrateMsg, ConfigResponse, SimulateSwapOperationsResponse } from "./StardexRouter.types";
import { StardexRouterQueryClient, StardexRouterClient } from "./StardexRouter.client";
export const stardexRouterQueryKeys = {
  contract: ([{
    contract: "stardexRouter"
  }] as const),
  address: (contractAddress: string | undefined) => ([{
    ...stardexRouterQueryKeys.contract[0],
    address: contractAddress
  }] as const),
  config: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexRouterQueryKeys.address(contractAddress)[0],
    method: "config",
    args
  }] as const),
  simulateSwapOperations: (contractAddress: string | undefined, args?: Record<string, unknown>) => ([{
    ...stardexRouterQueryKeys.address(contractAddress)[0],
    method: "simulate_swap_operations",
    args
  }] as const)
};
export const stardexRouterQueries = {
  config: <TData = ConfigResponse,>({
    client,
    options
  }: StardexRouterConfigQuery<TData>): UseQueryOptions<ConfigResponse, Error, TData> => ({
    queryKey: stardexRouterQueryKeys.config(client?.contractAddress),
    queryFn: () => client ? client.config() : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  }),
  simulateSwapOperations: <TData = SimulateSwapOperationsResponse,>({
    client,
    args,
    options
  }: StardexRouterSimulateSwapOperationsQuery<TData>): UseQueryOptions<SimulateSwapOperationsResponse, Error, TData> => ({
    queryKey: stardexRouterQueryKeys.simulateSwapOperations(client?.contractAddress, args),
    queryFn: () => client ? client.simulateSwapOperations({
      offerAmount: args.offerAmount,
      operations: args.operations
    }) : Promise.reject(new Error("Invalid client")),
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  })
};
export interface StardexRouterReactQuery<TResponse, TData = TResponse> {
  client: StardexRouterQueryClient | undefined;
  options?: Omit<UseQueryOptions<TResponse, Error, TData>, "'queryKey' | 'queryFn' | 'initialData'"> & {
    initialData?: undefined;
  };
}
export interface StardexRouterSimulateSwapOperationsQuery<TData> extends StardexRouterReactQuery<SimulateSwapOperationsResponse, TData> {
  args: {
    offerAmount: Uint128;
    operations: SwapOperation[];
  };
}
export function useStardexRouterSimulateSwapOperationsQuery<TData = SimulateSwapOperationsResponse>({
  client,
  args,
  options
}: StardexRouterSimulateSwapOperationsQuery<TData>) {
  return useQuery<SimulateSwapOperationsResponse, Error, TData>(stardexRouterQueryKeys.simulateSwapOperations(client?.contractAddress, args), () => client ? client.simulateSwapOperations({
    offerAmount: args.offerAmount,
    operations: args.operations
  }) : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexRouterConfigQuery<TData> extends StardexRouterReactQuery<ConfigResponse, TData> {}
export function useStardexRouterConfigQuery<TData = ConfigResponse>({
  client,
  options
}: StardexRouterConfigQuery<TData>) {
  return useQuery<ConfigResponse, Error, TData>(stardexRouterQueryKeys.config(client?.contractAddress), () => client ? client.config() : Promise.reject(new Error("Invalid client")), {
    ...options,
    enabled: !!client && (options?.enabled != undefined ? options.enabled : true)
  });
}
export interface StardexRouterExecuteSwapOperationMutation {
  client: StardexRouterClient;
  msg: {
    maxSpread?: Decimal;
    operation: SwapOperation;
    single: boolean;
    to?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexRouterExecuteSwapOperationMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexRouterExecuteSwapOperationMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexRouterExecuteSwapOperationMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.executeSwapOperation(msg, fee, memo, funds), options);
}
export interface StardexRouterExecuteSwapOperationsMutation {
  client: StardexRouterClient;
  msg: {
    maxSpread?: Decimal;
    minimumReceive?: Uint128;
    operations: SwapOperation[];
    to?: string;
  };
  args?: {
    fee?: number | StdFee | "auto";
    memo?: string;
    funds?: Coin[];
  };
}
export function useStardexRouterExecuteSwapOperationsMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexRouterExecuteSwapOperationsMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexRouterExecuteSwapOperationsMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.executeSwapOperations(msg, fee, memo, funds), options);
}
export interface StardexRouterReceiveMutation {
  client: StardexRouterClient;
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
export function useStardexRouterReceiveMutation(options?: Omit<UseMutationOptions<ExecuteResult, Error, StardexRouterReceiveMutation>, "mutationFn">) {
  return useMutation<ExecuteResult, Error, StardexRouterReceiveMutation>(({
    client,
    msg,
    args: {
      fee,
      memo,
      funds
    } = {}
  }) => client.receive(msg, fee, memo, funds), options);
}