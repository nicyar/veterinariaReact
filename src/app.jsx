import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import ListadoPacientes from "./componentes/ListadoPacientes";
import {useState,useEffect} from 'react';


function App() {
  
  const[pacientes,setPacientes]=useState([]);
  const[paciente,setPaciente]=useState({});

  useEffect(()=>{
    console.log('componente listo o cambio de paciente')
  },[pacientes])

  const elimminarPaciente=(id)=>{
    
    const pacientesActualizados=pacientes.filter(paciente => paciente.id != id);

    setPaciente(pacientesActualizados)

  }
  
  return (
    <div className="container mx-auto">

      <Header 
        /* numeros={1}
        isAdmin={false}
        fn={imprime2mas2} */
      />
      <div className="mt-12 md:flex">{/* lo va a partir en la mitad solo en un dispositivo mas grande  */}
      
       <Formulario
       pacientes={pacientes}
       setPacientes={setPacientes} 
       paciente={paciente}
       setPaciente={setPaciente}
       /> 
       <ListadoPacientes 
       pacientes={pacientes}
       setPaciente={setPaciente}
       eliminarPaciente={elimminarPaciente}
       />
        
      </div>

    </div>
  )
}

export default App
