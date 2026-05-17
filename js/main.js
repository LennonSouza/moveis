const config = {
  titulo: "Mudança — Móveis à venda",
  subtitulo: "Todos os itens em ótimo estado • Retirada por sua conta",
  contato: {
    whatsapp: "+5512988070772",
    mensagem: "Olá! Vi seu anúncio e tenho interesse no item: "
  }
};

const moveis = [
  { id: 1,  nome: "TV Samsung 50'",            tempoUso: "3 anos", precoNovo: 2215, precoVenda: 1700, foto: "tv.png",                      icone: "ti-device-tv",      descricao: "Samsung Smart TV 50' Crystal UHD 4k." },
  { id: 2,  nome: "Poltrona",                  tempoUso: "3 anos", precoNovo: 199,  precoVenda: 150,  foto: "poltrona.png",                 icone: "ti-armchair",       descricao: "Poltrona Opala, Madeira tratada de eucalipto rosa." },
  { id: 3,  nome: "Adega Bélgic",              tempoUso: "4 anos", precoNovo: 299,  precoVenda: 240,  foto: "adega.png",                    icone: "ti-bottle",         descricao: "Adega de 108cm para 16 Garrafas." },
  { id: 4,  nome: "Forno Elétrico",            tempoUso: "1 ano",  precoNovo: 399,  precoVenda: 290,  foto: "forno.png",                    icone: "ti-microwave",      descricao: "Forno Elétrico Philco 110v." },
  { id: 5,  nome: "Batedeira Planetária",      tempoUso: "1 ano",  precoNovo: 409,  precoVenda: 330,  foto: "batedeira.png",                icone: "ti-tool",           descricao: "Batedeira 220v Planetária Philco Php500p Turbo 700w Preta." },
  { id: 6,  nome: "Fogão + Mesa do fogão",     tempoUso: "2 anos", precoNovo: 680,  precoVenda: 500,  foto: "mesaForno.png",                icone: "ti-flame",          descricao: "Mesa Moblis Móveis, fogão Britania 4 bocas." },
  { id: 7,  nome: "Micro-ondas Eletrolux",     tempoUso: "3 anos", precoNovo: 549,  precoVenda: 380,  foto: "microondas.png",               icone: "ti-microwave",      descricao: "Micro-ondas MTO30 20L 110v Com Função Tira Odor e Descongelar." },
  { id: 8,  nome: "Armário para Micro-ondas",  tempoUso: "3 anos", precoNovo: 260,  precoVenda: 190,  foto: "armarioMicroondas.png",        icone: "ti-cabinet",        descricao: "Armário para Micro-ondas Politorno Móveis 1 Nicho 2 Portas de Bater MDP - 58cm." },
  { id: 9,  nome: "Armário aéreo de cozinha",  tempoUso: "1 ano",  precoNovo: 450,  precoVenda: 310,  foto: "armario-aereo-cozinha.png",    icone: "ti-cabinet",        descricao: "Armário aéreo de cozinha." },
  { id: 10, nome: "Armário aéreo basculante",  tempoUso: "1 ano",  precoNovo: 218,  precoVenda: 160,  foto: "armario-aereo-basculante.png", icone: "ti-cabinet",        descricao: "Armário aéreo basculante 80cm." },
  { id: 11, nome: "Geladeira Consul",          tempoUso: "3 anos", precoNovo: 2000, precoVenda: 1500, foto: "geladeira.png",                icone: "ti-refrigerator",   descricao: "Geladeira Frost Free 296L Consul 110v com Painel Externo." },
  { id: 12, nome: "Sapateira Tecido",          tempoUso: "7 anos", precoNovo: 70,   precoVenda: 40,   foto: "sapateira-tecido.png",         icone: "ti-shoe",           descricao: "Sapateira Organizadora Multiuso 4 Prateleiras." },
  { id: 13, nome: "Armário buffet",            tempoUso: "1 ano",  precoNovo: 580,  precoVenda: 400,  foto: "armario-buffet.png",           icone: "ti-cabinet",        descricao: "Armário buffet." },
  { id: 14, nome: "Luminária Tripé",           tempoUso: "1 ano",  precoNovo: 150,  precoVenda: 110,  foto: "luminaria-tripe.png",          icone: "ti-bulb",           descricao: "Luminária Tripé." },
  { id: 15, nome: "Caixa de som",              tempoUso: "2 anos", precoNovo: 450,  precoVenda: 340,  foto: "caixa-som.png",                icone: "ti-volume",         descricao: "Caixa de som bluetooth, usb e com entrada para microfone." },
  { id: 16, nome: "Cadeira ergonômica",        tempoUso: "5 anos", precoNovo: 350,  precoVenda: 210,  foto: "cadeira.png",                  icone: "ti-armchair",       descricao: "Cadeira ergonômica." },
  { id: 17, nome: "Estante 4 nichos",          tempoUso: "3 anos", precoNovo: 180,  precoVenda: 120,  foto: "estante-4nichos.png",          icone: "ti-layout-rows",    descricao: "Estante 4 nichos." },
  { id: 18, nome: "Armário aéreo escritório",  tempoUso: "1 ano",  precoNovo: 400,  precoVenda: 290,  foto: "armario-aereo-escritorio.png", icone: "ti-cabinet",        descricao: "Armário aéreo para escritório." },
  { id: 19, nome: "Estante para livros",       tempoUso: "1 ano",  precoNovo: 450,  precoVenda: 250,  foto: "estante-livros.png",           icone: "ti-books",          descricao: "Estante para livros." },
  { id: 20, nome: "Mesa escritório",           tempoUso: "3 anos", precoNovo: 260,  precoVenda: 125,  foto: "mesa-escritorio.png",          icone: "ti-table",          descricao: "Mesa para escritório." },
  { id: 21, nome: "Rack para TV",              tempoUso: "1 ano",  precoNovo: 350,  precoVenda: 260,  foto: "hack-tv.png",                  icone: "ti-device-tv",      descricao: "Rack para TV." },
  { id: 22, nome: "Mesa para cozinha",         tempoUso: "1 ano",  precoNovo: 340,  precoVenda: 240,  foto: "mesa-cozinha.png",             icone: "ti-table",          descricao: "Mesa de cozinha com tampo de vidro e com 3 cadeiras." },
  { id: 23, nome: "Cama king size completa",   tempoUso: "2 anos", precoNovo: 3247, precoVenda: 2100, foto: "cama.png",                     icone: "ti-bed",            descricao: "Colchão de molas ensacadas EcoFlex, com cama bipartidas." },
  { id: 24, nome: "Recamier king size",        tempoUso: "1 ano",  precoNovo: 430,  precoVenda: 350,  foto: "recamier.png",                 icone: "ti-sofa",           descricao: "Recamier para king size." },
  { id: 25, nome: "Sapateira de madeira",      tempoUso: "1 ano",  precoNovo: 260,  precoVenda: 210,  foto: "sapateira-madeira.png",        icone: "ti-shoe",           descricao: "Sapateira de madeira." },
  { id: 26, nome: "Mesa para computador",      tempoUso: "4 anos", precoNovo: 280,  precoVenda: 210,  foto: "mesa-computador.png",          icone: "ti-table",          descricao: "Mesa com 3 gavetas com detalhes vermelhos." },
  { id: 27, nome: "Guarda-Roupas 8 portas",   tempoUso: "3 anos", precoNovo: 1050, precoVenda: 700,  foto: "guarda-roupas.png",            icone: "ti-hanger",         descricao: "Guarda-Roupas com 8 portas." },
  { id: 28, nome: "Cômoda com espelho",        tempoUso: "3 anos", precoNovo: 600,  precoVenda: 450,  foto: "penteadeira.png",              icone: "ti-mirror",         descricao: "Cômoda com espelho e 4 gavetas de madeira." },
  { id: 29, nome: "Sofá retrátil",             tempoUso: "1 ano",  precoNovo: 3500, precoVenda: 2100, foto: "sofa.png",                     icone: "ti-sofa",           descricao: "Sofá retrátil 2,5 metros." },
  { id: 30, nome: "Ar-Condicionado",           tempoUso: "3 anos", precoNovo: 3200, precoVenda: 2500, foto: "ar-condicionado.png",          icone: "ti-air-conditioning", descricao: "18000 btus inverter." },
  { id: 31, nome: "Armário de produtos",       tempoUso: "1 ano",  precoNovo: 290,  precoVenda: 210,  foto: "armario-limpeza.png",          icone: "ti-cabinet",        descricao: "Armário para produtos de limpeza." },
  { id: 32, nome: "Cafeteira Philco",          tempoUso: "Nova",   precoNovo: 210,  precoVenda: 160,  foto: "cafeteira.png",                icone: "ti-coffee",         descricao: "Cafeteira na caixa, nunca usada." },
  { id: 33, nome: "Ar-Condicionado Portátil",  tempoUso: "3 anos", precoNovo: 2400, precoVenda: 1500, foto: "ar-portatil.png",              icone: "ti-air-conditioning", descricao: "Ar-condicionado portátil 11000 btus Britania." },
  { id: 34, nome: "Máquina Lava e Seca 11kg",  tempoUso: "3 anos", precoNovo: 3400, precoVenda: 2500, foto: "lava-seca.png",                icone: "ti-washing-machine", descricao: "Máquina Lava e Seca Midea 11kg." },
  { id: 35, nome: "Freezer Midea 205L",        tempoUso: "3 anos", precoNovo: 2000, precoVenda: 1550, foto: "frezzer.png",                  icone: "ti-snowflake",      descricao: "Freezer Midea 205L." }
];

/* ===========================
   Helpers
=========================== */
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

/* ===========================
   Lightbox
=========================== */
function criarLightbox() {
  const lb = document.createElement("div");
  lb.id = "lightbox";
  lb.setAttribute("role", "dialog");
  lb.setAttribute("aria-modal", "true");
  lb.setAttribute("aria-label", "Visualizar imagem");
  lb.innerHTML = `
    <div id="lightbox-overlay"></div>
    <div id="lightbox-box">
      <button id="lightbox-fechar" aria-label="Fechar">&times;</button>
      <img id="lightbox-img" src="" alt="" />
      <p id="lightbox-legenda"></p>
    </div>
  `;
  document.body.appendChild(lb);

  document.getElementById("lightbox-overlay").addEventListener("click", fecharLightbox);
  document.getElementById("lightbox-fechar").addEventListener("click", fecharLightbox);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") fecharLightbox();
  });
}

function abrirLightbox(src, alt) {
  document.getElementById("lightbox-img").src = src;
  document.getElementById("lightbox-img").alt = alt;
  document.getElementById("lightbox-legenda").textContent = alt;
  document.getElementById("lightbox").classList.add("ativo");
  document.body.style.overflow = "hidden";
  document.getElementById("lightbox-fechar").focus();
}

function fecharLightbox() {
  document.getElementById("lightbox").classList.remove("ativo");
  document.body.style.overflow = "";
}

/* ===========================
   Card
=========================== */
function criarCard(movel) {
  const desconto = calcularDesconto(movel.precoNovo, movel.precoVenda);
  const vendido = movel.vendido === true;

  const imgHTML = movel.foto
    ? `<img
        src="img/${movel.foto}"
        alt="${movel.nome}"
        class="card-img-foto${vendido ? "" : " card-img-clicavel"}"
        ${!vendido ? `data-lightbox-src="img/${movel.foto}" data-lightbox-alt="${movel.nome}" role="button" tabindex="0" title="Clique para ampliar"` : ""}
      >`
    : `<div class="card-img-icon"><i class="ti ${movel.icone}" aria-hidden="true"></i></div>`;

  return `
    <article class="card${vendido ? " card-vendido" : ""}" data-id="${movel.id}">
      <div class="card-img-wrap">
        ${imgHTML}
        ${vendido ? `<div class="faixa-vendido"><span>Vendido</span></div>` : ""}
      </div>
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
        ${vendido
          ? `<div class="btn-vendido"><i class="ti ti-check" aria-hidden="true"></i> Item vendido</div>`
          : `<a href="${gerarLinkWhatsapp(movel.nome)}" target="_blank" rel="noopener noreferrer" class="btn-interesse">
               <i class="ti ti-brand-whatsapp" aria-hidden="true"></i> Tenho interesse
             </a>`
        }
      </div>
    </article>
  `;
}

/* ===========================
   Eventos
=========================== */
function bindLightboxEvents() {
  const grid = document.getElementById("grid-moveis");

  grid.addEventListener("click", (e) => {
    const img = e.target.closest("[data-lightbox-src]");
    if (img) abrirLightbox(img.dataset.lightboxSrc, img.dataset.lightboxAlt);
  });

  grid.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      const img = e.target.closest("[data-lightbox-src]");
      if (img) {
        e.preventDefault();
        abrirLightbox(img.dataset.lightboxSrc, img.dataset.lightboxAlt);
      }
    }
  });
}

/* ===========================
   Init
=========================== */
function renderizarPagina() {
  document.querySelector(".header-titulo").textContent = config.titulo;
  document.querySelector(".header-subtitulo").textContent = config.subtitulo;

  const grid = document.getElementById("grid-moveis");
  grid.innerHTML = moveis.map(criarCard).join("");

  criarLightbox();
  bindLightboxEvents();
}

document.addEventListener("DOMContentLoaded", renderizarPagina);
