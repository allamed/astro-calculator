import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';
import Footer from "../components/footer";
import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCardImage,
    MDBCardTitle,
    MDBCol, MDBContainer,
    MDBRow
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import launch from "../assets/images/launch.svg";

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Ohh! Page introuvable</h3>
        <p>Nous n'arrivons pas à trouver la page que vous recherchez</p>
        <Link to='/'>Retour à l'accueil</Link>
      </div>
        <Footer/>
    </Wrapper>
  );
};
export default Error;



