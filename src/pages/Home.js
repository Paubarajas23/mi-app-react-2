import React from 'react';

function Home({ data }) {
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
