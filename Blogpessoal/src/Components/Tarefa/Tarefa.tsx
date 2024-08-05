import { useEffect, useState } from "react";

function Tarefa() {
    const [iscompletado, setIscompletado] = useState(false);
    const [tarefa, setTarefa] = useState ('');

    useEffect (() => {
        if (iscompletado) 
        setTarefa('Tarefa concluída');
    }, [iscompletado]
)
return(
<div>   
    <h1>Tarefa</h1>
    <h3>{tarefa}</h3>
    <p>Conclua a Tarefa</p>
    <button onClick={()=>setIscompletado(true)}>Conclua a tarefa</button>
</div>
)

}
export default Tarefa;