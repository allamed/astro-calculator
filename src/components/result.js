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
import moonx from "../assets/images/MOON3.svg"
import book from "../assets/images/undraw_book_lover_re_rwjy.svg"

const Result = ({moonTitle, moonContent, houseTitle, houseContent, houseImg, moonImg}) => {

    if (moonTitle.toUpperCase().includes("TAUREAU")) {
        moonTitle = "Votre lune noire est en Taureau : Mémoires de Circé";
        moonContent = "Blessure de possessivité.";
    }
    if (moonTitle.toUpperCase().includes("BELIER")) {
        moonTitle = "Votre lune noire est en Bélier : mémoires de Kali";
        moonContent = "Blessure de possessivité.";
    }
    if (moonTitle.toUpperCase().includes("GÉMEAUX")) {
        moonTitle = "Votre lune noire est en Gémeaux : Mémoires d’Écho";
        moonContent = "Blessure d’intégration sociale.";
    }
    if (moonTitle.toUpperCase().includes("CANCER")) {
        moonTitle = "Votre lune noire est en Cancer : Mémoires de La Llorona";
        moonContent = "Blessure d’abandon.";
    }
    if (moonTitle.toUpperCase().includes("LION")) {
        moonTitle = "Votre lune noire est en Lion : Mémoires de Niobé";
        moonContent = "Blessure de non-reconnaissance.";
    }
    if (moonTitle.toUpperCase().includes("VIERGE")) {
        moonTitle = "Votre lune noire est en Vierge : Mémoires d’Électre";
        moonContent = "Blessure de sacrifice.";
    }
    if (moonTitle.toUpperCase().includes("BALANCE")) {
        moonTitle = "Votre lune noire est en Balance : Mémoires d’Hélène";
        moonContent = "Blessure de dépendance affective.";
    }
    if (moonTitle.toUpperCase().includes("SCORPION")) {
        moonTitle = "Votre lune noire est en Scorpion : Mémoires de Médée";
        moonContent = "Blessure de prise de pouvoir sur l’autre.";
    }
    if (moonTitle.toUpperCase().includes("SAGITTAIRE")) {
        moonTitle = "Votre lune noire est en Sagittaire : Mémoires de Penthésilée";
        moonContent = "Blessure de fanatisme.";
    }
    if (moonTitle.toUpperCase().includes("CAPRICORNE")) {
        moonTitle = "Votre lune noire est en Capricorne : Mémoires d’Andromaque";
        moonContent = "Blessure d’intolérance.";
    }
    if (moonTitle.toUpperCase().includes("VERSEAU")) {
        moonTitle = "Votre lune noire est en Verseau : Mémoires de Cassandre";
        moonContent = "Blessure d’exclusion.";
    }
    if (moonTitle.toUpperCase().includes("POISSONS")) {
        moonTitle = "Votre lune noire est en Poissons : Mémoires d’Ophélie";
        moonContent = "Blessure de paranoïa.";
    }

    if (houseTitle.includes("Ie ") || houseTitle.includes("1")) {
        houseContent = "Interdit d’affirmation de soi.";
    }
    if (houseTitle.includes("IIe ") || houseTitle.includes("2")) {
        houseContent = "Interdit de valorisation de soi.";
    }

    if (houseTitle.includes("IIIe ") || houseTitle.includes("3")) {
        houseContent = "Interdit de communication.";
    }

    if (houseTitle.includes("IVe ") || houseTitle.includes("4")) {
        houseContent = "Interdit de fonder sa famille.";
    }

    if (houseTitle.includes("Ve ") || houseTitle.includes("5")) {
        houseContent = "Interdit du plaisir.";
    }

    if (houseTitle.includes("VIe ") || houseTitle.includes("6")) {
        houseContent = "Interdit de se sentir utile.";
    }

    if (houseTitle.includes("VIIe ") || houseTitle.includes("7")) {
        houseContent = "Interdit du partage avec l’autre.";
    }

    if (houseTitle.includes("VIIIe ") || houseTitle.includes("8")) {
        houseContent = "Interdit de la guérison des traumas.";
    }

    if (houseTitle.includes("IXe ") || houseTitle.includes("9")) {
        houseContent = "Interdit de légitimité.";
    }

    if (houseTitle.includes("Xe ") || houseTitle.includes("10")) {
        houseContent = "Interdit d’ambition.";
    }

    if (houseTitle.includes("XIe ") || houseTitle.includes("11")) {
        houseContent = "Interdit d’originalité.";
    }

    if (houseTitle.includes("XIIe ") || houseTitle.includes("12")) {
        houseContent = "Interdit d’Amour inconditionnel.";
    }







    return (
        <>
            <MDBRow  className="justify-content-center" style={{marginLeft:"1%", marginRight:"2%", marginTop:"3%"}}>

                <MDBCol md="5" style={{marginRight:"2%"}}>


                    <MDBCard style={{backgroundColor:"#152235"}} >
                       <MDBCardImage src={moonx}/>


                    </MDBCard>
                </MDBCol>
                <MDBCol md="5" style={{marginRight:"2%", marginTop:"2%"}}>
                <MDBCard style={{backgroundColor:"#152235"}} >
                    <MDBCardHeader style={{}}>Note importante</MDBCardHeader>
                    <MDBCardBody className="d-flex justify-content-center align-items-center" style={{}}>
                        {/*<MDBTypography blockquote className='mb-0'>*/}
                            <p style={{color:"#BFB0AE"}}>vous avez ici la position de la Lune noire moyenne. Mais parfois, la Lune noire vraie sera plus impactante en fonction de son placement dans votre thème natal. Ainsi, il sera intéressant pour vous de lire également la blessure et transcendance du signe qui précède ou succède celui qui est apparu ici (infos ci-dessous). Voyez ensuite lequel résonne avec le plus d’évidence. Un moyen efficace de sentir sa Lune noire, c’est au mouvement de rejet qu’elle suscite à priori. Car la Lune noire nous parle de tout ce qui a été enfoui, exilé, jugé, oublié en nous… Et qui détient en réalité une énergie de vie exceptionnelle.</p>
                            {/*<footer className='blockquote-footer'>
                                Someone famous in <cite title='Source Title'>Source Title</cite>
                            </footer>*/}
                      {/*  </MDBTypography>*/}
                    </MDBCardBody>
                </MDBCard>
                </MDBCol>

              {/*  <MDBCol md="4">


                    <MDBCard style={{backgroundColor:"#152235"}} >
                        <MDBCardHeader style={{}}>Note importante</MDBCardHeader>
                        <MDBCardBody className="d-flex justify-content-center align-items-center" style={{}}>
                            <MDBTypography blockquote className='mb-0'>
                            <p style={{color:"#BFB0AE", fontSize:"small"}}>vous avez ici la position de la Lune noire moyenne. Mais parfois, la Lune noire vraie sera plus impactante en fonction de son placement dans votre thème natal. Ainsi, il sera intéressant pour vous de lire également la blessure et transcendance du signe qui précède ou succède celui qui est apparu ici (infos ci-dessous). Voyez ensuite lequel résonne avec le plus d’évidence. Un moyen efficace de sentir sa Lune noire, c’est au mouvement de rejet qu’elle suscite à priori. Car la Lune noire nous parle de tout ce qui a été enfoui, exilé, jugé, oublié en nous… Et qui détient en réalité une énergie de vie exceptionnelle.</p>
                            <footer className='blockquote-footer'>
                                Someone famous in <cite title='Source Title'>Source Title</cite>
                            </footer>
                              </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>*/}
            </MDBRow>

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

            <MDBRow style={{margin:"5%"}}>



        <MDBCardGroup style={{marginBottom:"5%" }} >
            <MDBCard style={{ backgroundColor:"#2A3E4E", marginRight:"2%"}}>
                {/*<MDBCardImage src={moon} alt='...' position='top' />*/}

                <MDBCardBody >
                    {/*<MDBRow style={{marginBottom:"1%"}}>
                        <MDBCol md="2">
                            <img src={moonImg} alt=""/>
                        </MDBCol>
                        <MDBCol md="10" style={{marginTop:"3%"}}>*/}
                            <MDBCardTitle style={{color:"#f6ccb6", fontSize:"x-large"}}> {moonTitle}</MDBCardTitle>
                        {/*</MDBCol>
                    </MDBRow>*/}
                    <MDBCardText className="text-justify" style={{color:"white"}}>
                        {moonContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>{moonTitle.slice(6)}</small>
                </MDBCardFooter>
            </MDBCard>

            <MDBCard style={{ backgroundColor:"#2A3E4E", marginRight:"3%"}}>
                {/*<MDBCardImage src={ house} alt='...' position='top' style={{width:"99%"}}/>*/}
                <MDBCardBody>
                   {/* <MDBRow style={{marginBottom:"1%"}}>
                        <MDBCol md="2">
                            <img src={houseImg} alt=""/>
                        </MDBCol>
                        <MDBCol md="10" style={{marginTop:"3%"}}>*/}
                            <MDBCardTitle style={{color:"#f6ccb6", fontSize:"x-large"}}>Votre Lune Noire est  {houseTitle.slice(6)}</MDBCardTitle>
                        {/*</MDBCol>
                    </MDBRow>*/}



                    <MDBCardText style={{color:"white"}}>
                        {houseContent}
                    </MDBCardText>
                </MDBCardBody>
                <MDBCardFooter>
                    <small className='text-muted'>{houseTitle}</small>
                </MDBCardFooter>
            </MDBCard>


        </MDBCardGroup>
            </MDBRow>
            <MDBRow  className="justify-content-center" style={{marginLeft:"1%", marginRight:"2%"}}>

                <MDBCol md="5" style={{marginRight:"2%"}}>
                    <MDBCard style={{backgroundColor:"#152235"}} >
                        <MDBCardHeader style={{}}>Explorez davantage</MDBCardHeader>
                        <MDBCardBody className="d-flex justify-content-center align-items-center" style={{}}>
                            {/*<MDBTypography blockquote className='mb-0'>*/}
                            <p style={{color:"#BFB0AE"}}>Pour en savoir plus sur cette blessure originelle et sa transcendance vers votre mythe fondateur,
                                découvrez le livre :<h4 style={{color:"white"}}> « L’initiée – le rêve d’Inanna », d’Amala Klep Kremmel. </h4>
                                Il vous offre un parcours initiatique vers la rencontre avec votre Lune noire,
                                afin d’en découvrir les dons cachés… Et incarner votre rayonnement pour le monde.
                                Il vous transmet également de nombreux outils à pratiquer au quotidien pour ancrer cette nouvelle conscience d’initiée dans votre vie.


                                Vous le  <a href="https://example.com" style={{fontSize:"larger"}}>trouverez ici</a>
                                    <br/><br/>

                                Si vous l’avez déjà lu, pourriez-vous nous consacrer quelques instants pour nous partager votre expérience ou pour rédiger un commentaire sur les plateformes de vente (site de l’éditeur, Amazon, Fnac, …) ? Ce serait un magnifique cadeau qui nous mettrait le cœur en joie !
                                <br/>
                                <a href="https://example.com" style={{fontSize:"larger"}}>Commentez!</a>


                            </p>
                            {/*<footer className='blockquote-footer'>
                                Someone famous in <cite title='Source Title'>Source Title</cite>
                            </footer>*/}
                            {/*  </MDBTypography>*/}
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
                <MDBCol md="5" style={{marginRight:"2%"}}>

                    <MDBCard style={{backgroundColor:"#152235"}} >
                        <MDBCardImage src={book} style={{marginLeft:"10%", width:"80%"}}/>


                    </MDBCard>

                </MDBCol>

                {/*  <MDBCol md="4">


                    <MDBCard style={{backgroundColor:"#152235"}} >
                        <MDBCardHeader style={{}}>Note importante</MDBCardHeader>
                        <MDBCardBody className="d-flex justify-content-center align-items-center" style={{}}>
                            <MDBTypography blockquote className='mb-0'>
                            <p style={{color:"#BFB0AE", fontSize:"small"}}>vous avez ici la position de la Lune noire moyenne. Mais parfois, la Lune noire vraie sera plus impactante en fonction de son placement dans votre thème natal. Ainsi, il sera intéressant pour vous de lire également la blessure et transcendance du signe qui précède ou succède celui qui est apparu ici (infos ci-dessous). Voyez ensuite lequel résonne avec le plus d’évidence. Un moyen efficace de sentir sa Lune noire, c’est au mouvement de rejet qu’elle suscite à priori. Car la Lune noire nous parle de tout ce qui a été enfoui, exilé, jugé, oublié en nous… Et qui détient en réalité une énergie de vie exceptionnelle.</p>
                            <footer className='blockquote-footer'>
                                Someone famous in <cite title='Source Title'>Source Title</cite>
                            </footer>
                              </MDBTypography>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>*/}
            </MDBRow>

            <Footer/>






        </>
    );
};
export default Result;
