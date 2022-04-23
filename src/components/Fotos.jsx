import React, {useEffect} from "react";

export default function Fotos(props) {
  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/photos?albumId=${props.albumSelecionado}`
    )
      .then((res) => res.json())
      .then((resultado) => {
        props.setListaDeFotos(resultado);
      });
  }, [props.albumSelecionado]);

  return (
    <div>
      <div className="foto">
        {props.listaDeFotos.map((imagem) => (
          <div key={imagem.id}>
            <img src={imagem.url} className="img" /> <br />
            <div className="texto">{imagem.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
