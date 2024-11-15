import { useEffect, useState } from "react";

const Countries = () => {
    const [countires, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, []);

    return (
        <div>
            <h3>Countries : {countires.length}</h3>
        </div>
    );
};

export default Countries;