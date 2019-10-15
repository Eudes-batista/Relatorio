function preencherTabela(tbody, modulos) {
    let linhas = "";
    for (let modulo of modulos) {
        linhas += `
            <tr>
                <td>
                    <a href="${modulo.id}.html">${modulo.nome}</a>
                </td>
            </tr>
        `;
    }
    tbody.innerHTML += linhas;
}
async function listarCadastros(tbody) {
    let response = await fetch('https://eudes-batista.github.io/Relatorio/jsons/modulos/modulos.json');
    let conteudo = await response.json();
    preencherTabela(tbody, conteudo);
}