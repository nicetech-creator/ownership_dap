import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useWeb3React } from "@web3-react/core";

import {ADDRESSES} from "../utils/constants"

export function useNFTsForAddress(wallet = null) {
  const [value, setValue] = useState([])
  const { account, chainId } = useWeb3React()

  useEffect(() => {
    if (wallet != null || account) {
      const res = axios.get(
        `https://deep-index.moralis.io/api/v2/${wallet? wallet : account}/nft?chain=0x61&format=decimal`, 
        {
          headers: {
            'accept': 'application/json',
            'X-API-Key': 'VfnKGDm49otZCsCi1hlLwY82d1Eqe91JoauiEeXnnHSUtixrp9hvDrLuVhoh56SB'
          }
        }
      ).then((response) => {
        let nftIDs = []
        response.data.result.forEach(i => {
          if (!nftIDs.includes(i.token_address)) {
            nftIDs.push(i.token_address)
          }
        })
        setValue(nftIDs)
      }).catch(error => {
        console.log(error)
      });
      
    }
  }, [account, chainId])

  return [value, setValue]
}