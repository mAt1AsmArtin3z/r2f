import React, { useState, useEffect } from 'react';
import './Galeria.css';
import image1 from './fotos/1.jfif';
import image2 from './fotos/2.jfif';
import image3 from './fotos/3.jfif';
import image4 from './fotos/4.jfif';
import image5 from './fotos/5.jfif';
import image6 from './fotos/6.jfif';
import image7 from './fotos/7.jfif';

const images = [image1, image2, image3, image4, image5, image6, image7];

function Galeria() {
    const [selectedIndex, setSelectedIndex] = useState(0);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowRight') {
                setSelectedIndex((prevIndex) => (prevIndex + 1) % images.length);
            } else if (event.key === 'ArrowLeft') {
                setSelectedIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div className='contenedor'>
            <div className='galeria'>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={index === selectedIndex ? 'selected' : ''}
                        alt={`Imagen ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}

export default Galeria;
