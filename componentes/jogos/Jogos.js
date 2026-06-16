import dados from './Jogos.json' with {type: 'json'};

export let criaHero = (titulo, descricao) => {
    const section = document.createElement("section");
    section.classList.add("hero");

    const div = document.createElement("div");
    div.classList.add("hero-content");

    const h1 = document.createElement("h1");
    h1.textContent = titulo;
    div.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = descricao;
    div.appendChild(p);

    const button = document.createElement("button");
    button.classList.add("cta");
    button.textContent = "Explorar Ofertas";
    div.appendChild(button);

    section.appendChild(div);

    return section;
}

export let criaJogosDestaques = () => {
    const sectionGames = document.createElement("section");
    sectionGames.classList.add("games");

    const titulo = document.createElement("h2");
    titulo.textContent = "Jogos em Destaque";
    sectionGames.appendChild(titulo);

    const divCards = document.createElement("div");
    divCards.classList.add("game-grid");
    divCards.id = "cards";
    sectionGames.appendChild(divCards);

    /*const div = document.getElementById("temp");
    div.appendChild(sectionGames);*/

    /*let gtaV = criaCard("GTA V", "-90%", "https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg");
    let amongUs = criaCard("Among Us", "-50%", "https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg");
    let rdr2 = criaCard("Red Dead Redemption II", "-15%", "https://cdn.akamai.steamstatic.com/steam/apps/1174180/header.jpg");

    divCards.appendChild(gtaV);
    divCards.appendChild(amongUs);
    divCards.appendChild(rdr2);*/

    /*dados.forEach(e => {
        divCards.appendChild(criaCard(e.titulo, e.descricao, e.url_imagem))
    });*/
    
    //Atividade 3 — Criar cards no HTML com forEach
    listarJogosCard(divCards);

    //console.log(dados.filter(e => {if(e.genero == "FPS"){return true}}));

    /*inserirElementoCard(gtaV);
    inserirElementoCard(amongUs);
    inserirElementoCard(rdr2);*/

    return sectionGames;
}

export let criaCard = (nome, desconto, urlImg, id) => {
    const novoCard = document.createElement("div");
    novoCard.classList.add("game-card");
    novoCard.setAttribute("data-link", true);
    novoCard.setAttribute("href", "/jogo/" + id);

    const imgCard = document.createElement("img");
    imgCard.classList.add("game-img");
    //imgCard.setAttribute("src", urlImg);
    //imgCard.setAttribute("width", "200px");

    imgCard.src = urlImg;
    imgCard.width = 200;

    const nomeJogo = document.createElement("h3");
    nomeJogo.textContent = nome;

    const descontoJogo = document.createElement("p");
    descontoJogo.textContent = desconto;

    novoCard.appendChild(imgCard);
    novoCard.appendChild(nomeJogo);
    novoCard.appendChild(descontoJogo);

    //cards.appendChild(novoCard);
    return novoCard;
}

export let criaContato = () => {
    const section = document.createElement("section");
    section.classList.add("contact");

    const h2 = document.createElement("h2");
    h2.textContent = "Receba Ofertas Exclusivas";
    section.appendChild(h2);

    const form = document.createElement("form");

    const inNome = document.createElement("input");
    inNome.setAttribute("type", "text");
    inNome.placeholder = "Seu Nome";
    inNome.required = true;
    form.appendChild(inNome);

    const inEmail = document.createElement("input");
    inEmail.setAttribute("type", "email");
    inEmail.placeholder = "Seu Email";
    inEmail.required = true;
    form.appendChild(inEmail);

    const btCadastrar = document.createElement("button");
    btCadastrar.setAttribute("type", "submit");
    btCadastrar.textContent = "Cadastrar";
    form.appendChild(btCadastrar);

    section.appendChild(form);

    return section;
}

export let criaSecaoJogo = (nomeJogo, descricao, urlImg) => {
    const section = document.createElement("section");
    section.classList.add("jogo");

    const divContent = document.createElement("div");
    divContent.classList.add("jogo-content");

    const divInfo = document.createElement("div");
    divInfo.classList.add("jogo-info");

    const h1 = document.createElement("h1");
    h1.textContent = nomeJogo;
    divInfo.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = descricao;
    divInfo.appendChild(p);

    const btComprarJogo = document.createElement("button");
    btComprarJogo.classList.add("cta");
    btComprarJogo.textContent = "Comprar " + nomeJogo;
    divInfo.appendChild(btComprarJogo);

    divContent.appendChild(divInfo);

    const divImagem = document.createElement("div");
    divImagem.classList.add("jogo-imagem");

    const img = document.createElement("img");
    img.src = urlImg;
    img.alt = "Imagem do jogo " + nomeJogo;
    divImagem.appendChild(img);

    divContent.appendChild(divImagem);

    section.appendChild(divContent);

    return section;
}

export let listarTitulos = () => {
    dados.forEach((jogo) => {
        console.log(jogo.titulo);
    });
}

export let listarTitulosGeneros = () => {
    dados.forEach((jogo) => {
        console.log(jogo.titulo + "\n" + jogo.genero);
    });
}

export let listarJogosCard = (div) => {
    dados.forEach(e => {
        div.appendChild(criaCard(e.titulo, e.descricao, e.url_imagem, e.appid))
    });
}

export let contarJogosDesconto = () => {
    let qtd = 0;

    dados.forEach((jogo) => {
        if(jogo.desconto > 0){
            qtd++;
        }
    })

    console.log("Quantidade de jogos com desconto: " + qtd);
}

export let criarVetorTitulo = () => {
    let vetJogos = dados.map(jogo => {
        return jogo.titulo;
    });
    console.log(vetJogos);
}

export let criarVetorTituloPreco = () => {
    let vetJogos = dados.map(jogo => {
        return {
            "titulo": jogo.titulo,
            "preco": jogo.valor_mercado
        };
    });
    console.log(vetJogos);
}

export let criarFrasesProntas = () => {
    dados.forEach(jogo => {
        let desconto = jogo.valor_mercado * (jogo.desconto / 100);
        let valorFinal = jogo.valor_mercado - desconto;
        console.log(
            "O jogo " + jogo.titulo + ", do gênero " + jogo.genero + ", possui mais de " + jogo.qtd_downloads +
            " downloads e está disponível por apenas R$" + valorFinal.toFixed(2) + " aqui na Steam!"
        );
    });
}

export let filtrarPorGenero = (genero) => {
    let jogosFiltrados = dados.filter(jogo => {
        if(jogo.genero == genero){
            return jogo;
        }
    });

    console.log(jogosFiltrados);
}

export let filtrarDescontoMaior50 = () => {
    let jogosFiltrados = dados.filter(jogo => {
        if(jogo.desconto > 50){
            return jogo;
        }
    });

    console.log(jogosFiltrados);
}

export let filtrarMais10MDownloads = () => {
    let jogosFiltrados = dados.filter(jogo => {
        if(jogo.qtd_downloads > 10000000){
            return jogo;
        }
    });

    console.log(jogosFiltrados);
}

export let filtrarGratuitos = () => {
    let jogosFiltrados = dados.filter(jogo => {
        if(jogo.valor_mercado == 0){
            return jogo;
        }
    });

    console.log(jogosFiltrados);
}

export let filtrarBaratos = () => {
    let jogosFiltrados = dados.filter(jogo => {
        if(jogo.valor_mercado <= 20){
            return jogo;
        }
    });

    console.log(jogosFiltrados);
}

export let encontrarJogoPorTitulo = (titulo) => {
    let jogo = dados.find(jogo => {
        return jogo.titulo == titulo;
    });

    console.log(jogo);
}

export let encontrar1oJogoGratuito = () => {
    let jogo = dados.find(jogo => {
        return jogo.valor_mercado == 0;
    });

    console.log(jogo);
}

export let encontrar1oJogoDesconto70 = () => {
    let jogo = dados.find(jogo => {
        return jogo.desconto > 70;
    });

    console.log(jogo);
}

export let encontrarJogoPorAppid = (id) => {
    return dados.find(jogo => {return jogo.appid == id;});
    //  let jogo = dados.find(jogo => {
    //     return jogo.appid == id;
    // });

    // console.log(jogo);
}

export let filtrarFpsMapearTitulo = () => {
    let vetJogosFPS = dados.filter(jogo => {
        if(jogo.genero == "FPS"){
            return jogo;
        }
    });

    let vetJogosFPSTitulos = vetJogosFPS.map(jogo => {
        return jogo.titulo;
    })

    console.log(vetJogosFPSTitulos);
}

export let buscarJogoMostrarDetalhes = (titulo) => {
    let jogo = dados.find(jogo => {
        return jogo.titulo == titulo;
    });

    let desconto = jogo.valor_mercado * (jogo.desconto / 100);
    let valorFinal = jogo.valor_mercado - desconto;

    console.log(
            "O jogo " + jogo.titulo + ", do gênero " + jogo.genero + ", possui mais de " + jogo.qtd_downloads +
            " downloads e está disponível por apenas R$" + valorFinal.toFixed(2) + " aqui na Steam!"
        );
}