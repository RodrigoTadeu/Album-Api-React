import React, { useEffect } from "react";


export default function Nomes(props) {
 
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((resultado) => {
        props.setListaDeUsuarios(resultado);
      });
  });

  return (
    <div>
      <div className="autor">
        <label>Selecione um autor: </label>
        <select onChange={(val) => props.setAutorSelecionado(val.target.value)}>
          <option value={0}>Selecione</option>
          {props.listaDeUsuarios.length > 0 &&
            props.listaDeUsuarios.map((user) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
