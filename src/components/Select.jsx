import React, {useState} from "react";
import Usuarios from "./Usuarios"
import Album from "./Album"
import Fotos from "./Fotos"


export default function Select() {
  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
  const [autorSelecionado, setAutorSelecionado] = useState([]);
  const [listaDeAlbum, setListaDeAlbum] = useState([]);
  const [albumSelecionado, setAlbumSelecionado] = useState([]);
  const [listaDeFotos, setListaDeFotos] = useState([]);
  const [fotoSelecionada, setFotoSelecionada] = useState([]);

  return (
    <div>
      <Usuarios
        listaDeUsuarios = {listaDeUsuarios} setListaDeUsuarios = {setListaDeUsuarios}
        autorSelecionado = {autorSelecionado} setAutorSelecionado = {setAutorSelecionado}
      />

      <Album
        listaDeAlbum = {listaDeAlbum} setListaDeAlbum = {setListaDeAlbum}
        albumSelecionado = {albumSelecionado} setAlbumSelecionado = {setAlbumSelecionado}

        listaDeUsuarios = {listaDeUsuarios} setListaDeUsuarios = {setListaDeUsuarios}
        autorSelecionado = {autorSelecionado} setAutorSelecionado = {setAutorSelecionado}
      />

      <Fotos
        listaDeFotos = {listaDeFotos} setListaDeFotos = {setListaDeFotos}
        fotoSelecionada = {fotoSelecionada} setFotoSelecionada = {setFotoSelecionada}

        listaDeAlbum = {listaDeAlbum} setListaDeAlbum = {setListaDeAlbum}
        albumSelecionado = {albumSelecionado} setAlbumSelecionado = {setAlbumSelecionado}
      />
    </div>
  );
}
