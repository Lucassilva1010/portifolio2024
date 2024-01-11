function atualizaperfil(dadosPerfil) {

    const foto = document.getElementById('perfil.foto');
    foto.src = dadosPerfil.foto;
    foto.alt = dadosPerfil.nome;


    const nome = document.getElementById('nome')
    nome.innerText = dadosPerfil.nome
    const job = document.getElementById('job')
    nome.innerText = dadosPerfil.job
    const local = document.getElementById('local')
    nome.innerText = dadosPerfil.local
    const tel = document.getElementById('tel')
    nome.innerText = dadosPerfil.tel
    const email = document.getElementById('email')
    nome.innerText = dadosPerfil.email
}


(async () => {
    const dadosPerfil = await buscaDadosPerfil();
    atualizaperfil(dadosPerfil)
})()