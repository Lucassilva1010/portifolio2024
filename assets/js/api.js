async function buscaDadosPerfil() {
    const url = 'https://raw.githubusercontent.com/RenanJPaula/js-developer-portfolio/main/data/profile.json';
    const buscaDados = await fetch(url)
    return await buscaDados.json()
}
