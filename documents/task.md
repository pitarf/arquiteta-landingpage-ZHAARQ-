# Roadmap de Tarefas - Landing Page ZHAARQ Arquitetura

## 📌 Status Geral do Projeto
- **Fase Atual:** Landing Page Construída e Funcional
- **Stack:** HTML5 Semântico, Tailwind CSS, JavaScript Vanilla Modular

---

## 📋 Tarefas

### Concluído
- [x] Extração e calibragem da paleta de cores institucional a partir do layout de referência.
- [x] Leitura e análise completa do Briefing (`Briefing_Landing_Page_ZHAARQ (1).pdf`).
- [x] Conversão integral do PDF para Markdown em `documents/BRIEFING_LANDING_PAGE_ZHAARQ.md`.
- [x] Mapeamento e catalogação das imagens da pasta `SITE ARQT`.
- [x] Pipeline de otimização de imagens: conversão para WebP de alto desempenho com compressão de até 74%.
- [x] Estruturação modular de diretórios (`/assets/images`, `/css`, `/js`, `/documents`).
- [x] **Implementação de Alta Fidelidade do Layout de Referência (Meta Visual):**
  - [x] Navbar escura com links internos de navegação e botão Terracotta de análise
  - [x] Hero escuro com fotografia de mansão de alto padrão, headline em Cormorant Garamond, botão de WhatsApp e botão de play "Como funciona"
  - [x] 4 garantias horizontais na base da Hero com ícones circulares
  - [x] Seção "Projetos em Destaque" com 3 cards de obras reais e setas circulares
  - [x] Banner escuro de autoridade com métrica `+100` em ouro e círculos de indicadores
  - [x] Seção de 5 Especialidades com ícones circulares minimalistas
  - [x] Seção de diagnóstico "Seu imóvel pode estar irregular" com foto de prancha técnica
  - [x] Linha do tempo de 5 etapas numeradas ("Do início à regularização")
  - [x] Seção de Case Real com 4 fotos oficiais (Em Obras, Acompanhamento, Concluída, Averbada)
  - [x] Seção "Arquiteta responsável do início ao fim" com foto e selos de credibilidade
  - [x] FAQ expansível em estilo acordeão
  - [x] Super CTA final em fundo escuro com folhagem botânica
  - [x] Integração do ícone oficial branco do WhatsApp em todos os botões e no botão flutuante
- [x] **Substituição Integral por Fotos Reais do Acervo Oficial (SITE ARQT):**
  - [x] Fundo 100% da Hero com a foto real solicitada pelo usuário (`PROJETO 1 - 2 2.jpeg` -> `hero_bg_fullwidth.webp`) ocupando toda a largura e visível atrás dos textos
  - [x] Correção de especificidade CSS (`.hero-bg-layer`) eliminando divisão lateral e estendendo o fundo de ponta a ponta
  - [x] Cards de Projetos em Destaque atualizados com fotos de obras reais (`proj_real_1`, `proj_real_2`, `proj_real_3`)
  - [x] Foto de vistoria técnica in loco da arquiteta na seção de diagnóstico (`diagnostico_real`)
  - [x] Sequência fotográfica autêntica do Case Real reordenada em 4 etapas conforme print oficial
  - [x] Foto institucional da arquiteta no CREA-SP na seção de autoridade (`arquiteta_real`)
  - [x] Foto da Arquiteta Juliana Lucena com Certificado (`Mulher Sorridente com Certificado-1.png` -> `arquiteta_hero_certificado.webp`) posicionada na área selecionada à direita da Hero
  - [x] Modernização da seção "Do início à regularização" com cards editoriais contemporâneos
- [x] **Reestruturação Editorial Completa com gstack Design-Review (Anti-AI-Slop):**
  - [x] Auditoria de layout via subagente com base no framework gstack (`/design-review`) eliminando padrões de template SaaS/IA
  - [x] Eliminação de grids de 5 círculos em Especialidades; criação de Índice Editorial com linhas hairline (`01 //`, `02 //`...)
  - [x] Reformulação de Projetos em Destaque para Galeria Assimétrica de Arquitetura (Master 7 colunas + 5 colunas de apoio)
  - [x] Manifesto de Segurança Patrimonial com métricas monumentais em tipografia Cormorant Garamond dourada
  - [x] Dossiê Pericial / Relatório Técnico com 4 pareceres formais (Fiscal, Financiamento, Jurídico, Administrativo)
  - [x] Régua Sequencial de 5 Fases de Engenharia e Trâmite Legal
  - [x] Acordeão FAQ editorial minimalista com divisores horizontais ultrafinos
  - [x] Rodapé Arquitetônico completo em 4 colunas com marca, especialidades, regiões e dados institucionais
  - [x] Correção de sintaxe CSS na regra `.hero-premium::before`
  - [x] Verificação de compliance integral: zero termos proibidos (sem burocracia, garantida, etc.)
  - [x] Ampliação e destaque monumental das 4 fotos do Case Real (largura total da página e ganho de >60% em área visual)
  - [x] Correção matemática de proporção e eliminação de distorção anamórfica em todas as fotos (Projetos, Diagnóstico, Case Real e Perfil da Arquiteta)
  - [x] Ampliação e destaque visual do logotipo institucional ZHAARQ no rodapé (`h-16 sm:h-20 md:h-24`) e no cabeçalho (`h-11 sm:h-13 md:h-14`) garantindo máxima legibilidade.
  - [x] Correção definitiva de contraste da navbar ao rolar a página: eliminação do fundo bege conflitante e aplicação de vidro fumê escuro (`rgba(18, 17, 16, 0.96)`) com 100% de legibilidade do logotipo e links.
  - [x] Harmonização e legibilidade editorial de toda a numeração do site: remoção de monospace/slashes e aplicação de numerais clássicos em *Cormorant Garamond* nas Fases (Seção 07), Especialidades (Seção 05) e Case Real (Seção 08).
  - [x] Redesign editorial dos 5 cards da Seção 07 ("Do início à regularização definitiva") reproduzindo o layout orgânico da referência visual (curvatura superior assimétrica em onda SVG, badge squircle amarelo pastel `#FCE8B2` no topo esquerdo, borda champanhe `#D8C29D` e tipografia Cormorant Garamond).
  - [x] Dossiê Arquitetônico Editorial para o FAQ: eliminação de widgets de suporte estilo SaaS/IA e caixinhas plásticas de números; criação de moldura unificada nobre (`max-w-5xl mx-auto`), cabeçalho em 2 colunas, numerais clássicos em Cormorant Garamond e controles minimalistas `+` / `−` em traço ultrafino.
  - [x] Reestruturação e Distribuição do Rodapé Institucional: eliminação dos vazios e vácuos visuais, equalização das 4 colunas em 12 módulos proporcionais (`4-3-2-3`), linhas divisórias *hairline* verticais e bullets dourados.
  - [x] Ajuste e Compactação da Margem Inferior do Rodapé: redução do padding excessivo na base da página para `pb-6 sm:pb-8`, garantindo espaçamento simétrico e enxuto em torno da linha de copyright.
  - [x] Transição para Tipografia Exclusiva de Arquitetura: substituição da `Plus Jakarta Sans` (padrão tech/SaaS) pela **Jost** (geometria pura Bauhaus de Paul Renner), harmonizada com *Cormorant Garamond* nos títulos e display.
  - [x] Calibração Global de Margens e Eliminação de Vácuos: redução de paddings verticais entre seções (`py-24 md:py-32` -> `py-14 md:py-20`), redução de cabeçalhos (`mb-16` -> `mb-10 pb-5`) e compactação proporcional de grids, listas e molduras em todo o site.
  - [x] Reenquadramento da Foto 1 e Equalização de Projetos em 3 Colunas: restauração da fotografia do sobrado (platibanda inteira sem cortes), eliminação total do espaço em branco vertical e balanceamento dos 3 cards de projetos em proporção `aspect-[4/3]`.
  - [x] Recorte da Arquiteta da Cintura para Cima e Reestruturação da Hero Section: novo recorte profissional em plano médio (`arquiteta_hero_cintura.webp`), ancoragem do retrato rente à base da página, reorganização do grid 7/5 e criação de micro-cards translúcidos 2x2 para as 4 garantias técnicas, eliminando 100% dos vazios e vácuos laterais.
  - [x] Ampliação da Foto da Arquiteta e Ocupação do Espaço Vazio: aumento de escala para até 720px de altura, deslocamento lateral harmonioso e reposicionamento do badge técnico no ombro para preenchimento completo e equilibrado da Hero Section.
  - [x] Transição para Tipografia de Alto Luxo sem Serifa: substituição definitiva da fonte serifada (*Cormorant Garamond*) pela **Tenor Sans** (design contemporâneo de alto luxo e arquitetura sem serifa) com secundária **Syne**, eliminando qualquer aspecto rústico ou literário nos títulos.
  - [x] Correção de Overflow Horizontal no Mobile: bloqueio global de rolagem lateral (`overflow-x: hidden`), ajuste responsivo das métricas da Seção 04 eliminando corte do `CAU/SP` e contenção da imagem da arquiteta no celular.
  - [x] Carrossel Vertical com Stacking Cards na Seção 05 (Especialidades): implementação de 5 cartões esculturais empilháveis (`position: sticky` com offsets progressivos e z-index 10-50), alternando fundos nobres (Grafite `#181715`, Terracota `#A64B2A`, Grafite Ébano `#121110`, Travertino `#F5F1E9` e Grafite `#1A1816`), tipografia *Tenor Sans*, colunas com metadados periciais e zero overflow lateral.
  - [x] Correção e Ativação Plena da Animação de Stacking: substituição de `overflow-x: hidden` por `overflow-x: clip`, inclusão de `.stacking-container`, espaçamentos verticais de rolagem dedicados e animação JS fluida de escala (`scale: 0.95`) e escurecimento gradual (`brightness: 0.75`) com transform-origin no topo.
  - [x] Calibração de Ritmo e Eliminação de Vácuo entre Cards: redução do gap entre cards para 32px (mobile) e 48px (desktop), eliminando vãos brancos no scroll e tornando a transição entre cards contínua e natural.
  - [x] Ajuste Cirúrgico do Espaçamento para 20px: unificação da margem inferior entre todos os cartões para exatamente 20px com !important, estilo inline crítico e anti-cache para fidelidade total ao outro site de referência.
  - [x] Eliminação do Vão Residual Pós-Carrossel: remoção do padding-bottom de `.stacking-container` e equalização dos paddings de transição entre a Seção 05 e a Seção 06 (gap reduzido de 237px para 25px no Desktop e 17px no Mobile).
  - [x] Fixação Contínua do Título da Seção durante o Scroll (Sticky Header): criação de `.services-sticky-header` mantendo o título "NOSSAS ESPECIALIDADES" fixo no topo (logo abaixo da navbar) durante todo o empilhamento dos 5 cards, com z-index inteligente (50) e offsets progressivos recalibrados para os 5 cartões deslizando por baixo.
  - [x] Nova Fotografia da Arquiteta com Características da Profissão na Hero: integração da nova imagem com pranchas técnicas, capacete de obras e caderno (`arquiteta_hero_projetos.webp`), conversão para WebP de alta performance (144 KB, redução de 83%), e reposicionamento milimétrico do badge de autoridade CAU.
  - [x] Atualização do Escopo Técnico do Card 01 (Residência Unifamiliar): inclusão da cópia exata do processo legal completo (desde o projeto e alvará municipal até Habite-se, CND da Receita Federal e averbação em cartório).
  - [x] Novo Case Real no Card 02 (Regularização de Residência Unifamiliar): inclusão da nova fotografia do sobrado com faixa de anistia/regularização em WebP (`proj_real_regularizacao.webp`), enquadramento em 4:3 e texto técnico com levantamento, projeto e Certificado de Regularização.
  - [x] Novo Case Real no Card 03 (Regularização e Desdobro de Lote): integração da foto interna do lote com a edificação existente em WebP (`proj_real_desdobro.webp`), enquadramento 4:3, copy oficial de desdobro de terreno e inclusão do serviço de Desdobro e Unificação de Lotes nas especialidades e rodapé.
  - [x] Nova Fotografia de Vistoria Técnica In Loco na Seção 06 (Diagnóstico): inclusão da foto real em campo da arquiteta com prancheta, caneta e trena de agrimensura profissional laranja (`diagnostico_vistoria_trena.webp`), otimizada em WebP (75 KB) com proporção adaptativa equilibrada com os 4 pareceres periciais.
  - [x] Configuração Global do WhatsApp Oficial da ZHAARQ: integração do número real `5511977453954` (`(11) 97745-3954`) em todos os 19 pontos de conversão, rodapé institucional e fallback inteligente do `main.js`.
  - [x] Elaboração do Prompt Mestre Genérico & Detalhado para Carrossel Vertical com Stacking Cards: criação do documento `documents/PROMPT_STACKING_CARDS_CARROSSEL.md` reunindo especificações completas de HTML/Tailwind/CSS/JS e as 6 regras anti-bugs (overflow-x clip, offsets, sticky header e eliminação de vácuos).
  - [x] Atualização do Card 05 (Diagnóstico Técnico e Estudo de Viabilidade): atualização da copy técnica oficial, eliminação das tags inferiores e termos jurídicos (Due Diligence, Partilhas, Inventários), alinhamento do badge para `DIAGNÓSTICO & VIABILIDADE` e botão WhatsApp específico.
  - [x] Novo Logotipo ZHAARQ com Tipografia Ampliada: integração oficial do novo logotipo com "ARQUITETURA E SERVIÇOS" ampliado, corte preciso de margens vazias, extração de canal alpha antialiased e escala calibrada na Navbar e Rodapé com máxima legibilidade.
  - [x] Atualização da Pergunta 03 do FAQ (Prazos na Prefeitura): atualização da resposta oficial, refletindo com prudência a realidade dos prazos dos órgãos municipais e o acompanhamento integral pela ZHAARQ.
  - [x] Atualização da Pergunta 04 do FAQ (Início sem Planta Antiga): atualização da resposta oficial com procedimento técnico de levantamento in loco, elaboração de plantas e certidões históricas.
  - [x] Nova Fotografia Profissional da Arquiteta na Seção 09: substituição da foto pelo retrato de alta autoridade no escritório ZHAARQ com pranchas, logotipo iluminado na parede e materiais (`arquiteta_escritorio_projetos.webp` em proporção 2/3).
  - [x] Reformulação da Seção 08 (Projeto Real: Do Terreno à Regularização Completa): remoção de "estudo de caso" e tempo fixo de 82 dias, adoção da copy oficial com aprovação municipal, Habite-se, CND e averbação no Cartório de Imóveis, e reorganização da cronologia 01 a 04 nos 4 cards fotográficos.
  - [x] Restauração da Lista Editorial Indexada na Seção 05 (Especialidades): retorno ao layout minimalista com linhas hairline (`01.` a `05.`) conforme aprovação da cliente, preservando rigorosamente todos os textos atualizados (Desdobro no item 01, Diagnóstico Técnico e Estudo de Viabilidade no item 05 e remoção de tags jurídicas).
  - [x] Inclusão da Foto Real do Terreno no Card 01 do Projeto Real: integração da imagem do loteamento/terreno em WebP (`case_1_terreno.webp`), novo título "Local e Condições Iniciais", badge `01. CONDIÇÕES INICIAIS` e descrição técnica oficial.
  - [x] Atualização da Etapa 02 do Projeto Real (Desenvolvimento & Projeto Arquitetônico): integração da fotografia da Arquiteta Juliana Lucena no escritório desenvolvendo pranchas técnicas em WebP 4:3 (`case_2_projeto.webp`), badge `02. DESENVOLVIMENTO`, título "Elaboração do Projeto Arquitetônico" e descrição técnica oficial.
  - [x] Atualização da Etapa 03 do Projeto Real (Aprovação e Licenciamento Municipal): integração da fotografia oficial da aprovação na Prefeitura Municipal com carimbo APROVADO em WebP 4:3 (`case_3_aprovacao.webp`), badge `03. APROVAÇÃO`, título "Aprovação e Licenciamento" e descrição técnica oficial.
  - [x] Atualização da Etapa 04 do Projeto Real (Conclusão & Habite-se): integração da foto autêntica da residência concluída em WebP 4:3 (`case_4_conclusao.webp`), badge `04. CONCLUSÃO`, título "Habite-se" e descrição técnica oficial de formalização perante a Prefeitura.
  - [x] Atualização da Etapa 05 do Projeto Real (Receita Federal & CND): integração da fotografia da regularização fiscal da obra com certidão CND física e notebook da Receita Federal em WebP 4:3 (`case_5_receita.webp`), badge `05. RECEITA FEDERAL`, título "Abertura do CNO, Aferição e Emissão da CND da Obra" e cópia técnica com expertise em redução de até 70%.
  - [x] Conclusão da Etapa 06 do Projeto Real (Averbação no Cartório de Imóveis): integração da fotografia oficial da averbação cartorária com certidão timbrada e livro de matrícula em WebP 4:3 (`case_6_cartorio.webp`), badge `06. AVERBAÇÃO NO CARTÓRIO`, título "Etapa final: atualização da matrícula do imóvel" e consolidação da matriz completa 3x2 com 6 etapas consecutivas.
  - [x] Correção de Alinhamento dos Cards do Case Real: substituição de `justify-between` por `justify-start` nos 6 cards, garantindo que títulos e descrições comecem rigorosamente no mesmo nível superior logo abaixo das fotos (top-aligned), eliminando vácuos verticais nos cards com menos texto.
  - [x] Destaque de Anistia Municipal na Tela Inicial: criação de Top Announcement Bar no topo extremo e Card de Amparo Legal na Hero Section com chips 2x2 das 4 legislações municipais oficiais (São Paulo Lei 17.202/19, Guarulhos Lei 8.530/26, Suzano LC 423/26 e Itaquaquecetuba LC 395/24) com mensagens contextuais para o WhatsApp.
  - [x] Carrossel Mobile Touch com Snap e Dots nos Projetos em Destaque: transformação dos 3 cards da seção `#projetos` em carrossel horizontal suave sem barra de rolagem no celular (`overflow-x: auto`, `snap-x snap-mandatory`, `no-scrollbar`), efeito visual peek do próximo card (`w-[86vw]`), 3 indicadores de paginação clicáveis sincronizados via JS vanilla e preservação do grid simétrico em desktop.
  - [x] Carrossel Mobile Touch com Snap e 5 Dots no Fluxo de Metodologia: conversão dos 5 cards orgânicos da seção `#como-funciona` em carrossel deslizável horizontal por toque no smartphone (`w-[86vw]`, `snap-center`), barra de rolagem oculta, 5 botões de dots sincronizados via JS vanilla e preservação da régua sequencial de 5 colunas no desktop.
  - [x] Carrossel Mobile Touch com Snap e 6 Dots no Projeto Real: conversão dos 6 cards fotográficos da seção `#case-real` em carrossel deslizável horizontal por toque no smartphone (`w-[86vw]`, `snap-center`), barra de rolagem oculta, 6 botões de dots sincronizados via JS vanilla e preservação da matriz 3x2 no desktop.
  - [x] Correção de Sincronização Geométrica dos Dots & Targets de Toque Touch: reestruturação do motor de carrossel móvel (`setupMobileCarousel`) com cálculo geométrico central a 60fps (`requestAnimationFrame`), eliminação de erros por divisão de largura, botões de dots acessíveis com target de clique ampliado (`py-3 px-1.5`) e cache busting nos assets (`?v=0.7.51`).
  - [x] Reformulação Horizontal do Logotipo na Navbar com Máxima Legibilidade: substituição do arquivo vertical empilhado por layout horizontal de alta resolução inspirado na referência original (`ref_hero.webp`), combinando o símbolo arquitetônico dourado oficial (`logo-symbol-gold.webp`) com tipografia vetorial nativa do navegador (`Tenor Sans` e `Jost`), divisor com gradiente dourado e estabilização responsiva sem quebra do botão CTA no mobile (`?v=0.7.52`).
- [x] **Instalação e Integração do Graphify (Otimização de Processamento & Tokens):**
  - [x] Instalação do pacote oficial `graphifyy` (v0.9.90) com AST Tree-sitter e NetworkX.
  - [x] Registro das regras em `.agents/rules/graphify.md` e workflows em `.agents/workflows/graphify.md`.
  - [x] Extração e clusterização do Grafo de Conhecimento em `graphify-out/` com cache incremental.
  - [x] Configuração de automação contínua via Git Hooks (`post-commit`, `post-checkout`, `post-merge`).
  - [x] Inclusão de `graphify-out/` no `.gitignore` para proteção do build de produção.
- [x] Servidor de desenvolvimento local iniciado e rodando ativamente na porta 3000 (`http://localhost:3000`).

### Fazendo
- [ ] Validação visual e interação em tempo real com o usuário.

### Pendentes
- [ ] Publicação/Deploy em ambiente de produção (Netlify, Vercel ou hospedagem do cliente).
