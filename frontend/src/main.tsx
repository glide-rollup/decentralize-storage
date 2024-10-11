import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { Chain, configureChains, createClient, WagmiConfig } from 'wagmi';
import { ThemeProvider } from "@material-tailwind/react";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';
import { connectorsForWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { injectedWallet, metaMaskWallet } from "@rainbow-me/rainbowkit/wallets";
import { Provider } from "react-redux";
import store from "./store";

import '@rainbow-me/rainbowkit/styles.css'
import './assets/css/index.css'

const hyperspaceChain: Chain = {
  id: 30120706,
  name: 'Filecoin Hyperspace testnet',
  network: 'hyperspace',
  nativeCurrency: {
    decimals: 18,
    name: 'tFIL',
    symbol: 'tFIL',
  },
  rpcUrls: {
    default: {http: ["http://172.93.186.161:28545"]},
  },
  testnet: true,
}

const {chains, provider} = configureChains(
  [hyperspaceChain],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: chain.rpcUrls.default.http[0],
      }),
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
    <Provider store={store}>
      <ThemeProvider>
        <RainbowKitProvider modalSize="compact" chains={chains}>
          <App />
        </RainbowKitProvider>
      </ThemeProvider>
    </Provider>
  </WagmiConfig>
)
