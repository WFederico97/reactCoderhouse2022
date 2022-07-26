import {useState} from 'react'

export default function Box (props) {

    const [mostrar, setMostrar] = useState(false)
    function mostrarOcultarContador () {
        setMostrar(!mostrar);
    }
    return (
        <div className='box'>
            {props.saludo}
            {props.children}
            <input type="checkbox" id="mostrarClick" onClick={mostrarOcultarContador} />
          <label htmlFor="mostrarclick">Mostrar boton de contador</label>
          {mostrar ?  props.Contador : null};
        </div>
    );
}