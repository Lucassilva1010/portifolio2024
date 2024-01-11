function atualizaperfil(dadosPerfil) {

    const foto = document.getElementById('perfil.foto');
    foto.src = dadosPerfil.foto;
    foto.alt = dadosPerfil.nome;

}


(async () => {
    const dadosPerfil = await buscaDadosPerfil();
    atualizaperfil(dadosPerfil)
})()