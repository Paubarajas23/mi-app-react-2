// src/pages/Home.js
import React from 'react';
import useFetchData from '../hooks/useFetchData';  // Importa el custom hook

function Home() {
  // Usamos el custom hook useFetchData para obtener los datos de la API
  const { data, loading, error } = useFetchData('https://jsonplaceholder.typicode.com/posts');

  // Renderizado condicional: Si está cargando, mostramos un mensaje de carga
  if (loading) {
    return <p>Cargando...</p>;
  }

  // Si hubo un error en la carga de datos, mostramos el mensaje de error
  if (error) {
    return <p>Error al cargar los datos: {error.message}</p>;
  }

  // Si los datos se cargaron correctamente, mostramos la lista
  return (
    <div>
      <h1>Lista de Publicaciones</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
