import './Click.css';
import { useState } from 'react';

function Click(){
    const [vecesClickeadas, setVecesClickeadas] = useState (0);
    const [mensaje, setMensaje] = useState('');

    const hizoClick1 = () => {
        setMensaje("hola");
    };
    const hizoClick2 = () => {
        setVecesClickeadas(vecesClickeadas + 1);
    };

    if(vecesClickeadas === 2){
        setMensaje("chau");
        setVecesClickeadas(0);
    }

    return(
        <div className='Cont'>
            <div className='botones'>
                <button onClick={hizoClick1} className='boton2'>1 CLICK</button>
                <button onClick={hizoClick2} className='boton2'>2 CLICK</button>
            </div>
            {mensaje && <p className='mensaje'>{mensaje}</p>}
        </div>
    );
}

export default Click;