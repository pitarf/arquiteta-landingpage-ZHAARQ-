# Manual do Desenvolvedor (MANUAL_DEV.md) - Landing Page ZHAARQ

## 1. Visão Geral
Landing Page de alta conversão para o escritório de arquitetura **ZHAARQ**, desenvolvida com base estrita no briefing comercial para tráfego pago (Google Ads) e orgânico.

## 2. Tecnologias & Bibliotecas
- **HTML5 Semântico:** Estrutura modular em 12 seções, metadados Open Graph para redes sociais/WhatsApp e atributos de acessibilidade ARIA.
- **Tailwind CSS:** CDN com paleta arquitetônica estendida (Terracotta `#993819`, Dourado `#C5A880`, Grafite Dark `#121110`, Off-White `#F7F4EE`).
- **Tipografia:** `Cormorant Garamond` (títulos editoriais clássicos de arquitetura) + `Jost` (geometria pura Bauhaus de Paul Renner para textos e especificações técnicas).
- **Padrão Editorial de Arquitetura (gstack Design-Review):**
  - Hero com grid balanceado 7/5 e retrato da arquiteta em plano médio ancorado na base (`arquiteta_hero_cintura.webp`).
  - Galeria de Projetos em 3 colunas perfeitamente simétricas (`aspect-[4/3]`).
  - Manifesto de Segurança Patrimonial com linhas hairline de 1px e métricas monumentais douradas.
  - Índice Tipográfico de Especialidades (`01 //`, `02 //`...) com escopo pericial e tags normativas (sem ícones redondos de IA).
  - Dossiê Pericial com 4 fichas técnicas de inconformidade (Fiscal, Financiamento, Jurídico, Administrativo).
  - Régua Sequencial de 5 Fases de Engenharia e Trâmite com entregáveis formais e cards orgânicos inspirados na referência.
  - FAQ com linhas horizontais puras e transições suaves.
  - Rodapé Institucional em 4 colunas clássicas com divisórias verticais.
- **JavaScript Vanilla Modular (`js/main.js`):** Sem bibliotecas pesadas:
  - FAQ expansível com animação suave e ARIA controls.
  - Toast Notifications para avisos sem interrupção agressiva.
  - Rastreamento dinâmico de conversões com repasse de UTMs, GCLID e disparo para `dataLayer`.
  - Banner LGPD com persistência em `localStorage`.
  - Botão flutuante desktop e barra fixa mobile para contato via WhatsApp com ícone oficial em branco.

## 3. Estrutura de Arquivos
```text
/
├── assets/
│   ├── images/
│   │   ├── hero_bg_fullwidth.webp      # Fotografia 100% full-width da Hero (PROJETO 1 - 2 2.jpeg)
│   │   ├── arquiteta_hero_cintura.webp # Retrato da Arquiteta da cintura para cima na Hero
│   │   ├── proj_real_1..3.webp         # Projetos reais executados (aspect-[4/3])
│   │   ├── diagnostico_real.webp       # Vistoria técnica in loco
│   │   ├── case_1..4_*.webp            # Sequência real de 4 etapas (Obras -> Averbação)
│   │   ├── arquiteta_real.webp         # Foto institucional no CREA-SP
│   │   ├── whatsapp-icon-white.svg     # Ícone oficial vetorizado em branco puro
│   │   └── logo-branca.webp / logo.webp
│   └── icons/
├── css/
│   └── styles.css                      # Regras customizadas, fontes e efeitos de glassmorphism
├── js/
│   └── main.js                         # Interatividade, rastreamento e eventos
├── documents/
│   ├── BRIEFING_LANDING_PAGE_ZHAARQ.md # Transcrição do briefing original
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
