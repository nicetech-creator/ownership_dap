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
  const [title, setTitle] = useState("Your Wallets");

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
      setTitle('Success!')
    } catch (error) {
      NotificationManager.error('Error message', error, 5000, () => {
        alert('callback');
      });
    } 
  }

  return (
    <>
      <p className="step">Step 03</p>
      <h1>{title}</h1>
      <p className="para">
        Check the details below are correct before signing the contract
      </p>
      <div className="form-group">
        <label for="ownerAddress">Ownership Wallet</label>
        <input className='cInput w-100 mb-4' id="ownerAddress" type="text" placeholder='Ownery Wallet Address' defaultValue={account}/>
      </div>
      <div className="form-group">
        <label for="proxyAddress">Proxy Wallet</label>
        <input className='cInput w-100 mb-4' id="proxyAddress" type="text" placeholder='Proxy Wallet Address' defaultValue={proxyAddress}/>
        <p className="para">
          Use the inputted wallet address instead of {account}.
        </p>
      </div>
      <button onClick={onSign} className='startedBtn'>Sign</button>
    </>
  )
}

export default Step3;