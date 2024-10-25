import React, { useState, useEffect } from 'react';
import './Formulario.css';

const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [errores, setErrores] = useState({});
  const [formularioValido, setFormularioValido] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [formulariosEnviados, setFormulariosEnviados] = useState({});

  const validarNombre = (nombre) => {
    if (nombre.length < 3) {
      return 'El nombre debe tener al menos 3 caracteres';
    }
    return '';
  };

  const validarCorreo = (correo) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!regex.test(correo)) {
      return 'El correo electrónico no es válido';
    }
    return '';
  };

  const validarContrasena = (contrasena) => {
    if (contrasena.length < 8) {
      return 'La contraseña debe tener al menos 8 caracteres';
    }
    return '';
  };

  useEffect(() => {
    setFormularioValido(Object.values(errores).every((error) => error === ''));
  }, [errores]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'nombre':
        setNombre(value);
        setErrores((prevErrores) => ({ ...prevErrores, nombreError: validarNombre(value) }));
        break;
      case 'correo':
        setCorreo(value);
        setErrores((prevErrores) => ({ ...prevErrores, correoError: validarCorreo(value) }));
        break;
      case 'contrasena':
        setContrasena(value);
        setErrores((prevErrores) => ({ ...prevErrores, contrasenaError: validarContrasena(value) }));
        break;
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formularioEsValido = Object.values(errores).every((error) => error === '');
    if (formularioEsValido) {
      const formData = { correo, contrasena };
      if (formulariosEnviados[correo]) {
        setMensajeExito('Datos ya puestos en otro momento');
      } else {
        setFormulariosEnviados((prevFormulariosEnviados) => ({ ...prevFormulariosEnviados, [correo]: formData }));
        console.log('Formulario enviado');
        setMensajeExito('El formulario se ha enviado correctamente');
      }
    } else {
      alert('Hay errores en el formulario');
    }
  };

  return (
    <div className='form-styles'>
      <form onSubmit={handleSubmit} className='form'>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={handleInputChange}
            className='input'
          />
          {errores.nombreError && <span className='error'>{errores.nombreError}</span>}
        </label>
        <br />
        <label>
          Correo electrónico:
          <input
            type="email"
            name="correo"
            value={correo}
            onChange={handleInputChange}
            className='input'
          />
          {errores.correoError && <span className='error'>{errores.correoError}</span>}
        </label>
        <br />
        <label>
          Contraseña:
          <input
            type="password"
            name="contrasena"
            value={contrasena}
            onChange={handleInputChange}
            className='input'
          />
          {errores.contrasenaError && <span className='error'>{errores.contrasenaError}</span>}
        </label>
        <br />
        <button type="submit" className='submit' disabled={!formularioValido}>
          Enviar
        </button>
        {mensajeExito && <p className='success'>{mensajeExito}</p>}
      </form>
    </div>
  );
};

export default Formulario;