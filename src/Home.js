import React, { useState } from "react";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { connectorsByName } from "./utils/web3React";
import { activeteWallet } from './utils/wallet';
import { useNFTsForAddress } from './hooks/useMorellis';

const Home = () => {
  const [card, setcard] = useState(false);
  const [translate, settranslate] = useState(false);
  const [show, setshow] = useState(false);

  const {
    activate,
  } = useWeb3React();
  const { account, chainId } = useWeb3React()
  const [nfts, setNFTs] = useNFTsForAddress();

  const slideIn = () => {

    if (card == false) {
      setcard(true);
    }
    if (card == true) {
      setcard(false);
    }


  };

  const start = () => {

    if (translate == false) {
      setTimeout(() => {
        setshow(true)
      }, 2000);
      settranslate(true)
    }
  };

  const back = () => {
    setTimeout(() => {
      setshow(false)

    }, 1000);
    if (translate == true) {
      settranslate(false)
    }

  };

  return (
    <>
      <img
        className="heroBg"
        src={process.env.PUBLIC_URL + "/Images/heroBg.png"}
        alt=""
      />

      {/* Hero Section  */}

      <section className="hero">
        <div className="flex">
          <div className="logo">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/logo.svg"}
              alt=""
            />
          </div>
          <div className="dev">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/Images/chevron.svg"}
                alt=""
              />
            </div>
            <div className="ml-4">
              <h4>Developer?</h4>
              <h4 className="bold">Add Proxy Support</h4>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="left col-lg-6 col-11">
            <h1>
              Protect your <br />
              <span className="gradient">digital assests</span> <br /> with a
              proxy wallet
            </h1>
            <p>
              With attacks on owners of valuable assets on the <br /> rise, our
              proxy wallets are designed to separate <br /> asset ownership from
              utility.
            </p>
            <button className="startedBtn" onClick={start}>
              Get Started
            </button>

            <div className="profit">
              <div>
                <img
                  src={process.env.PUBLIC_URL + "/Images/heart.svg"}
                  alt=""
                />
              </div>
              <h4>this is a non-profit project.</h4>
            </div>
          </div>
          <div className="right  col-lg-6 col-9">
            <div className="monkeyImg">
              <img src={process.env.PUBLIC_URL + "/Images/monkey.png"} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* List Section  */}

      <section className="listParent">
        <div className="lists">
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg1.png"}
              alt=""
            />
          </div>
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg2.png"}
              alt=""
            />
          </div>
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg3.png"}
              alt=""
            />
          </div>
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg4.png"}
              alt=""
            />
          </div>
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg5.png"}
              alt=""
            />
          </div>
          <div className="listContent">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg6.png"}
              alt=""
            />
          </div>
          <div className="listContent opti">
            <img
              className="logoimg"
              src={process.env.PUBLIC_URL + "/Images/listImg7.svg"}
              alt=""
            />
          </div>
        </div>
        <p>+ many more</p>
      </section>

      {/* wallet section  */}
      <section className="wallet">
        <div className="switch">
          <div>
            <input type="checkbox" id="toggle" onClick={slideIn} />
            <label for="toggle"></label>
          </div>
          <h3>
            <span className={`walletTxt ${card ? "gradient" : ""}`}>
              WITH PROXY WALLET
            </span>
          </h3>
        </div>
        <p className="para">
          With proxy your wallet never interacts with the website, <br /> we
          just point them to the location where your assets are stored
        </p>

        <div className="cards">
          {/* <img
            className={` cardsImg2 ${card ? "d-none" : ""}`}
            src={process.env.PUBLIC_URL + "/Images/cards2.png"}
            alt=""
          />
          <img
            className={`cardsImg ${card ? "" : "d-none"}`}
            src={process.env.PUBLIC_URL + "/Images/cards.png"}
            alt=""
          /> */}

          <div className={` compCard ${card ? "d-none" : ""}`}>
            <div className="card malCard">
              <img src={process.env.PUBLIC_URL + "/Images/bug.png"} alt="" />
              <p>Malicious Website</p>
            </div>
            <div className="card blurCard">
              <img src={process.env.PUBLIC_URL + "/Images/wallet.png"} alt="" />
              <p>Proxy Wallet</p>
            </div>
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/redWallet.png"}
                alt=""
              />
              <p>Your Valuable Wallet</p>
              <img
                className="lock"
                src={process.env.PUBLIC_URL + "/Images/warning.png"}
                alt=""
              />
            </div>
          </div>

          <div className={` compCard ${card ? "" : "d-none"}`}>
            <div className="card">
            <img className="line" src={process.env.PUBLIC_URL + "/Images/line.svg"} alt="" />
              <img src={process.env.PUBLIC_URL + "/Images/bug.png"} alt="" />
              <p>Malicious Website</p>
            </div>
            <div className="card proxy">
            <img className="dashLine" src={process.env.PUBLIC_URL + "/Images/dashLine.svg"} alt="" />
              <img src={process.env.PUBLIC_URL + "/Images/wallet.png"} alt="" />
              <p>Proxy Wallet</p>
            </div>
            <div className="card">
              <img
                src={process.env.PUBLIC_URL + "/Images/colorWallet.png"}
                alt=""
              />
              <p>Your Valuable Wallet</p>
              <img
                className="lock"
                src={process.env.PUBLIC_URL + "/Images/lock.svg"}
                alt=""
              />
            </div>
          </div>

        </div>
      </section>

      {/* footer style  */}

      <footer>
        <div className="needDiv">
          <h1 className="need">What you’ll need</h1>
          <button className="footerbtn">Get Started</button>
        </div>
        <div>
          <div className="faq">
            <h1>
              <span className="gradient">01</span>
            </h1>
            <p>
              Your wallet containing your tokens (signed in) to become your
              'ownership wallet'.
            </p>
          </div>
          <div className="faq">
            <h1>
              <span className="gradient">02</span>
            </h1>
            <p>
              The address of the wallet you want to use daily to become your
              'proxy wallet'
            </p>
          </div>
          <div className="faq">
            <h1>
              <span className="gradient">03</span>
            </h1>
            <p>
              A small amount of Eth to cover gas as a one-off. We don't add any
              commission
            </p>
          </div>
        </div>
      </footer>

      {/* slideIn section */}

      <section className={`row slider ${translate ? "comeIn" : ""} `}>
        <div className="blur col-lg-6">
          <div className={`dev dev2 ${show ? "d-none" : ""}`}>
            <div className="ml-4 ">
              <h4>Did you Know?</h4>
              <h5>
                Malicious transactions don't always involve paying gas. You can
                lose all your assets with just a signature, so be sure that
                every transaction that you sign is legitimate.
              </h5>
            </div>
          </div>
          <div className="dev dev3">
            <div>
              <img
                src={process.env.PUBLIC_URL + "/Images/chevron.svg"}
                alt=""
              />
            </div>
            <div className="ml-4">
              <h4>Developer?</h4>
              <h4 className="bold">Add Proxy Support</h4>
            </div>
          </div>
        </div>

        <div className="connectDiv col-lg-6 col-12">
          <div className="bar">
            {/* <img src={process.env.PUBLIC_URL + "/Images/bar.svg"} alt="" /> */}
            <div className="w-100">
              <ul className="progressbar">
                <li className="active"></li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className="margin">
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
                      <label>
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
            
            <div className="prev_next">

              <button className="back" onClick={back}> <i className="mr-3 fa fa-arrow-left" aria-hidden="true"></i>Back</button>
              <button className="Next">Next <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></button>

            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="my-3">
          <img
            className="logoimg"
            src={process.env.PUBLIC_URL + "/Images/logo2.svg"}
            alt=""
          />
        </div>
        <h3 className="text-center">Copyright © 2022 0xProxy. All Rights Reserved</h3>
      </section>
    </>
  );
};

export default Home;
