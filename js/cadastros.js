async function listarCadastros(colletion) {
    let response = await fetch('https://eudes-batista.github.io/Relatorio/jsons/cadastros-principais/aplicacoes.json');
    let conteudo = await response.json();
    preencherCadastros(colletion, conteudo);
}

function preencherCadastros(colletion, cadastros) {
    let linhas = "";
    for (let cadastro of cadastros) {
        linhas += `       
        <li>
            <div class="collapsible-header"><i class="material-icons">${cadastro.icon}</i>
                <a href="${cadastro.id}.html" class="collection-item">${cadastro.nome} - ${cadastro.status}</a>
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

function preencherConfiguracoesCest() {
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