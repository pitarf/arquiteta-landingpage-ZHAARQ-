
## [0.3.1] - 2026-10-07
### Refinado
- Substituição dos emojis dos 6 cards de identificação por ícones SVG lineares consistentes com a identidade editorial.
- Ajuste visual dos cards para aparência mais arquitetônica e menos genérica.
- Refinamento do Hero para reduzir altura no primeiro viewport e melhorar hierarquia da headline.
- Texto de apoio da seção de identificação simplificado para leitura rápida.
- Preservação adicional de `utm_medium` e `utm_content` na mensagem enviada ao WhatsApp.

# Changelog - Landing Page ZHAARQ

Todas as alterações notáveis deste projeto serão registradas neste arquivo.

## [0.3.1] - 2026-10-07
### Alterado & Aprimorado
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
