import * as Jogos from "../jogos/Jogos.js";
import dados2 from "../jogos/Jogos2.json" with {type: 'json'};

window.addEventListener("popstate", function () {
    renderizandoRotas(window.location.pathname);
});

const root = document.getElementById('root');

document.addEventListener("click", function (event) {
    if(event.target.matches("[data-link]")) {
        event.preventDefault();
        const novoCaminho = event.target.getAttribute("href");
        navegarPara(novoCaminho);
    }
});

function navegarPara(path) {
    history.pushState({}, "", path);
    renderizandoRotas(path);
}

const rotas = {
    "/": {
        renderizar : function() {
            initApp();
            paginaJogo();
        }
    },
    "/comunidade": {
        renderizar : function() {
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaHero("Comunidade", "Este é o espaço onde pessoas se conectam, compartilham ideias, tiram dúvidas e colaboram para tornar nossa comunidade cada vez melhor. Sinta-se à vontade para participar das discussões, publicar conteúdos relevantes, ajudar outros membros e trocar experiências. Aqui, toda contribuição feita com respeito e educação é bem-vinda."));
            root.appendChild(criaFooter());
        }
    },
    "/jogos": {
        renderizar : function() {
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaHero("Jogos", "Listagem de jogos disponíveis:"));
            root.appendChild(Jogos.criaJogosDestaques());
            root.appendChild(criaFooter());
        }
    },
    "/sobre": {
        renderizar : function() {
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaHero("Sobre", "Nosso site foi criado com o objetivo de oferecer um ambiente moderno, acessível e colaborativo para todos os usuários. Acreditamos que a tecnologia pode aproximar pessoas, facilitar o compartilhamento de conhecimento e proporcionar uma experiência prática e agradável."));
            root.appendChild(criaFooter());
        }
    },
    "/contato": {
        renderizar : function() {
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaContato());
        }
    },

    "/instalar": {
        renderizar : function() {
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaHero("Instalar", "Instale a Steam em seu computador e tenha acesso a milhares de jogos, atualizações automáticas, recursos de comunidade e muito mais. Aproveite a experiência completa da plataforma e mergulhe no mundo dos games."));
            root.appendChild(criaFooter());
        }
    },
    "/jogo": {
        renderizar : function(id) {
            let jogo = Jogos.encontrarJogoPorAppid(id);
            root.appendChild(criaHeader());
            root.appendChild(Jogos.criaSecaoJogo(jogo.titulo, jogo.descricao, jogo.url_imagem));

        }
    }
}

function renderizandoRotas(path) {
    root.innerHTML = "";

    let partes = path.split("/");

    const novoPath = "/" + partes[1];
    const pagina = rotas[novoPath];


    if(pagina) {
        // rotas[path].renderizar();
        if(partes[1] === "jogo"){
            const id = partes[2];
            pagina.renderizar(id);
        } else {
            pagina.renderizar()
        }       
    } else {
        root.innerHTML = `
            <h1>404</h1>
            <p>Página não encontrada.</p>
        `;
    }
}

let criaLinkCssApp = () => {
    const linkCSS = document.createElement("link");

    linkCSS.rel = "stylesheet";
    linkCSS.href = "./componentes/app/app.css";

    document.head.appendChild(linkCSS);
}

let criaLinkCssJogos = () => {
    const link = document.createElement("link");

    link.rel = "stylesheet";
    link.href = "./componentes/jogos/jogos.css";

    document.head.appendChild(link);
}

criaLinkCssApp();
criaLinkCssJogos();

let criaHeader = () => {
    const header = document.createElement("header");

    const div = document.createElement("div");
    div.classList.add("logo");
    div.textContent = "STEAM";
    header.appendChild(div);

    const nav = document.createElement("nav");
    nav.id = "subnav";

    const a1 = document.createElement("a");
    a1.href = "/";
    a1.setAttribute("data-link", true);
    a1.textContent = "Loja";

    const a2 = document.createElement("a");
    a2.href = "/comunidade";
    a2.setAttribute("data-link", true);
    a2.textContent = "Comunidade";

    const a3 = document.createElement("a");
    a3.href = "/jogos";
    a3.setAttribute("data-link", true);
    a3.textContent = "Jogos";

    const a4 = document.createElement("a");
    a4.href = "/sobre";
    a4.setAttribute("data-link", true);
    a4.textContent = "Sobre";

    const a5 = document.createElement("a");
    a5.href = "/contato";
    a5.setAttribute("data-link", true);
    a5.textContent = "Contato";

    const a6 = document.createElement("a");
    a6.href = "/instalar";
    a6.setAttribute("data-link", true);
    a6.classList.add("btn-nav");
    a6.textContent = "Instalar Steam";

    nav.appendChild(a1);
    nav.appendChild(a2);
    nav.appendChild(a3);
    nav.appendChild(a4);
    nav.appendChild(a5);
    nav.appendChild(a6);

    header.appendChild(nav);

    //criarLink("Games", "#");
    //criarLink("Projetos", "#");

    return header;
}

let criaFooter = () => {
    const footer = document.createElement("footer");

    const p = document.createElement("p");
    p.textContent = "milton/miltin";

    footer.appendChild(p);

    return footer;
}


let paginaJogo = () => {

}

let initApp = () => {
    root.appendChild(criaHeader());
    root.appendChild(Jogos.criaHero("Promoção de Verão Steam", "Milhares de jogos com até 90% de desconto. Não perca essa oportunidade!"));
    root.appendChild(Jogos.criaJogosDestaques());
    root.appendChild(criaFooter());
}

/*
console.log("\n========== Atividade 1 — Listar títulos no console =============\n");
Jogos.listarTitulos();

console.log("\n=========== Atividade 2 — Mostrar título e gênero =============\n");
Jogos.listarTitulosGeneros();
*/

//Atividade 3 — Criar cards no HTML com forEach
//Ver a funcão criarJogosDestaque no arquivo Jogos.js

/*
console.log("\n=========== Atividade 4 — Contar quantos jogos têm desconto =====\n");
Jogos.contarJogosDesconto();

console.log("\n=========== Atividade 5 — Criar vetor só com títulos ============\n");
Jogos.criarVetorTitulo();

console.log("\n=========== Atividade 6 — Criar vetor com título e preço final ===\n");
Jogos.criarVetorTituloPreco();

console.log("\n=========== Atividade 7 — Criar frases prontas ===================\n");
Jogos.criarFrasesProntas();

console.log("\n=========== Atividade 8 — Filtrar jogos de um gênero específico ==\n");
Jogos.filtrarPorGenero("Plataforma");

console.log("\n=========== Atividade 9 — Filtrar jogos com desconto maior que 50% \n");
Jogos.filtrarDescontoMaior50();

console.log("\n=========== Atividade 10 — Filtrar jogos com mais de 10 milhões de downloads \n");
Jogos.filtrarMais10MDownloads();

console.log("\n=========== Atividade 11 — Filtrar jogos gratuitos ================\n");
Jogos.filtrarGratuitos();

console.log("\n=========== Atividade 12 — Filtrar jogos baratos ==================\n");
Jogos.filtrarBaratos();

console.log("\n=========== Atividade 13 — Encontrar um jogo pelo título ==========\n");
Jogos.encontrarJogoPorTitulo("Cuphead");

console.log("\n=========== Atividade 14 — Encontrar o primeiro jogo gratuito =====\n");
Jogos.encontrar1oJogoGratuito();

console.log("\n=========== Atividade 15 — Encontrar o primeiro jogo com desconto acima de 70% \n");
Jogos.encontrar1oJogoDesconto70();

console.log("\n=========== Atividade 16 — Buscar jogo pelo appid =================\n");
Jogos.encontrarJogoPorAppid(227300);

console.log("\n=========== Atividade 17 — Filtrar FPS e depois mapear os títulos =\n");
Jogos.filtrarFpsMapearTitulo();

console.log("\n=========== Atividade 18 — Buscar um jogo e mostrar detalhes na tela \n");
Jogos.buscarJogoMostrarDetalhes("God of War");
*/

let pesquisarJogoGenero = (genero) => {
    return dados2.filter(e => {
        if(e.generos.includes(genero)){
            return e;
        }
    })
}

const filtro2 = pesquisarJogoGenero("Ação");

console.log(filtro2);

//initApp();
paginaJogo();

//console.error("Deu ruim aí, mano");

renderizandoRotas(window.location.pathname);