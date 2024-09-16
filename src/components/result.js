import React from 'react';
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardFooter, MDBCardGroup, MDBRow, MDBCol, MDBCardHeader } from 'mdb-react-ui-kit';
import Footer from "./footer";
import moonx from "../assets/images/MOON3.svg";
import book from "../assets/images/undraw_book_lover_re_rwjy.svg";

const Result = ({ moonTitle, moonContent, houseTitle, houseContent }) => {
    const getMoonContent = (sign) => {
        const contents = {
            "BÉLIER": "Vous portez une mémoire de **LEADEUSE**. Celle qui ouvre la voie et partage la force de sa volonté pour oser de nouveaux horizons.",
            "TAUREAU": "Vous portez une mémoire de **BÂTISSEUSE**. Celle qui collabore avec la Terre pour construire une nouvelle relation au Vivant.",
            "GÉMEAUX": "Vous portez une mémoire de **CONTEUSE**. Celle qui relie les mondes avec légèreté et diffuse le réenchantement.",
            "CANCER": "Vous portez une mémoire de **MÈRE UNIVERSELLE**. Celle qui offre un espace où se déposer pour retrouver l'accès à ses besoins et en prendre soin.",
            "LION": "Vous portez une mémoire d'**HÉROÏNE**. Celle qui dépasse obstacles et épreuves, pour révéler sa véritable unicité et offrir sa création au monde.",
            "VIERGE": "Vous portez une mémoire de **PRÊTRESSE**. Celle qui relie le Haut et le Bas, offre au monde une présence cristalline, nourrie par l'amour de la Terre et les énergies célestes.",
            "BALANCE": "Vous portez une mémoire d'**AMOUREUSE**. Celle qui tisse un lien intime avec le monde et ceux qui l'entourent, et révèle leur beauté par son regard bienveillant.",
            "SCORPION": "Vous portez d'**ALCHIMISTE**. Celle qui connaît l'art de la transformation intérieure, et permet aux autres d'en vivre le processus de mort-renaissance en confrontant l'Ombre.",
            "SAGITTAIRE": "Vous portez une mémoire de **PHILOSOPHE**. Celle qui explore de multiples réalités et ramène aux autres les fruits de ses voyages, afin qu'ils développent leur propre vérité.",
            "CAPRICORNE": "Vous portez une mémoire de **SAGE**. Celle qui médite les grandes lois du monde afin de guider les autres vers une contribution sociale.",
            "VERSEAU": "Vous portez une mémoire de **RÉVOLUTIONNAIRE**. Celle qui défie l'ordre établi afin d'apporter une vision nouvelle et réformatrice pour le monde, attentive aux droits humains.",
            "POISSONS": "Vous portez une mémoire d'**ORACLE**. Celle qui canalise les messages de l'Inconscient collectif afin d'aider les humains à trouver leur voie de transcendance."
        };
        return contents[sign] || moonContent;
    };

    const getHouseContent = (house) => {
        const contents = {
            "1": "L'accès de guérison que le Divin vous offre est celui de vous affirmer avec confiance pour devenir source d'énergie pour les autres.",
            "2": "L'accès de guérison que le Divin vous offre est celui de développer vos valeurs personnelles et l'estime de vous par l'expression de vos dons et talents.",
            "3": "L'accès de guérison que le Divin vous offre est celui de communiquer vos idées et diffuser des méthodes pratiques.",
            "4": "L'accès de guérison que le Divin vous offre est celui de vous ancrer dans votre vie et trouver votre centre intérieur.",
            "5": "L'accès de guérison que le Divin vous offre est celui de vous amuser et de développer votre créativité dans la joie.",
            "6": "L'accès de guérison que le Divin vous offre est celui d'être utile socialement, de faire le tri et de développer votre estime de soi.",
            "7": "L'accès de guérison que le Divin vous offre est celui de vous associer, d'accompagner et d'apprendre de vous par la relation.",
            "8": "L'accès de guérison que le Divin vous offre est celui d'investiguer et de vous ouvrir aux profondeurs de l'inconscient, pour co-créer avec un autre.",
            "9": "L'accès de guérison que le Divin vous offre est celui de transmettre et vivre votre quête de sens.",
            "10": "L'accès de guérison que le Divin vous offre est celui d'oser votre vocation publique et de cultiver votre sagesse.",
            "11": "L'accès de guérison que le Divin vous offre est celui du rassemblement en communautés pour semer vos idées novatrices.",
            "12": "L'accès de guérison que le Divin vous offre est celui de transcender l'ordinaire par la spiritualité et l'art afin d'éveiller les consciences avec le cœur."
        };
        return contents[house] || houseContent;
    };

    const moonSign = moonTitle.split(' ').pop().toUpperCase();
    const houseNumber = houseTitle.match(/\d+/)[0];

    return (
        <>
            <MDBRow className="justify-content-center" style={{marginLeft:"1%", marginRight:"2%", marginTop:"3%"}}>
                <MDBCol md="5" style={{marginRight:"2%"}}>
                    <MDBCard style={{backgroundColor:"#152235"}}>
                        <MDBCardImage src={moonx}/>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="5" style={{marginRight:"2%", marginTop:"2%"}}>
                    <MDBCard style={{backgroundColor:"#152235"}}>
                        <MDBCardHeader>Note importante</MDBCardHeader>
                        <MDBCardBody className="d-flex justify-content-center align-items-center">
                            <p style={{color:"#BFB0AE"}}>Vous avez ici la position de la Lune Noire moyenne. Mais parfois, la Lune Noire vraie
                                sera plus impactante en fonction de son placement dans votre thème natal. Ainsi, si
                                vous souhaitez aller plus loin, aller chercher l'emplacement de votre Lune Noire vraie
                                (même si elle est parfois dans le même Signe). Un moyen efficace de sentir
                                l'emplacement le plus impactant de sa Lune Noire, c'est au mouvement de réaction
                                qu'elle suscite de prime abord. Ainsi qu'aux transits de la Lune Noire qui amènent
                                des changements de conscience (ou des incidents dans nos vies), mais nous ne
                                couvrirons pas cela ici. La Lune noire nous parle de tout ce qui a été enfoui, exilé,
                                jugé, oublié… Et qui détient une énergie de vie exceptionnelle. Les dons reçus de
                                l'Esprit à ramener à notre conscience afin d'illuminer le monde.</p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <MDBRow style={{margin:"5%"}}>
                <MDBCardGroup style={{marginBottom:"1%"}}>
                    <MDBCard style={{ backgroundColor:"#2A3E4E", marginRight:"2%"}}>
                        <MDBCardBody>
                            <MDBCardTitle style={{color:"#f6ccb6", fontSize:"x-large"}}>
                                Votre LUNE NOIRE est en {moonSign}
                            </MDBCardTitle>
                            <MDBCardText className="text-justify" style={{color:"white"}}>
                                <p><em>L'archétype qui est un idéal (rarement assumé) pour vous mais qui a sans doute jalonné des blessures dans votre histoire :</em></p>

                                <p>{getMoonContent(moonSign)}</p>

                                <p><em>Accueillez sa <strong>blessure</strong> au travers de la Lune Noire, pour ne plus être coupée du <strong>Don</strong> de cette énergie. Vous recevrez pleinement la <strong>grâce de ce mythe fondateur</strong> qui sous-tend votre vie.</em></p>
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className='text-muted'>Lune Noire en {moonSign}</small>
                        </MDBCardFooter>
                    </MDBCard>

                    <MDBCard style={{ backgroundColor:"#2A3E4E", marginRight:"3%"}}>
                        <MDBCardBody>
                            <MDBCardTitle style={{color:"#f6ccb6", fontSize:"x-large"}}>Votre Lune Noire est {houseTitle.slice(6)}</MDBCardTitle>
                            <MDBCardText style={{color:"white"}}>
                                {getHouseContent(houseNumber)}
                            </MDBCardText>
                        </MDBCardBody>
                        <MDBCardFooter>
                            <small className='text-muted'>Lune Noire en Maison {houseNumber}</small>
                        </MDBCardFooter>
                    </MDBCard>
                </MDBCardGroup>
            </MDBRow>

            <MDBRow className="justify-content-center" style={{marginLeft:"1%", marginRight:"2%"}}>
                <MDBCol md="5" style={{marginRight:"2%"}}>
                    <MDBCard style={{backgroundColor:"#152235"}}>
                        <MDBCardHeader>Vivez l'initiation</MDBCardHeader>
                        <MDBCardBody className="d-flex justify-content-center align-items-center">
                            <p style={{color:"#BFB0AE"}}>Pour en savoir plus sur cette blessure originelle et sa grâce, découvrez le livre :<a href="https://mysteresdufeminin.com/boutique/"><h4 style={{color:"white"}}> « Le Lieu Secret - Être initiée à votre Don par la Lune Noire », d'Amala Klep Kremmel </h4></a>
                                Descendez vers le Lieu Secret à la rencontre de votre Don. Dans cette rencontre
                                avec la Déesse Sombre (la Lune Noire) vous traverserez le portail initiatique qui
                                mène au Divin…

                                <a href="https://mysteresdufeminin.com/boutique/" style={{fontSize:"larger"}}>Découvrez-le ici!</a>
                                <br/><br/>

                                Si vous l'avez lu, pourriez-vous nous offrir quelques instants pour nous partager
                                votre expérience? Ce serait un magnifique cadeau!
                                <a href="https://mysteresdufeminin.com/contact/" style={{fontSize:"larger"}}> Directement ici </a>
                                et / ou sur
                                les plateformes de vente en ligne où vous avez acheté votre ouvrage (Amazon,
                                Fnac, Lulu…) ?
                                <br/><br/>
                                <a href="https://mysteresdufeminin.com/contact/" style={{fontSize:"larger"}}>Commentez!</a>
                            </p>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="5" style={{marginRight:"2%"}}>
                    <MDBCard style={{backgroundColor:"#152235"}}>
                        <MDBCardImage src={book} style={{marginLeft:"10%", width:"80%"}}/>
                    </MDBCard>
                </MDBCol>
            </MDBRow>

            <Footer/>
        </>
    );
};

export default Result;