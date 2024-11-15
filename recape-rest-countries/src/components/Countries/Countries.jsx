import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [countires, setCountries] = useState([]);
    const [visitedCoutries, setVisitedCoutries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountries = country => {
        const newVisitedCountries = [...visitedCoutries, country];
        setVisitedCoutries(newVisitedCountries);
    }

    // flag

    const handleVisitedFlags = flag => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }

    return (
        <div className="">
            <h3>Countries : {countires.length}</h3>
            {/* flag */}
            <div style={{ border: '2px solid skyblue', borderRadius: '12px' }}>
                {
                    visitedFlags.map((flag, idx) => <img key={idx} style={{ width: '100px', marginLeft: '10px' }} src={flag.png}></img>)
                }
            </div>
            <div>
                <h4>Visited Country List : {visitedCoutries.length}</h4>
                <ul>
                    {
                        visitedCoutries.map(visitedCountry => <li key={visitedCountry.cca2}>{visitedCountry?.name?.common}</li>)
                    }
                </ul>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
                {
                    countires.map(country => <Country handleVisitedFlags={handleVisitedFlags} handleVisitedCountries={handleVisitedCountries} key={country.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;