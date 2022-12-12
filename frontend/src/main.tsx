import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import '@rainbow-me/rainbowkit/styles.css'
import './assets/css/index.css'

import {configureChains, createClient, WagmiConfig} from 'wagmi';
import {ThemeProvider} from "@material-tailwind/react";
import {jsonRpcProvider} from 'wagmi/providers/jsonRpc';
import {connectorsForWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {injectedWallet, metaMaskWallet} from "@rainbow-me/rainbowkit/wallets";

const wallabyChain = {
  id: 31415,
  name: 'Filecoin Wallaby',
  network: 'wallaby',
  nativeCurrency: {
    decimals: 18,
    name: 'tFIL',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: "https://wallaby.node.glif.io/rpc/v0",
  },
  testnet: true,
}

const {chains, provider} = configureChains(
  [wallabyChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default
      })
    }),
  ]
);

const connectors = connectorsForWallets([
  {
    groupName: 'vStorage',
    wallets: [
      injectedWallet({chains}),
      metaMaskWallet({chains}),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <WagmiConfig client={wagmiClient}>
    <ThemeProvider>
      <RainbowKitProvider modalSize="compact" chains={chains}>
        <App/>
      </RainbowKitProvider>
    </ThemeProvider>
  </WagmiConfig>
)
