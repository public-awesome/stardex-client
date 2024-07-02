/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

import { CosmWasmClient, SigningCosmWasmClient, ExecuteResult } from "@cosmjs/cosmwasm-stargate";
import { Coin, StdFee } from "@cosmjs/amino";
import { AssetInfo, Addr, Binary, InstantiateMsg, ExecuteMsg, Uint128, Decimal, Cw20ReceiveMsg, Asset, QueryMsg, Uint64, MigrateMsg, NullableUint128, ConfigResponse, CumulativePricesResponse, OracleObservation, PairType, PairInfo, PoolResponse, ReverseSimulationResponse, ArrayOfAsset, SimulationResponse } from "./StardexPair.types";
export interface StardexPairReadOnlyInterface {
  contractAddress: string;
  pair: () => Promise<PairInfo>;
  pool: () => Promise<PoolResponse>;
  config: () => Promise<ConfigResponse>;
  share: ({
    amount
  }: {
    amount: Uint128;
  }) => Promise<ArrayOfAsset>;
  simulation: ({
    askAssetInfo,
    offerAsset
  }: {
    askAssetInfo?: AssetInfo;
    offerAsset: Asset;
  }) => Promise<SimulationResponse>;
  reverseSimulation: ({
    askAsset,
    offerAssetInfo
  }: {
    askAsset: Asset;
    offerAssetInfo?: AssetInfo;
  }) => Promise<ReverseSimulationResponse>;
  cumulativePrices: () => Promise<CumulativePricesResponse>;
  queryComputeD: () => Promise<Uint128>;
  assetBalanceAt: ({
    assetInfo,
    blockHeight
  }: {
    assetInfo: AssetInfo;
    blockHeight: Uint64;
  }) => Promise<NullableUint128>;
  observe: ({
    secondsAgo
  }: {
    secondsAgo: number;
  }) => Promise<OracleObservation>;
  simulateWithdraw: ({
    lpAmount
  }: {
    lpAmount: Uint128;
  }) => Promise<ArrayOfAsset>;
  simulateProvide: ({
    assets,
    slippageTolerance
  }: {
    assets: Asset[];
    slippageTolerance?: Decimal;
  }) => Promise<Uint128>;
}
export class StardexPairQueryClient implements StardexPairReadOnlyInterface {
  client: CosmWasmClient;
  contractAddress: string;
  constructor(client: CosmWasmClient, contractAddress: string) {
    this.client = client;
    this.contractAddress = contractAddress;
    this.pair = this.pair.bind(this);
    this.pool = this.pool.bind(this);
    this.config = this.config.bind(this);
    this.share = this.share.bind(this);
    this.simulation = this.simulation.bind(this);
    this.reverseSimulation = this.reverseSimulation.bind(this);
    this.cumulativePrices = this.cumulativePrices.bind(this);
    this.queryComputeD = this.queryComputeD.bind(this);
    this.assetBalanceAt = this.assetBalanceAt.bind(this);
    this.observe = this.observe.bind(this);
    this.simulateWithdraw = this.simulateWithdraw.bind(this);
    this.simulateProvide = this.simulateProvide.bind(this);
  }
  pair = async (): Promise<PairInfo> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pair: {}
    });
  };
  pool = async (): Promise<PoolResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      pool: {}
    });
  };
  config = async (): Promise<ConfigResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      config: {}
    });
  };
  share = async ({
    amount
  }: {
    amount: Uint128;
  }): Promise<ArrayOfAsset> => {
    return this.client.queryContractSmart(this.contractAddress, {
      share: {
        amount
      }
    });
  };
  simulation = async ({
    askAssetInfo,
    offerAsset
  }: {
    askAssetInfo?: AssetInfo;
    offerAsset: Asset;
  }): Promise<SimulationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      simulation: {
        ask_asset_info: askAssetInfo,
        offer_asset: offerAsset
      }
    });
  };
  reverseSimulation = async ({
    askAsset,
    offerAssetInfo
  }: {
    askAsset: Asset;
    offerAssetInfo?: AssetInfo;
  }): Promise<ReverseSimulationResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      reverse_simulation: {
        ask_asset: askAsset,
        offer_asset_info: offerAssetInfo
      }
    });
  };
  cumulativePrices = async (): Promise<CumulativePricesResponse> => {
    return this.client.queryContractSmart(this.contractAddress, {
      cumulative_prices: {}
    });
  };
  queryComputeD = async (): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      query_compute_d: {}
    });
  };
  assetBalanceAt = async ({
    assetInfo,
    blockHeight
  }: {
    assetInfo: AssetInfo;
    blockHeight: Uint64;
  }): Promise<NullableUint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      asset_balance_at: {
        asset_info: assetInfo,
        block_height: blockHeight
      }
    });
  };
  observe = async ({
    secondsAgo
  }: {
    secondsAgo: number;
  }): Promise<OracleObservation> => {
    return this.client.queryContractSmart(this.contractAddress, {
      observe: {
        seconds_ago: secondsAgo
      }
    });
  };
  simulateWithdraw = async ({
    lpAmount
  }: {
    lpAmount: Uint128;
  }): Promise<ArrayOfAsset> => {
    return this.client.queryContractSmart(this.contractAddress, {
      simulate_withdraw: {
        lp_amount: lpAmount
      }
    });
  };
  simulateProvide = async ({
    assets,
    slippageTolerance
  }: {
    assets: Asset[];
    slippageTolerance?: Decimal;
  }): Promise<Uint128> => {
    return this.client.queryContractSmart(this.contractAddress, {
      simulate_provide: {
        assets,
        slippage_tolerance: slippageTolerance
      }
    });
  };
}
export interface StardexPairInterface extends StardexPairReadOnlyInterface {
  contractAddress: string;
  sender: string;
  receive: ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  provideLiquidity: ({
    assets,
    autoStake,
    minLpToReceive,
    receiver,
    slippageTolerance
  }: {
    assets: Asset[];
    autoStake?: boolean;
    minLpToReceive?: Uint128;
    receiver?: string;
    slippageTolerance?: Decimal;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  withdrawLiquidity: ({
    assets,
    minAssetsToReceive
  }: {
    assets?: Asset[];
    minAssetsToReceive?: Asset[];
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  swap: ({
    askAssetInfo,
    beliefPrice,
    maxSpread,
    offerAsset,
    to
  }: {
    askAssetInfo?: AssetInfo;
    beliefPrice?: Decimal;
    maxSpread?: Decimal;
    offerAsset: Asset;
    to?: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  updateConfig: ({
    params
  }: {
    params: Binary;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  proposeNewOwner: ({
    expiresIn,
    owner
  }: {
    expiresIn: number;
    owner: string;
  }, fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  dropOwnershipProposal: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
  claimOwnership: (fee?: number | StdFee | "auto", memo?: string, _funds?: Coin[]) => Promise<ExecuteResult>;
}
export class StardexPairClient extends StardexPairQueryClient implements StardexPairInterface {
  client: SigningCosmWasmClient;
  sender: string;
  contractAddress: string;
  constructor(client: SigningCosmWasmClient, sender: string, contractAddress: string) {
    super(client, contractAddress);
    this.client = client;
    this.sender = sender;
    this.contractAddress = contractAddress;
    this.receive = this.receive.bind(this);
    this.provideLiquidity = this.provideLiquidity.bind(this);
    this.withdrawLiquidity = this.withdrawLiquidity.bind(this);
    this.swap = this.swap.bind(this);
    this.updateConfig = this.updateConfig.bind(this);
    this.proposeNewOwner = this.proposeNewOwner.bind(this);
    this.dropOwnershipProposal = this.dropOwnershipProposal.bind(this);
    this.claimOwnership = this.claimOwnership.bind(this);
  }
  receive = async ({
    amount,
    msg,
    sender
  }: {
    amount: Uint128;
    msg: Binary;
    sender: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      receive: {
        amount,
        msg,
        sender
      }
    }, fee, memo, _funds);
  };
  provideLiquidity = async ({
    assets,
    autoStake,
    minLpToReceive,
    receiver,
    slippageTolerance
  }: {
    assets: Asset[];
    autoStake?: boolean;
    minLpToReceive?: Uint128;
    receiver?: string;
    slippageTolerance?: Decimal;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      provide_liquidity: {
        assets,
        auto_stake: autoStake,
        min_lp_to_receive: minLpToReceive,
        receiver,
        slippage_tolerance: slippageTolerance
      }
    }, fee, memo, _funds);
  };
  withdrawLiquidity = async ({
    assets,
    minAssetsToReceive
  }: {
    assets?: Asset[];
    minAssetsToReceive?: Asset[];
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      withdraw_liquidity: {
        assets,
        min_assets_to_receive: minAssetsToReceive
      }
    }, fee, memo, _funds);
  };
  swap = async ({
    askAssetInfo,
    beliefPrice,
    maxSpread,
    offerAsset,
    to
  }: {
    askAssetInfo?: AssetInfo;
    beliefPrice?: Decimal;
    maxSpread?: Decimal;
    offerAsset: Asset;
    to?: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      swap: {
        ask_asset_info: askAssetInfo,
        belief_price: beliefPrice,
        max_spread: maxSpread,
        offer_asset: offerAsset,
        to
      }
    }, fee, memo, _funds);
  };
  updateConfig = async ({
    params
  }: {
    params: Binary;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      update_config: {
        params
      }
    }, fee, memo, _funds);
  };
  proposeNewOwner = async ({
    expiresIn,
    owner
  }: {
    expiresIn: number;
    owner: string;
  }, fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      propose_new_owner: {
        expires_in: expiresIn,
        owner
      }
    }, fee, memo, _funds);
  };
  dropOwnershipProposal = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      drop_ownership_proposal: {}
    }, fee, memo, _funds);
  };
  claimOwnership = async (fee: number | StdFee | "auto" = "auto", memo?: string, _funds?: Coin[]): Promise<ExecuteResult> => {
    return await this.client.execute(this.sender, this.contractAddress, {
      claim_ownership: {}
    }, fee, memo, _funds);
  };
}