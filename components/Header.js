import { MDBIcon } from 'mdb-react-ui-kit';
import Web3 from 'web3';
import React from 'react';
import Metamask from './Metamask';
import Link from 'next/link'
import Image from 'next/image'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Header() {
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
                    <Link className="navbar-brand mt-2 mt-lg-0" href="/">
                        <Image
                            src=""
                            // height="40"
                            // width="40"
                            alt="ayden"
                        />
                    </Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" href="/">Home|</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://twitter.com/coffiasse">twitter|</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="https://github.com/coffiasd">github</Link>
                        </li>
                    </ul>
                </div>

                <div className="">
                    <Metamask />
                </div>

            </div>
        </nav>
    );
}