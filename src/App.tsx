import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Typography, Grid, Paper, TextField } from '@mui/material';
import { BuyTokens, WithDrawTokens, getMyBalance, handleTransfer } from './Transactions';

function App() {

  const [amount, setAmount] = useState("");
  const [balance, setBalance] = useState("");
  const [transferaddress, setTransferAddress] = useState("");
  const [transferamount, setTransferAmount] = useState("");

  async function Balance() {
    const balance_ = await getMyBalance();
    setBalance(balance_.toString());
  }

  return (
    <div style={{ marginTop: 20 }}>
      <Grid container justifyContent={"center"}>
        <Grid xl={6} lg={7} md={8} sm={9} xs={10}>
          <Paper style={{ padding: 30, textAlign: "center" }}>
            <Typography style={{ whiteSpace: "nowrap" }}>Buy Tokens (1 ETH = 100 Tokens)</Typography>
            <br></br>
            <TextField type={"number"} value={amount} label="Enter Ether" onChange={(e) => setAmount(e.target.value)} />
            <Button variant="contained" style={{ height: 55 }} onClick={() => BuyTokens(amount)}>Buy</Button>
            <br></br><br></br>
            <Typography style={{ whiteSpace: "nowrap" }}>Withdraw</Typography>
            <Button variant="contained" onClick={() => WithDrawTokens()}>Withdraw</Button>
          </Paper>
        </Grid>
      </Grid>
      <br></br>
      <Grid container justifyContent={"center"}>
        <Grid xl={6} lg={7} md={8} sm={9} xs={10}>
          <Paper style={{ padding: 30, textAlign: "center" }}>
            <Typography style={{ whiteSpace: "nowrap" }}>Check Balance</Typography>
            <br></br>
            <TextField value={transferaddress} label="Transfer Address" onChange={(e) => setTransferAddress(e.target.value)} />
            <TextField type={"number"} value={transferamount} label="Tokens" onChange={(e) => setTransferAmount(e.target.value)} />

            <Button variant="contained" style={{ height: 55 }} onClick={() => handleTransfer(transferaddress, transferamount)}>Transfer</Button>
            <br></br><br></br>
            <Typography style={{ whiteSpace: "nowrap" }}>Balance: {balance}</Typography>
            <Button variant="contained" onClick={() => Balance()}>Check Balance</Button>
          </Paper>
        </Grid>

      </Grid>
    </div>
  );
}

export default App;
