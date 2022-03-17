import React, {useState, useEffect, Children} from 'react';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { connectorsByName } from "../utils/web3React";
import { activeteWallet } from '../utils/wallet';
import { useNFTsForAddress } from '../hooks/useMorellis';

const Step1 = ({setCompletedStep}) => {
  const {
    account, 
    chainId,
    activate,
    deactivate
  } = useWeb3React();
  const [nfts, setNFTs] = useNFTsForAddress();
  const [chainIcon, setChainIcon] = useState(process.env.PUBLIC_URL + "/Images/listImg1.png")

  console.log('chain id: ', chainId, typeof chainId)

  useEffect(() => {
    if (account) {
      setCompletedStep(1);
    }
  }, [account]);

  useEffect(() => {
    if (chainId) {
      switch(chainId) {
        case 1:
          setChainIcon(process.env.PUBLIC_URL + "/Images/listImg1.png")
          break;
        case 56:
          setChainIcon(process.env.PUBLIC_URL + "/Images/listImg3.png")
          break;
        case 97:
          setChainIcon(process.env.PUBLIC_URL + "/Images/listImg3.png")
          break;
      }
    }
  }, [chainId])

  return (
    <>
      <p className="step">Step 01</p>
      <h1>Connect Wallet</h1>
      <p className="para">
        Let's connect your ownership wallet that contains your tokens. 
        Make sure that your wallet is active on the blockchain 
        that you want to use (For example, Ethereum).
      </p>
      {
        account? 
          <>
            <div>
              <div className="walletinfo d-flex align-items-center">
                <div className="listContent">
                  <img
                    className="logoimg"
                    src={chainIcon}
                    alt=""
                  />
                </div>
                <div style={{'padding-left': '2rem'}}>
                  <p className="para mb-0 t-white">{account}</p>
                  <p className="para">Metamask</p>
                </div>
              </div>
              <button className="disableBtn w-100 mt-4" onClick={deactivate}>Disconnect Wallet</button>
            </div>
            <div>
              <p className="para">
                This wallet contains {nfts.length} sets of tokens:
              </p>
              <div className="lists w-100">
                {nfts.map((n, idx) => {
                  return (
                    <div className="listContent">
                      <img
                        className="logoimg"
                        src={chainIcon}
                        alt=""
                      />
                    </div>
                  )
                })}
                <div className="switch ml-auto">
                  <div>
                    <input type="checkbox" id="toggle2"/>
                    <label className="checkbox" for="toggle2"></label>
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