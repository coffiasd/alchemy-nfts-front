import { useMetaMask } from "metamask-react";
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
    const { account } = useMetaMask();

    return (
        <MDBCard>
            <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
            <MDBCardBody>
                <MDBRow>
                    <MDBCol className={styles.rowbtn} size='md'>
                        {account == null ? <MDBBtn rounded disabled>mint</MDBBtn> : <MDBBtn rounded>mint</MDBBtn>}
                    </MDBCol>
                    <MDBCol className={styles.rowbtn} size='md'>
                        {account == null ? <MDBBtn disabled rounded>train</MDBBtn> : <MDBBtn rounded>train</MDBBtn>}
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
        </MDBCard>
    )
}