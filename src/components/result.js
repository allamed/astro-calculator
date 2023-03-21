import { Link } from 'react-router-dom';
import moon from "../assets/images/moon_image.webp";
import house from "../assets/images/house_image.webp";
import Wrapper from '../assets/wrappers/ErrorPage';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardFooter,
    MDBCardGroup
} from 'mdb-react-ui-kit';
import "../index.css";

const Result = ({moonTitle, moonContent, houseTitle, houseContent}) => {
    return (
        <div>


        <MDBCardGroup style={{margin:"5%"}}>
            <MDBCard style={{margin:"4%"}}>
                <MDBCardImage src={moon} alt='...' position='top' />
                <MDBCardBody>
                    <MDBCardTitle> Votre lune noir est dans le signe de {moonTitle} </MDBCardTitle>
                    <MDBCardText>
                        {moonContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>

            <MDBCard style={{margin:"4%"}}>
                <MDBCardImage src={house} alt='...' position='top' style={{height:"75%"}}/>
                <MDBCardBody>
                    <MDBCardTitle>Votre lune noire est en maison {houseTitle}</MDBCardTitle>
                    <MDBCardText>
                        {houseContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                </MDBCardFooter>
            </MDBCard>


        </MDBCardGroup>
        </div>
    );
};
export default Result;
