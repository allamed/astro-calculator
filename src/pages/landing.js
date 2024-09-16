import main from "../assets/images/myster2.png";
import styled from "styled-components";
//import { Logo } from "../components";
import { Link } from "react-router-dom";
import "../index.css";
import {MDBBtn, MDBContainer, MDBFooter, MDBIcon} from "mdb-react-ui-kit";
import React from "react";
import Footer from "../components/footer";
const Landing = () => {
  return (
    <Wrapper>
      {/*<nav>
        <Logo />
      </nav>*/}
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
              Découvrez le visage de l’initiatrice secrète de votre
              vie: votre Lune Noire natale.
          </h1>
          <p>
              La Lune Noire est un portail de rencontre avec le Divin. Elle nous invite à une
              initiation profonde pour libérer les peurs qui nous coupent de la plus belle rencontre
              de notre vie. Elle est Déesse Sombre, Féminin Divin sacrifié. Elle est Celle qui nous
              attend depuis si longtemps et détient, pour chacun.e de nous, des trésors
              insoupçonnés…
              Êtes-vous prête.s à découvrir son influence sur votre vie ?          </p>

          <Link to="/calculator" className="btn btn-hero">
            Découvrir !
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" style={{width:"60%"}} />
      </div>
      <Footer/>
    </Wrapper>
  );
};
export const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -1rem;
  }
  h1 {
    font-weight: 800;
    
    font-family: quintessential;
    span {
      color: var(--primary-500);
    }
  }
  p {
    color: var(--grey-600);
  }
  .main-img {
    display: none;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
