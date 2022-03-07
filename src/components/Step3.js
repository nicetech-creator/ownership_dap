import React, {useState} from 'react';
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { useContract } from "../hooks/contractCore"

import {ADDRESSES} from "../utils/constants"
import UserShipABI from "../utils/abis/usership.json"

const Step3 = ({
  proxyAddress
}) => {
  const { account, chainId } = useWeb3React()

  const useshipCtr = useContract({
    abi: UserShipABI,
    address: ADDRESSES.OWNERSHIP_MNG
  })

  const onSign = async () => {
    try {
      let tx = await useshipCtr.setUsership(true, proxyAddress, []);
      // NotificationManager.success('Transaction Pending', tx.hash);
      await tx.wait();
      // NotificationManager.success('Transaction Confirmed', tx.hash);
    } catch (error) {
      // NotificationManager.error('Error message', error, 5000, () => {
      //   alert('callback');
      // });
    } 
  }

  return (
    <>
      <p className="step">Step 03</p>
      <h1>Your Wallets</h1>
      <p className="para">
        Please ensure that these wallet addresses are correct and that you have access
        to both in your preferred wallet app or extension(s). Although everything can
        be reversed, it will save you hassle and Eth to get it right!
      </p>
      <button onClick={onSign}>Sign</button>
    </>
  )
}

export default Step3;