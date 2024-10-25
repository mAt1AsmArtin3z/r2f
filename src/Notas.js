import React, { useState, useEffect } from 'react';
import './Notas.css';

function NotaApp() {
  const [nota, setNota] = useState('');
  const [guardando, setGuardando] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);
  const [notas, setNotas] = useState(() => {
    const notasStorage = localStorage.getItem('notas');
    return notasStorage ? JSON.parse(notasStorage) : [];
  });

  useEffect(() => {
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    localStorage.setItem('notas', JSON.stringify(notas));
  }, [notas]);

  const handleChange = (e) => {
    setNota(e.target.value);
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      guardarNota(e.target.value);
    }, 2000);
    setTimeoutId(newTimeoutId);
  };

  const guardarNota = (texto) => {
    setGuardando(true);
    setTimeout(() => {
      setGuardando(false);
      agregarNota(texto);
      setNota('');
    }, 1000);
  };

  const agregarNota = (nota) => {
    setNotas((prevNotas) => [...prevNotas, nota]);
  };

  const eliminarNota = (index) => {
    setNotas((prevNotas) => prevNotas.filter((nota, i) => i !== index));
  };

  return (
    <div className="nota-app">
      <textarea value={nota} onChange={handleChange} placeholder="Escribe tu nota" />
      {guardando ? (
        <p className="guardando">Guardando...</p>
      ) : (
        <p className="nota-no-guardada">Nota no guardada</p>
      )}
      <ul>
        {notas.map((nota, index) => (
          <li key={index}>
            {nota}
            <button onClick={() => eliminarNota(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NotaApp;