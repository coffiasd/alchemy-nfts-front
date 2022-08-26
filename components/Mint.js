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

export default function Minter() {
    return (
        <div>
            <MDBCard>
                <MDBCardImage src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                <MDBCardBody>
                    {/* <MDBCardTitle className={styles.rowbtn}>THIS IS YOUR MINTED NFTs.</MDBCardTitle> */}
                    <MDBRow>
                        <MDBCol className={styles.rowbtn} size='md'>
                            <MDBBtn rounded>mint</MDBBtn>
                        </MDBCol>
                        <MDBCol className={styles.rowbtn} size='md'>
                            <MDBBtn disabled rounded>train</MDBBtn>
                        </MDBCol>
                    </MDBRow>

                </MDBCardBody>
            </MDBCard>
        </div>

    );
}