import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Web3 from 'web3';
import React from 'react';
import styles from '../styles/Home.module.css'

export default function Header() {
    const [LoginAccount, setLoginAccount] = React.useState("")

    //connect to metemask event.
    const connect = async function (event) {
        if (!window.ethereum) {
            alert("install metemask first");
            return
        }

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.requestAccounts();
        setLoginAccount(accounts[0]);
    }

    //
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

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <a className="navbar-brand mt-2 mt-lg-0" href="/">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Marketing/general/logo/small/mdb-react.webp"
                            height="40"
                            alt="ayden"
                            loading="lazy"
                        />
                    </a>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><MDBIcon style={{ color: '#55acee' }} fab size='sm' icon='twitter' /> twitter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#"><MDBIcon fab style={{ color: '#000000' }} size='sm' icon='github' /> github</a>
                        </li>
                    </ul>
                </div>

                <div className="">
                    {LoginAccount ? fixAddress(LoginAccount) : <MDBBtn outline rounded onClick={connect}>Connect</MDBBtn>}
                </div>

            </div>
        </nav>
    );
}