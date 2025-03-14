// src/hooks/useFetchData.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setData(response.data);  // Guarda los datos
        setLoading(false);        // Cambia el estado a "cargado"
      })
      .catch(error => {
        setError(error);          // Guarda el error si ocurre uno
        setLoading(false);        // Cambia el estado a "cargado"
      });
  }, [url]);  // El efecto solo se ejecutará si la URL cambia

  return { data, loading, error };  // Devuelve los estados
};

export default useFetchData;
