# 🛋️ Móveis à venda

Página simples para anunciar móveis, feita para subir no GitHub Pages.

## Estrutura de arquivos

```
venda-moveis/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── img/
│   └── (images)
└── README.md
```

## Como editar os móveis

Abra o arquivo `js/main.js` e edite as duas seções:

### 1. Configurações gerais (topo do arquivo)

```js
const config = {
  titulo: "Mudança — Móveis à venda",
  subtitulo: "Todos os itens em ótimo estado • Retirada em [sua cidade]",
  contato: {
    whatsapp: "5511999999999",  // ← seu número com código do país
    mensagem: "Olá! Vi seu anúncio e tenho interesse no item: "
  }
};
```

### 2. Lista de móveis

Cada móvel é um objeto dentro do array `moveis`:

```js
{
  id: 1,
  nome: "Sofá 3 lugares",
  tempoUso: "1 ano",
  precoNovo: 2800,       // preço de quando era novo
  precoVenda: 1400,      // preço que você quer vender
  foto: null,            // null = usa ícone; ou "nome-da-foto.jpg" para usar imagem
  icone: "ti-sofa",      // ícone Tabler (usado se foto for null)
  descricao: "Tecido cinza, sem manchas ou rasgos."
}
```

### Adicionando fotos

1. Coloque o arquivo de imagem dentro da pasta `img/`
2. No objeto do móvel, mude `foto: null` para `foto: "nome-do-arquivo.jpg"`

Exemplo:
```js
foto: "sofa.jpg"    // arquivo em img/sofa.jpg
```

### Ícones disponíveis

Alguns ícones úteis do Tabler:
- `ti-sofa` — sofá
- `ti-bed` — cama
- `ti-table` — mesa
- `ti-armchair` — cadeira / escrivaninha
- `ti-hanger` — guarda-roupa
- `ti-device-tv` — rack / TV
- `ti-refrigerator` — geladeira
- `ti-washing-machine` — máquina de lavar
- `ti-microwave` — micro-ondas

Lista completa: https://tabler.io/icons

---

## Como subir no GitHub Pages

1. Crie um repositório no GitHub (pode ser público)
2. Faça upload de todos os arquivos mantendo a estrutura de pastas
3. Vá em **Settings → Pages**
4. Em **Source**, selecione `main` e pasta `/ (root)`
5. Clique em **Save**

Após alguns minutos, sua página estará disponível em:
`https://seu-usuario.github.io/nome-do-repositorio`
