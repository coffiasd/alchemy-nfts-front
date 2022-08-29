import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBDropdownLink,
    MDBCollapse,
    MDBInputGroup,
    MDBIcon
} from 'mdb-react-ui-kit';
import Web3 from 'web3';
import React from 'react';
import Metamask from './Metamask';
import Link from 'next/link'
import Image from 'next/image'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

export default function Header() {
    const [showBasic, setShowBasic] = React.useState(false);

    return (
        <>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>
                        <Image
                            src="/1.jpg"
                            height="25"
                            width="50"
                            alt="ayden"
                        />
                    </MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls='navbarSupportedContent'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowBasic(!showBasic)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={showBasic}>
                        <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                            <MDBNavbarItem>
                                <MDBNavbarLink active aria-current='page' href='/'>
                                    Home
                                </MDBNavbarLink>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Twitter</MDBNavbarLink>
                            </MDBNavbarItem>

                            <MDBNavbarItem>
                                <MDBNavbarLink href='#'>Github</MDBNavbarLink>
                            </MDBNavbarItem>

                        </MDBNavbarNav>

                        <MDBInputGroup tag="form" className='d-flex w-auto'>
                            <Metamask />
                        </MDBInputGroup>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </>
    );
}