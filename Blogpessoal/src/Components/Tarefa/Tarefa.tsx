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
    <h1 className="text-white font-bold py-2 px-4 rounded">Tarefa</h1>
    <h3 className="text-white font-bold py-2 px-4 rounded">{tarefa}</h3>
    <p className="text-white font-bold py-2 px-4 rounded">Conclua a Tarefa</p>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>setIscompletado(true)}>Conclua a tarefa</button>
</div>
)

}
export default Tarefa;