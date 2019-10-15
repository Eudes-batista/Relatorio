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
    let response = await fetch('./../jsons/modulos/modulos.json');
    let conteudo = await response.json();
    preencherTabela(tbody, conteudo);
}