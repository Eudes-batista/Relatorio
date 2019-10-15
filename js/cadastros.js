let cadastros = getCadastros();

function getCadastros() {
    return [
        { id: "empresa", nome: "Empresa" },
        { id: "usuario", nome: "Usuario" },
        { id: "cfop", nome: "CFOP" },
        { id: "ncm", nome: "NCM" },
        { id: "cest", nome: "CEST" },
    ];
}

function preencherCadastros(colletion) {
    let linhas = "";
    for (let cadastro of cadastros) {
        linhas += `       
        <li>
            <div class="collapsible-header"><i class="material-icons">apps</i>
                <a href="${cadastro.id}.html" class="collection-item">${cadastro.nome}</a>
            </div>
             <div class="collapsible-body">
                ${preencherInformacoesAdicionais(cadastro.id)}
            </div>
        </li> 
    `;
    }
    colletion.innerHTML += linhas;
}

function preencherInformacoesAdicionais(id) {
    if (id === "empresa") {
        return `
        <div class="collection">
            <a href="#!" class="collection-item active">Configurações Padrões</a>
            <a href="#!" class="collection-item">Cestas de Tributações de Produtos</a>
            <a href="#!" class="collection-item">Cestas de Tributações de Serviços</a>
            <a href="#!" class="collection-item">IBPT</a>
            <a href="#!" class="collection-item">NFC-e</a>
            <a href="#!" class="collection-item">NF-e</a>
            <a href="#!" class="collection-item">SAT-e</a>
            <a href="#!" class="collection-item">CT-e</a>
            <a href="#!" class="collection-item">Manifesto</a>
            <a href="#!" class="collection-item">GNRE  (Guia Nacional de Recolhimento de Tributos Estaduais)</a>
            <a href="#!" class="collection-item">NFSe</a>
        </div>
        `;
    }
}