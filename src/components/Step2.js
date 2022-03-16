import React, {useState} from 'react';

import { ethers } from "ethers";

const Step2 = ({
  walletAddress,
  mnemonic,
  setWalletAddress,
  setMnemonic
}) => {
  const generateNewWallet = () => {
    const newWallet = ethers.Wallet.createRandom()
    console.log('newWalelt: ', newWallet)
    setWalletAddress(newWallet.address)
    setMnemonic(newWallet.privateKey)
  }

  return (
    <>
      <p className="step">Step 02</p>
      <h1>Generate Wallet</h1>
      <p className="para">
        In this step, we will create a new empty wallet that will be your proxy 
        wallet. We generate a new address for you offline (we don't have access
        to it) so make sure you save your address and recovery key somewhere. 
        Alternatively, you can skip the wallet generation and input your own
        wallet address. If you lose access to this wallet, you will have to
        pay gas again to revoke access and assign a new proxy wallet to your
        tokens. But at least that's better than losing your tokens!
      </p>
      <input className='cInput w-100 mb-4' type="text" placeholder='Proxy Wallet Address' defaultValue={walletAddress}/>
      <textarea className='cInput w-100 mb-4' rows={3} placeholder="Private Key" defaultValue={mnemonic} />
      <button onClick={generateNewWallet} className='startedBtn'>Generate Wallet</button>
    </>
  )
}

export default Step2;