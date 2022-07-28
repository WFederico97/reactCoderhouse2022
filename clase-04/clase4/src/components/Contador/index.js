import {useState,useEffect} from 'react'


export default function Contador(){
    const [contador, setContador] = useState(0);
    
    useEffect(()=>{
        console.log('contador mounted!');
        return () => {
            console.log('contador listo para ser desmontado')
        }
    
      }, [contador])
    
    function agregarAlContador() {
        setContador(contador + 1);
        console.log(contador);
    }
 
   
    return(
        <div>
            <p>
               Cantidad: {contador}
            </p>
            <br></br>
            <button onClick={agregarAlContador}>Agregar producto</button>
        </div>
    )
}