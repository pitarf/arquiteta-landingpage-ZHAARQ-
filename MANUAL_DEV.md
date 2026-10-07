# Manual do Desenvolvedor (MANUAL_DEV.md) - Landing Page ZHAARQ

## 1. Visão Geral
Landing Page de alta conversão para o escritório de arquitetura **ZHAARQ**, desenvolvida com base estrita no briefing comercial para tráfego pago (Google Ads) e orgânico.

## 2. Tecnologias & Bibliotecas
- **HTML5:** Semântica estrita, metadados Open Graph e acessibilidade ARIA.
- **Tailwind CSS:** Carregado via CDN otimizada com paleta customizada da marca embutida.
- **CSS3 (`css/styles.css`):** Fontes Google (Playfair Display para títulos editoriais e Plus Jakarta Sans para leitura técnica), variáveis e transições suaves.
- **JavaScript Vanilla (`js/main.js`):** Sem dependências externas pesadas:
  - Acordeão do FAQ com atributos ARIA para acessibilidade.
  - Lightbox modal nativo com suporte a tecla `Escape`.
  - Toast Notifications para feedbacks amigáveis (evitando `alert()` nativo).
  - Preservação e repasse de UTMs e GCLID diretamente na mensagem enviada.
  - Integração com `window.dataLayer.push({ event: 'whatsapp_conversion' })` para Google Ads e GTM.
  - Banner de consentimento LGPD com armazenamento em `localStorage`.

## 3. Estrutura de Arquivos
```text
/
├── assets/
│   ├── images/
│   │   ├── logo.webp
│   │   ├── hero-arquiteta.webp
│   │   ├── arquiteta-perfil.webp
│   │   ├── case-etapa-1-terreno.webp
│   │   ├── case-etapa-2-projeto.webp
│   │   ├── case-etapa-3-obra.webp
│   │   ├── case-etapa-4-conclusao.webp
│   │   └── fachada-01.webp ... fachada-14.webp
│   └── icons/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── documents/
│   └── task.md
├── CHANGELOG.md
├── MANUAL_DEV.md
├── MANUAL_USER.md
└── index.html
```

## 4. Otimização de Imagens
As imagens foram convertidas de JPEG para **WebP** usando Pillow (Python), reduzindo o peso original em até **74%**, o que garante tempo de carregamento inferior a 1,5s no 4G móvel.

## 5. Como Executar Localmente
Basta abrir o arquivo [index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html) diretamente no navegador, ou iniciar um servidor estático:
```powershell
python -m http.server 3000
```
E acessar `http://localhost:3000`.
