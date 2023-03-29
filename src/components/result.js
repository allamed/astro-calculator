import { Link } from 'react-router-dom';
import moon from "../assets/images/moon_image.webp";
import background from "../assets/images/10777684.jpg";
import house from "../assets/images/house_image.webp";
import Wrapper from '../assets/wrappers/ErrorPage';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup, MDBRow, MDBCol, MDBCardOverlay, MDBCardHeader, MDBTypography, MDBFooter, MDBContainer, MDBBtn, MDBIcon
} from 'mdb-react-ui-kit';
import "../index.css";
import React from "react";
import Footer from "./footer";

const Result = ({moonTitle, moonContent, houseTitle, houseContent, houseImg, moonImg}) => {

    return (
        <div>
            {/*<MDBCard style={{marginTop:"1%", marginLeft:"4%", marginRight:"5%", backgroundColor:"#f1f2f6"}}>
                <MDBCardHeader>Quote</MDBCardHeader>
                <MDBCardBody>
                    <MDBTypography style={{width:"100%"}} >
                        <p >The Moon is the mistress of all liquid nature and rules the heights and tides of the heavenly bodies. The Moon also governs the domestic life, the home, and the emotions, and its influence is felt strongly in the fourth house of the horoscope.</p>
                        <footer className='blockquote-footer'>
                            Linda Goodman
                        </footer>
                    </MDBTypography>
                </MDBCardBody>
            </MDBCard>*/}


        <MDBCardGroup >
            <MDBCard style={{marginLeft:"4%", marginRight:"4%", marginTop:"1%"}}>
                {/*<MDBCardImage src={moon} alt='...' position='top' />*/}

                <MDBCardBody>
                    {/*<MDBRow style={{marginBottom:"1%"}}>
                        <MDBCol md="2">
                            <img src={moonImg} alt=""/>
                        </MDBCol>
                        <MDBCol md="10" style={{marginTop:"3%"}}>*/}
                            <MDBCardTitle style={{color:"#5f27cd", fontSize:"x-large"}}>Votre lune noire est {moonTitle.slice(6)}</MDBCardTitle>
                        {/*</MDBCol>
                    </MDBRow>*/}
                    <MDBCardText className="text-justify">
                        {moonContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>{moonTitle.slice(9)}</small>
                </MDBCardFooter>
            </MDBCard>

            <MDBCard style={{marginLeft:"1%", marginRight:"4%", marginTop:"1%"}}>
                {/*<MDBCardImage src={ house} alt='...' position='top' style={{width:"99%"}}/>*/}
                <MDBCardBody>
                   {/* <MDBRow style={{marginBottom:"1%"}}>
                        <MDBCol md="2">
                            <img src={houseImg} alt=""/>
                        </MDBCol>
                        <MDBCol md="10" style={{marginTop:"3%"}}>*/}
                            <MDBCardTitle style={{color:"#5f27cd", fontSize:"x-large"}}>Votre lune noire est {houseTitle.slice(6)}</MDBCardTitle>
                        {/*</MDBCol>
                    </MDBRow>*/}



                    <MDBCardText>
                        {houseContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>{houseTitle}</small>
                </MDBCardFooter>
            </MDBCard>


        </MDBCardGroup>
        <Footer/>
        </div>
    );
};
export default Result;
