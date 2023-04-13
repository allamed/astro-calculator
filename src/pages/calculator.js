
import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';



import "../index.css";
import launch from "../assets/images/myster2.png";
import wait from "../assets/images/wait.svg";
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
    MDBSelect, MDBCardTitle, MDBCardHeader, MDBFooter
}
    from 'mdb-react-ui-kit';

import axios from "axios";
import {toast} from "react-toastify";
import Loading from "../components/Loading";
import {Wrapper} from "./landing";
import Result from "../components/result";
import Footer from "../components/footer";
import ProjectInfo from "../components/ProjectInfo";
import {GoLocation} from "react-icons/go";
import {GrMapLocation} from "react-icons/gr";
import {BiTimeFive } from "react-icons/bi";
import {BsCalendarDate, BsMap } from "react-icons/bs";


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
    const [moonImg, setMoonImg]=useState("");
    const [houseImg, setHouseImg]=useState("");
    const [state, setState]=useState("");
    const [coord, setCoord]=useState("");
    const [lat, setLat]=useState(6);
    const[long, setLong]=useState(34);










    const moisOptions = [    { value: '1', label: 'Janvier' },    { value: '2', label: 'Février' },    { value: '3', label: 'Mars' },    { value: '4', label: 'Avril' },    { value: '5', label: 'Mai' },    { value: '6', label: 'Juin' },    { value: '7', label: 'Juillet' },    { value: '8', label: 'Août' },    { value: '9', label: 'Septembre' },    { value: '10', label: 'Octobre' },    { value: '11', label: 'Novembre' },    { value: '12', label: 'Décembre' }  ];


    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data, such as send it to a server
        console.log({ jour, mois, annee, heure, minute, ville });
        if (!jour || !mois ||!annee ||!heure ||!minute ||!ville)
        {
            toast.error("veuillez remplir tous les champs");
            return;
        }




    let latitudeDegrees = 34;

    let longitudeDegrees = 6;
    let country="Morocco";



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
        console.log(data)
        const longi=Math.floor(Math.abs(data.lon));
        const longiMinutes = (Math.abs(data.lon) - longi) * 60;
        const lati =Math.floor(Math.abs(data.lat));
        const latiMinutes = (Math.abs(data.lat) - lati) * 60;
        let direction=0;
        if (data.lon<0) direction=1;
        setLong(longitudeDegrees);
        setLat(latitudeDegrees);
        country = data.display_name.split(", ").pop();
        console.log("long : " + longi);
        console.log("lat : " + lati);
        console.log("country : " + country);
        setState(country);
        setCoord("lattitude : "+lati + " , longitude : "+ longi);


        const link =`https://horoscopes.astro-seek.com/calculate-birth-chart-horoscope-online/?send_calculation=1&narozeni_den=${jour}&narozeni_mesic=${mois}&narozeni_rok=${annee}&narozeni_hodina=${heure}&narozeni_minuta=${minute}&narozeni_city=&narozeni_mesto_hidden=&narozeni_stat_hidden=&narozeni_podstat_kratky_hidden=&narozeni_podstat_hidden=&narozeni_input_hidden=&narozeni_podstat2_kratky_hidden=&narozeni_podstat3_kratky_hidden=&narozeni_sirka_stupne=${lati}&narozeni_sirka_minuty=${latiMinutes}&narozeni_sirka_smer=0&narozeni_delka_stupne=${longi}&narozeni_delka_minuty=${longiMinutes}&narozeni_delka_smer=${direction}&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto`

        console.log(link)
        const dataLink = {
            link:link

        };
      /*  const promise = axios.post("https://astroseek-api.onrender.com/astroseek-bith-chart-calculator/v2"/!*"/api"*!/ ,dataLink )
        setIsLoading(true);
// Handle the pending, fulfilled, and rejected cases
        promise.then((response) => {
            setIsLoading(false);
            const data = response.data;



            setMoonTitle (data["lilith-zodiac-title"]);
            setMoonContent(data["lilith-zodiac-content"]);
            setHouseContent(data["lilith-house-content"]);
            setHouseTitle(data["lilith-house-title"]);
            /!*
                     setHouseImg(data["moon-in-the-house-image"]);
                     setMoonImg(data["moon-sign-image"]);*!/
            //setMoonContent(data["lilith-text"]);
            setResultReady(true);

        }).catch((error) => {
            setIsLoading(false);
            toast.error("il y a eu une erreur du serveur");
            console.error('POST request failed:', error);
        }).finally(() => {
            setIsLoading(false);
        });*/



        //new code
        const timeoutPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(new Error('Timeout'));
            }, 10000);
        });

        const postPromise = axios.post("https://astroseek-api.onrender.com/astroseek-bith-chart-calculator/v2"/*"/api"*/, dataLink);

        const promise = Promise.race([timeoutPromise, postPromise]);

        setIsLoading(true);

        promise.then((response) => {
            setIsLoading(false);
            //use data

            const data = response.data;



            setMoonTitle (data["lilith-zodiac-title"]);
            setMoonContent(data["lilith-zodiac-content"]);
            setHouseContent(data["lilith-house-content"]);
            setHouseTitle(data["lilith-house-title"]);

            /*setHouseImg(data["moon-in-the-house-image"]);
            setMoonImg(data["moon-sign-image"]);*/
            //setMoonContent(data["lilith-text"]);
            setResultReady(true);
        }).catch((error) => {

            if (error.message === 'Timeout') {
                console.log("La requête a pris trop de temps, veuillez réessayer.");
                // renvoyer la requête POST
                const newPromise = axios.post("https://astroseek-api.onrender.com/astroseek-bith-chart-calculator/v2"/*"/api"*/, dataLink);
                newPromise.then((response) => {
                    // traitement des données
                    setIsLoading(false);
                    const data = response.data;



                    setMoonTitle (data["lilith-zodiac-title"]);
                    setMoonContent(data["lilith-zodiac-content"]);
                    setHouseContent(data["lilith-house-content"]);
                    setHouseTitle(data["lilith-house-title"]);
                    /*
                    setHouseImg(data["moon-in-the-house-image"]);
                    setMoonImg(data["moon-sign-image"]);*/
                    //setMoonContent(data["lilith-text"]);
                    setResultReady(true);
                }).catch((error) => {
                    // gestion des erreurs
                    setIsLoading(false);
                    toast.error("il y a eu une erreur du serveur");
                    console.error('POST request failed:', error);
                });
            } else {
                setIsLoading(false);
                toast.error("Il y a eu une erreur du serveur.");
                console.error('POST request failed:', error);
            }
        });

    }).catch(function (error) {
        console.error(error);
        //toast.error("il y a eu une erreur du serveur");
    })



//console.log("moon : "+ moonTitle);

    };

    if (isLoading) {
        return (
    <main className="page">
        <MDBContainer fluid style={{marginTop:"6%"}} className="size-adjust2">

            <MDBCard className=' m-5' style={{borderRadius: '25px', backgroundColor:"#2A3E4E"}}>
                <MDBCardHeader style={{ marginTop:"2%", marginBottom:"2%", display:"flex"}}>

                    <h4 style={{marginLeft:"10%", color:"#BFB0AE"}}>
                        Résultat dans quelques secondes ...
                    </h4>
                    <Loading />

                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow  >
                        <MDBCol md='10' lg='6' style={{ marginBottom:"1%"}} >
                            <div className="content-center" style={{marginLeft:"15%"}}>
                                <ProjectInfo icon={<BsCalendarDate />} text={jour + "/" + mois+"/"+annee} />
                                <ProjectInfo icon={<BiTimeFive />} text={heure + " Heure , "+minute +" Minutes"} />
                                <ProjectInfo icon={<GoLocation />} text={`${ville} , ${state} ` }  />
                                <ProjectInfo icon={<BsMap />} text={coord} />
                            </div>

                        </MDBCol>

                        <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src={wait} fluid style={{maxWidth:"70%", marginTop:"5%"}}/>

                        </MDBCol>

                    </MDBRow>
                </MDBCardBody>
            </MDBCard>

        </MDBContainer >
        <div style={{flexShrink:"0", marginTop:"17%", marginBottom:"0"}}>
            <Footer />
        </div>

    </main>);


    }
    if (!resultReady) return (



        <>





            <MDBCard className='text-black m-5' style={{borderRadius: '25px', backgroundColor:"#2A3E4E"}}>
                <MDBCardHeader>
                <MDBCardTitle style={{marginLeft:"10%", marginTop:"2%", marginBottom:"2%", color:"#F6CCB6"}}>
                    Entrer vos données de naissance!
                </MDBCardTitle>
                </MDBCardHeader>
                <MDBCardBody>
                    <MDBRow >
                        <MDBCol md='4' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
                            <MDBCardImage src={launch} fluid style={{width:"60%", marginLeft:"20%"}}/>
                        </MDBCol>
                        <MDBCol md='8' lg='6' style={{marginTop:"1%"}} >
                            <Form onSubmit={handleSubmit} >


                                <MDBRow>

                                    <MDBCol md='6'style={{marginTop:"6%"}}>

                                            {/*<Form.Label style={{marginRight:"5%"}}>Jour </Form.Label>*/}

                                            <Form.Control as="select" value={jour} onChange={(event) => setJour(event.target.value)}  placeholder="jour" style={{backgroundColor:"#BFB0AE"}}>
                                                <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    jour
                                                </option>
                                                {[...Array(31)].map((_, i) => <option key={i + 1} value={i + 1}>{i + 1}</option>)}
                                            </Form.Control>



                                    </MDBCol>

                                    <MDBCol md='6' style={{marginTop:"6%"}}>

                                            {/*<Form.Label style={{marginRight:"5%"}}>Mois</Form.Label>*/}
                                            <Form.Control as="select" value={mois} onChange={(event) => setMois(event.target.value)} style={{backgroundColor:"#BFB0AE"}}  >
                                                <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    mois
                                                </option>
                                                {moisOptions.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                                            </Form.Control>

                                    </MDBCol>


                                </MDBRow>


                                <MDBRow >
                                    <MDBCol md='6' style={{marginTop:"6%"}}>

                                            {/*<Form.Label style={{marginRight:"5%"}}>Année</Form.Label>*/}
                                            <Form.Control as="select" value={annee} onChange={(event) => setAnnee(event.target.value)} style={{backgroundColor:"#BFB0AE"}}>
                                                <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    année
                                                </option>
                                                {[...Array(123)].map((_, i) => <option key={i + 1900} value={i + 1900}>{i + 1900}</option>)}
                                            </Form.Control>

                                    </MDBCol>
                                    <MDBCol md='6' style={{marginTop:"6%"}}>


                                           {/* <Form.Label style={{marginRight:"5%"}}>Heure</Form.Label>*/}
                                            <Form.Control as="select" value={heure} onChange={(event) => setHeure(event.target.value)} style={{backgroundColor:"#BFB0AE"}}>
                                                <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                    heure
                                                </option>
                                                {[...Array(24)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                                            </Form.Control>


                                    </MDBCol>



                                </MDBRow>
                    <MDBRow >
                                <MDBCol md='6' style={{marginTop:"6%"}}>

                                        {/*<MDBIcon fas icon="key me-3" size='lg'/>*/}
                                        {/* <Form.Label style={{marginRight:"5%"}}>Minute</Form.Label>*/}
                                        <Form.Control as="select" value={minute} onChange={(event) => setMinute(event.target.value)} style={{backgroundColor:"#BFB0AE"}}>
                                            <option value="" key={-1} style={{ color: "gray" }} disabled>
                                                minute
                                            </option>
                                            {[...Array(60)].map((_, i) => <option key={i} value={i}>{i}</option>)}
                                        </Form.Control>

                                </MDBCol>

                                <MDBCol md='6' style={{marginTop:"6%"}}>

                                    {/*<MDBIcon fas icon="key me-3" size='lg'/>*/}
                                    {/*<Form.Label style={{marginRight:"5%"}}>Ville</Form.Label>*/}
                                    <Form.Control type="text" value={ville} onChange={(event) => setVille(event.target.value)}  placeholder="Ville de naissance" style={{backgroundColor:"#BFB0AE"}}>

                                    </Form.Control>
                                </MDBCol>
                    </MDBRow>

                            <MDBBtn className='mb-4' size='lg' type="submit" style={{marginTop:"10%", marginLeft:"20%"}}>Dévoiler votre Lune noire</MDBBtn>
                                </Form >

                        </MDBCol>



                    </MDBRow>
                </MDBCardBody>
            </MDBCard>


            <Footer/>
        </>

    );
    if (resultReady) return( <Result moonTitle={moonTitle} houseContent={houseContent} houseTitle={houseTitle} moonContent={moonContent} moonImg={moonImg} houseImg={houseImg} />);
}
 export default Calculator;