import React, {useState} from 'react';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import { NotificationManager } from 'react-notifications';

import { useContract } from "../hooks/contractCore"

import {ADDRESSES} from "../utils/constants"
import UserShipABI from "../utils/abis/usership.json"

const Step3 = ({
  proxyAddress,
  nfts
}) => {
  const { account, chainId } = useWeb3React()

  const useshipCtr = useContract({
    abi: UserShipABI,
    address: ADDRESSES.OWNERSHIP_MNG
  })

  const onSign = async () => {
    try {
      let tx = await useshipCtr.setUsership(true, proxyAddress, nfts);
      NotificationManager.success('Transaction Pending', tx.hash);
      await tx.wait();
      NotificationManager.success('Transaction Confirmed', tx.hash);
    } catch (error) {
      NotificationManager.error('Error message', error, 5000, () => {
        alert('callback');
      });
    } 
  }

  return (
    <>
      <p className="step">Step 03</p>
      <h1>Success!</h1>
      <p className="para">
        Your proxy wallet is created. You can now use this wallet to connect 
        to supported projects without needing to touch your ownership wallet. 
        If a project does not support proxy, but you think they should, please 
        let them know. Integrating our platform takes just a few lines of code.
      </p>
      <div className="form-group">
        <label for="ownerAddress">Ownership Wallet</label>
        <input className='cInput w-100 mb-4' id="ownerAddress" type="text" placeholder='Ownery Wallet Address' defaultValue={account}/>
      </div>
      <div className="form-group">
        <label for="proxyAddress">Proxy Wallet</label>
        <input className='cInput w-100 mb-4' id="proxyAddress" type="text" placeholder='Proxy Wallet Address' defaultValue={proxyAddress}/>
        <p className="para">
          Your proxy wallet points to the address 0x2345u23bjh243jh52345 and has permission to access all tokens.
        </p>
      </div>
      <button onClick={onSign} className='startedBtn'>Sign</button>
    </>
  )
}

export default Step3;