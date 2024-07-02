/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/
export interface InstantiateMsg {
    astroport_factory: string;
}
export type ExecuteMsg = {
    receive: Cw20ReceiveMsg;
} | {
    execute_swap_operations: {
        max_spread?: Decimal | null;
        minimum_receive?: Uint128 | null;
        operations: SwapOperation[];
        to?: string | null;
    };
} | {
    execute_swap_operation: {
        max_spread?: Decimal | null;
        operation: SwapOperation;
        single: boolean;
        to?: string | null;
    };
};
export type Uint128 = string;
export type Binary = string;
export type Decimal = string;
export type SwapOperation = {
    native_swap: {
        ask_denom: string;
        offer_denom: string;
    };
} | {
    astro_swap: {
        ask_asset_info: AssetInfo;
        offer_asset_info: AssetInfo;
    };
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
export interface Cw20ReceiveMsg {
    amount: Uint128;
    msg: Binary;
    sender: string;
}
export type QueryMsg = {
    config: {};
} | {
    simulate_swap_operations: {
        offer_amount: Uint128;
        operations: SwapOperation[];
    };
};
export interface MigrateMsg {
}
export interface ConfigResponse {
    astroport_factory: string;
}
export interface SimulateSwapOperationsResponse {
    amount: Uint128;
}
