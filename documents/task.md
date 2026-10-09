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
- [x] Servidor de desenvolvimento local iniciado e rodando ativamente na porta 3000 (`http://localhost:3000`).

### Fazendo
- [ ] Validação visual e interação em tempo real com o usuário.

### Pendentes
- [ ] Configuração do número real de telefone do WhatsApp (quando fornecido).
- [ ] Publicação/Deploy em ambiente de produção (Netlify, Vercel ou hospedagem do cliente).
