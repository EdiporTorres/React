
interface cardProps {
    titulo: string
    descricao: string
}

function Card({ titulo, descricao }: cardProps) {
    return (
        <div style={{
            width: "500px",
            border: "5px solid crimson",
            margin: "0 0 1rem 0",
            backgroundColor: "lightgray",
        }}>
            <h1>{titulo}</h1>
            <p>{descricao}</p>
        </div>
    );
}
     export default Card;