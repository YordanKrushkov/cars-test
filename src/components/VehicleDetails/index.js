import React from 'react';
import { useHistory } from 'react-router';
import './index.scss';

const VehicleDetails = ({ location }) => {

    const history = useHistory()
    let { meta, media, description } = location.state
    let emissions = meta.emissions.template.replace("$value", meta.emissions.value);

    return (
        <div id="imageDetails">
            <a href={media[1].url} target="blank"><img src={ media[1].url } /></a>
            <div>
            <h1>{ media[0].name }</h1>
                <p>{ description }</p>
                <ul>
                    <li>Passengers: { meta.passengers }</li>
                    <li>Body Style :{ meta.bodystyles.join(', ') }</li>
                    <li>Drive Train : { meta.drivetrain.join(', ') }</li>
                    <li>Emissions : { emissions }</li>
                </ul>
                <button onClick={ () => history.push('/') }>Back</button>
            </div>
        </div>
    );
}

export default VehicleDetails;