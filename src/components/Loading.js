import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardHeader, MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer, MDBFooter, MDBIcon,
  MDBRow
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import launch from "../assets/images/launch.svg";
import React from "react";

const Loading = ({ center }) => {
  return <div className={center ? 'loading loading-center' : 'loading'}></div>;
};
export default Loading;






