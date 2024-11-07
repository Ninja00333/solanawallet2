import React, { useState, useEffect } from 'react';
import { connectWallet, isWalletConnected } from './wallet';
import './App.css'; // Βεβαιώσου ότι το CSS αρχείο είναι σωστά συνδεδεμένο

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  // Συνάρτηση για το κουμπί σύνδεσης
  const handleConnectWallet = async () => {
    const address = await connectWallet();
    if (address) {
      setWalletAddress(address); // Αποθηκεύει τη διεύθυνση του πορτοφολιού
    }
  };

  // Έλεγχος για να συνδέεται αυτόματα αν το πορτοφόλι είναι ήδη συνδεδεμένο
  useEffect(() => {
    if (isWalletConnected()) {
      handleConnectWallet();
    }
  }, []);

  return (
    <div>
      <div className="connect-button-container">
        {!walletAddress ? (
          <button className="connect-button" onClick={handleConnectWallet}>
            {/* Η εικόνα του Solana δίπλα από το κείμενο */}
            <img
              src="/solana.png" // Φρόντισε να τοποθετήσεις την εικόνα στο φάκελο public
              alt="Solana Logo"
              className="button-icon"
            />
            Connect Wallet
          </button>
        ) : (
          <button onClick={handleConnectWallet}>
          <img
            src="/solana.png"  // Διαδρομή εικόνας
            alt="Solana Logo"
            className="button-icon"
          />
          {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)} {/* Εμφανίζουμε μόνο την αρχή και το τέλος της διεύθυνσης */}
        </button>
        )}
      </div>
    </div>
  );
}

export default App;
