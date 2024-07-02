/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type PairType = {
  xyk: {};
} | {
  stable: {};
} | {
  custom: string;
};
export interface InstantiateMsg {
  coin_registry_address: string;
  fee_address?: string | null;
  generator_address?: string | null;
  owner: string;
  pair_configs: PairConfig[];
  token_code_id: number;
  tracker_config?: TrackerConfig | null;
  whitelist_code_id: number;
}
export interface PairConfig {
  code_id: number;
  is_disabled?: boolean;
  is_generator_disabled?: boolean;
  maker_fee_bps: number;
  pair_type: PairType;
  permissioned?: boolean;
  total_fee_bps: number;
}
export interface TrackerConfig {
  code_id: number;
  token_factory_addr: string;
}
export type ExecuteMsg = {
  update_config: {
    coin_registry_address?: string | null;
    fee_address?: string | null;
    generator_address?: string | null;
    token_code_id?: number | null;
    whitelist_code_id?: number | null;
  };
} | {
  update_tracker_config: {
    token_factory_addr?: string | null;
    tracker_code_id: number;
  };
} | {
  update_pair_config: {
    config: PairConfig;
  };
} | {
  create_pair: {
    asset_infos: AssetInfo[];
    init_params?: Binary | null;
    pair_type: PairType;
  };
} | {
  deregister: {
    asset_infos: AssetInfo[];
  };
} | {
  propose_new_owner: {
    expires_in: number;
    owner: string;
  };
} | {
  drop_ownership_proposal: {};
} | {
  claim_ownership: {};
};
export type AssetInfo = {
  token: {
    contract_addr: Addr;
  };
} | {
  native_token: {
    denom: string;
  };
};
export type Addr = string;
export type Binary = string;
export type QueryMsg = {
  config: {};
} | {
  pair: {
    asset_infos: AssetInfo[];
  };
} | {
  pairs: {
    limit?: number | null;
    start_after?: AssetInfo[] | null;
  };
} | {
  fee_info: {
    pair_type: PairType;
  };
} | {
  blacklisted_pair_types: {};
} | {
  tracker_config: {};
};
export type ArrayOfPairType = PairType[];
export interface ConfigResponse {
  coin_registry_address: Addr;
  fee_address?: Addr | null;
  generator_address?: Addr | null;
  owner: Addr;
  pair_configs: PairConfig[];
  token_code_id: number;
  whitelist_code_id: number;
}
export interface FeeInfoResponse {
  fee_address?: Addr | null;
  maker_fee_bps: number;
  total_fee_bps: number;
}
export interface PairInfo {
  asset_infos: AssetInfo[];
  contract_addr: Addr;
  liquidity_token: string;
  pair_type: PairType;
}
export interface PairsResponse {
  pairs: PairInfo[];
}