/**
* This file was automatically generated by @cosmwasm/ts-codegen@1.10.0.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export interface InstantiateMsg {
  denom: string;
  duration_sec: number;
  stake: string;
}
export type ExecuteMsg = ExecMsg;
export type ExecMsg = {
  stake_change: {
    recipient: string;
    staked_amount: Uint128;
    total_staked: Uint128;
  };
} | {
  claim_rewards: {
    recipient: string;
    staked_amount: Uint128;
    total_staked: Uint128;
  };
};
export type Uint128 = string;
export type QueryMsg = QueryMsg1;
export type QueryMsg1 = {
  user_reward: {
    address: string;
  };
};
export type NullableUserReward = UserReward | null;
export type Uint256 = string;
export interface UserReward {
  claimed_rewards: Uint128;
  pending_rewards: Uint128;
  rewards_checkpoint: Uint256;
}