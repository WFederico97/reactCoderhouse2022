import { useState, useEffect } from 'react';
// hooks

function Contador() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);
    
    useEffect(() => {
        console.log('%c    Renderizado Siempre', 'color: #38761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }        
    });
    useEffect(() => {
        console.log('%c    >>>>> Renderizado Contador', 'color: #00761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, [contador]);
    useEffect(() => {
        console.log('%c    >>>>> Renderizado contador2', 'color: #38001d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, [contador2]);
    useEffect(() => {
        console.log('>>>>> Contador mounted!');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }        
    }, []);

    function agregarAlContador () {
        setContador(contador + 1);
    }
    function agregarAlContador2 () {
        setContador2(contador2 + 1);
    }

    console.log('Contador listo para el render');

    return (
        <div>
            <p>
                {contador}
                {contador2}
            </p>
            <br />
            <button onClick={agregarAlContador}>Agregar al contador 1</button>
            <button onClick={agregarAlContador2}>Agregar al contador 2</button>
        </div>
    );
}


export default Contador;

