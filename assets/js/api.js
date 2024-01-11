async function buscaDadosPerfil() {
    const url = 'https://raw.githubusercontent.com/Lucassilva1010/portifolio2024/main/assets/data/profile.json?token=GHSAT0AAAAAACFEOXLG2XCPKPQVT5L2Q2IUZNAH37Q';
    const buscaDados = await fetch(url)
    return await buscaDados.json()
}
