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
    account, 
    chainId,
    activate,
  } = useWeb3React();
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
              <div className="walletinfo d-flex">
                <div className="listContent">
                  <img
                    className="logoimg"
                    src={process.env.PUBLIC_URL + "/Images/listImg1.png"}
                    alt=""
                  />
                </div>
                <div>
                  <p className="para t-white">{account}</p>
                  <p>Metamask</p>
                </div>
              </div>
              <button className="disableBtn w-100 mt-4">Disconnect Wallet</button>
            </div>
            <div>
              <p className="para">
                This wallet contains {nfts.length} sets of tokens:
              </p>
              <div className="lists">
                {nfts.map((n, idx) => {
                  return (
                    <div className="listContent">
                      <img
                        className="logoimg"
                        src={process.env.PUBLIC_URL + "/Images/listImg1.png"}
                        alt=""
                      />
                    </div>
                  )
                })}
                <div className="switch ml-auto">
                  <div>
                    <input type="checkbox" id="toggle2"/>
                    <label for="toggle2"></label>
                  </div>
                  <h3>
                    <span className={`walletTxt`}>
                      Proxy All Tokens
                    </span>
                  </h3>
                </div>
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