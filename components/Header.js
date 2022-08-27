import { MDBBtn, MDBIcon, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import Web3 from 'web3';
import React from 'react';
import styles from '../styles/Home.module.css'
import { MetaMaskProvider } from 'metamask-react';
import Metmask from './Metamask';

export default function Header() {
    const [LoginAccount, setLoginAccount] = React.useState("")

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
                    <MetaMaskProvider>
                        <Metmask />
                    </MetaMaskProvider>
                </div>

            </div>
        </nav>
    );
}