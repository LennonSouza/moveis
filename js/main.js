const config = {
  titulo: "Mudança — Móveis à venda",
  subtitulo: "Todos os itens em ótimo estado • Retirada por sua conta",
  contato: {
    whatsapp: "+5512988070772",
    mensagem: "Olá! Vi seu anúncio e tenho interesse no item: "
  }
};

const moveis = [
  {
    id: 1,
    nome: "TV Samsung 50'",
    tempoUso: "3 anos",
    precoNovo: 2215,
    precoVenda: 1700,
    foto: "tv.png",
    icone: "ti-sofa",
    descricao: "Samsung Smart TV 50' Crystal UHD 4k."
  },
  {
    id: 2,
    nome: "Poltrona",
    tempoUso: "3 anos",
    precoNovo: 199,
    precoVenda: 150,
    foto: "poltrona.png",
    icone: "ti-bed",
    descricao: "Poltrona Opala, Madeira tratada de eucalipto rosa."
  },
  {
    id: 3,
    nome: "Adega Bélgic",
    tempoUso: "4 ano",
    precoNovo: 299,
    precoVenda: 240,
    foto: "adega.png",
    icone: "ti-table",
    descricao: "Adega de 108cm para 16 Garrafas."
  },
  {
    id: 4,
    nome: "Forno Elétrico",
    tempoUso: "1 ano",
    precoNovo: 399,
    precoVenda: 320,
    foto: "forno.png",
    icone: "ti-device-tv",
    descricao: "Forno Elétrico Philco 110v."
  },
  {
    id: 5,
    nome: "Batedeira Planetária",
    tempoUso: "1 ano",
    precoNovo: 409,
    precoVenda: 330,
    foto: "batedeira.png",
    icone: "ti-hanger",
    descricao: "Batedeira Planetária Philco Php500p Turbo 700w Preta."
  },
  {
    id: 6,
    nome: "Fogão + Mesa do fogão",
    tempoUso: "2 anos",
    precoNovo: 680,
    precoVenda: 500,
    foto: "mesaForno.png",
    icone: "ti-armchair",
    descricao: "Mesa Moblis Móveis, fogão Britania 4 bocas."
  },
  {
    id: 7,
    nome: "Micro-ondas Eletrolux",
    tempoUso: "3 anos",
    precoNovo: 549,
    precoVenda: 440,
    foto: "microondas.png",
    icone: "ti-armchair",
    descricao: "Micro-ondas MTO30 20L Com Função Tira Odor e Descongelar."
  },
  {
    id: 8,
    nome: "Armário para Micro-ondas",
    tempoUso: "3 anos",
    precoNovo: 260,
    precoVenda: 190,
    foto: "armarioMicroondas.png",
    icone: "ti-armchair",
    descricao: "Armário para Micro-ondas Politorno Móveis 1 Nicho 2 Portas de Bater MDP - 58cm."
  },
  {
    id: 9,
    nome: "Armário para Micro-ondas",
    tempoUso: "1 ano",
    precoNovo: 450,
    precoVenda: 310,
    foto: "armario-aereo-cozinha.png",
    icone: "ti-armchair",
    descricao: "Armário aereo de cozinha."
  },
  {
    id: 10,
    nome: "Armário para Micro-ondas",
    tempoUso: "1 ano",
    precoNovo: 218,
    precoVenda: 160,
    foto: "armario-aereo-basculante.png",
    icone: "ti-armchair",
    descricao: "Armário aéreo basculante 80cm."
  },
  {
    id: 11,
    nome: "Geladeira Consul",
    tempoUso: "3 ano",
    precoNovo: 2000,
    precoVenda: 1500,
    foto: "geladeira.png",
    icone: "ti-armchair",
    descricao: "Geladeira Frost Free 296L Consul com Painel Externo."
  },
  {
    id: 12,
    nome: "Sapateira Tecido",
    tempoUso: "7 anos",
    precoNovo: 70,
    precoVenda: 40,
    foto: "sapateira-tecido.png",
    icone: "ti-armchair",
    descricao: "Sapateira Organizadora Multiuso 4 Prateleiras."
  },
  {
    id: 13,
    nome: "Armario buffet",
    tempoUso: "1 ano",
    precoNovo: 580,
    precoVenda: 400,
    foto: "armario-buffet.png",
    icone: "ti-armchair",
    descricao: "Armario buffet."
  },
  {
    id: 14,
    nome: "Luminaria Tripe",
    tempoUso: "1 ano",
    precoNovo: 150,
    precoVenda: 110,
    foto: "luminaria-tripe.png",
    icone: "ti-armchair",
    descricao: "Luminaria Tripe."
  },
  {
    id: 15,
    nome: "Caixa de som",
    tempoUso: "2 anos",
    precoNovo: 450,
    precoVenda: 340,
    foto: "caixa-som.png",
    icone: "ti-armchair",
    descricao: "Caixa de som bluetooth, usb e com entrada para microfone."
  },
  {
    id: 16,
    nome: "Cadeira ergonomica",
    tempoUso: "5 anos",
    precoNovo: 350,
    precoVenda: 210,
    foto: "cadeira.png",
    icone: "ti-armchair",
    descricao: "Cadeira ergonomica."
  },
  {
    id: 17,
    nome: "Estante 4 nichos",
    tempoUso: "3 anos",
    precoNovo: 180,
    precoVenda: 120,
    foto: "estante-4nichos.png",
    icone: "ti-armchair",
    descricao: "Estante 4 nichos."
  },
  {
    id: 18,
    nome: "Armario aéreo",
    tempoUso: "1 ano",
    precoNovo: 400,
    precoVenda: 290,
    foto: "armario-aereo-escritorio.png",
    icone: "ti-armchair",
    descricao: "Armario aére para escritorio."
  },
  {
    id: 19,
    nome: "Estante para livros",
    tempoUso: "1 ano",
    precoNovo: 450,
    precoVenda: 250,
    foto: "estante-livros.png",
    icone: "ti-armchair",
    descricao: "Estante para livros."
  },
  {
    id: 20,
    nome: "Mesa escritorio",
    tempoUso: "3 anos",
    precoNovo: 260,
    precoVenda: 125,
    foto: "mesa-escritorio.png",
    icone: "ti-armchair",
    descricao: "Mesa para escritorio."
  },
  {
    id: 21,
    nome: "Hack para TV",
    tempoUso: "1 ano",
    precoNovo: 350,
    precoVenda: 260,
    foto: "hack-tv.png",
    icone: "ti-armchair",
    descricao: "Hack para TV."
  },
  {
    id: 22,
    nome: "Mesa para cozinha",
    tempoUso: "1 ano",
    precoNovo: 340,
    precoVenda: 240,
    foto: "mesa-cozinha.png",
    icone: "ti-armchair",
    descricao: "Mesa de cozinha com tampo de vidro e com 3 cadeiras."
  },
  {
    id: 23,
    nome: "Cama king size completa",
    tempoUso: "2 anos",
    precoNovo: 3247,
    precoVenda: 2100,
    foto: "cama.png",
    icone: "ti-armchair",
    descricao: "Colchão de molas ensacadas EcoFlex, com camas bipartidas"
  },
  {
    id: 24,
    nome: "Recamier king size",
    tempoUso: "1 ano",
    precoNovo: 430,
    precoVenda: 350,
    foto: "recamier.png",
    icone: "ti-armchair",
    descricao: "Recamier para king size."
  },
  {
    id: 25,
    nome: "Sapateira de madeira",
    tempoUso: "1 ano",
    precoNovo: 260,
    precoVenda: 210,
    foto: "sapateira-madeira.png",
    icone: "ti-armchair",
    descricao: "Sapateira de madeira."
  },
  {
    id: 26,
    nome: "Mesa para computador",
    tempoUso: "4 anos",
    precoNovo: 280,
    precoVenda: 210,
    foto: "mesa-computador.png",
    icone: "ti-armchair",
    descricao: "Mesa com 3 gavetas com detalhes vermelhos."
  },
  {
    id: 27,
    nome: "Guarda-Roupas 8 portas",
    tempoUso: "3 anos",
    precoNovo: 1050,
    precoVenda: 700,
    foto: "guarda-roupas.png",
    icone: "ti-armchair",
    descricao: "Guarda-Roupas com 8 portas"
  },
  {
    id: 28,
    nome: "Comoda com espelho",
    tempoUso: "3 anos",
    precoNovo: 600,
    precoVenda: 450,
    foto: "penteadeira.png",
    icone: "ti-armchair",
    descricao: "Comoda com espelho e 4 gavetas de madeira."
  },
  {
    id: 29,
    nome: "Sofá retratil",
    tempoUso: "1 ano",
    precoNovo: 3500,
    precoVenda: 2100,
    foto: "sofa.png",
    icone: "ti-armchair",
    descricao: "Sofá retratil 2,5 metros."
  },
  {
    id: 30,
    nome: "Ar-Condicionado",
    tempoUso: "3 anos",
    precoNovo: 3200,
    precoVenda: 2500,
    foto: "ar-condicionado.png",
    icone: "ti-armchair",
    descricao: "18000 btus inverter."
  }
];

function formatarPreco(valor) {
  return valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

function calcularDesconto(novo, venda) {
  return Math.round(((novo - venda) / novo) * 100);
}

function gerarLinkWhatsapp(nomeItem) {
  const msg = encodeURIComponent(config.contato.mensagem + nomeItem);
  return `https://wa.me/${config.contato.whatsapp}?text=${msg}`;
}

function criarCard(movel) {
  const desconto = calcularDesconto(movel.precoNovo, movel.precoVenda);

  const imgHTML = movel.foto
    ? `<img src="img/${movel.foto}" alt="${movel.nome}" class="card-img-foto">`
    : `<div class="card-img-icon"><i class="ti ${movel.icone}" aria-hidden="true"></i></div>`;

  return `
    <article class="card" data-id="${movel.id}">
      ${imgHTML}
      <div class="card-body">
        <h2 class="card-titulo">${movel.nome}</h2>
        <p class="card-descricao">${movel.descricao}</p>
        <p class="card-uso"><i class="ti ti-clock" aria-hidden="true"></i> ${movel.tempoUso} de uso</p>
        <div class="card-precos">
          <p class="preco-novo">Novo: ${formatarPreco(movel.precoNovo)}</p>
          <div class="preco-row">
            <p class="preco-venda">${formatarPreco(movel.precoVenda)}</p>
            <span class="desconto-badge">−${desconto}%</span>
          </div>
        </div>
        <a
          href="${gerarLinkWhatsapp(movel.nome)}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-interesse"
        >
          <i class="ti ti-brand-whatsapp" aria-hidden="true"></i>
          Tenho interesse
        </a>
      </div>
    </article>
  `;
}

function renderizarPagina() {
  document.querySelector(".header-titulo").textContent = config.titulo;
  document.querySelector(".header-subtitulo").textContent = config.subtitulo;

  const grid = document.getElementById("grid-moveis");
  grid.innerHTML = moveis.map(criarCard).join("");
}

document.addEventListener("DOMContentLoaded", renderizarPagina);
