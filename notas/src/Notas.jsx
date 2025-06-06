

const Notas = (props) =>{
    console.log(JSON.stringify(props.notas[0]));

    return(

        <div id="nota">
            {props.notas.map((nota) =>(
                <div key={nota.id} id="notas">
                    <h2>{nota.titulo}</h2>
                    {/* <p>{nota.descricao}</p> */}
                </div>
            ))}
        </div>
    )

}

export default Notas;

// pq depois do arrow function é um () e não {}:

// Quando você usa () em vez de {} após a arrow function, está retornando diretamente o JSX sem precisar de uma declaração return.

// Exemplo:


// {props.notas.map((nota) => (
//     <h2>{nota.titulo}</h2>
// ))}
// Se usasse {}, seria necessário um return explícito:


// {props.notas.map((nota) => {
//     return <h2>{nota.titulo}</h2>;
// })}