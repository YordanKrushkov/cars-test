import React, { useEffect } from 'react';
import useData from './useData';
import './style.scss';
import Vehicle from '../SingleVehicle';
import Loader from '../Loader';

export default function VehicleList() {
  // eslint-disable-next-line no-unused-vars
  const [loading, error, vehicles] = useData('/api/vehicles.json');

  if (loading) {
    return <div data-testid="loading"><Loader /></div>;
  }

  if (error) {
    return <div data-testid="error">{ error }</div>;
  }

  return (
    <div data-testid="results" id="vehicleList">
      { vehicles &&
        vehicles.map(x =>
          <Vehicle key={ x.id } data={ x } />
        ) }
    </div>
  );
}
