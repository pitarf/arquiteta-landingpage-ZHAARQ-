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
- [x] Servidor de desenvolvimento local iniciado e rodando ativamente na porta 3000 (`http://localhost:3000`).

### Fazendo
- [ ] Validação visual e interação em tempo real com o usuário.

### Pendentes
- [ ] Configuração do número real de telefone do WhatsApp (quando fornecido).
- [ ] Publicação/Deploy em ambiente de produção (Netlify, Vercel ou hospedagem do cliente).
