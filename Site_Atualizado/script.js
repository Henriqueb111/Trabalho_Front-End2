//const cards = document.getElementById("cards");

function inserirElementoCard(card){
    const cards = document.getElementById("cards");
    cards.appendChild(card);
}

function criarLink(nome, href){
    const subnav = document.getElementById("subnav");
    const linkNovo = document.createElement("a");
    linkNovo.textContent = nome;
    linkNovo.href = href;

    subnav.appendChild(linkNovo);
}