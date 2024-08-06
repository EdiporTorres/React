import React, { useState} from 'react'

function Contador() {
    const [valor, setValor] = useState(0);

    function somarMaisUm() {
        setValor(valor + 1);
    }
  return (
    <div>
        <p>O Valor é: {valor}</p>
        <button  onMouseDown={somarMaisUm}>Clique aqui</button>
    </div>
  )
}

export default Contador