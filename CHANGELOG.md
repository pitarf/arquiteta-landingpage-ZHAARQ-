# Changelog - Landing Page ZHAARQ

Todas as alterações notáveis deste projeto serão registradas neste arquivo.

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
