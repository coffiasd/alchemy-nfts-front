import { useMetaMask } from "metamask-react";
import styles from '../styles/Home.module.css'
import { MDBBtn, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Metmask() {
    const { status, connect, account } = useMetaMask();

    const fixAddress = function (address) {
        return (
            <div className={styles.address}>
                <MDBRow>
                    <MDBCol size='md'>
                        <MDBIcon fab icon="app-store" style={{ color: '#55acee' }} size="lg" />
                    </MDBCol>
                    <MDBCol size='md'>
                        0x12****21f6
                    </MDBCol>
                </MDBRow>

            </div >
        );
    }

    if (status === "initializing") return <div>Synchronisation with MetaMask ongoing...</div>

    if (status === "unavailable") return <div>MetaMask not available :(</div>

    if (status === "notConnected") return <MDBBtn outline rounded onClick={connect}>Connect</MDBBtn>

    if (status === "connecting") return <div>Connecting...</div>

    if (status === "connected") return <div>{fixAddress(account)}</div>

    return null;
}