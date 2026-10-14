# Manual do Usuário (MANUAL_USER.md) - Landing Page ZHAARQ

## 1. Objetivo da Página
A Landing Page tem como finalidade primordial converter buscas no Google por "regularização de imóvel", "arquiteto para Habite-se" e "averbação" em conversas diretas e qualificadas no WhatsApp da ZHAARQ.

## 2. Como Funciona a Conversão
- **Botões "Quero analisar meu imóvel":** Ao clicar nos botões de chamada para ação (Hero, Diagnóstico, Case Real e CTA Final), o visitante é direcionado diretamente para o WhatsApp com mensagem pré-configurada e ícone oficial em branco.
- **Barra Flutuante para Celular & Botão Flutuante Desktop:** Em todas as resoluções, o visitante tem acesso rápido ao WhatsApp sem obstruir o conteúdo da página.
- **Rastreamento de Tráfego:** Os parâmetros de campanha (`utm_source`, `utm_campaign`, etc.) e o identificador do Google Ads (`gclid`) são preservados e encaminhados na mensagem para mensurar a origem dos contatos.

## 3. Configuração do Número do WhatsApp
O número oficial do WhatsApp da ZHAARQ está configurado globalmente em todas as chamadas de ação da página:
- **Número Oficial:** `+55 (11) 97745-3954` (`5511977453954`).
- **Comportamento Inteligente:** O script [main.js](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/js/main.js) preserva as mensagens contextuais de cada seção (projetos específicos, especialidades ou dúvidas gerais) e anexa automaticamente os parâmetros de campanha (`utm_source`, `utm_campaign`, `gclid`).
- **Como alterar futuramente:** Caso o número mude, basta atualizar o atributo `href` dos links `.btn-whatsapp` no [index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html) e a constante padrão no [main.js](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/js/main.js).

## 4. Estrutura Visual e Conteúdo Real (Padrão Editorial)
- **Hero:** Fotografia real em tela cheia (100% full-width) da edificação concluída com a presença institucional da Arquiteta Juliana Lucena com atributos da profissão (pranchas técnicas, capacete e planner) na área em destaque à direita, acompanhada de selo de responsabilidade técnica CAU.
- **Projetos em Destaque:** Galeria de 3 colunas com obras reais (Projeto 01 com escopo legal completo: projeto arquitetônico, alvará, Habite-se, CND da Receita Federal e averbação em cartório; Projeto 02 com regularização de sobrado unifamiliar com levantamento, projeto e Certificado de Regularização; e Projeto 03 com regularização de edificação e desdobro de lote para individualização de matrículas).
- **Manifesto de Segurança Patrimonial:** Bloco escuro com métricas de autoridade em tipografia dourada Tenor Sans (`+100`, `98%`, `100%`, `CAU/SP`) responsiva e sem vazamentos no mobile.
- **Carrossel Vertical de Especialidades (Stacking Cards):** O título da seção ("NOSSAS ESPECIALIDADES") permanece fixo no topo da tela logo abaixo do menu durante toda a navegação, enquanto os 5 cartões esculturais de arquitetura deslizam e se empilham em camadas sucessivas conforme o scroll (Regularização, Projetos As-Built, Habite-se & Licenças, Averbação & CND e Dossiê Patrimonial), com botões diretos para WhatsApp e selos técnicos.
- **Dossiê Pericial:** Análise de 4 inconformidades críticas com foto autêntica de vistoria in loco (arquiteta com prancheta e trena profissional) e pareceres periciais.
- **Régua Sequencial em 5 Fases:** Metodologia de trabalho com entregáveis formais e consolidação cartorária.
- **Case Real Documentado:** Cronologia fotográfica de 4 etapas reais de evolução de obra até a averbação em cartório.
- **Sobre a Arquiteta:** Perfil institucional com citação autoral, certificação profissional ativa no CAU/SP e tabela de credenciais.
- **FAQ Expansível:** Acordeão em linhas minimalistas com respostas diretas para quebrar objeções imediatas.
- **Super CTA e Rodapé:** Bloco escultural com atendimento via WhatsApp e rodapé arquitetônico completo em 4 colunas.
