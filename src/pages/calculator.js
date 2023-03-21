
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import {Col} from "react-bootstrap";

import "../index.css";
import launch from "../assets/images/launch.svg";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
    MDBSelect, MDBCardTitle, MDBCardHeader
}
    from 'mdb-react-ui-kit';

import axios from "axios";
import {toast} from "react-toastify";
import Loading from "../components/Loading";
import {Wrapper} from "./landing";
import Result from "../components/result";

function Calculator() {
    const [jour, setJour] = useState('');
    const [mois, setMois] = useState('');
    const [annee, setAnnee] = useState('');
    const [heure, setHeure] = useState('');
    const [minute, setMinute] = useState('');
    const [ville, setVille] = useState('');
    const [moonTitle, setMoonTitle] = useState('');
    const [moonContent, setMoonContent] = useState('');
    const [houseTitle, setHouseTitle] = useState('');
    const [houseContent, setHouseContent] = useState('');
    const [isLoading, setIsLoading]=useState(false);
    const [resultReady, setResultReady]=useState(false);








    const moisOptions = [    { value: '01', label: 'Janvier' },    { value: '02', label: 'Février' },    { value: '03', label: 'Mars' },    { value: '04', label: 'Avril' },    { value: '05', label: 'Mai' },    { value: '06', label: 'Juin' },    { value: '07', label: 'Juillet' },    { value: '08', label: 'Août' },    { value: '09', label: 'Septembre' },    { value: '10', label: 'Octobre' },    { value: '11', label: 'Novembre' },    { value: '12', label: 'Décembre' }  ];


    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, such as send it to a server
        console.log({ jour, mois, annee, heure, minute, ville });



    let latitudeDegrees = 34;

    let longitudeDegrees = 6;


    // get coordinates
    const options = {
        method: 'GET',
        url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
        params: {

            city: ville,

        },
        headers: {
            'X-RapidAPI-Key': '9dcf2ed61dmshd96dd8a8927e761p1c5fa6jsnabd200c3c1fd',
            'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        const data = response.data[0];
        longitudeDegrees=Math.floor(Math.abs(data.lon));
        latitudeDegrees =Math.floor(Math.abs(data.lat));
        console.log("long : " + longitudeDegrees);
        console.log("lat : " + latitudeDegrees);

    }).catch(function (error) {
        console.error(error);
        toast.error("il y a eu une erreur du serveur");
    });


    const link = `https://horoscopes.astro-seek.com/calculate-moon-lunar-sign/?send_calculation=1&narozeni_den=${jour}&narozeni_mesic=${mois}&narozeni_rok=${annee}&narozeni_hodina=${heure}&narozeni_minuta=${minute}&narozeni_sirka_stupne=${latitudeDegrees}&narozeni_delka_stupne=${longitudeDegrees}&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto`

    const dataLink = {
        link:link

    };
    const promise = axios.post(/*"https://astroseek-api.onrender.com/astroseek-calculator"*/ "/api",dataLink )

// Handle the pending, fulfilled, and rejected cases
    promise.then((response) => {
        setIsLoading(false);
        const data = response.data;
        console.log(data);
        setMoonTitle (data["moon-sign-title"]);
        setMoonContent(data["moon-sign-content"]);
        setHouseTitle(data["moon-in-the-house-title"]);
        setHouseContent(data["moon-in-the-house-content"]);
        setResultReady(true);

    }).catch((error) => {
        setIsLoading(false);
        toast.error("il y a eu une erreur du serveur");
        console.error('POST request failed:', error);
    }).finally(() => {
        //setIsLoading(true);
    });

console.log("moon : "+ moonTitle);

    };

    if (isLoading) {
        return <Loading />;
    }
    if (!resultReady) return (



        <main className="page">


        <MDBContainer fluid style={{width:"70%" ,marginTop:"10%"}}>

            <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
                <MDBCardHeader>
                <MDBCardTitle style={{marginLeft:"10%", marginTop:"2%", marginBottom:"2%"}}>
                    Entrer vos données de naissance!
                </MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow style={{alignItems:"center", display:"flex"}}>
                        <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>
                            <Form onSubmit={handleSubmit} >


                                <MDBRow>

                                    <MDBCol md='4'>
                                        <div className="d-flex flex-row align-items-center mb-4 ">
                                            <Form.Label style={{marginRight:"5%"}}>Jour </Form.Label>

                                            <Form.Control as="select" value={jour} onChange={(event) => setJour(event.target.value)}  placeholder="jour">
                                              {/*  <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    jour
                                                </option>*/}
                                                {[...Array(31)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                                            </Form.Control>
                                        </div>


                                    </MDBCol>

                                    <MDBCol md='4' className='mb-4'>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <Form.Label style={{marginRight:"5%"}}>Mois</Form.Label>
                                            <Form.Control as="select" value={mois} onChange={(event) => setMois(event.target.value)} style={{width:"150px"}} >
                                                {/*<option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    mois
                                                </option>*/}
                                                {moisOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                                            </Form.Control>
                                        </div>
                                    </MDBCol>
                                    <MDBCol md='4'>
                                        <div className="d-flex flex-row align-items-center mb-4" style={{marginLeft:"5%"}}>
                                            <Form.Label style={{marginRight:"5%"}}>Année</Form.Label>
                                            <Form.Control as="select" value={annee} onChange={(event) => setAnnee(event.target.value)} style={{width:"150px"}}>
                                               {/* <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    année
                                                </option>*/}
                                                {[...Array(123)].map((_, i) => <option key={i + 1900} value={i + 1900}>{i + 1900}</option>)}
                                            </Form.Control>
                                        </div>
                                    </MDBCol>

                                </MDBRow>


                                <MDBRow>

                                    <MDBCol md='6'>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <Form.Label style={{marginRight:"5%"}}>Heure</Form.Label>
                                            <Form.Control as="select" value={heure} onChange={(event) => setHeure(event.target.value)} style={{width:"143px"}}>
                                               {/* <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    heure
                                                </option>*/}
                                                {[...Array(24)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                                            </Form.Control>
                                        </div>

                                    </MDBCol>

                                    <MDBCol md='6' className='mb-4'>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            {/*<MDBIcon fas icon="key me-3" size='lg'/>*/}
                                            <Form.Label style={{marginRight:"5%"}}>Minute</Form.Label>
                                            <Form.Control as="select" value={minute} onChange={(event) => setMinute(event.target.value)} style={{width:"135px"}}>
                                               {/* <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    minute
                                                </option>*/}
                                                {[...Array(60)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                                            </Form.Control>
                                        </div>
                                    </MDBCol>


                                </MDBRow>


                                <div className="d-flex flex-row align-items-center mb-4" style={{marginLeft:"10%"}}>
                                    {/*<MDBIcon fas icon="key me-3" size='lg'/>*/}
                                    <Form.Label style={{marginRight:"5%"}}>Ville</Form.Label>
                                    <Form.Control type="text" value={ville} onChange={(event) => setVille(event.target.value)} style={{width:"300px"}}>

                                    </Form.Control>
                                </div>

                            <MDBBtn className='mb-4' size='lg' type="submit" style={{marginTop:"10%", marginLeft:"30%"}}>Dévoiler votre Lune noire</MDBBtn>
                                </Form >

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src={launch} fluid/>
                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer>
        </main>

    );
    if (resultReady) return( <Result moonTitle={moonTitle} houseContent={houseContent} houseTitle={houseTitle} moonContent={moonContent}/>);
}
 export default Calculator;