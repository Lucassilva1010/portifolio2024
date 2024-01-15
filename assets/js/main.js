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
function atualizaSoftSkills(dados) {
    const pessoal = document.getElementById('profile.skills.softSkills');
    pessoal.innerHTML = dados.skills.softSkills.map(skills => `<li>${skills}</li>`).join('')
}

function atualizaHardSkills(dados) {
    const ferramentas = document.getElementById('profile.skills.hardSkills');
    ferramentas.innerHTML = dados.skills.hardSkills.map(skills => ` <img src="${skills.logo}" alt="${skills.nome}" title="${skills.nome}"></li>`).join('')
}

function atualizaLinguagens(dados) {
    const pessoal = document.getElementById('idiomas');
    pessoal.innerHTML = dados.idiomas.map(idioma => `<li>${idioma}</li>`).join('')
}
function atualizaPortifolio(dados) {
    const ferramentas = document.getElementById('projetos');
    ferramentas.innerHTML = dados.portfolio.map(projeto => {
        return `  <li>
    <h3 ${projeto.github ? 'class="git"' : ''}>${projeto.nome}</h3 >
    <a href="${projeto.url}"
        target="_blank">${projeto.url}</a>
</li > `
    }).join('')
}

function atualizaExperiencias(dados) {
    const descricao = document.getElementById('experiencias');
    descricao.innerHTML = dados.experienciasProfisionais.map(projeto => {
        return `
        <li>
            <h3 class="titulo">${projeto.titulo}</h3>
            <p class="periodo">${projeto.periodo}</pan>
            <p>${projeto.descricaoProjeto}
            </p>
        </li> `
    }).join('')
}



(async () => {
    const dadosPerfil = await buscaDadosPerfil();
    atualizaperfil(dadosPerfil)
    atualizaSoftSkills(dadosPerfil)
    atualizaHardSkills(dadosPerfil)
    atualizaLinguagens(dadosPerfil)
    atualizaPortifolio(dadosPerfil)
    atualizaExperiencias(dadosPerfil)
})()