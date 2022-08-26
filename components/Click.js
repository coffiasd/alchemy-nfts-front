import {
    MDBBtn,
} from 'mdb-react-ui-kit';

export default function Click() {
    return (
        <div>
            <div className="col-md-12">
                <div className='d-flex justify-content-center'>
                    <MDBBtn href='/mint' rounded>Click to Mint</MDBBtn>
                </div>
            </div>
        </div>
    );
}