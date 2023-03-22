import React from "react";
import {MDBBtn, MDBContainer, MDBFooter, MDBIcon} from "mdb-react-ui-kit";

const Footer = () => {
    return <MDBFooter className='bg-dark text-center text-white' style={{marginTop:"5%"}}>
        <MDBContainer className='p-4 pb-0'>
            <section className='mb-4'>
                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>
                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='instagram' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='linkedin-in' />
                </MDBBtn>

                <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </section>
        </MDBContainer>

        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
            © 2023
            <a className='text-white' href='https://mdbootstrap.com/'>

            </a>
        </div>
    </MDBFooter>;
};
export default Footer;