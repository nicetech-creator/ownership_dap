import React, {useState} from 'react';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { connectorsByName } from "../utils/web3React";
import { activeteWallet } from '../utils/wallet';
import { useNFTsForAddress } from '../hooks/useMorellis';

const Step1 = ({}) => {
  const {
    activate,
  } = useWeb3React();
  const { account, chainId } = useWeb3React()
  const [nfts, setNFTs] = useNFTsForAddress();
  return (
    <>
      <p className="step">Step 01</p>
      <h1>Connect Wallet</h1>
      <p className="para">
        First we need to connect your ownership wallet that contains your
        tokens. We need this to create a contract in the blockchain that
        points to your proxy wallet. This is a one-off to create the proxy
        wallet. Once you have done this, you won't have to use your
        valuable ownership wallet for supported projects.
      </p>
      {
        account? 
          <>
            <div>
              <div className="gradient">
                <p className="para">{account}</p>
                <p>Metamask</p>
              </div>
              <button className="startedBtn">Disconnect Wallet</button>
            </div>
            <div>
              <p className="para">
                This wallet contains {nfts.length} sets of tokens:
              </p>
              <div className='row justify-content-start'>
                {nfts.map((n, idx) => {
                  return (
                    <div key={idx} className="col-lg-3">
                      <p>Icon</p>
                    </div>
                  )
                })}
                <label className='ml-auto'>
                  <input
                    type="checkbox"
                  />
                  Proxy All Tokens
                </label>
              </div>
            </div>
          </>
            : 
          <button className="startedBtn" onClick={() => {console.log('clicked'); activeteWallet(activate)}}>Connect Wallet</button>
      }
    </>
  )
}

export default Step1;