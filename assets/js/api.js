async function buscaDadosPerfil() {
    const url = 'https://raw.githubusercontent.com/Lucassilva1010/portifolio2024/main/assets/data/profile.json?token=GHSAT0AAAAAACFEOXLGB3CE4UUF423BF7UYZNAIK4A';

    const buscaDados = await fetch(url)
    return await buscaDados.json()
}
