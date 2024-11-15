import { useState } from 'react';
import './Country.css'
import PropTypes from 'prop-types';


const Country = ({ country , handleVisitedCountries }) => {
    // console.log(handleVisitedCountries);
    const { name, flags, population } = country;

    const [visited, setVisited] = useState(false);

    const handlerVisited = () => {
        setVisited(!visited);
    };

    return (
        <div className={`country ${visited && 'visited-bg'}`} /* style={{backgroundColor: visited && 'red'}} */> {/* comment kora line ta kaj korce but 'visited-bg' class kaj korce na */}
            <h4 style={{ color: visited && 'blueviolet' }}>Name : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button onClick={handlerVisited}>{visited ? 'Visited' : 'Going'}</button>
            <button onClick={()=>{handleVisitedCountries(country)}}>Visited List</button>
            {
                visited ? <p style={{ color: 'red' }}>I visited this country</p> : <p>I want to visite</p>
            }
        </div>
    );
};

Country.propTypes = {
    country: PropTypes.object,
    handleVisitedCountries: PropTypes.func
}

export default Country;