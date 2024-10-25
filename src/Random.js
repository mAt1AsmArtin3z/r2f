import './Random.css';
import React, { useState} from 'react';


function Random (){ 
    const [numero, setNumero] = useState(0);
    const [mensaje, setMensaje] =useState('');
    const cambio = (e) => {
        setNumero(e.target.value);
    };
    const envio = (e) => {
        e.preventDefault();
        const numeroIngresado = parseInt(numero, 10);
        const numeroGanador = '60' //ponerlo en ramdom luego

        if (numeroIngresado < numeroGanador){
            setMensaje("el numero es mas alto");
        }
        else if (numeroIngresado > numeroGanador){
            setMensaje("el numero es menor");
        }
        else{
            setMensaje("sos bueno bro, ganaste, ahora resolve esto: ∫₀⁺∞ e^(-x²) / √(x² + 1) dx ");
        }
    };

    return (
        <div className='Contenedor'>
            <form onSubmit={envio}>
            <h1 className='texto'>Ingresa un número entre 1 y 100:</h1>
                <input type="number" value={numero} required onChange={cambio} className='form'/>
                <button type="submit" className='boton'>Enviar</button>
                {mensaje && <p>{mensaje}</p>}
            </form>
        </div>
        
      );
}


export default Random;