import React, {useEffect} from "react";

export default function Album(props) {
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/albums?userId=${props.autorSelecionado}`
    )
      .then((res) => res.json())
      .then((resultado) => {
        props.setListaDeAlbum(resultado);
      });
  }, [props.autorSelecionado]);

  return (
    <div>
      <div className="album">
        <label>Selecione um autor: </label>
        <select onChange={(e) => props.setAlbumSelecionado(e.target.value)}>
          <option value={0}>Selecione</option>
          {props.listaDeAlbum.length > 0 &&
            props.listaDeAlbum.map((val) => (
              <option key={val.id} value={val.id}>
                {val.title}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}
