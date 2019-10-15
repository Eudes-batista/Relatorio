let cadastros = getCadastros();

function getCadastros() {
    return [
        { id: "empresa", nome: "Empresa", icon: "remove" },
        { id: "usuario", nome: "Usuario", icon: "check" },
        { id: "cfop", nome: "CFOP", icon: "check" },
        { id: "ncm", nome: "NCM", icon: "check" },
        { id: "cest", nome: "CEST", icon: "check" },
        { id: "regicao-municipio", nome: "Região/Municipio", icon: "check" },
        { id: "tipo-de-pagamento", nome: "Tipo de Pagamento", icon: "check" },
    ];
}

function preencherCadastros(colletion) {
    let linhas = "";
    for (let cadastro of cadastros) {
        linhas += `       
        <li>
            <div class="collapsible-header"><i class="material-icons">${cadastro.icon}</i>
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
        return preencherConfiguracoesEmpresa();
    }
    if (id === "usuario") {
        return preencherConfiguracoesUsuario();
    }
    if (id === "cfop") {
        return preencherConfiguracoesCfop();
    }
    if (id === "ncm") {
        return preencherConfiguracoesNcm();
    }
    if (id === "cest") {
        return preencherConfiguracoesCest();
    }
    if (id === "regicao-municipio") {
        return preencherConfiguracoesRegiaoMunicipio();
    }
    if (id === "tipo-de-pagamento") {
        return preencherConfiguracoesTipoDePagamento();
    }
}

function preencherConfiguracoesEmpresa() {
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

function preencherConfiguracoesUsuario() {
    return `
    <div class="collection">
        <a href="#!" class="collection-item active">Listagem</a>
        <a href="#!" class="collection-item">Cadastro</a>
    </div>
    `;
}

function preencherConfiguracoesCfop() {
    return `
    <div class="collection">
        <a href="#!" class="collection-item active">Listagem</a>
        <a href="#!" class="collection-item">Cadastro</a>
    </div>
    `;
}

function preencherConfiguracoesNcm() {
    return `
    <div class="collection">
        <a href="#!" class="collection-item active">Listagem</a>
        <a href="#!" class="collection-item">Cadastro</a>
    </div>
    `;
}

function preencherConfiguracoesRegiaoMunicipio() {
    return `
    <div class="collection">
        <a href="#!" class="collection-item active">Listagem</a>
        <a href="#!" class="collection-item">Cadastro</a>
    </div>
    `;
}

function preencherConfiguracoesTipoDePagamento() {
    return `
    <div class="collection">
        <a href="#!" class="collection-item active">Listagem</a>
        <a href="#!" class="collection-item">Cadastro</a>
    </div>
    `;
}