// Generated by ts-to-zod
import { z } from 'zod'

export const instantiateMsgSchema = z.object({
  denom: z.string(),
  rewards_code_id: z.number(),
  unstaking_duration_sec: z.number(),
})

export const uint128Schema = z.string()

export const queryMsg1Schema = z.union([
  z.object({
    reward_accounts: z.object({}),
  }),
  z.object({
    stake_balance_at_height: z.object({
      address: z.string(),
      height: z.number().optional().nullable(),
    }),
  }),
])

export const addrSchema = z.string()

export const arrayOfAddrSchema = z.array(addrSchema)

export const execMsgSchema = z.union([
  z.object({
    update_config: z.object({
      rewards_code_id: z.number().optional().nullable(),
      unstaking_duration_sec: z.number().optional().nullable(),
    }),
  }),
  z.object({
    create_reward_account: z.object({
      denom: z.string(),
      duration_sec: z.number(),
    }),
  }),
  z.object({
    remove_reward_account: z.object({
      reward_account: z.string(),
    }),
  }),
  z.object({
    stake: z.object({
      recipient: z.string().optional().nullable(),
    }),
  }),
  z.object({
    unstake: z.object({
      amount: uint128Schema,
      recipient: z.string().optional().nullable(),
    }),
  }),
  z.object({
    claim: z.object({
      recipient: z.string().optional().nullable(),
    }),
  }),
  z.object({
    claim_rewards: z.object({
      recipient: z.string().optional().nullable(),
    }),
  }),
])

export const queryMsgSchema = queryMsg1Schema

export const executeMsgSchema = execMsgSchema
