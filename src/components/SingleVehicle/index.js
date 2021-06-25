import useData from '../VehicleList/useData';
import './index.scss';
import React from 'react'
import { Link } from 'react-router-dom'


const Vehicle = ({ data }) => {

    const [loading, error, vehicle] = useData(data.apiUrl);

    return (
        vehicle.price ? <div className="vehicleWrapper" key={ data.id }>
            <div className="imageWrapper">
                <img src={ data.media[1].url } alt="" />
            </div>
            <div className="infoWrapper">
                <h1>{ data.media[0].name }</h1>
                <h4>From { vehicle.price }</h4>
                <p>{ vehicle.description }</p>
            </div>
            <Link to={ {
                pathname: `/${data.id}`,
                state: {
                    meta: vehicle.meta,
                    media: data.media,
                    description: vehicle.description
                }
            } }>
                <p>Read more...</p>
            </Link>
        </div>
            : null
    );
}

export default Vehicle;