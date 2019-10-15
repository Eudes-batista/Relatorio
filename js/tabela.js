let modulos = getModulos();

function preencherTabela(tbody) {
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

function getModulos() {
    return [
        { id: "cadastros", nome: "Cadastros" },
        { id: "configuracoes", nome: "Configurações" },
        { id: "compras", nome: "Compras" },
        { id: "vendas", nome: "Vendas" },
    ];
}