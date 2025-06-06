import { useState } from 'react';
import './App.css';
import Notas from './Notas';

function App() {
  const [notas , setNotas] = useState(
    [
      {titulo: 'notas 01',
      descricao: 'detalhes nota 01',
      id:1,
      },
      {titulo: 'notas 02',
      descricao: 'detalhes nota 02',
      id:2,
      },
      {titulo: 'notas 03',
      descricao: 'detalhes nota 03',
      id:3,
      },
    ]
  )

  return(
    <div id='principal'>
      <h1 id='titulo'>BLOCO DE NOTAS</h1>
      {/* <Notas notas={notas} /> */}
      <Notas notas={notas} />

    </div>
  )
}
export default App
