# Changelog - Landing Page ZHAARQ

Todas as alterações notáveis deste projeto serão registradas neste arquivo.

## [0.7.52] - 2026-10-16
### Reformulação Horizontal do Logotipo na Navbar com Símbolo Dourado e Tipografia Vetorial Nítida
- **Diagnóstico da Ilegibilidade na Navbar:**
  - O logotipo anterior utilizava uma imagem rasterizada vertical empilhada (`logo-branca.webp`), dividindo a altura da barra (`h-12` = 48px) entre o símbolo superior e duas linhas de texto. No smartphone, o texto inferior *"ARQUITETURA E SERVIÇOS"* ficava reduzido a ~3.2 pixels físicos, resultando em borrões ilegíveis.
- **Implementação do Logotipo Horizontal Oficial (Padrão de Alta Autoridade):**
  - **Símbolo Arquitetônico Dourado:** Extração isolada e calibragem do símbolo oficial da marca (`assets/images/logo-symbol-gold.webp`) com fundo transparente antialiased, preservando as linhas arquitetônicas com gradiente bronze/dourado e o checklist de conformidade técnica, exatamente como na referência conceitual (`ref_hero.webp`).
  - **Tipografia Vetorial Nativa:** Em vez de depender de pixels rasterizados WebP em baixa resolução, a tipografia foi migrada para renderização vetorial nativa do navegador com GPU:
    - *"ZHAARQ"* em `Tenor Sans` com kerning ampliado (`tracking-[0.2em] sm:tracking-[0.24em]`) e tom marfim nobre (`#FBF9F5`).
    - Linha divisória *hairline* com gradiente dourado sutil (`bg-gradient-to-r from-brand-gold/60 via-brand-gold to-brand-gold/60`).
    - *"ARQUITETURA E SERVIÇOS"* em `Jost` caixa alta (`tracking-[0.24em] sm:tracking-[0.28em]`) em tom areia mineral (`#C4B9AC`), 100% nítido e perfeitamente legível tanto em telas HiDPI/Retina quanto em smartphones convencionais.
- **Equilíbrio Responsivo na Navbar Mobile:**
  - Calibragem de respiro horizontal e aplicação de `whitespace-nowrap` no botão superior de CTA (*"Analisar meu imóvel"*), prevenindo quebras acidentais de linha em telas compactas (360px a 390px) e mantendo espaçamento fluido entre o logotipo e o botão.
- **Prevenção de Cache (Cache Busting):**
  - Atualização dos links de assets para `css/styles.css?v=0.7.52` e `js/main.js?v=0.7.52`.
- **Validação Visual Rigorosa:**
  - Capturas via CDP Headless (Edge) comprovando legibilidade absoluta no mobile (`test_logo_navbar_mobile.png`), no desktop (`test_logo_navbar_desktop.png`) e durante o scroll com vidro fumê ativo (`navbar_scrolled_viewport.png`).

## [0.7.51] - 2026-10-16
### Correção da Sincronização Geométrica dos Dots e Ampliação da Área de Toque Touch no Mobile
- **Diagnóstico da Causa Raiz:**
  - O cálculo anterior dependia de uma divisão teórica de `scrollLeft / cardWidth` que se tornava imprecisa devido aos gaps flex (`gap-6` = 24px) e margens negativas, além dos botões dos dots terem apenas 6px de altura visual (`h-1.5`), impedindo o clique com os dedos em smartphones.
- **Motor Unificado de Carrossel Mobile (`setupMobileCarousel`):**
  - Implementado algoritmo geométrico de distância mínima ao centro: o script calcula a distância absoluta entre o centro de cada card e o centro da viewport do container (`carouselCenter - cardCenter`), identificando matematicamente o card visível com 100% de precisão em qualquer resolução de celular.
  - Sincronização a 60fps via `requestAnimationFrame` com múltiplos gatilhos responsivos: `scroll`, `scrollend` e `touchend`.
  - Tratamento especial para extremos físicos: `activeIndex = 0` no início do scroll e `activeIndex = cards.length - 1` ao atingir o limite direito.
- **Ampliação da Área de Toque dos Dots (Acessibilidade Mobile):**
  - Botões indicadores reestruturados com target touch confortável (`py-3 px-1.5`, elevando a área clicável para mais de 30px de altura) contendo elemento visual interno `<span class="dot-pill">`.
  - Suporte a eventos de `click` e `touchend` direto nos dots para resposta tátil instantânea no smartphone.
- **Prevenção de Cache (Cache Busting):**
  - Atualização dos links de assets para `css/styles.css?v=0.7.51` e `js/main.js?v=0.7.51`, forçando a atualização imediata nos celulares e navegadores sem necessidade de limpeza manual de cache.
- **Validação Visual Rigorosa:**
  - Captura `casereal_card6_active_verified.png` comprovando que o Card 06 (Averbação no Cartório) acende perfeitamente o Dot 06 em terracota e desativa os anteriores.

## [0.7.50] - 2026-10-16
### Carrossel Touch com Snap e 6 Dots no Mobile (Projeto Real: Do Terreno à Regularização)
- **Transformação Responsiva da Seção de Case Real (`#case-real`):**
  - **Experiência Mobile Otimizada:** Os 6 cards fotográficos do projeto real (01. Condições Iniciais, 02. Desenvolvimento, 03. Aprovação, 04. Conclusão / Habite-se, 05. Receita Federal / CND, e 06. Averbação no Cartório) agora deslizam suavemente em formato de carrossel horizontal nativo com toque (*swipe* e *CSS scroll-snap*), sem barra de rolagem cinza (`.no-scrollbar`).
  - **Efeito Visual *Peek*:** Cards dimensionados com largura calibrada (`w-[86vw] sm:w-[70vw] md:w-auto`), mantendo a ponta do card seguinte à mostra na lateral direita da tela.
  - **6 Indicadores de Paginação Interativos (*Dots*):** Conjunto de 6 botões de paginação (`.casereal-carousel-dot`) posicionados abaixo dos cards, sincronizados em tempo real via JavaScript com *debouncing* (40ms) conforme a rolagem do usuário, com navegação suave por clique direto no ponto.
  - **Dica Visual de Usabilidade:** Indicação de apoio com ícone pulsante (*"Deslize para o lado para ver todas as 6 etapas do projeto real"*) visível unicamente em smartphones (`flex md:hidden`).
  - **Preservação Integral do Desktop:** A visualização em computadores e tablets (`md:`) permanece rigorosamente na matriz simétrica de 3 colunas por 2 linhas (`md:grid md:grid-cols-2 lg:grid-cols-3`).
- **Validação Visual via CDP Headless (Edge):**
  - Geradas capturas comprovando o snap magnético das Etapas 1 e 2 no smartphone (390x844px), a exibição dos 6 dots e a preservação da matriz 3x2 no desktop (1440px).

## [0.7.49] - 2026-10-16
### Carrossel Touch com Snap e 5 Dots no Mobile (Metodologia: Do Início à Regularização)
- **Transformação Responsiva da Seção de Fluxo de Trabalho (`#como-funciona`):**
  - **Experiência Mobile Otimizada:** Os 5 cards orgânicos de fases de trabalho (Diagnóstico Preliminar, Projeto Técnico As-Built, Protocolo & Aprovação, Conclusão & Habite-se, e Averbação no Cartório) agora deslizam suavemente no formato de carrossel horizontal nativo com toque (*swipe* e *CSS scroll-snap*), eliminando a rolagem vertical excessiva em celulares.
  - **Efeito Visual *Peek* & Proporção Estável:** Cards com largura calibrada (`w-[86vw] sm:w-[70vw] md:w-auto`) e altura mínima uniforme (`min-h-[300px]`), mantendo a borda lateral da próxima etapa sutilmente visível à direita.
  - **5 Indicadores de Paginação Interativos (*Dots*):** Conjunto de 5 botões de navegação (`.etapas-carousel-dot`) na base da seção, sincronizados automaticamente via JavaScript com *debouncing* (40ms) conforme o usuário rola a tela ou clica diretamente nos pontos.
  - **Dica Visual de Usabilidade:** Indicação de apoio com ícone pulsante (*"Deslize para o lado para ver todas as 5 etapas"*) visível unicamente em smartphones (`flex md:hidden`).
  - **Preservação Integral do Desktop:** Em monitores e tablets (`md:` e `lg:`), a seção mantém rigorosamente a régua sequencial com o grid de 5 colunas simétricas (`lg:grid-cols-5`).
- **Validação Visual via CDP Headless (Edge):**
  - Geradas capturas comparativas comprovando o snap magnético das Etapas 1 e 2 no celular (390x844px) e a integridade da grade de 5 colunas no desktop (1440px).

## [0.7.48] - 2026-10-16
### Carrossel Touch com Snap e Indicadores de Paginação no Mobile (Projetos em Destaque)
- **Transformação Responsiva da Seção de Projetos (`#projetos`):**
  - **Experiência Mobile:** Os 3 cards de obras reais agora se comportam como um carrossel horizontal suave e nativo (`overflow-x: auto`, `snap-x snap-mandatory`, `scroll-smooth`), sem barra de rolagem cinza antiestética (`.no-scrollbar`).
  - **Efeito Visual *Peek*:** Cards dimensionados com largura calibrada (`w-[86vw] sm:w-[70vw]`), mantendo a ponta do card seguinte visível na lateral direita para induzir o deslize natural por toque (*swipe*).
  - **Sangria Negativa Inteligente:** Uso de `-mx-4 px-4` garantindo que o primeiro card comece alinhado com as margens da página, mas deslize até as bordas físicas da tela do smartphone.
  - **Indicadores de Paginação Interativos (*Dots*):** 3 botões estilizados na base dos cards sincronizados em tempo real via JavaScript Vanilla com *debouncing*, permitindo navegação tanto por toque direto no card quanto por clique nos pontos indicadores.
  - **Dica Visual de Usabilidade:** Mensagem sutil com ícone animado (*"Deslize para o lado para ver outros projetos"*) exibida exclusivamente em telas móveis (`flex md:hidden`).
  - **Preservação Integral do Desktop:** A visualização em computadores e tablets acima de 768px (`md:`) permanece rigorosamente em grid simétrico de 3 colunas (`md:grid md:grid-cols-2 lg:grid-cols-3`).
- **Otimização de Estilos no CSS ([css/styles.css](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/css/styles.css)):**
  - Adicionado utilitário `.no-scrollbar` com suporte cross-browser completo (`-ms-overflow-style: none`, `scrollbar-width: none`, `&::-webkit-scrollbar: display: none`).
- **Validação Visual via CDP Headless (Edge):**
  - Geradas capturas comparativas comprovando o snap preciso do Card 1 e Card 2 em smartphone (390x844px) e a conservação da grade simétrica no desktop (1440px).

## [0.7.47] - 2026-10-16
### Destaque de Anistia Municipal & Amparo Legal na Tela Inicial (Hero & Top Bar)
- **Top Announcement Bar de Anistia Municipal:**
  - Integrada barra superior discreta e sofisticada no topo da página (`<aside>`), com alerta âmbar pulsante e chamada para as leis de anistia vigentes em São Paulo, Guarulhos, Suzano e Itaquaquecetuba.
- **Card de Amparo Legal na Hero Section:**
  - Criado card pericial com acabamento em vidro escuro (*glassmorphism*), borda em ouro envelhecido e efeito de profundidade, posicionado na área superior esquerda da Hero sem cobrir a fotografia ou a presença da arquiteta.
  - Implementado grid 2x2 responsivo com as 4 legislações municipais oficiais fornecidas:
    1. **São Paulo:** Lei nº 17.202/2019
    2. **Guarulhos:** Lei nº 8.530/2026
    3. **Suzano:** Lei Complementar nº 423/2026
    4. **Itaquaquecetuba:** Lei Complementar nº 395/2024
  - **Conversão Contextualizada via WhatsApp:** Cada chip direciona o visitante para o atendimento técnico da ZHAARQ com a mensagem pré-configurada da legislação daquele município específico.
- **Validação Visual Responsiva:**
  - Capturas e validações em Desktop (1440px) e Mobile (390px) com legibilidade imediata e preservação da hierarquia do título principal.

## [0.7.46] - 2026-10-15
### Correção de Alinhamento Superior dos Cards do Projeto Real (Top-Aligned)
- **Alinhamento Uniforme dos Textos no Topo:**
  - Substituição da propriedade `justify-between` por `justify-start` nos containers dos 6 cards da seção `#case-real` ([index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html)).
  - Correção do espaçamento vertical irregular: os títulos e descrições agora iniciam rigorosamente na mesma linha horizontal superior logo abaixo da foto (`mb-4`), eliminando o vão em branco que empurrava o texto dos cards com menos conteúdo (como a Etapa 04 - Habite-se) para o rodapé do card.
- **Validação Visual:**
  - Captura e validação da grade 3x2 em desktop demonstrando o alinhamento milimétrico e simétrico de todas as 6 etapas fotográficas.

## [0.7.45] - 2026-10-15
### Conclusão Integral do Projeto Real (Etapa 06 - Averbação no Cartório de Registro de Imóveis)
- **Fotografia Oficial de Averbação Cartorária:**
  - Integrada a fotografia oficial do processo de averbação em mesa de cartório (`assets/images/case_6_cartorio.webp`), exibindo a certidão timbrada de "AVERBAÇÃO", o livro oficial encapado em couro "Matrícula do Imóvel", caneta tinteiro, prancha arquitetônica e maquete volumétrica, em WebP nativo 4:3 (1024x768px).
- **Adequação do Título e Cópia Técnica da Etapa 06:**
  - Badge: `06. AVERBAÇÃO NO CARTÓRIO`.
  - Título: **"Etapa final: atualização da matrícula do imóvel"**.
  - Descrição técnica oficial:
    > *"Após a regularização, realizamos a averbação da construção ou ampliação no Cartório de Registro de Imóveis, atualizando a matrícula e formalizando as informações da edificação."*
- **Consolidação da Matriz Completa 3x2 (6 Etapas Consecutivas):**
  - `01. CONDIÇÕES INICIAIS`: Registro do terreno e análise das condições existentes para o desenvolvimento do projeto.
  - `02. DESENVOLVIMENTO`: Elaboração do Projeto Arquitetônico e definição das soluções técnicas e legais.
  - `03. APROVAÇÃO`: Aprovação e Licenciamento técnico perante os órgãos competentes e Prefeitura.
  - `04. CONCLUSÃO`: Conclusão da obra e obtenção do Habite-se / Certificado de Conclusão.
  - `05. RECEITA FEDERAL`: Abertura do CNO, Aferição e Emissão da CND da Obra (com redução técnica de até 70%).
  - `06. AVERBAÇÃO NO CARTÓRIO`: Atualização final da matrícula no Cartório de Registro de Imóveis.
- **Validação Visual Responsiva:**
  - Grade de 3 colunas no desktop (`lg:grid-cols-3`), 2 colunas em tablets (`sm:grid-cols-2`) e 1 coluna em mobile, assegurando harmonia editorial e proporções perfeitas sem overflow ou quebras.

## [0.7.44] - 2026-10-15
### Atualização da Etapa 05 do Projeto Real (Regularização Fiscal & CND na Receita Federal)
- **Fotografia Oficial de Regularização Fiscal:**
  - Integrada a fotografia em estúdio da regularização tributária da obra (`assets/images/case_5_receita.webp`), apresentando notebook com portal da Receita Federal, capacete de engenharia, pranchas e certidão física oficial "CND - Obra Regularizada" com chancela e QR Code, em WebP nativo 4:3 (1024x768px).
- **Adequação do Título e Cópia Técnica da Etapa 05:**
  - Badge: `05. RECEITA FEDERAL`.
  - Título: **"Abertura do CNO, Aferição e Emissão da CND da Obra"**.
  - Descrição técnica oficial completa com expertise em regularização previdenciária e estratégias técnicas com potencial de redução de até 70% perante a Receita Federal.
- **Modularização da Grade para 3 Colunas (`lg:grid-cols-3`):**
  - Grid expandido para acolher a cronologia completa de 01 a 06 com espaçamento balanceado e perfeita leitura em múltiplas linhas.
- **Validação Visual Responsiva:**
  - Capturas e validações em Desktop (1440px) e Mobile (390px) com legibilidade impecável e proporções harmônicas.

## [0.7.43] - 2026-10-15
### Atualização da Etapa 04 do Projeto Real (Conclusão Construtiva & Habite-se)
- **Fotografia da Edificação Concluída:**
  - Integrada a foto autêntica da residência finalizada com fachada em revestimento especial, telhado cerâmico, porta pivotante, esquadrias e calçada pavimentada (`assets/images/case_4_conclusao.webp`), convertida em WebP nativo na proporção matemática 4:3 (768x576px) com enquadramento arquitetônico perfeito.
- **Adequação do Título e Cópia Técnica da Etapa 04:**
  - Badge: `04. CONCLUSÃO`.
  - Título: **"Habite-se"**.
  - Descrição oficial:
    > *"Conclusão da etapa construtiva e solicitação do Habite-se ou Certificado de Conclusão da obra, conforme aplicável, formalizando a conclusão da edificação perante a Prefeitura."*
- **Consolidação da Sequência Completa do Projeto Real:**
  - `01. CONDIÇÕES INICIAIS`: Local e Condições Iniciais (Terreno e análise inicial).
  - `02. DESENVOLVIMENTO`: Elaboração do Projeto Arquitetônico (Plantas técnicas e soluções legais).
  - `03. APROVAÇÃO`: Aprovação e Licenciamento (Acompanhamento perante os órgãos competentes).
  - `04. CONCLUSÃO`: Habite-se (Conclusão da obra e formalização perante a Prefeitura).
- **Validação Visual Responsiva:**
  - Capturas e validações em Desktop (1440px) e Mobile (390px) com estética editorial premium, alinhamento simétrico e nitidez fotográfica.

## [0.7.42] - 2026-10-15
### Atualização da Etapa 03 do Projeto Real (Aprovação e Licenciamento Municipal)
- **Fotografia Oficial de Aprovação e Licenciamento:**
  - Integrada a fotografia oficial do projeto deferido na Prefeitura Municipal / Secretaria de Planejamento Urbano e Licenciamento (`assets/images/case_3_aprovacao.webp`), com carimbo "APROVADO", pranchas técnicas e chancela oficial, em WebP nativo 4:3 (1024x768px).
- **Adequação do Título e Cópia Técnica da Etapa 03:**
  - Badge: `03. APROVAÇÃO`.
  - Título: **"Aprovação e Licenciamento"**.
  - Descrição oficial:
    > *"Acompanhamento técnico do processo junto aos órgãos competentes até a aprovação do projeto e emissão das licenças aplicáveis."*
- **Consolidação da Sequência Visual do Projeto Real:**
  - `01. CONDIÇÕES INICIAIS`: Registro do terreno e análise das condições existentes.
  - `02. DESENVOLVIMENTO`: Elaboração do Projeto Arquitetônico e plantas técnicas.
  - `03. APROVAÇÃO`: Aprovação e Licenciamento junto aos órgãos competentes.
  - `04. AVERBAÇÃO`: Regularização na Receita Federal (CND) e averbação no Cartório de Registro de Imóveis.
- **Validação Visual Responsiva:**
  - Validação de renderização em Desktop (1440px) e Mobile (390px) com legibilidade impecável e proporção harmônica.

## [0.7.41] - 2026-10-15
### Atualização da Etapa 02 do Projeto Real (Desenvolvimento & Projeto Arquitetônico)
- **Fotografia Otimizada da Arquiteta em Desenvolvimento:**
  - Integrada a foto autêntica da Arquiteta Juliana Lucena no escritório desenvolvendo pranchas arquitetônicas (`assets/images/case_2_projeto.webp`), convertida em WebP nativo na proporção 4:3 (768x576px) com compressão de alta fidelidade e enquadramento perfeito.
- **Adequação do Título e Cópia Técnica da Etapa 02:**
  - Badge: `02. DESENVOLVIMENTO`.
  - Título: **"Elaboração do Projeto Arquitetônico"**.
  - Descrição oficial:
    > *"Desenvolvimento das plantas técnicas e definição das soluções arquitetônicas, considerando as necessidades do cliente e os parâmetros legais aplicáveis ao projeto."*
- **Consolidação da Sequência Visual do Projeto Real:**
  - `01. CONDIÇÕES INICIAIS`: Registro do terreno e análise das condições existentes.
  - `02. DESENVOLVIMENTO`: Elaboração do Projeto Arquitetônico e plantas técnicas.
  - `03. HABITE-SE`: Conclusão da edificação e vistoria final com expedição do Habite-se.
  - `04. AVERBAÇÃO`: Regularização na Receita Federal (CND) e averbação na matrícula do RGI.
- **Validação Visual Responsiva:**
  - Capturas de tela e validação em Desktop (1440px) e Mobile (390px) sem qualquer distorção visual.

## [0.7.40] - 2026-10-15
### Inclusão da Foto Real do Terreno e Atualização do Card 01 (Projeto Real)
- **Fotografia Autêntica das Condições Iniciais:**
  - Integrada a fotografia real do loteamento/terreno antes do início das obras (`assets/images/case_1_terreno.webp`), otimizada em WebP nativo na proporção 4:3 (1024x768px).
- **Adequação do Título e Cópia da Etapa 01:**
  - Badge: `01. CONDIÇÕES INICIAIS`.
  - Título: **"Local e Condições Iniciais"**.
  - Descrição oficial:
    > *"Registro do terreno e análise das condições existentes para o desenvolvimento do projeto."*
- **Consolidação da Narrativa Visual "Do Terreno à Regularização Completa":**
  - A cronologia fotográfica 01 a 04 agora reflete com autenticidade integral a transformação completa:
    1. `01. CONDIÇÕES INICIAIS`: O terreno vazio com terraplenagem e delimitação inicial.
    2. `02. ACOMPANHAMENTO`: Execução da estrutura e alvenaria com a arquiteta in loco.
    3. `03. HABITE-SE`: Conclusão da edificação e expedição do Habite-se municipal.
    4. `04. AVERBAÇÃO`: Residência finalizada, CND emitida e averbação no Cartório de Registro de Imóveis.

## [0.7.39] - 2026-10-15
### Restauração do Layout da Lista Editorial Indexada na Seção 05 (Especialidades)
- **Retorno ao Layout Minimalista e Editorial de Alto Padrão:**
  - Atendendo à preferência da arquiteta, a estrutura de carrossel vertical empilhado (Stacking Cards) foi revertida para a consagrada **Lista Editorial Indexada** com linhas divisórias *hairline*, inspirada em ateliês de arquitetura contemporânea.
  - Eliminação de scripts de rolagem forçada e estilos sticky intermediários, garantindo visualização panorâmica imediata de todos os serviços prestados.
- **Manutenção Rigorosa de Textos e Títulos Atualizados:**
  - **Item 01:** Mantida a inclusão de desdobro e unificação de lotes junto ao enquadramento em leis de anistia e zoneamento.
  - **Item 02:** Mantido o escopo técnico de levantamento in loco, peças gráficas, cortes, fachadas e memoriais conforme ABNT e prefeituras.
  - **Item 03:** Mantida a condução perante as Secretarias de Urbanismo/Obras, cumprimento de comunique-se e Habite-se.
  - **Item 04:** Mantida a regularização fiscal (SERO/CND) e averbação na matrícula do RGI.
  - **Item 05:** Atualizado para **"Diagnóstico Técnico e Estudo de Viabilidade"**, com a descrição técnica oficial completa sobre análise construtiva/documental perante prefeitura e licenças, e remoção integral das tags de viés jurídico (`Due Diligence` e `Inventário`).
- **Validação Visual Multi-Dispositivo:**
  - Capturadas e validadas as versões Desktop (1440px) e Mobile (390px), confirmando clareza de leitura, leveza e sofisticação visual sem qualquer perda de performance.

## [0.7.38] - 2026-10-15
### Reformulação da Seção 08 para "Projeto Real: Do Terreno à Regularização Completa" e Cronologia 01 a 04
- **Eliminação do Conceito "Estudo de Caso" e Prazos Fixos:**
  - Substituído o badge anterior por **"PROJETO REAL • DO INÍCIO À CONCLUSÃO"**.
  - Removido o bloco de prazo fixo anterior (`Tempo Total: 82 dias`), alinhando com a política de transparência técnica e prudência quanto à variabilidade dos prazos municipais.
- **Atualização da Cópia Oficial de Cabeçalho:**
  - Título atualizado para: **"Do terreno à regularização completa."**
  - Cópia técnica oficial aplicada na íntegra:
    > *"Um processo real conduzido pela ZHAARQ, desde as etapas iniciais do projeto até a conclusão da obra, incluindo aprovação municipal, emissão do Habite-se, regularização previdenciária da construção com emissão da CND e averbação no Cartório de Registro de Imóveis."*
- **Adequação da Cronologia 01 a 04 nas Etapas Fotográficas:**
  - `01. PROJETO & OBRA` | *Início da Construção* (Desenvolvimento de projeto e execução física).
  - `02. ACOMPANHAMENTO` | *Acompanhamento Técnico* (Vistorias in loco e conformidade urbanística).
  - `03. HABITE-SE` | *Conclusão da Obra* (Vistoria final e expedição de Habite-se municipal).
  - `04. AVERBAÇÃO` | *Matrícula Atualizada* (Regularização na Receita Federal com CND e averbação definitiva no Cartório de Registro de Imóveis).
- **Validação Visual Multi-Dispositivo:**
  - Capturadas e validadas as versões Desktop (1440px) e Mobile (390px), confirmando hierarquia editorial elegante e clareza da narrativa cronológica.

## [0.7.37] - 2026-10-15
### Nova Fotografia Profissional da Arquiteta Juliana Lucena no Ateliê ZHAARQ (Seção 09)
- **Substituição por Imagem de Alto Padrão e Autoridade:**
  - Substituída a foto institucional anterior da arquiteta em pé no CREA-SP pela nova fotografia de alta produção no escritório técnico (`assets/images/arquiteta_escritorio_projetos.webp`).
  - A composição retrata a Arquiteta Juliana Lucena atuando diretamente sobre pranchas arquitetônicas, escalímetro, amostras de materiais, notebook e o logotipo oficial ZHAARQ iluminado na parede de fundo, transmitindo autoridade máxima, sofisticação e responsabilidade técnica.
- **Otimização e Fidelidade:**
  - Conversão para formato WebP a 92% de qualidade (682x1024px ocupando apenas 122 KB), com proporção perfeita `aspect-[2/3]` que valoriza todo o cenário arquitetônico sem cortes.
- **Validação Visual:**
  - Validada a integração harmônica com o badge flutuante "Juliana Lucena • CAU/SP Ativo" e equilíbrio com a coluna de credenciais à direita.

## [0.7.36] - 2026-10-15
### Atualização da Resposta da Pergunta 04 do FAQ (Início Sem Planta Antiga)
- **Refinamento Técnico e Simplificação da Resposta:**
  - Atualizada a resposta da Pergunta 04 sobre a ausência de planta antiga ou documentos originais com texto enxuto e preciso.
  - Cópia técnica oficial aplicada na íntegra:
    > *"Sim. Nossa equipe realiza o levantamento métrico do imóvel in loco, elabora as plantas arquitetônicas necessárias e solicita as certidões históricas pertinentes junto aos órgãos competentes."*
- **Validação de Interface e Interatividade:**
  - Testada a expansão do acordeão no navegador via script headless CDP, confirmando abertura fluida e visualização harmoniosa.

## [0.7.35] - 2026-10-15
### Atualização da Resposta da Pergunta 03 do FAQ (Prazos de Aprovação Municipal)
- **Alinhamento com a Realidade dos Órgãos Públicos:**
  - Substituída a estimativa fixa anterior de dias por posicionamento técnico transparente e prudente, adequado à morosidade das análises da Prefeitura de São Paulo e especificidades de cada município.
  - Cópia técnica oficial aplicada na íntegra:
    > *"O prazo depende do serviço contratado, da legislação aplicável, do município e da análise dos órgãos responsáveis. Cada processo possui suas particularidades, e a ZHAARQ acompanha todas as etapas necessárias, buscando atender às exigências técnicas e legais para a aprovação."*
- **Validação de Interface e Interatividade:**
  - Testado o acordeão interativo no navegador via script headless CDP, confirmando expansão suave a 60 FPS, inversão do ícone de controle (`+` para `−`) e legibilidade tipográfica harmoniosa.

## [0.7.34] - 2026-10-15
### Integração do Novo Logotipo ZHAARQ com Tipografia Ampliada & Máxima Legibilidade
- **Substituição Oficial do Logotipo da Marca:**
  - Integrada a nova versão do logotipo fornecida pelo usuário, contendo tipografia principal ampliada ("Z H A A R Q") e subtítulo simplificado para **"A R Q U I T E T U R A   E   S E R V I Ç O S"** com espaçamento editorial e altura de letra significativamente maior.
- **Processamento Gráfico e Extração de Transparência:**
  - Recorte cirúrgico da *bounding box* (eliminando mais de 25% de margens brancas vazias ao redor do símbolo, permitindo ganho real de escala).
  - Extração de canal Alpha de alta fidelidade via subpixel antialiasing com inversão matemática de luminosidade.
  - Geração das variantes em WebP de altíssima definição:
    - `logo-branca.webp`: Traços em Off-White nobre (`#FBF9F5`) sobre fundo 100% transparente, garantindo contraste superior contra a Navbar e o Rodapé escuros.
    - `logo.webp`: Traços em bronze/dourado original sobre fundo transparente para uso em favicon e fundos claros.
- **Calibragem Responsiva de Escala no Layout:**
  - Navbar: ampliação proporcional para `h-12 sm:h-13 md:h-15`, preservando o alinhamento da barra de navegação e os offsets do cabeçalho sticky.
  - Rodapé Institucional: ampliação para `h-18 sm:h-22 md:h-24`, conferindo presença monumental e 100% de legibilidade às escritas.
- **Validação Visual Multi-Dispositivo:**
  - Testado e aprovado via Edge headless CDP no Desktop (1440px) e Mobile (390px), confirmando clareza cristalina das escritas em todas as resoluções.

## [0.7.33] - 2026-10-15
### Atualização do Card 05: Diagnóstico Técnico e Estudo de Viabilidade & Remoção de Termos Jurídicos
- **Readequação do Escopo de Atuação do Card 05 (Stacking Cards):**
  - Título atualizado para **Diagnóstico Técnico e Estudo de Viabilidade**, em estrita conformidade com a atuação técnica da arquiteta.
  - Cópia técnica oficial aplicada na íntegra:
    > *"Análise da situação construtiva e documental do imóvel, identificação de possíveis pendências junto à Prefeitura e demais órgãos competentes, com orientação sobre os procedimentos técnicos necessários para regularização imobiliária, viabilidade de novos projetos e obtenção de licenças."*
- **Remoção de Elementos e Jargões de Natureza Jurídica:**
  - Removidas integralmente as tags inferiores (`Due Diligence Imobiliária`, `Partilhas & Inventários`, `Auditoria de Passivos`), eliminando qualquer conotação com área do direito.
  - Badge de cabeçalho refinado de `DUE DILIGENCE & PERÍCIA` para `DIAGNÓSTICO & VIABILIDADE`.
  - Botão de conversão ajustado para "Solicitar Diagnóstico Técnico" com mensagem parametrizada no WhatsApp.
  - Painel lateral direito reformulado para "Análise Técnica" e "Viabilidade Construtiva & Legal", focando em diretrizes urbanísticas e aprovações perante a prefeitura.
  - Inclusão do serviço de Diagnóstico Técnico & Viabilidade no Rodapé Institucional.

## [0.7.32] - 2026-10-15
### Documentação do Prompt Mestre: Carrossel Vertical com Stacking Cards (Sticky Scroll)
- **Criação do Documento Reutilizável de Engenharia:**
  - Criado o arquivo [PROMPT_STACKING_CARDS_CARROSSEL.md](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/documents/PROMPT_STACKING_CARDS_CARROSSEL.md) em `/documents`.
  - Contém um **Prompt Mestre Copiável e Detalhado** para instruir qualquer IA (ChatGPT, Claude, Gemini, Antigravity) ou desenvolvedor a implementar o componente de cartões empilháveis com rolagem magnética a 60 FPS.
- **Sistematização das 6 Regras Críticas Anti-Bugs Validadas em Produção:**
  - *Regra 1:* Uso obrigatório de `overflow-x: clip` no `html, body` para não quebrar o `position: sticky`.
  - *Regra 2:* Fórmula matemática de offsets progressivos (`top: base + (n * step)`) por breakpoint.
  - *Regra 3:* Eliminação definitiva do vácuo/gap em branco (`margin-bottom: 20px !important;` e `padding-bottom: 0 !important;`).
  - *Regra 4:* Cabeçalho da seção fixo e legível (`position: sticky`, `z-50` e `backdrop-filter: blur(12px)`).
  - *Regra 5:* Escala tátil e escurecimento gradual via JS leve (`scale(0.95)`, `brightness(0.75)` com `transform-origin: top center`).
  - *Regra 6:* Responsividade mobile-first com checklist de QA para iOS/Android/Desktop.

## [0.7.31] - 2026-10-14
### Nova Fotografia de Vistoria Técnica In Loco na Seção de Diagnóstico (Seção 06)
- **Substituição por Fotografia Técnica Real em Campo:**
  - Substituída a imagem anterior da seção de Diagnóstico Pericial pela nova fotografia enviada pelo usuário, retratando a arquiteta em vistoria externa na calçada com prancheta, caneta e trena de agrimensura profissional laranja (`assets/images/diagnostico_vistoria_trena.webp`).
- **Otimização e Proporção Editorial:**
  - Convertida para formato WebP a 95% de qualidade (apenas 75 KB), com proporção adaptativa `aspect-square sm:aspect-[4/5]` que valoriza a trena de medição e a prancheta de anotações.
  - Alinhamento vertical equilibrado com o bloco de 4 pareceres periciais de risco à direita.
- **Validação Visual:**
  - Testado via navegador headless Edge CDP no Desktop e Mobile, confirmando nitidez fotográfica e integração do badge flutuante "Vistoria Técnica In Loco".

## [0.7.30] - 2026-10-14
### Novo Case Real no Card 03: Regularização e Desdobro de Lote & Expansão de Escopo
- **Integração de Case Real de Desdobro de Terreno (Card 03):**
  - Substituído o Card 03 pela obra real de **Regularização e Desdobro de Lote**, incluindo a foto interna do terreno/lote com a edificação existente (`assets/images/proj_real_desdobro.webp`), enquadrada na proporção áurea 4:3 e convertida em WebP de alta fidelidade (148 KB).
  - Cópia técnica inserida na íntegra:
    > *"Regularização de edificação e Desdobro de lote junto à Prefeitura Municipal, incluindo levantamento arquitetônico, elaboração de projeto, aprovação da construção existente e individualização do terreno em lotes distintos, conforme a legislação urbanística vigente."*
  - Badges e metadados configurados: `03. REGULARIZAÇÃO & DESDOBRO`, `Desdobro Aprovado • SP`, `São Paulo, SP • Terreno & Lote`, `Aprovado` e tag `DESDOBRO & INDIVIDUALIZAÇÃO`.
- **Expansão Estratégica do Serviço de Desdobro e Unificação na Página:**
  - Adicionado o serviço explícito de **Desdobro e Unificação de Lotes** na Especialidade 01 (Stacking Cards) e na listagem de serviços do Rodapé Institucional, aumentando a atratividade e indexação para uma das maiores buscas do mercado imobiliário paulista.
- **Simetria Perfeita do Portfólio em 3 Colunas:**
  - Todos os 3 cards do portfólio apresentam alturas idênticas, fotografias com proporção 4:3, badges superiores/inferiores e botões de ação alinhados na mesma linha horizontal.

## [0.7.29] - 2026-10-14
### Novo Case Real no Card 02 (Regularização de Residência Unifamiliar)
- **Substituição e Enquadramento da Nova Fotografia da Obra:**
  - Substituída a imagem anterior do Card 02 pela foto real do sobrado com faixa de anistia/regularização fornecida pelo cliente.
  - Enquadramento arquitetônico preciso em proporção 4:3 (`assets/images/proj_real_regularizacao.webp`), capturando o telhado, varanda com balaústres e portão com placa técnica, eliminando o asfalto excedente da rua.
  - Otimização para formato WebP a 92% de qualidade (140 KB), garantindo carregamento instantâneo e alta nitidez.
- **Atualização da Copy Técnica Conforme Diretrizes da ZHAARQ:**
  - Título atualizado para **Regularização de Residência Unifamiliar**.
  - Descrição oficial inserida na íntegra:
    > *"Regularização de residência unifamiliar junto à Prefeitura Municipal, incluindo levantamento arquitetônico, elaboração do projeto da edificação existente, aprovação municipal e emissão do Certificado de Regularização."*
  - Metadados e badges harmonizados: `02. REGULARIZAÇÃO EDILÍCIA`, `Certificado de Regularização • SP`, `São Paulo, SP • Sobrado`, `Regularizado` e tag inferior `REGULARIZAÇÃO MUNICIPAL`.
- **Equilíbrio Visual e Alinhamento do Grid:**
  - Altura e rodapés dos 3 cards de projetos 100% alinhados na mesma linha horizontal.

## [0.7.28] - 2026-10-14
### Configuração Global do WhatsApp Oficial da ZHAARQ
- **Integração do Número Real em Todo o Ecossistema de Conversão:**
  - Substituído o número placeholder pelo contato oficial de atendimento da ZHAARQ: **`+55 (11) 97745-3954`** (`5511977453954`) em todos os 19 pontos de conversão da Landing Page:
    - Botão superior da barra de navegação (Navbar);
    - Botão principal da Hero Section;
    - Botões individuais de ação dos 3 Projetos em Destaque;
    - Botões específicos dos 5 Stacking Cards de Especialidades;
    - CTA da seção de Diagnóstico Pericial;
    - CTA da seção de Case Real e Linha do Tempo;
    - CTA da seção "Sobre a Arquiteta";
    - Botão de atendimento direto ao final do FAQ;
    - Super CTA de fechamento;
    - Botão e linha de contato institucional no Rodapé;
    - Botão flutuante desktop e barra fixa inferior para celulares.
- **Roteamento Inteligente com Contexto Preservado (`main.js`):**
  - O script de rastreamento foi aprimorado para capturar dinamicamente a mensagem contextual do `href` de cada botão (ex: citação de projeto específico ou especialidade), anexando automaticamente os parâmetros de campanha (`utm_source`, `utm_campaign`, `gclid`) e redirecionando diretamente para `5511977453954`.
- **Exibição Visual no Rodapé:**
  - Adicionada a linha informativa explícita `<p><strong class="text-white font-medium">WhatsApp:</strong> (11) 97745-3954</p>` na coluna de atendimento do rodapé, elevando a transparência e credibilidade institucional.

## [0.7.27] - 2026-10-14
### Atualização do Escopo Técnico do Card 01 (Residência Unifamiliar)
- **Fidelidade Integral ao Escopo Real da Obra:**
  - Atualizada a descrição técnica do Projeto 01 na seção "Projetos em Destaque" com a cópia oficial fornecida pela cliente (Mafer 99Freelas):
    > *"Processo legal completo, desde o desenvolvimento do projeto arquitetônico e emissão do alvará junto à Prefeitura até a emissão do Habite-se após a conclusão da obra, regularização junto à Receita Federal (CND) e averbação da construção no Cartório de Registro de Imóveis."*
- **Preservação do Alinhamento e Proporção do Grid:**
  - O layout do grid em 3 colunas mantém alinhamento vertical estrito (`items-stretch` com rodapés e botões na mesma linha de base), garantindo harmonia estética perfeita com os Projetos 02 e 03.

## [0.7.26] - 2026-10-14
### Nova Fotografia da Arquiteta com Características da Profissão na Hero Section
- **Presença Profissional Autêntica e Elementos da Prática Arquitetônica:**
  - Substituída a fotografia anterior pela nova imagem solicitada pelo usuário, incorporando os símbolos centrais da profissão: pranchas técnicas/projetos enrolados e capacete branco de obras sob o braço esquerdo, além de caderno/planner técnico na mão direita.
  - Blazer terracota/rosé elegante perfeitamente alinhado com a identidade visual da ZHAARQ (botões Terracotta e detalhes dourados).
- **Pipeline de Otimização e Conversão WebP Transparente:**
  - Convertida a imagem original PNG de 870 KB para WebP de alta fidelidade a 95% de qualidade (`arquiteta_hero_projetos.webp`), resultando em apenas 144 KB (redução de 83,4% no tráfego de dados, mantendo recorte nítido e canal alfa impecável).
- **Reposicionamento Harmônico do Badge de Credibilidade:**
  - O selo flutuante de autoridade (`Juliana Lucena • Arquiteta Responsável • CAU`) foi calibrado para a altura da linha da cintura (`lg:bottom-52 xl:bottom-60` e `lg:-left-24 xl:-left-28`), flutuando no espaço escuro à esquerda do cotovelo sem sobrepor o caderno nem as mãos.
- **Validação de Responsividade e Overflow Zero:**
  - Testado via navegador headless Edge CDP no Desktop (1440x900) e Mobile (390x844), confirmando encaixe milimétrico ancorado na base e 100% livre de rolagem horizontal.

## [0.7.25] - 2026-10-14
### Cabeçalho Sticky da Seção de Especialidades Fixo Durante o Scroll dos Stacking Cards
- **Fixação Visual Contínua do Título da Seção (`.services-sticky-header`):**
  - Implementada a classe `.services-sticky-header` com `position: sticky` logo abaixo da barra de navegação (`navbar`), garantindo que o título ("NOSSAS ESPECIALIDADES / O que podemos fazer pelo seu imóvel") permaneça 100% visível e nítido enquanto os 5 cartões deslizam e se sobrepõem.
  - Offsets responsivos precisos: `top: 68px` (mobile), `top: 76px` (sm) e `top: 88px` (desktop), com `z-index: 50`, fundo translúcido nobre `rgba(251, 249, 245, 0.98)` com `backdrop-filter: blur(12px)` e divisor inferior hairline suave.
- **Hierarquia de Z-Index e Recalibração dos Offsets dos 5 Cartões:**
  - Definida hierarquia rigorosa: Navbar (`z-[60]`) > Cabeçalho Sticky (`z-50`) > Card 05 (`z-[45]`) > Card 04 (`z-40`) > Card 03 (`z-30`) > Card 02 (`z-20`) > Card 01 (`z-10`).
  - Offsets dos cartões recalculados para deslizarem e se empilharem perfeitamente abaixo do cabeçalho fixo:
    - Card 01: `top-[145px] sm:top-[185px] lg:top-[255px]`
    - Card 02: `top-[160px] sm:top-[205px] lg:top-[275px]`
    - Card 03: `top-[175px] sm:top-[225px] lg:top-[295px]`
    - Card 04: `top-[190px] sm:top-[245px] lg:top-[315px]`
    - Card 05: `top-[205px] sm:top-[265px] lg:top-[335px]`
- **Otimização Ergonômica Mobile:**
  - No mobile, o parágrafo longo explicativo é ocultado (`hidden sm:block`) para manter o cabeçalho compacto (~50px de altura útil), deixando o restante do viewport livre para os cartões sem estrangular a tela.
- **Proteção Anti-Cache e Validação Visual Automatizada:**
  - Atualizado o cache buster para `css/styles.css?v=20261014_stickytitle`.
  - Capturas de tela automatizadas via Edge CDP confirmam fixação perfeita no Desktop (1440x900) e Mobile (390x844).

## [0.7.24] - 2026-10-14
### Eliminação Definitiva do Vácuo em Branco Após o Término dos Stacking Cards
- **Remoção do Padding Residual no Container:**
  - Zerado o `padding-bottom` de `.stacking-container` (`padding-bottom: 0 !important` em `css/styles.css` e estilo crítico inline no `<head>`), eliminando os 140px de rolagem vazia após o Card 05.
- **Equalização Harmoniosa de Transição entre Seções:**
  - Ajustado o espaçamento inferior de `<section id="servicos">` de `py-14 md:py-24` para `pt-14 md:pt-20 pb-4 md:pb-6`.
  - Calibrado o espaçamento superior de `<section id="problemas">` (Diagnóstico) para `pt-10 md:pt-14`, permitindo que o título e a ficha pericial subam naturalmente logo abaixo do Card 05.
- **Validação com Capturas de Tela:**
  - O vão entre o final do Card 05 e o início da Seção 06 foi reduzido de **237px** para apenas **25px** no Desktop (e 17px no Mobile), garantindo transição contínua sem quebras visuais.

## [0.7.23] - 2026-10-14
### Espaçamento Ultra-Curto dos Stacking Cards (20px) & Proteção Anti-Cache
- **Calibragem Idêntica à Referência do Outro Site:**
  - Reduzida a margem inferior (`margin-bottom`) de `.stack-card` para **20px** com declaração reforçada `!important` em CSS e estilo crítico embutido no `<head>` do `index.html`.
  - Elimina completamente qualquer vácuo entre os cartões durante a rolagem, fazendo com que o próximo card comece a sobrepor o anterior instantaneamente.
- **Proteção Definitiva Anti-Cache:**
  - Adicionado parâmetro de versão no link de stylesheet (`css/styles.css?v=20261014_shortgap`), forçando a invalidação de cache local nos navegadores e garantindo renderização imediata das métricas compactas.
- **Validação com Capturas de Tela:**
  - Testes em Desktop (1440x900) e Mobile (390x844) confirmando o gap exato de 20px entre todos os 5 cartões.

## [0.7.22] - 2026-10-14
### Instalação e Integração do Graphify (Knowledge Graph AST & Redução de Tokens)
- **Instalação do Pacote Graphify no Ambiente:**
  - Instalado o pacote oficial `graphifyy` (v0.9.90 com AST Tree-sitter e NetworkX) via Python.
- **Integração Nativa com Google Antigravity:**
  - Registradas regras em `.agents/rules/graphify.md`, workflow em `.agents/workflows/graphify.md` e skill global do assistente.
- **Extração e Clusterização da Base de Código:**
  - Gerado o grafo de conhecimento semântico e estrutural do projeto em `graphify-out/` (`graph.json`, `graph.html`, `GRAPH_REPORT.md`).
  - Cache AST incremental configurado para evitar leituras brutas repetitivas de arquivos e economizar processamento e tokens nas iterações do assistente.
- **Automação Completa via Git Hooks:**
  - Instalados hooks do Git (`post-commit`, `post-checkout`, `post-merge` e `merge driver`) para atualizar o grafo de forma transparente e automática a cada commit ou troca de branch.
- **Isolamento de Cache no Git:**
  - Adicionado `graphify-out/` ao `.gitignore` para manter o repositório e os deploys de produção limpos e enxutos.

## [0.7.21] - 2026-10-14
### Ajuste Cirúrgico do Espaçamento dos Stacking Cards para 30px
- **Padronização Exata do Gap entre Cartas no Scroll:**
  - Ajustada a margem inferior (`margin-bottom`) de `.stack-card` para exatamente `30px` tanto em dispositivos móveis quanto em desktop.
  - Proporciona encaixe milimétrico imediato durante o scroll, permitindo que o próximo cartão comece a sobrepor o anterior sem qualquer sensação de pausa ou espaçamento residual.

## [0.7.20] - 2026-10-14
### Calibração de Ritmo e Eliminação de Vácuo entre Stacking Cards no Scroll
- **Compactação e Equalização das Margens Verticais dos Cards:**
  - Removidas as margens excessivas em unidades de viewport (`mb-[30vh] sm:mb-[45vh]`) que causavam um vão branco prolongado entre a base de um card e a entrada do próximo.
  - Definida margem contínua e ágil de `32px` no mobile e `48px` no desktop via regra CSS unificada `.stack-card`, permitindo que o próximo card comece a subir imediatamente assim que o anterior atinge sua posição sticky.
- **Redimensionamento Proporcional da Base do Container:**
  - Ajustado o `padding-bottom` da `.stacking-container` de `900px` para `120px` (mobile) e `180px` (desktop), eliminando o vão residual ao término da seção de especialidades.
- **Validação com Capturas Sequenciais:**
  - Testes com Edge DevTools confirmando transição contínua sem quebras ou "abismos" em branco entre as cartas durante o scroll.

## [0.7.19] - 2026-10-13
### Correção e Ativação Plena da Animação do Carrossel Vertical com Stacking Cards
- **Desbloqueio Crítico do Contexto de Rolagem Sticky (`overflow-x: clip`):**
  - Identificada a causa raiz que impedia o funcionamento do `position: sticky`: o uso de `overflow-x: hidden` no `html, body` forçava os navegadores (Chrome/Edge/Safari) a computar `overflow-y: auto`, desvinculando o scroll do viewport e cancelando a fixação sticky.
  - Substituição por `overflow-x: clip`, que bloqueia 100% de qualquer overflow lateral sem criar um scroll container e sem prejudicar o `position: sticky`.
- **Criação da Classe `.stacking-container` e Espaçamentos de Rolagem:**
  - Introduzida a classe `.stacking-container` com `padding-bottom: 900px`, assegurando que todos os 5 cards permaneçam empilhados no topo da tela com suas abas acumuladas durante a leitura completa do Card 05.
  - Aplicação de margem de rolagem substancial (`margin-bottom: 35vh` via classe `.stack-card`) para que o usuário sinta a subida progressiva e o deslizamento de cada card cobrindo o anterior.
  - Elevação do z-index do Header para `z-[60]`, impedindo que os cards se sobreponham à barra de navegação.
- **Animação Dinâmica de Escala e Profundidade via JavaScript (`initVerticalStackingCards`):**
  - Implementada função ultra leve em `js/main.js` com `requestAnimationFrame` e passive scroll listener.
  - Conforme o card seguinte sobe e começa a cobrir o card atual, o card de baixo sofre uma redução suave de escala (`scale(0.95)` ancorada no topo com `transform-origin: top center`) e um escurecimento gradual (`brightness(0.75)`), transmitindo a sensação física de uma pasta ou baralho de arquitetura sendo guardado sob a nova prancha.
- **Validação com Capturas de Tela Reais:**
  - Testes automatizados via Chrome DevTools Protocol no Edge validando os 5 estados de sobreposição tanto no Desktop quanto no Mobile (390x844).

## [0.7.18] - 2026-10-13
### Carrossel Vertical com Stacking Cards de Alto Padrão (Seção 05 - Especialidades)
- **Transformação Estrutural da Seção 05 em Carrossel Vertical com Efeito de Empilhamento:**
  - Substituição da antiga listagem e dos blocos simétricos por 5 **Stacking Cards esculturais** que deslizam e se empilham progressivamente durante o scroll da página (`position: sticky`), criando abas acumuladas no topo exatamente como nas referências de arquitetura e design editorial de luxo.
- **Hierarquia Visual e Paleta ZHAARQ por Cartão:**
  - **Card 01 - Regularização de Imóveis:** Fundo Grafite Nobre (`#181715`), tipografia ouro arquitetônico, tags de zoneamento e bloco técnico lateral com status *100% Legal*.
  - **Card 02 - Projetos Arquitetônicos & As-Built:** Fundo Terracota Nobre (`#A64B2A`), metadados gráficos de alta precisão (NBR & CAU, levantamento a laser e plantas oficiais).
  - **Card 03 - Aprovação, Habite-se & Licenças:** Fundo Grafite Ébano (`#121110`), condução pericial e ênfase em documentos conclusivos expedidos pelas prefeituras.
  - **Card 04 - Averbação em Cartório & CND:** Fundo Travertino Off-White (`#F5F1E9`) com textos em grafite e acentos em terracota, destacando regularização fiscal e segurança patrimonial na matrícula RGI.
  - **Card 05 - Consultoria & Dossiê Patrimonial:** Fundo Grafite Profundo (`#1A1816`), selo pericial de Due Diligence para transações imobiliárias e inventários sem passivos.
- **Engenharia e Responsividade Sem Dependências Pesadas:**
  - Implementação pura com CSS `sticky` e offsets escalonados (`top-[75px]`, `top-[90px]`, `top-[105px]`, `top-[120px]`, `top-[135px]` no mobile; e `top-[100px]`, `top-[125px]`, `top-[150px]`, `top-[175px]`, `top-[200px]` no desktop), com `z-index` incremental de 10 a 50.
  - Grid interno inteligente com 2 colunas no desktop (copy técnica, botões de ação e tags à esquerda; mostrador pericial/glassmorphism à direita) e coluna única perfeitamente ajustada no mobile sem qualquer overflow lateral.
- **Validação Visual Rigorosa:**
  - Capturas e auditoria visual via CDP do Edge confirmando transição fluida, legibilidade das fontes *Tenor Sans* e *Jost*, e empilhamento harmônico das abas.

## [0.7.17] - 2026-10-09
### Correção de Overflow Horizontal e Ajuste Responsivo da Seção 04 no Mobile
- **Eliminação Definitiva de Vazamento Lateral da Tela:**
  - Adicionadas regras globais em `html, body` (`overflow-x: hidden; width: 100%; max-width: 100vw;`) bloqueando qualquer tentativa de scroll ou arraste horizontal involuntário em dispositivos móveis (iOS Safari e Android Chrome).
- **Correção da Seção 04 (Manifesto +100 e Métricas de Autoridade):**
  - **Diagnóstico da Falha:** A métrica `CAU/SP` e os títulos em caixa alta com `tracking-wider` ultrapassavam a largura útil de 160px das colunas no mobile, vazando da tela e sendo cortados à direita.
  - **Ajuste Cirúrgico:** Aplicada escala tipográfica responsiva (`text-2xl sm:text-4xl lg:text-6xl` e `tracking-tight`), redução do padding esquerdo de `pl-6` para `pl-3 sm:pl-6`, e quebras de linha responsivas (`<br class="block sm:hidden">`) em "Processos Conduzidos", "Taxa de Aprovação", "Acompanhamento Técnico" e "Responsabilidade Ativa".
- **Contenção da Hero Section no Mobile:**
  - Aplicada contenção `max-w-full sm:max-w-none` e remoção da margem negativa no mobile (`mr-0 sm:-mr-8`), garantindo que o retrato monumental da arquiteta não ultrapasse a largura física da tela.
- **Validação com Chromium Headless:** Testes em resolução mobile (390x844) confirmando 100% de alinhamento e zero vazamento de texto ou imagem.

## [0.7.16] - 2026-10-09
### Nova Tipografia de Luxo: Transição de Serif para Tenor Sans Contemporânea
- **Eliminação Integral de Fontes Serifadas Clássicas:**
  - Removida a fonte `Cormorant Garamond` (com serifa tradicional), atendendo à diretriz de modernização e sofisticação de alto luxo sem aspecto literário ou antiquado.
- **Implementação da Tipografia de Alto Luxo Tenor Sans:**
  - Adotada a fonte **Tenor Sans** (projetada especificamente para marcas de luxo, alta costura e arquitetura contemporânea), com proporções clássicas monumentais e desenho 100% limpo, sem serifas.
  - Adicionada a **Syne** como fonte contemporânea secundária no stack tipográfico.
  - Atualizada a chave `theme.extend.fontFamily.editorial` e a regra `.font-editorial` em todo o projeto (`index.html` e `css/styles.css`).
- **Refinamento Editorial das Headlines:**
  - Eliminadas marcações de itálico serifado arcaico na Hero e nas seções principais, conferindo contraste por hierarquia cromática em dourado arquitetônico (`text-brand-gold`).
- **Validação com Chromium Headless:** Capturas no desktop confirmando leitura limpa, luxuosa, arrojada e perfeitamente integrada à identidade de alto padrão da ZHAARQ.

## [0.7.15] - 2026-10-09
### Ampliação Monumental da Foto da Arquiteta e Preenchimento Total da Hero Section
- **Escala e Presença Nobre da Arquiteta Juliana Lucena:**
  - Foto ampliada expressivamente (altura aumentada de ~380px para até `720px` em monitores grandes e `w-auto max-w-none`), ocupando com autoridade e elegância toda a lateral direita da Hero.
  - O topo da cabeça agora sobe até o terço superior da tela, preenchendo 100% do vão escuro vazio que existia acima do retrato.
  - O certificado oficial da Câmara Municipal em mãos ganhou ainda mais legibilidade e impacto visual no centro-direita.
- **Calibragem Espacial e Deslocamento Lateral:**
  - Aplicado deslocamento negativo suave para a direita (`-mr-8` a `-mr-20` no desktop), acomodando a largura expandida sem invadir ou sobrepor os cards de garantias técnicas da esquerda.
  - Reposicionado o badge escultural de autoridade (*"Juliana Lucena • Arquiteta Responsável • CAU"*) na lateral esquerda do ombro (`bottom-36 sm:bottom-44`), garantindo que tanto o certificado quanto os dados de registro profissional estejam 100% visíveis e desimpedidos.
- **Validação com Playwright / Chromium Headless:** Capturas em desktop (1440x900) e mobile (390x844) confirmando harmonia visual de alto padrão e eliminação definitiva de qualquer sensação de espaço vazio.

## [0.7.14] - 2026-10-09
### Recorte da Arquiteta da Cintura para Cima e Reestruturação Completa da Hero Section
- **Recorte Fotográfico Profissional em Plano Médio (`arquiteta_hero_cintura.webp`):**
  - Foto da Arquiteta Juliana Lucena recortada cirurgicamente da cintura para cima (1066x815 WebP transparente de alta fidelidade), eliminando a silhueta estreita de corpo inteiro que gerava vácuo preto lateral.
  - O certificado oficial da Câmara Municipal em mãos ganhou destaque nítido e proeminente no centro-direita da composição visual.
- **Ancoragem na Base da Hero Section:**
  - O retrato foi ancorado diretamente na linha de base da Hero (`object-bottom block leading-none` com remoção do padding inferior `pb-0`), fazendo com que a arquiteta emerja naturalmente da base da página, eliminando qualquer sensação de "corte suspenso no ar".
- **Reestruturação e Distribuição do Grid da Hero (7 de 12 colunas vs. 5 de 12 colunas):**
  - **Coluna Esquerda (7 colunas):** Headline editorial monumental em *Cormorant Garamond* dourada, subheadline limpa e botões de ação ("Quero analisar meu imóvel" + "Como funciona").
  - **Cards de Garantias em Grid 2x2:** As 4 garantias técnicas foram reestruturadas em micro-cards translúcidos com efeito *glassmorphism* (`bg-white/[0.04] border border-white/10 backdrop-blur-sm`) com ícones dourados, preenchendo a base de forma nobre e simétrica.
  - **Coluna Direita (5 colunas):** Retrato imponente em escala nobre (`max-w-[420px]` a `xl:max-w-[600px]`), acompanhado de badge escultural de autoridade ("Juliana Lucena • Arquiteta Responsável • CAU") integrado organicamente.
  - **Responsividade Mobile-First:** No mobile, as garantias foram compactadas em 2 colunas proporcionais de 2 linhas, mantendo o topo da arquiteta visível na dobra da tela para convite à rolagem.
- **Validação com Playwright / Chromium Headless:** Capturas em desktop (1440x900) e mobile (390x844) confirmando harmonia visual perfeita, eliminação de espaços vazios e escala de autoridade profissional de alto padrão.

## [0.7.13] - 2026-10-09
### Reenquadramento da Foto 1 e Equalização da Galeria de Projetos em 3 Colunas
- **Eliminação Definitiva do Espaço em Branco Vazio:**
  - Substituído o layout assimétrico anterior (7 colunas na esquerda vs. 2 cards empilhados na direita) por uma **grade perfeitamente balanceada de 3 colunas** (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`).
  - O card da esquerda agora possui altura natural e idêntica aos demais, eliminando os mais de 200px de vácuo branco que ocorriam entre a fotografia e a descrição técnica.
- **Restauração Fotográfica e Enquadramento Completo da Foto 1 (`proj_real_1.webp`):**
  - A foto original (`SITE ARQT/PROJETO 1 - 1.jpeg`) foi reenquadrada em proporção 4:3 (800x600 WebP), restaurando integralmente a platibanda marrom do telhado com o céu, a esquadria envidraçada de pé-direito duplo, a porta de madeira maciça e a entrada frontal sem cortes no topo.
- **Equalização Proporcional dos 3 Cards:**
  - Todos os 3 projetos (Residencial, Aprovação Edilícia e Adequação Comercial) agora contam com a mesma proporção fotográfica `aspect-[4/3]`, linha de metadados periciais (`Local • Área • Tempo/Status`), títulos em *Cormorant Garamond*, escopo em *Jost* e botões de ação circulares alinhados na base.
- **Validação com Playwright:** Capturas em desktop e mobile confirmando proporções simétricas, elegância visual e zero espaço em branco residual.

## [0.7.12] - 2026-10-09
### Calibração Global de Margens e Eliminação de Vácuos Verticais
- **Redução Significativa de Paddings Verticais entre Seções:**
  - Substituído o espaçamento excessivo `py-24 md:py-32` (que gerava até 256px de espaço vazio vertical entre seções) por um ritmo proporcional e equilibrado de `py-14 md:py-20` em todas as seções (Projetos, Especialidades, Diagnóstico, Como Funciona, Case Real, Sobre a Arquiteta e FAQ).
  - Ajustado o manifesto de autoridade escura (+100 Projetos) de `py-20 md:py-28` para `py-12 md:py-16`, e o Super CTA Final de `py-24 md:py-32` para `py-16 md:py-20`.
  - Calibrado o bloco Hero para `py-12 md:py-16 min-h-[85vh]`, integrando melhor a fotografia de fundo e o retrato da arquiteta.
- **Conexão e Continuidade entre Títulos e Conteúdo:**
  - Reduzido o afastamento entre os cabeçalhos de seção e seus respectivos cards/conteúdos de `mb-16 pb-6/pb-8` para `mb-10 pb-5`, eliminando o "abismo" visual e conectando o olhar do leitor imediatamente ao portfólio e etapas.
- **Compactação Harmoniosa dos Grids e Molduras:**
  - Reduzidos os espaçamentos internos nos grids de Diagnóstico, Sobre e CTA de `gap-12 lg:gap-16` para `gap-8 lg:gap-12`.
  - Ajustado o padding da moldura do FAQ de `p-16` para `p-6 sm:p-10 md:p-12`, e o respiro vertical de cada pergunta de `py-7 sm:py-8` para `py-5 sm:py-6`.
  - Reduzido o padding vertical de cada uma das 5 especialidades de `py-8 md:py-10` para `py-6 md:py-7`.
- **Validação com Playwright:** Capturas em múltiplos pontos de rolagem confirmando fluidez contínua, densidade equilibrada e eliminação definitiva de áreas desertas.

## [0.7.11] - 2026-10-09
### Nova Tipografia Exclusiva: Transição para Jost (Bauhaus de Paul Renner)
- **Eliminação de Tipografia Comercial Genérica (Anti-AI-Slop):**
  - Removida a fonte `Plus Jakarta Sans`, amplamente associada a templates genéricos de SaaS e dashboards tecnológicos, que destoava da identidade visual de um escritório de arquitetura de alto padrão.
- **Implementação da Família Tipográfica Jost (Arquitetura Pura):**
  - Adotada a fonte **Jost** (inspirada na lendária *Futura* de 1927 criada por Paul Renner na escola Bauhaus), a base histórica e internacional da tipografia da arquitetura modernista e contemporânea.
  - Caracterizada por proporções geométricas puras, alta precisão de desenho técnico, clareza editorial e elegância sóbria em todos os pesos (300 Light, 400 Regular, 500 Medium, 600 SemiBold).
  - Configurada como a família tipográfica técnica e de corpo de texto principal no Tailwind (`fontFamily.sans`) e no CSS base (`body { font-family: 'Jost', 'Urbanist'... }`).
- **Harmonização do Sistema Tipográfico Duplo:**
  - **Títulos e Display:** Preservada a nobreza clássica e monumental da *Cormorant Garamond* (`font-editorial`).
  - **Textos, Metragem, Menu, Rótulos e Botões:** Geometria arquitetônica atemporal da *Jost*, conferindo autenticidade de prancha técnica pericial.
- **Validação com Playwright:** Capturas em desktop e mobile confirmando excelente legibilidade, ritmo visual sofisticado e ausência total de estética genérica.

## [0.7.10] - 2026-10-09
### Ajuste e Compactação da Margem Inferior do Rodapé Institucional
- **Redução de Espaçamento Vazio Abaixo do Copyright:**
  - Reduzido o padding inferior do container `<footer class="...">` de `sm:py-20` (80px) e `pb-28` (112px) para `pb-6 sm:pb-8` (24px a 32px), eliminando a sobra de margem escura excessiva na base da página.
  - Calibrado o espaçamento superior da linha de copyright para `pt-6 sm:pt-7`, criando equilíbrio e simetria visual precisa acima e abaixo do texto legal (`© 2026 ZHAARQ...`).
  - Ajustado o padding inferior da grade de colunas para `pb-10`, mantendo o alinhamento arquitetônico limpo e compacto.
- **Validação com Playwright:** Capturas em desktop e mobile confirmando proporção simétrica sem faixas vazias na base.

## [0.7.9] - 2026-10-09
### Reestruturação e Distribuição Editorial do Rodapé Institucional
- **Eliminação dos Vácuos e Vazios Visuais (Preenchimento e Equilíbrio de Largura):**
  - Rebalanceada a proporção da grade institucional de 4 colunas em 12 módulos proporcionais (`lg:col-span-4`, `lg:col-span-3`, `lg:col-span-2`, `lg:col-span-3`), eliminando o efeito de dispersão e excesso de espaço escuro vazio.
  - Inseridas linhas divisórias verticais *hairline* sutis (`lg:border-l lg:border-white/10 lg:pl-8`) entre as colunas, organizando o olhar em módulos limpos de prancha de desenho técnico arquitetônico.
- **Equalização de Densidade e Hierarquia das 4 Colunas:**
  - **Coluna 1 (Marca & Credenciais):** Logotipo ZHAARQ oficial em alta definição, manifesto técnico de atuação em São Paulo e badge oficial de status em esmeralda (`CAU/SP Ativo • Registro de Responsabilidade Técnica`).
  - **Coluna 2 (Especialidades):** Bullet dourado de identificação e lista com as 6 principais especialidades de projetos legais com links em transição suave.
  - **Coluna 3 (Áreas de Atuação):** Bullet dourado e regiões geográficas prioritárias atendidas (Capital, Grande SP, Alphaville & Granja Viana, Campinas e Litoral).
  - **Coluna 4 (Canal Direto & Atendimento):** Bullet dourado, expediente comercial, sede, formato de vistorias *in loco* e botão de ação Terracotta oficial com ícone do WhatsApp (`Falar no WhatsApp Oficial →`).
- **Resguardo e Conforto na Linha Inferior (Mobile-First):**
  - Ajustado o espaçamento inferior no mobile para `pb-28 sm:pb-20 pt-16 sm:pt-20`, assegurando que o copyright, links de LGPD, Termos de Uso e o selo `RRT Registrada no CAU/SP` permaneçam desobstruídos em relação à barra fixa flutuante de atendimento do WhatsApp.
- **Validação com Playwright:** Capturas em desktop (1440x900) e mobile (390x844) confirmando acabamento nobre, harmonia de proporções e eliminação de vazios.

## [0.7.8] - 2026-10-09
### Dossiê Arquitetônico Editorial para o FAQ (Eliminação Total de Vícios de IA)
- **Eliminação Completa de Elementos Estilo SaaS/IA (Anti-AI-Slop):**
  - Removido o card de atendimento com botão de chat, ícone em balãozinho e selos genéricos de suporte que quebravam a sofisticação editorial e lembravam templates comerciais.
  - Eliminadas as caixinhas plásticas cinzas que aprisionavam os números das perguntas.
- **Moldura de Dossiê Arquitetônico Unificado:**
  - Todo o bloco do FAQ agora é contido em uma grande moldura escultural enquadrada de alta precisão (`max-w-5xl mx-auto`, `bg-white rounded-3xl border border-[#E2D9CC] shadow-[0_20px_50px_rgba(25,23,21,0.035)]`).
  - Cabeçalho interno em 2 colunas: título imponente em *Cormorant Garamond* à esquerda e escopo normativo sucinto à direita, separados por linha divisória hairline.
- **Tipografia Escultural e Controles Minimalistas `+` / `−`:**
  - Numerais editoriais clássicos `01`, `02`, `03`, `04`, `05` em *Cormorant Garamond* dourado/terracota de 28px, com espaçamento nobre e natural.
  - Controle de abertura em traço ultrafino arquitetônico `+` que transiciona e rotaciona suavemente para `−` ao expandir a resposta.
  - Linha de rodapé discreta com link tipográfico elegante para consulta com a Arquiteta Juliana Lucena, sem poluição visual.
- **Validação com Playwright:** Capturas em desktop e mobile confirmando visual limpo, autêntico, humano e sem qualquer vestígio de gerador de IA.

## [0.7.7] - 2026-10-09
### Enquadramento Arquitetônico e Refinamento do FAQ e Acordeom
- **Eliminação de Layout Flutuante Sem Enquadramento:**
  - Substituída a listagem de texto aberta por um conjunto de **cards arquitetônicos enquadrados** (`rounded-2xl border border-brand-border bg-white shadow-sm hover:shadow-md`), criando presença física, profundidade tátil e acabamento nobre.
- **Micro-Badges de Numeração e Toggle Squircle:**
  - Cada item do acordeom possui agora uma etiqueta de numeração pericial (`01` a `05`) em caixa arredondada nobre, além de botão de toggle em squircle que transiciona para terracota com rotação fluida do chevron ao abrir.
- **Harmonização da Coluna Esquerda com Card de Atendimento:**
  - Eliminado o espaço vazio abaixo do título da seção; inserido um card técnico de suporte enquadrado (*"Sua dúvida é específica? Análise preliminar do caso"*) com chamada direta para consulta com a Arquiteta no WhatsApp, badges de garantia e integração de analítica.
- **Fundo Arquitetônico Integrado:**
  - Seção integrada sobre fundo neutro aconchegante (`#FBF9F5`), valorizando o contraste dos cards brancos e a transição suave para o Super CTA escuro.
- **Validação com Playwright:** Screenshots em desktop (1440x900) e mobile (390x844) confirmando enquadramento equilibrado, leitura agradável e perfeita adaptabilidade.

## [0.7.6] - 2026-10-09
### Redesign Editorial dos Cards de Etapas com Curvatura Orgânica e Badge Squircle
- **Inspiração Direta na Referência do Cliente:**
  - Substituído o layout retangular anterior da Seção 07 ("Do início à regularização definitiva") por um formato orgânico contemporâneo de arquitetura de luxo, fiel à imagem de referência enviada.
- **Geometria Escultural em SVG Wave:**
  - Cada card possui topo com curvatura orgânica suave em onda assimétrica (pico suave à esquerda declinando sutilmente para a direita), preservando contornos ultra-nítidos sem distorção via `vector-effect="non-scaling-stroke"`.
  - Contorno em tom champanhe/dourado refinado (`#D8C29D`) e projeção de sombra bronze/dourada suave (`organic-card-shadow`).
- **Badge de Ícone Squircle Warm:**
  - Inserido squircle arredondado em amarelo/dourado pastel suave (`#FCE8B2`) no canto superior esquerdo de cada card, abrigando ícones de traço fino de arquitetura técnica (diagnóstico, prancha técnica, prefeitura, habite-se e averbação cartorial).
- **Tipografia e Espaçamento Editorial:**
  - Títulos elegantes em *Cormorant Garamond* (`font-editorial`), espaçamento generoso e descrições técnicas claras e fluidas sem ruído visual de badges excessivas.
  - Unificação dos 5 cards no mesmo padrão nobre de alta costura arquitetônica.
- **Validação com Playwright:** Screenshots em desktop (1440x900) e mobile (390x844) confirmando alinhamento estético de alta fidelidade e fluidez responsiva.

## [0.7.5] - 2026-10-09
### Harmonização e Legibilidade Editorial de Toda a Numeração do Site
- **Eliminação de Vícios de Código e Monospace (Anti-AI-Slop):**
  - Removidas barras duplas de código (`//`) e fontes monoespaçadas (`font-mono`) que destoavam da identidade visual de arquitetura contemporânea de alto padrão.
- **Seção 07 (Como Funciona: Régua de 5 Fases):**
  - Numeração ampliada para display escultural editorial em *Cormorant Garamond* (`01`, `02`, `03`, `04`, `05`), em terracota nobre (`#993819`) e ouro (`#C5A880` no card 5).
  - Eliminação de quebras indevidas de linha, garantindo legibilidade imediata e perfeita proporção entre número, categoria e descrição do processo.
- **Seção 05 (Especialidades):**
  - Substituída a numeração apagada (`text-brand-gold 14px 01 //`) por numerais clássicos em grande escala (`01.`, `02.`, `03.`, `04.`, `05.`) em 36px com contraste pleno sobre o fundo claro e transição suave no hover para terracota.
- **Seção 08 (Case Real):**
  - Badges fotográficas refinadas para o padrão oficial 1:1 com o layout do cliente (`01. DIAGNÓSTICO`, `02. VISTORIA`, `03. CONCLUSÃO`, `04. AVERBADA`) com pílulas arredondadas e numerais dourados.
- **Seções 03 e 06 (Projetos & Diagnóstico):**
  - Numeração dos cards de projetos padronizada (`01. PROJETO RESIDENCIAL`...) e fichas de risco técnico reorganizadas em pareceres periciais numerados (1 a 4) com selos de alto contraste.
- **Validação com Playwright:** Screenshots em desktop e mobile confirmando harmonia tipográfica, nitidez e ritmo visual sofisticado.

## [0.7.4] - 2026-10-09
### Correção Definitiva de Contraste e Legibilidade da Navbar no Scroll
- **Eliminação de Regra Legada Conflitante:** Removida regra CSS obsoleta de versões anteriores que forçava a classe `.site-header.is-scrolled` para fundo claro/bege (`rgba(248, 245, 239, 0.96)`), causando perda total de contraste com o logotipo oficial branco (`logo-branca.webp`) e com os links de navegação (`text-white` e `text-[#C4B9AC]`).
- **Consistência Visual Dark Luxury:**
  - O cabeçalho mantém acabamento nobre contínuo em vidro fumê escuro arquitetônico (`rgba(18, 17, 16, 0.96) !important`) com `backdrop-filter: blur(16px)`.
  - Adicionada borda inferior hairline dourada sutil (`border-bottom: 1px solid rgba(197, 168, 128, 0.22)`) e sombra de elevação arquitetônica (`box-shadow: 0 12px 36px -8px rgba(0, 0, 0, 0.55)`).
  - Compactação suave de espaçamento vertical no scroll (`padding-top: 0.75rem`, `padding-bottom: 0.75rem`) para maior conforto de leitura e navegação.
- **Validação com Playwright:** Capturas em desktop e mobile sobre seções claras e escuras confirmando legibilidade nítida do logotipo, menus e botão de CTA.

## [0.7.3] - 2026-10-09
### Ampliação e Destaque Visual do Logotipo Institucional ZHAARQ
- **Rodapé Institucional:**
  - Logotipo ZHAARQ ampliado de `h-9` (36px de altura) para `h-16 sm:h-20 md:h-24` (64px a 96px de altura útil, ~120px a 180px de largura proporcional).
  - Garante legibilidade nítida do símbolo e de toda a tipografia técnica ("ZHAARQ ARQUITETURA E SERVIÇOS • REGULARIZAÇÃO DE IMÓVEIS..."), proporcionando equilíbrio de peso visual com as outras três colunas de navegação do rodapé.
- **Cabeçalho / Navbar:**
  - Ajustada a escala de `h-9 sm:h-11` (36px a 44px) para `h-11 sm:h-13 md:h-14` (44px a 56px de altura), aumentando a presença e destaque da marca sem interferir no espaçamento dos links de navegação ou no botão de conversão.
- **Validação com Playwright:** Inspeção visual de telas capturadas confirmando fidelidade estética, harmonia e alinhamento responsivo.

## [0.7.2] - 2026-10-08
### Correção Matemática de Proporção e Eliminação de Distorção em Todas as Fotos
- **Diagnóstico de Distorção Anamórfica:** Identificado que recortes anteriores aplicavam redimensionamentos para aspect ratios diferentes das caixas cortadas, gerando distorções horizontais de até 34% (achatamento de edificações e pessoas).
- **Recorte Isomórfico de Precisão (Escala 1:1 Sem Distorção):**
  - **Projetos em Destaque (`proj_real_1`, `proj_real_2`, `proj_real_3`):** Recortados em proporção 16:10 exata antes da conversão para 800x500 WebP. Ajustada a classe dos cards secundários para `aspect-[16/10]` em harmonia perfeita com o card master.
  - **Diagnóstico Técnico (`diagnostico_real`):** Recorte perfeitamente isotrópico de proporção 4:3 (800x600 WebP), restaurando a anatomia real e natural da arquiteta com a prancheta de vistoria.
  - **Case Real (`case_1_em_obras`, `case_2_acompanhamento`, `case_3_concluida`, `case_4_averbada`):** Recortadas em proporção 4:3 estrita (600x450 WebP) a partir dos originais, eliminando qualquer achatamento na arquiteta e nas edificações.
  - **Sobre a Arquiteta (`arquiteta_real`):** Gerada em proporção vertical 3:4 nativa (768x1024 WebP) e classe CSS ajustada para `aspect-[3/4]` consistente em mobile e desktop.
- **Validação com Playwright:** Captura completa inspecionada e validada em `crop_sec03_corrigido.png`, `crop_sec06_diag_exato.png`, `crop_sec08_corrigido.png` e `crop_sec09_corrigido.png`.

## [0.7.1] - 2026-10-08
### Ampliação e Destaque Monumental das Fotos do Case Real
- **Layout de Largura Total (Full-Width Container):**
  - Desacoplada a grade fotográfica da coluna lateral; o cabeçalho editorial com dados de resultado e botão de ação foi movido para o topo em duas colunas elegantes com linha divisória de 1px hairline.
  - As 4 imagens da sequência do Case Real (`01 // DIAGNÓSTICO`, `02 // VISTORIA`, `03 // CONCLUSÃO`, `04 // AVERBADA`) agora ocupam toda a largura útil de 1280px (`max-w-7xl`).
  - O tamanho de cada foto foi ampliado em mais de 60% em telas desktop (passando de ~180px para ~290px a 300px cada), preservando a proporção 4:3 com cantos arredondados finos e badges translúcidas.
  - No mobile, cada imagem se expande para a largura total da tela do aparelho com leitura fluida e confortável.
- **Validação com Playwright:** Captura completa confirmada em `test_crop_case_ampliado_exato.png` e `test_crop_mobile_case_ampliado.png`.

## [0.7.0] - 2026-10-08
### Reestruturação Editorial Completa (Auditoria gstack Design-Review & Anti-AI-Slop)
- **Eliminação de Vícios Visuais de IA (AI Slop):**
  - Removidos grids simétricos de cards genéricos e ícones em círculos coloridos que assemelhavam a página a um dashboard SaaS ou template comercial.
  - Removidos adereços decorativos soltos (folhas PNG flutuantes) nas seções 04 e 11, dando lugar a blocos arquitetônicos esculturais e linhas divisórias hairline de 1px.
- **Seção 03 (Projetos em Destaque):** Transformada em uma **Galeria Assimétrica de Arquitetura** (1 Master Project em 7 colunas com proporção 16:10 cinematográfica, fichas técnicas completas e metadados de obra + 2 Projetos de apoio empilhados em 5 colunas).
- **Seção 04 (Manifesto +100):** Reformulada como **Manifesto de Segurança Patrimonial** com métricas esculturais em tipografia Cormorant Garamond dourada (`+100`, `98%`, `100%`, `CAU/SP`) e divisores verticais de 1px.
- **Seção 05 (Especialidades):** Substituídos os 5 círculos clichês por um **Índice Editorial de Serviços** com linhas hairline divisórias (`01 //`, `02 //`...), escopo pericial e tags normativas discretas (`PREFEITURA`, `ANISTIA`, `HABITE-SE`, `RGI`, `SERO`).
- **Seção 06 (Diagnóstico):** Reformatada como **Dossiê Pericial / Relatório Técnico** com 4 pareceres formais (Fiscal, Financiamento, Jurídico, Administrativo) e foto real da vistoria com carimbo técnico.
- **Seção 07 (Como Funciona):** Implementada **Régua Sequencial de 5 Fases** de engenharia e trâmite legal com entregáveis nítidos e card final escultural em alto contraste.
- **Seção 08 (Case Real):** Sequência cronológica documental de 4 etapas fotográficas com legendas de estudo de caso.
- **Seção 09 (Sobre a Arquiteta):** Perfil de Ateliê com credenciais do conselho (CAU/SP), citação autoral destacada e tabela de qualificações.
- **Seção 10 (FAQ):** Acordeão editorial em linhas horizontais ultrafinas, sem caixas cinzas pesadas de SaaS, mantendo 100% de compatibilidade interativa com o JavaScript.
- **Seção 11 (Super CTA):** Bloco arquitetônico escuro escultural sem adereços falsos, focado no WhatsApp com ícone SVG branco e garantia LGPD.
- **Seção 12 (Rodapé):** Rodapé institucional completo de arquitetura em 4 colunas (Marca & Manifesto, Especialidades, Regiões de Atuação, Atendimento e Termos Legais).
- **Correção de Sintaxe CSS:** Fechamento de chave corrigido na regra `.hero-premium::before` em `css/styles.css`.
- **Compliance Estrito:** Copy 100% validada contra o Item 15 do Briefing (sem frases proibidas).

## [0.6.6] - 2026-10-08
### Integração da Arquiteta com Certificado na Hero
- **Presença Humana e Autoridade Técnica:** Inserida a fotografia oficial da Arquiteta Juliana Lucena (`Mulher Sorridente com Certificado-1.png`), convertida em WebP de alta fidelidade com canal alfa transparente (`arquiteta_hero_certificado.webp`), na área selecionada à direita da Hero.
- **Composição Visual Balanceada:**
  - A arquiteta está posicionada sobre a fachada do imóvel com sombra realista (`drop-shadow-2xl`), transmitindo confiança imediata e credibilidade.
  - Criada badge flutuante em glassmorphism escuro (`Arquiteta Juliana Lucena | Especialista em Regularização • CAU`) posicionada estrategicamente à esquerda para não sobrepor os pés ou o certificado.
  - A responsividade mobile mantém a Hero limpa e focada no objetivo de conversão, exibindo a composição completa em telas desktop/tablet.
- **Validação com Playwright:** Captura completa confirmada em [`screenshot_hero_arquiteta_final.png`](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/screenshot_hero_arquiteta_final.png) e [`screenshot_mobile_hero.png`](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/screenshot_mobile_hero.png).

## [0.6.5] - 2026-10-08
### Correção Definitiva da Foto de Fundo da Hero (100% Width Real)
- **Eliminação do Bloqueio Lateral:** Diagnosticada e removida regra conflitante em `css/styles.css` (`.hero-premium > div`) que forçava a camada da imagem a se comportar como coluna flex na metade esquerda, gerando um fundo preto estático atrás do texto.
- **Fundo Imersivo de Ponta a Ponta:**
  - Aplicada a classe utilitária `.hero-bg-layer` com ancoragem absoluta estrita (`inset: 0`, `width: 100%`, `height: 100%`).
  - A fotografia arquitetônica real (`PROJETO 1 - 2 2.jpeg` -> `hero_bg_fullwidth.webp`) agora se estende de forma contínua por toda a largura da página, ficando perfeitamente visível também atrás da tipografia.
  - Overlays de gradiente balanceados com precisão para manter as texturas da edificação vivas e assegurar legibilidade confortável de títulos e botões.
- **Validação com Playwright:** Screenshot gerado e verificado em [`screenshot_hero_perfect_fullwidth.png`](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/screenshot_hero_perfect_fullwidth.png).

## [0.6.4] - 2026-10-08
### Modernização Editorial da Seção "Do início à regularização"
- **Adeus ao Design Antigo/Monótono:** Substituída a timeline de linha horizontal e círculos estáticos por uma grade de cards modernos e interativos.
- **Estrutura dos Novos Cards:**
  - Badges numeradas em preto grafite (`#121110`) com tipografia dourada.
  - Ícones vetoriais técnicos contextualizados para cada etapa (Lupa/Levantamento, Prancheta/Desenho, Prefeitura/Órgãos Públicos, Certidão/Habite-se, Escudo/Patrimônio Seguro).
  - Micro-rodapé em cada card com indicador de fluxo e seta interativa.
  - O último card (05 - Imóvel Regularizado) recebeu acabamento em gradiente escuro de alto padrão, reforçando o objetivo final de segurança e tranquilidade.
- **Validação com Playwright:** Screenshot gerado e inspecionado em [`screenshot_modern_timeline.png`](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/screenshot_modern_timeline.png).

## [0.6.3] - 2026-10-08
### Reordenação do Case Real Conforme Fluxo Oficial de Obras
- **Grade Didática em 4 Etapas (1:1 com o Mockup Oficial):** Reestruturada a exibição do Case Real para a ordem fotográfica do projeto:
  1. **Em Obras:** *Estrutura e Alvenaria* com badge escura (`case_1_em_obras.webp`).
  2. **Acompanhamento:** *Vistoria Técnica* com badge escura (`case_2_acompanhamento.webp`).
  3. **Obra Concluída:** *Edificação Pronta* com badge em tom bronze/dourado (`case_3_concluida.webp`).
  4. **Averbada:** *Habite-se & Averbação* com badge terracota em destaque (`case_4_averbada.webp`).
- **Validação com Playwright:** Captura completa confirmando proporção harmoniosa e fidelidade visual ao print enviado (`screenshot_case_real_verified.png`).

## [0.6.2] - 2026-10-08
### Fundo Imersivo da Hero com Obra Real (PROJETO 1 - 2 2.jpeg)
- **Fundo 100% Full-Width Real:** A div de fundo da seção Hero agora utiliza a fotografia real de alta definição do projeto da ZHAARQ (`SITE ARQT\PROJETO 1 - 2 2.jpeg`), convertida em WebP otimizado (`assets/images/hero_bg_real.webp`), cobrindo 100% de largura e altura da div.
- **Harmonização com Referência Visual:** O enquadramento posiciona a edificação à esquerda da tela com gradiente cinematográfico escuro em direção ao bloco de texto à direita, garantindo legibilidade do texto e contraste fiel ao mockup fornecido pelo usuário.

## [0.6.1] - 2026-10-07
### Substituição por Fotos Reais do Acervo Oficial (SITE ARQT)
- **Projetos em Destaque:** Aplicadas fotografias reais de obras conduzidas pela arquiteta:
  - Card 1: Sobrado contemporâneo executado e regularizado (`proj_real_1.webp`).
  - Card 2: Residência térrea com aprovação técnica (`proj_real_2.webp`).
  - Card 3: Imóvel comercial com vistoria e adequação de alvará (`proj_real_3.webp`).
- **Diagnóstico Técnico:** Substituída a prancha ilustrativa pela foto real da Arquiteta Juliana Lucena realizando vistoria técnica com prancheta in loco (`diagnostico_real.webp`).
- **Case Real Didático (Antes / Durante / Resultado):**
  - *Antes:* Imóvel antigo com necessidade de regularização (`case_antes_real.webp`).
  - *Durante:* Obra em andamento com estrutura e alvenaria acompanhada pela arquiteta (`case_durante_real.webp`).
  - *Resultado:* Imóvel finalizado com projeto, Habite-se e averbação concluídos (`case_resultado_real.webp`).
- **Arquiteta Responsável:** Foto institucional da Arquiteta Juliana Lucena no CREA-SP demonstrando credibilidade e registro profissional ativo (`arquiteta_real.webp`).
- **Otimização:** Todas as imagens foram processadas mantendo rigorosa proporção de aspecto (16:10 nos cards e 4:3 nas seções explicativas) e convertidas em WebP de alta qualidade para máximo desempenho.

## [0.6.0] - 2026-10-07
### Redesign de Alta Fidelidade (Layout de Referência 1:1)
- **Fidelidade Integral à Referência Visual:** Implementada a nova arquitetura visual correspondendo de ponta a ponta ao layout fornecido pelo cliente (`media_1791413849254.png`).
- **Hero Escura com Fotografia de Mansão e Transições Cinematográficas:** Integração da fachada de alto padrão com gradientes laterais e inferiores de contraste editorial, acompanhada de microgarantias e CTA Terracotta.
- **Ícone Oficial WhatsApp em Branco Puro:** Todos os botões utilizam o arquivo oficial `whatsapp-reminders.png` convertido para vetor e WebP sem distorções ou perdas.
- **Régua de 12 Seções Modulares:**
  - Navbar escura com link direto para análise técnica.
  - Hero com play button para "Como funciona" e 4 garantias.
  - 3 Cards de projetos em destaque com hover dinâmico.
  - Faixa escura com `+100` em ouro e métricas circulares.
  - Grid de 5 especialidades com iconografia circular.
  - Seção dividida com foto técnica de prancha/mesa e diagnóstico de irregularidades.
  - Linha do tempo horizontal numerada de 01 a 05.
  - Case real de 3 fotos (Antes, Durante, Resultado).
  - Seção da Arquiteta responsável com foto profissional e credenciais CAU.
  - FAQ com acordeão limpo e expansível.
  - Super CTA escuro final com detalhes botânicos.
- **Correção de Visibilidade e Contraste:** Ajustadas as regras de scroll reveal para garantir nitidez imediata em 100% dos elementos em telas claras e escuras.

## [0.5.1] - 2026-10-07
### Ícone Oficial do WhatsApp Fornecido pelo Usuário
- **Conversão para Branco Puro:** Processada a imagem oficial fornecida pelo usuário (`whatsapp-reminders.png`) preservando seu canal alpha de alta precisão (640x644) e convertendo a silhueta externa e interna para branco (#FFFFFF) em formato vetorial/WebP (`assets/images/whatsapp-icon-white.svg` e `.webp`).
- **Aplicação Global:** Todos os botões da página (Cabeçalho, Hero, Transições, Super CTA final, Barra mobile e Botão flutuante) agora utilizam exatamente o ícone fornecido, perfeitamente nítido e proporcional.
- **Harmonização Visual:** O botão flutuante desktop mantém o fundo verde WhatsApp com o ícone em branco em tamanho otimizado (36px).

## [0.5.0] - 2026-10-07
### Redesign Editorial & Arquitetura Visual (Buildora / Elysian)
- **Navbar Completa com Âncoras:** Criada barra de navegação no cabeçalho com links para as seções principais (`#problemas`, `#servicos`, `#projetos`, `#como-funciona`, `#sobre`, `#faq`), logotipo branco em alta definição e botão de WhatsApp integrado.
- **Hero 100% Width Real:** A fotografia de campo da ZHAARQ agora preenche 100% da tela de ponta a ponta em ultra resolução (2560x1440), sem divisões laterais e com gradientes cinematográficos suaves.
- **Eliminação de Poluição Visual:** Removidos cards duplicados e pesados da Hero, substituídos por uma régua horizontal elegante de autoridade (`+100 Projetos`, `100% Registro no CAU`, `SP & RMSP`, `Atendimento Direto`).
- **Botão Flutuante Verde WhatsApp Oficial:** O botão flutuante adota o tom verde padrão (#25D366) com destaque no canto inferior.
- **Inspeção Visual com Playwright:** Validação e captura de telas completas do desktop a 1440x900 para checagem de harmonia, espaçamento e contraste.

## [0.4.1] - 2026-10-07
### Hero 100% Full-Width Arquitetônico (Estilo Buildora)
- **Banner Imersivo Full-Width:** A seção Hero agora ocupa 100% da largura da tela com imagem fotográfica real (`hero-bg-wide.webp`), duplos gradientes cinematográficos e acabamento escuro nobre (`#121110`).
- **Header Integrado:** Cabeçalho translúcido com `backdrop-blur` e logotipo oficial ZHAARQ em branco, harmonizado sobre a fotografia arquitetônica.
- **Hierarquia Visual e Cards Suspensos:** Headline monumental em *Cormorant Garamond* em contraste com card de confiança suspenso com métricas reais (`+100 Projetos`, selo CAU e garantias de atendimento).
- **Curva de Transição Orgânica:** Divisor inferior fluido conectando a Hero escura com a seção seguinte off-white.
- **Galeria de Fotos Otimizada:** Remoção das 4 imagens indicadas pelo cliente (`fachada-05`, `fachada-08`, `fachada-09` e `fachada-14`), mantendo 10 fotos institucionais de alto padrão distribuídas em 5 colunas no desktop.
- **Lightbox Interativo com Navegação Completa:**
  - Botões visuais de "Anterior" e "Próximo" para passar de uma foto para outra continuamente.
  - Navegação por teclado utilizando as setas direcionais (`←` e `→`) e `Escape`.
  - Suporte a toque/arrasto (swipe) em dispositivos móveis.
  - Indicador numérico de posição (`1 / 10`) e legenda descritiva da foto.

## [0.3.0] - 2026-10-07
### Adicionado & Aprimorado (V2 - Máquina de Conversão Google Ads)
- **Hero Dominante:** Headline ampliada com máxima dominância tipográfica e microfrase de apoio direto (`Projetos • Prefeitura • Habite-se • CND • Averbação`).
- **Problemas Humanizados:** Reescrita dos 6 cards em primeira pessoa do cliente (ex: *"Construí ou ampliei meu imóvel"*, *"Minha planta não corresponde ao imóvel"*).
- **Contraste Visual Rítmico:** Introdução de seções em grafite escuro editorial (`#171513`), eliminando a monotonia monocromática de tons bege.
- **Autoridade +100 Monumental:** Bloco escuro com o número `+100` em destaque expressivo de alta credibilidade.
- **Case Didático:** Linha do tempo visual detalhando as 5 etapas da regularização técnica (01 Projeto ➔ 02 Aprovação ➔ 03 Habite-se ➔ 04 CND ➔ 05 Averbação).
- **Quebra de Objeção Isolada:** Bloco de fechamento dedicado com a copy *"Você não precisa saber"* e CTA imediato.
- **Rastreamento Google Ads / GA4:** Disparo de eventos `whatsapp_conversion` no `dataLayer` com a posição de clique e repasse de parâmetros UTM/GCLID.
- **Banner LGPD:** Controle de consentimento de privacidade conforme legislação brasileira.
- **Barra Mobile:** Refinada para *"WhatsApp | Falar com especialista"*.

## [0.2.5] - 2026-10-07
### Alterado
- Aumento do tamanho do logotipo no rodapé de 40px (`h-10`) para 64px–80px (`h-16 sm:h-20`), aprimorando o destaque visual e a legibilidade da marca em telas de alta densidade.

## [0.2.4] - 2026-10-07
### Corrigido
- Ajuste do logotipo no rodapé: remoção de filtros de inversão de cor que causavam bloco branco opaco.
- Criação de versões dedicadas da logo com canal Alpha (fundo transparente): `logo.webp` para fundos claros no cabeçalho e `logo-branca.webp` para o rodapé escuro.

## [0.2.3] - 2026-10-07
### Melhorado
- Auditoria de Qualidade e Conformidade concluída com 100% de aderência ao briefing.
- Adicionado listener de teclado para fechamento do Lightbox via tecla `Escape` (Esc).
- Implementação de atributos de acessibilidade ARIA (`role="dialog"`, `aria-modal="true"`) no modal de visualização.
- Fallback resiliente nos links de conversão do WhatsApp com URL e parâmetros pré-codificados diretamente no HTML.
- Blindagem de compliance no atributo `alt` das imagens de projetos.

## [0.2.2] - 2026-10-07
### Adicionado
- Conversão integral do arquivo de briefing (`Briefing_Landing_Page_ZHAARQ (1).pdf`) para formato Markdown estruturado em `documents/BRIEFING_LANDING_PAGE_ZHAARQ.md`, preservando todas as 16 seções, copies, diretrizes de SEO, Google Ads e regras de conformidade.

## [0.2.1] - 2026-10-07
### Corrigido
- Ajuste das imagens na Seção 08 (Case de Processo): separação rigorosa entre as fotos identificadas com "OBRA" no canteiro de construção (`PROJETO 1 - ANDAMENTO DA OBRA 2.jpeg` e `PROJETO 1 - ANDAMENTO DA OBRA.jpeg`) e as fotos da casa pronta e averbada (`PROJETO 1 - 1.jpeg` e `PROJETO 1 - 4.jpeg`), alinhando a narrativa visual à realidade da obra.
- Inversão das imagens entre os cards 3 e 4 conforme preferência do usuário.

## [0.2.0] - 2026-10-07
### Adicionado
- Pipeline de otimização de imagens: conversão de fotos JPEG para formato WebP moderno em `assets/images/`, gerando reduções de tamanho de até 74%.
- Implementação de `css/styles.css` com tipografia editorial elegante e variáveis de cor personalizadas da ZHAARQ.
- Implementação de `js/main.js` com acordeão interativo de FAQ com acessibilidade ARIA, sistema de Toast Notification moderno, lightbox para zoom das imagens e rastreamento de cliques para o WhatsApp com mensagem configurada.
- Criação do `index.html` completo contendo as 12 seções obrigatórias do briefing oficial:
  - Hero com proposta de valor e CTA direto.
  - 6 situações de identificação do problema.
  - Bloco de consequências e segurança patrimonial.
  - 6 soluções e frentes de atuação técnica.
  - Passo a passo de atendimento em 4 etapas.
  - Destaque de autoridade (+100 projetos/processos).
  - Galeria de 14 fachadas reais de imóveis atendidos.
  - Case de processo completo com as 4 fases documentadas.
  - Quebra de objeção para clientes em dúvida.
  - Seção institucional da arquiteta com dados profissionais.
  - FAQ com 7 perguntas e respostas essenciais.
  - Super CTA de conversão final.
  - Rodapé escuro elegante e barra de contato flutuante mobile.

## [0.1.0] - 2026-10-07
### Adicionado
- Extração precisa da paleta de cores corporativa a partir do layout de referência.
- Análise completa do arquivo de briefing (`Briefing_Landing_Page_ZHAARQ (1).pdf`).
- Levantamento e catalogação inteligente das 81 imagens fornecidas na pasta `SITE ARQT`.
- Mapeamento das 12 imagens pré-selecionadas pelo usuário (Perfil, Textos, Projeto 1 e Projeto 2).
- Agrupamento das fotos do WhatsApp por similaridade para seleção da galeria de fachadas reais.
- Criação do roadmap de tarefas em `documents/task.md`.
