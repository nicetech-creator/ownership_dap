import React, { useState } from "react";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";

import { connectorsByName } from "./utils/web3React";
import { activeteWallet } from './utils/wallet';
import { useNFTsForAddress } from './hooks/useMorellis';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';

const Home = () => {
  const [card, setcard] = useState(false);
  const [translate, settranslate] = useState(false);
  const [show, setshow] = useState(false);
  const [step, setStep] = useState(1);

  const [walletAddress, setWalletAddress] = useState("")
  const [mnemonic, setMnemonic] = useState("")

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

  const renderStep = () => {
    switch(step) {
      case 1:
        return <Step1 />
      case 2:
        return (
          <Step2
            walletAddress={walletAddress}
            mnemonic={mnemonic}
            setWalletAddress={setWalletAddress} 
            setMnemonic={setMnemonic}
          />
        ) 
      case 3:
        return (
          <Step3
            proxyAddress={walletAddress}
            nfts={nfts}
          />
        )
      default:
        return <Step1/>
    }
  }

  const nextStep = () => {
    if (step < 3) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
    else {
      back();
    }
  }

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
        <div className="lists w-75">
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
            <label className="checkbox" for="toggle"></label>
          </div>
          <h3>
            <span className={`walletTxt ${card ? "gradient" : ""}`}>
              WITH PROXY WALLET
            </span>
          </h3>
        </div>
        <p className="para">
          With 0xProxy your valuable wallet never actually interacts with the website, <br/> 
          they can just view the location where your assets are stored which is sufficient to verify ownership.
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
          <button className="footerbtn" onClick={start}>Get Started</button>
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
        <div className="blur col-lg-6" onClick={back}>
          <div className={`dev dev2`}>
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
            { renderStep() }
            
            <div className="prev_next">

              <button className="back" onClick={prevStep}> <i className="mr-3 fa fa-arrow-left" aria-hidden="true"></i>Back</button>
              <button className="Next" onClick={nextStep}>Next <i className="fa fa-arrow-right ml-3" aria-hidden="true"></i></button>

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
