import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {
    
    const [countires, setCountries] = useState([]);
    const [visitedCoutries , setVisitedCoutries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    const handleVisitedCountries = country =>{
        const newVisitedCountries = [...visitedCoutries,country];
        setVisitedCoutries(newVisitedCountries);
    }

    return (
        <div className="">
            <h3>Countries : {countires.length}</h3>
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
                    countires.map(country => <Country handleVisitedCountries={handleVisitedCountries} key={country.cca2} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;