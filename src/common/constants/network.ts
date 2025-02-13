import { ChainID } from '@stacks/transactions';
import { NetworkModes } from '@common/types/network';
import { DEFAULT_MAINNET_SERVER, DEFAULT_TESTNET_SERVER } from '@common/constants';

export const NetworkIdModeMap: { [key in ChainID]: NetworkModes } = {
  [ChainID.Mainnet]: NetworkModes.Mainnet,
  [ChainID.Testnet]: NetworkModes.Testnet,
};

export const NetworkModeUrlMap: Record<NetworkModes, string> = {
  [NetworkModes.Mainnet]: DEFAULT_MAINNET_SERVER,
  [NetworkModes.Testnet]: DEFAULT_TESTNET_SERVER,
};

export const CustomNetworksLSKey = 'CustomNetworks';
