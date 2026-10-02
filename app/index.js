
const divP = document.getElementById("catalogo"); 
const input = document.getElementById("INPUT");

const produtos = [
    [ "Emília",
      "Boneco da emilia do sitio do picapáu amarelo",
      "boneca",
      "R$ 118,64",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy9k2isMAB5JT6QDlKdXwMShNY02cHNunAICZkCQ3GlA&s=10"
    ],

    [
        "xadrez",
        "jogo de tabuleiro de xadrez",
        "jogos",
        "R$ 66,99",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVb5gF4Wb4OhC-Xv0DNJh9juKZChugQhJHbXHQ-EEug&s=10"
    ],

    [
        "máquina de lavar de ultima geração",
        "a máquina mais versátil e potente do mercado",
        "eletrônico",
        "R$ 11.999,99",
        "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRQzkno05rQ7qKlP0zCgfThzhtvt6xevTLbazrAtvYAxLNfFzqfZ9GIq7epss7U9W98e4jY7UBzDhEaexE9IQNjcQuxysid4l1gaWiPsu54gevT8F_iD9DByn7AX2ZRxWE9jQMePj4&usqp=CAc"
    ],

     [ "bola de volei da mikasa V200w",
      "bola de volei da mikasa V200w amarela",
      "esporte",
      "R$ 72,35",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp4VmcW2dbZbTUAa4J22JCKa6Wnf-627zPeJeY2a9V6Q&s"
    ],

     [ "tênis original de corrida ",
      "tênis original da corrida vermelho",
      "esporte de corrrida",
      "R$ 229,99",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-NfiVE-QOjPHjaSYn-4nQYNV6ZedgHfuBkxfpla6q2A&s=10"
    ],
];


input.addEventListener("input", mostrarProdutosFiltrados);


function mostrarProdutosFiltrados() {
  const valorDigitado = input.value.trim().toLowerCase();
    divP.innerHTML = "";
  
      const produtosFiltrados = produtos.filter((produto) => {
       return (
            produto[0].toLowerCase().includes(valorDigitado) ||
            produto[1].toLowerCase().includes(valorDigitado) ||
            produto[2].toLowerCase().includes(valorDigitado)
        );

    });


    produtosFiltrados.forEach((produto) => {

        const divF = document.createElement("div");
        divF.className = "produto";
        
        const imagem = document.createElement("img");

        imagem.src = produto[4];
        imagem.alt = produto[0];
        imagem.className = "imagem-produto";

        const h3 = document.createElement("h3");
        h3.textContent = produto[0];

        const p = document.createElement("p");
        p.textContent = produto[1];

        const p2 = document.createElement("p");

        p2.textContent = produto[2];

        const p3 = document.createElement("p");

        p3.textContent = produto[3];

        divF.appendChild(imagem);
        divF.appendChild(h3);
        divF.appendChild(p);
        divF.appendChild(p2);
        divF.appendChild(p3);
        divP.appendChild(divF);

    });

}
mostrarProdutosFiltrados();



