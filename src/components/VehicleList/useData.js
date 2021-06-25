import { useState, useEffect } from 'react';
import getData from '../../api';

export default function useData(url) {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    getData(url)
      .then((response) => setVehicles(response))
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }, []);

  return [
    loading,
    error,
    vehicles,
  ];
}
