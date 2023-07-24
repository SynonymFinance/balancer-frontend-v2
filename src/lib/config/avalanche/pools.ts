import { BoostedProtocol } from '@/composables/useBoostedPool';
import { Pools } from '@/types/pools';

const pools: Pools = {
  IdsMap: {},
  Pagination: {
    PerPage: 10,
    PerPool: 10,
    PerPoolInitial: 5,
  },
  BoostsEnabled: false,
  DelegateOwner: '0xba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b',
  ZeroAddress: '0x0000000000000000000000000000000000000000',
  DynamicFees: {
    Gauntlet: [],
  },
  BlockList: [''],
  IncludedPoolTypes: ['Weighted', 'Stable', 'MetaStable'],
  Stable: {
    AllowList: [
      '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
      '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
      '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
      '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
      '0x670734d704eb7ef424d75321670f921fbf42e9cf000000000000000000000016', // sAVAX-ankrAVAX
    ],
  },
  Investment: {
    AllowList: [''],
  },
  Weighted: {
    // Only effective after given timestamp here: usePool.ts#createdAfterTimestamp
    // see useDisabledJoinPool.ts#nonAllowedWeightedPoolAfterTimestamp for logic.
    AllowList: [
      '0xe4a4565ad31a3af8286bc6e6dbb20ba76752557700010000000000000000000b',
      '0x3bde1563903ebb564ca37d5736afbb850929cfd7000200000000000000000017', // ankrAVAX-ankrETH
    ],
  },
  Factories: {
    '0x230a59f4d9adc147480f03b0d3fffecd56c3289a': 'weightedPool',
    '0x3b1eb8eb7b43882b385ab30533d9a2bef9052a98': 'composableStablePool',
    '0xe42ffa682a26ef8f25891db4882932711d42e467': 'composableStablePool',
  },
  Stakable: {
    VotingGaugePools: [],
    AllowList: [],
  },
  Metadata: {
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012': {
      name: 'Balancer Boosted Aave v3 USD',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013': {
      name: 'sAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014': {
      name: 'yyAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015': {
      name: 'ggAVAX/Boosted Aave v3 WAVAX',
      hasIcon: false,
      boosted: true,
      boostedProtocols: [BoostedProtocol.Aave],
    },
  },
  Deep: [
    '0xa1d14d922a575232066520eda11e27760946c991000000000000000000000012', // Boosted Aave v3 USD
    '0xa154009870e9b6431305f19b09f9cfd7284d4e7a000000000000000000000013', // sAVAX/Boosted Aave v3 WAVAX
    '0xece571847897fd61e764d455dc15cf1cd9de8d6f000000000000000000000014', // yyAVAX/Boosted Aave v3 WAVAX
    '0x054e7b0c73e1ee5aed6864fa511658fc2b54bcaa000000000000000000000015', // ggAVAX/Boosted Aave v3 WAVAX
  ],
  BoostedApr: [],
  DisabledJoins: [],
  Deprecated: {},
  GaugeMigration: {},
  BrandedRedirect: {},
  Issues: {},
};

export default pools;
