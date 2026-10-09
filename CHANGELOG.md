# Changelog - Landing Page ZHAARQ

Todas as alterações notáveis deste projeto serão registradas neste arquivo.

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
