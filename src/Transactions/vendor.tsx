import { ethers } from 'ethers'
import { VENDOR_ADDRESS } from '../config';

import Vendorabi from "../Contracts/vendor.json";

declare global {
    interface Window {
        ethereum: any;
    }
}

const BuyTokens = async (Amount: string) => {
    debugger;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const vendor = new ethers.Contract(VENDOR_ADDRESS, Vendorabi, signer);
    //await vendor.buyTokens()
    const amount = ethers.utils.parseEther(Amount);
    const result = await vendor.connect(signer).buyTokens({
        value: amount,
    });
}

const WithDrawTokens = async () => {
    debugger;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const vendor = new ethers.Contract(VENDOR_ADDRESS, Vendorabi, signer);
    await vendor.connect(signer).withdraw();
}

export { BuyTokens, WithDrawTokens }