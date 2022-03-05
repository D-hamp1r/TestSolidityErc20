import { ethers } from "ethers";
import { TOKEN_ADDRESS } from '../config';
import erc20abi from "../Contracts/token.json";


async function getMyBalance(): Promise<string> {
    debugger;
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const erc20 = new ethers.Contract(TOKEN_ADDRESS, erc20abi, provider);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const balance = await erc20.balanceOf(signerAddress);
    return balance;
};

async function handleTransfer(recipent: string, amount: any) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc20 = new ethers.Contract(TOKEN_ADDRESS, erc20abi, signer);
    const finalamount = (amount * 1000000000000000000).toString();
    await erc20.transfer(recipent, finalamount);
};


export { getMyBalance, handleTransfer }