import { useState } from 'react';
import './Country.css'
import PropTypes from 'prop-types';


const Country = ({ country }) => {
    // console.log(country);
    const { name, flags, population } = country;

    const [visited, setVisited] = useState(false);

    const handlerVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className="country">
            <h4>Name : {name.common}</h4>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <button onClick={handlerVisited}>{visited? 'Visited':'Going'}</button>
            {
                visited ? <p style={{color:'red'}}>I visited this country</p> : <p>I want to visite</p>
            }
        </div>
    );
};

Country.propTypes={
    country:PropTypes.object
}

export default Country;