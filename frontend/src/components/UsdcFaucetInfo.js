import React from "react";
import "../styles/UsdcFaucetInfo.css";

function PyusdFaucetInfo() {
  return (
    <div className="pyusd-faucet-info">
      <h2>Get USDC on Sepolia Testnet</h2>

      <div className="info-card">
        <div className="info-section">
          <h3>What is USDC?</h3>
          <p>
            USDC (USD Coin) is a fully-backed stablecoin pegged to the US
            dollar. For this testnet version, you'll need to get test USDC to
            interact with the lottery.
          </p>
        </div>

        <div className="info-section">
          <h3>Steps to Get Test USDC</h3>
          <ol className="steps-list">
            <li>
              <span className="step-number">1</span>
              <div className="step-content">
                <h4>Get Sepolia Testnet ETH</h4>
                <p>
                  First, you need Sepolia ETH to pay for transaction fees. Get
                  it from:
                </p>
                <ul>
                  <li>
                    <a
                      href="https://cloud.google.com/application/web3/faucet/ethereum/sepolia"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google Cloud Sepolia Faucet
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://sepoliafaucet.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Sepolia Faucet
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <span className="step-number">2</span>
              <div className="step-content">
                <h4>Get Test USDC</h4>
                <p>Use the official Paxos USDC faucet to get test tokens:</p>
                <a
                  href="https://faucet.circle.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="faucet-button"
                >
                  Visit Circle USDC Faucet
                </a>
                <p className="note">
                  Note: You may need to connect your wallet on the Circle faucet
                  website to receive test USDC tokens.
                </p>
              </div>
            </li>

            <li>
              <span className="step-number">3</span>
              <div className="step-content">
                <h4>Add USDC to MetaMask</h4>
                <p>Add the USDC token to your wallet:</p>
                <div className="token-details">
                  <div className="detail-item">
                    <span className="detail-label">Token Address:</span>
                    <span className="detail-value">
                      0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238
                    </span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Token Symbol:</span>
                    <span className="detail-value">USDC</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Decimals:</span>
                    <span className="detail-value">6</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Network:</span>
                    <span className="detail-value">Sepolia</span>
                  </div>
                </div>
                <button
                  className="add-token-button"
                  onClick={() => {
                    window.ethereum.request({
                      method: "wallet_watchAsset",
                      params: {
                        type: "ERC20",
                        options: {
                          address: "0x1c7D4B196Cb0C7B01d743Fbc6116a902379C7238",
                          symbol: "USDC",
                          decimals: 6,
                          image:
                            "https://etherscan.io/token/images/paypalusd_32.png",
                        },
                      },
                    });
                  }}
                >
                  Add to MetaMask
                </button>
              </div>
            </li>
          </ol>
        </div>
      </div>

      <div className="disclaimer">
        <h3>Important Note</h3>
        <p>
          This is for testnet purposes only. These are not real USDC tokens and
          have no monetary value.
        </p>
      </div>
    </div>
  );
}

export default PyusdFaucetInfo;
