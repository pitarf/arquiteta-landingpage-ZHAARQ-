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
- **Lista Editorial Indexada de Especialidades (Seção 05):** Estrutura refinada com linhas divisórias *hairline* e numeração clássica (01 a 05), com hover sutil, tags técnicas e foco na leitura rápida dos 5 serviços centrais: Regularização (com desdobro de lote), Projetos & As-Built, Habite-se & Licenças, Averbação & CND, e Diagnóstico Técnico & Viabilidade.
- **Dossiê Pericial:** Análise de 4 inconformidades críticas com foto autêntica de vistoria in loco (arquiteta com prancheta e trena profissional) e pareceres periciais.
- **Régua Sequencial em 5 Fases:** Metodologia de trabalho com entregáveis formais e consolidação cartorária.
- **Projeto Real (Do Terreno à Regularização Completa):** Cronologia fotográfica detalhada em 6 etapas consecutivas (01 ao 06: Local e Condições Iniciais com registro do terreno, Elaboração do Projeto Arquitetônico com pranchas técnicas, Aprovação e Licenciamento perante a Prefeitura Municipal, Conclusão Construtiva com obtenção do Habite-se, Regularização Fiscal na Receita Federal com abertura do CNO e emissão da CND da obra com potencial de redução técnica de até 70%, e Averbação no Cartório de Registro de Imóveis atualizando a matrícula e formalizando a edificação), demonstrando a condução ponta a ponta pela ZHAARQ.
- **Sobre a Arquiteta:** Perfil institucional com retrato de alta autoridade da Arquiteta Juliana Lucena atuando no ateliê ZHAARQ sobre pranchas arquitetônicas, logotipo iluminado e instrumentos de projeto, citação autoral, certificação ativa no CAU/SP e credenciais.
- **FAQ Expansível:** Acordeão em linhas minimalistas com respostas diretas para quebrar objeções imediatas.
- **Super CTA e Rodapé:** Bloco escultural com atendimento via WhatsApp e rodapé arquitetônico completo em 4 colunas.
