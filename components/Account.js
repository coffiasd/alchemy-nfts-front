import { useMetaMask } from "metamask-react";
import Web3 from 'web3';
import mintJSON from '../utils/mint.json';
import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';
import styles from '../styles/Home.module.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Account() {
    const [Mint, setMint] = React.useState(0);
    const [Default, setDefault] = React.useState("./default.svg");
    const contractAddress = "0x597b350845a67941427f56c374d2c78d811d59fe";
    const { account } = useMetaMask();

    const web3provider = new Web3(window.ethereum);
    var web3 = new Web3(web3provider);
    const connectedContract = new web3.eth.Contract(mintJSON.abi, contractAddress);
    // console.log(mintJSON.abi);

    if (account != null) {
        connectedContract.methods.addressToTokenId(account).call().then(function (r) {
            console.log(r);
            setMint(r);
        });
    }

    const mint = async (event) => {
        const m = await connectedContract.methods.mint().send({ from: account });
        console.log(m);
    }

    const train = async (event) => {
        const t = await connectedContract.methods.train(web3.utils.BN(Mint)).send({ from: account });
        console.log(t);
    }

    React.useEffect(() => {
        console.log(Mint, account);
        if (Mint == 0) {
            setDefault("./default.svg");
            return
        }
        connectedContract.methods.tokenURI(web3.utils.BN(Mint)).call({ from: account }).then(function (info) {
            const base64Img = info.substring(29);
            var jsonObj = JSON.parse(atob(base64Img));
            setDefault(jsonObj.image);
        })
    }, [Mint, account])

    return (
        <MDBCard>
            <MDBCardImage src={Default} position='top' alt='...' />
            <MDBCardBody>
                <MDBRow>
                    <MDBCol className={styles.rowbtn} size='md'>
                        {account != null && Mint == "0" ? <MDBBtn rounded onClick={mint}>mint</MDBBtn> : <MDBBtn rounded disabled>mint</MDBBtn>}
                    </MDBCol>
                    <MDBCol className={styles.rowbtn} size='md'>
                        {account != null && Mint != 0 ? <MDBBtn rounded onClick={train}>train</MDBBtn> : <MDBBtn rounded disabled>train</MDBBtn>}
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}