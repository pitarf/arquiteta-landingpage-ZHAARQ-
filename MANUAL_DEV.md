# Manual do Desenvolvedor (MANUAL_DEV.md) - Landing Page ZHAARQ

## 1. Visão Geral
Landing Page de alta conversão para o escritório de arquitetura **ZHAARQ**, desenvolvida com base estrita no briefing comercial para tráfego pago (Google Ads) e orgânico.

## 2. Tecnologias & Bibliotecas
- **HTML5 Semântico:** Estrutura modular em 12 seções, metadados Open Graph para redes sociais/WhatsApp e atributos de acessibilidade ARIA.
- **Tailwind CSS:** CDN com paleta arquitetônica estendida (Terracotta `#993819`, Dourado `#C5A880`, Grafite Dark `#121110`, Off-White `#F7F4EE`).
- **Tipografia:** `Tenor Sans` (títulos e display contemporâneo de alto luxo e arquitetura sem serifa) + `Jost` (geometria pura Bauhaus de Paul Renner para textos e especificações técnicas).
- **Padrão Editorial de Arquitetura (gstack Design-Review):**
  - Navbar com Cabeçalho Sticky Escuro e Logotipo Horizontal: Símbolo arquitetônico dourado oficial (`logo-symbol-gold.webp`) combinado com tipografia vetorial nativa do navegador (`Tenor Sans` e `Jost`), divisor com gradiente dourado, vidro fumê blur (`bg-[#121110]/95 backdrop-blur-md`) e botão superior em pílula com `whitespace-nowrap`, garantindo 100% de legibilidade e estabilidade visual sem quebras em qualquer smartphone.
  - Top Announcement Bar fixa no topo (`<aside>`) com sinalizador de pulso âmbar destacando as Leis de Anistia Municipal vigentes.
  - Hero com grid balanceado 7/5, card de amparo legal com acabamento em vidro escuro e chips 2x2 das 4 legislações municipais oficiais com links contextuais para o WhatsApp, e retrato da arquiteta com atributos profissionais (pranchas, capacete e planner) ancorado na base (`arquiteta_hero_projetos.webp`).
  - Galeria de Projetos Responsiva: Grid simétrico de 3 colunas no desktop (`aspect-[4/3]`) e Carrossel horizontal deslizável nativo com toque (*swipe*) no celular (`overflow-x: auto`, `snap-x snap-mandatory`, `.no-scrollbar`), sangria `-mx-4 px-4`, cartões com largura calibrada (`w-[86vw]`), efeito visual *peek* do próximo card e 3 indicadores de paginação (*dots*) interativos.
  - Manifesto de Segurança Patrimonial com linhas hairline de 1px e métricas monumentais douradas.
  - Carrossel Vertical com Stacking Cards na Seção de Especialidades (cabeçalho `.services-sticky-header` fixo no topo com `z-index: 50` e fundo translúcido blur; 5 cartões esculturais empilháveis com `sticky`, offsets escalonados de topo logo abaixo do título fixo, margem ultra-curta de 20px para sobreposição imediata idêntica à referência, zeramento de padding-bottom residual na base e transição contínua para a seção de diagnóstico, animação JS de escala `scale(0.95)` e escurecimento gradual, sem bibliotecas pesadas de terceiros).
  - Dossiê Pericial com 4 fichas técnicas de inconformidade (Fiscal, Financiamento, Jurídico, Administrativo).
  - Régua Sequencial de 5 Fases de Engenharia e Trâmite: Régua em 5 colunas simétricas no desktop e Carrossel horizontal deslizável nativo com toque (*swipe* e *CSS scroll-snap*) no celular (`overflow-x: auto`, `snap-x snap-mandatory`, `.no-scrollbar`), cards com largura calibrada (`w-[86vw]`), altura mínima uniforme (`min-h-[300px]`), efeito visual *peek* e 5 indicadores de paginação (*dots*) interativos.
  - Matriz do Case Real (Projeto Real): Matriz simétrica 3x2 com 6 etapas fotográficas em proporção 4:3 e alinhamento superior (`justify-start`) no desktop; e Carrossel horizontal deslizável nativo com toque (*swipe* e *CSS scroll-snap*) no celular (`overflow-x: auto`, `snap-x snap-mandatory`, `.no-scrollbar`), cards com largura calibrada (`w-[86vw]`), efeito visual *peek* e 6 indicadores de paginação (*dots*) interativos.
  - FAQ com linhas horizontais puras e transições suaves.
  - Rodapé Institucional em 4 colunas clássicas com divisórias verticais.
- **JavaScript Vanilla Modular (`js/main.js`):** Sem bibliotecas pesadas:
  - Motor Unificado de Carrossel Mobile (`setupMobileCarousel`): Gerencia todos os carrosséis móveis (`#projetos-carousel`, `#etapas-carousel`, `#casereal-carousel`) utilizando algoritmo de distância mínima ao centro geométrico da viewport (`carouselCenter - cardCenter`). Sincronização a 60fps com `requestAnimationFrame`, escuta ativa de `scroll`, `scrollend` e `touchend`, e suporte a clique/toque nos botões indicadores com área de toque ampliada (`py-3 px-1.5`).
  - FAQ expansível com animação suave e ARIA controls.
  - Toast Notifications para avisos sem interrupção agressiva.
  - Rastreamento dinâmico de conversões com repasse de UTMs, GCLID e disparo para `dataLayer`.
  - Banner LGPD com persistência em `localStorage`.
  - Botão flutuante desktop e barra fixa mobile para contato via WhatsApp com ícone oficial em branco e número oficial configurado (`5511977453954`).

## 3. Estrutura de Arquivos
```text
/
├── assets/
│   ├── images/
│   │   ├── hero_bg_fullwidth.webp          # Fotografia 100% full-width da Hero (PROJETO 1 - 2 2.jpeg)
│   │   ├── arquiteta_hero_projetos.webp    # Retrato da Arquiteta com atributos profissionais (pranchas, capacete e planner) na Hero
│   │   ├── proj_real_1, proj_real_regularizacao, proj_real_desdobro.webp # Projetos reais executados (aspect-[4/3])
│   │   ├── diagnostico_vistoria_trena.webp # Vistoria técnica in loco com prancheta e trena de agrimensura
│   │   ├── case_1_terreno.webp, case_2_projeto.webp, case_3_aprovacao.webp, case_4_conclusao.webp, case_5_receita.webp, case_6_cartorio.webp # Sequência real do Projeto Real (6 etapas)
│   │   ├── arquiteta_real.webp         # Foto institucional no CREA-SP
│   │   ├── whatsapp-icon-white.svg     # Ícone oficial vetorizado em branco puro
│   │   ├── logo-symbol-gold.webp       # Símbolo oficial arquitetônico dourado (navbar e elementos de marca)
│   │   ├── logo-horizontal-gold.webp   # Logotipo horizontal master de alta resolução
│   │   └── logo-branca.webp / logo.webp# Logotipos verticais institucionais (rodapé e materiais)
│   └── icons/
├── css/
│   └── styles.css                      # Regras customizadas, fontes e efeitos de glassmorphism
├── js/
│   └── main.js                         # Interatividade, rastreamento e eventos
├── documents/
│   ├── BRIEFING_LANDING_PAGE_ZHAARQ.md # Transcrição do briefing original
│   ├── PROMPT_STACKING_CARDS_CARROSSEL.md # Prompt mestre genérico e técnico de Stacking Cards
│   └── task.md                         # Roadmap e controle de status
├── CHANGELOG.md                        # Histórico de versões
├── MANUAL_DEV.md                       # Manual técnico de desenvolvimento
├── MANUAL_USER.md                      # Manual de operação do usuário/cliente
└── index.html                          # Arquivo principal da Landing Page
```

## 4. Otimização de Imagens
As fotografias de alta resolução do acervo `SITE ARQT` foram convertidas para **WebP** com compressão de alta fidelidade e redimensionamento proporcional, reduzindo drasticamente o tempo de carregamento no 4G móvel e atingindo notas elevadas de Core Web Vitals.

## 5. Como Executar Localmente
Basta abrir o arquivo [index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html) diretamente no navegador, ou iniciar um servidor HTTP local:
```powershell
python -m http.server 3000
```
E acessar `http://localhost:3000`.

## 6. Otimização com Graphify (Knowledge Graph AST & Redução de Tokens)
O projeto conta com o **Graphify** instalado e integrado ao assistente de inteligência artificial:
- **Finalidade:** Mapear a arquitetura, dependências de funções, nós do DOM e scripts em um Grafo de Conhecimento estruturado, evitando que o assistente precise reler repetidamente dezenas de arquivos inteiros a cada comando (economia drástica de tokens e tempo de resposta).
- **Diretório de Saída:** `graphify-out/` (ignorado pelo Git via `.gitignore`), contendo `graph.json`, `graph.html` (visualizador interativo) e `GRAPH_REPORT.md`.
- **Como Atualizar o Grafo:**
  - **Automático via Git Hooks (Ativo):** A cada `git commit`, `git checkout` ou `git merge`, os hooks instalados atualizam o grafo silenciosamente em segundo plano.
  - **Manual via Terminal:**
```powershell
graphify update .
```
