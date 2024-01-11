function atualizaperfil(dadosPerfil) {

    const foto = document.getElementById('perfil.foto');
    foto.src = dadosPerfil.foto;


    const nome = document.getElementById('perfil.nome')
    nome.innerText = dadosPerfil.nome
    const job = document.getElementById('perfil.job')
    job.innerText = dadosPerfil.job
    const local = document.getElementById('perfil.local')
    local.innerText = dadosPerfil.local
    const tel = document.getElementById('perfil.tel')
    tel.innerText = dadosPerfil.tel
    const email = document.getElementById('perfil.email')
    email.innerText = dadosPerfil.email
}


(async () => {
    const dadosPerfil = await buscaDadosPerfil();
    atualizaperfil(dadosPerfil)
})()