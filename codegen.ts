import codegen from '@cosmwasm/ts-codegen'

codegen({
  contracts: [
    {
      name: 'StardexToken',
      dir: '../../protocols/astroport-core/schemas/astroport-token',
    },
    {
      name: 'StardexCoinRegistry',
      dir: '../../protocols/astroport-core/schemas/astroport-native-coin-registry',
    },
    {
      name: 'StardexFactory',
      dir: '../../protocols/astroport-core/schemas/astroport-factory/',
    },
    {
      name: 'StardexPair',
      dir: '../../protocols/astroport-core/schemas/astroport-pair/',
    },
    {
      name: 'StardexPairStable',
      dir: '../../protocols/astroport-core/schemas/astroport-pair-stable/',
    },
    {
      name: 'StardexPairConcentrated',
      dir: '../../protocols/astroport-core/schemas/astroport-pair-concentrated/',
    },
    {
      name: 'StardexRouter',
      dir: '../../protocols/astroport-core/schemas/astroport-router/',
    },
  ],
  outPath: './src/types',

  options: {
    bundle: {
      bundleFile: 'index.ts',
      scope: 'contracts',
    },
    types: {
      enabled: true,
    },
    client: {
      enabled: true,
    },
    reactQuery: {
      enabled: true,
      optionalClient: true,
      version: 'v4',
      mutations: true,
      queryKeys: true,
      queryFactory: true,
    },
    recoil: {
      enabled: false,
    },
    messageComposer: {
      enabled: false,
    },
    messageBuilder: {
      enabled: false,
    },
    useContractsHook: {
      enabled: true,
    },
  },
}).then(() => {
  console.log('✨ all done!')
})
