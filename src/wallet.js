// src/wallet.js
import { Connection, PublicKey, clusterApiUrl } from '@solana/web3.js';

const network = clusterApiUrl('devnet');
const connection = new Connection(network);

// Συνάρτηση για σύνδεση με πορτοφόλι Phantom
export const connectWallet = async () => {
  if (!window.solana) {
    alert('Please install a Solana wallet extension like Phantom.');
    return null;
  }

  try {
    const response = await window.solana.connect();
    const publicKey = response.publicKey.toString();
    console.log('Connected to wallet with address:', publicKey);
    return publicKey;
  } catch (error) {
    console.error('Wallet connection error:', error);
    return null;
  }
};

// Συνάρτηση για έλεγχο αν το πορτοφόλι είναι συνδεδεμένο
export const isWalletConnected = () => {
  return window.solana && window.solana.isConnected;
};
