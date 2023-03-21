import axios from "axios";
import {toast} from "react-toastify";

export const calculate =(birthDay, birthMonth, birthYear, birthHour, birthMinute, birthCity)=>{

    let latitudeDegrees = 34;

    let longitudeDegrees = 6;


    // get coordinates
    const options = {
        method: 'GET',
        url: 'https://forward-reverse-geocoding.p.rapidapi.com/v1/forward',
        params: {

            city: birthCity,

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

    }).catch(function (error) {
        console.error(error);
        toast.error("il y a eu une erreur du serveur");
    });


    const link = `https://horoscopes.astro-seek.com/calculate-moon-lunar-sign/?send_calculation=1&narozeni_den=${birthDay}&narozeni_mesic=${birthMonth}&narozeni_rok=${birthYear}&narozeni_hodina=${birthHour}&narozeni_minuta=${birthMinute}&narozeni_sirka_stupne=${latitudeDegrees}&narozeni_delka_stupne=${longitudeDegrees}&narozeni_timezone_form=auto&narozeni_timezone_dst_form=auto`

    const options2 = {
        method: 'POST',
        url: 'astroseek-api.onrender.com/astroseek-calculator',
        body: {

            link: link,

        },

    };
    axios.request(options2).then(function (response) {
        const data = response.data;
        const moonTitle =data["moon-sign-title"];
        const moonContent=data["moon-sign-content"];
        const houseTitle=data["moon-in-the-house-title"];
        const houseContent=data["moon-in-the-house-content"];

    }).catch(function (error) {
        console.error(error);
        toast.error("il y a eu une erreur du serveur");
    });
}

