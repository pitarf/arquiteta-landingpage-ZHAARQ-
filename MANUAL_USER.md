# Manual do Usuário (MANUAL_USER.md) - Landing Page ZHAARQ

## 1. Objetivo da Página
A Landing Page tem como finalidade primordial converter buscas no Google por "regularização de imóvel", "arquiteto para Habite-se" e "averbação" em conversas diretas e qualificadas no WhatsApp da ZHAARQ.

## 2. Como Funciona a Conversão
- **Botões "Quero analisar meu imóvel":** Ao clicar nos botões de chamada para ação (Hero, Diagnóstico, Case Real e CTA Final), o visitante é direcionado diretamente para o WhatsApp com mensagem pré-configurada e ícone oficial em branco.
- **Barra Flutuante para Celular & Botão Flutuante Desktop:** Em todas as resoluções, o visitante tem acesso rápido ao WhatsApp sem obstruir o conteúdo da página.
- **Rastreamento de Tráfego:** Os parâmetros de campanha (`utm_source`, `utm_campaign`, etc.) e o identificador do Google Ads (`gclid`) são preservados e encaminhados na mensagem para mensurar a origem dos contatos.

## 3. Como Alterar o Número do WhatsApp
Para definir o número real de atendimento da ZHAARQ:
1. Abra o arquivo [index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html).
2. Localize os links com a classe `btn-whatsapp` e altere a URL `https://wa.me/5511999999999` para o número oficial (com DDI e DDD, ex: `5511987654321`).
3. O script [main.js](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/js/main.js) preserva os dados de campanha automaticamente.

## 4. Estrutura Visual e Conteúdo Real (Padrão Editorial)
- **Hero:** Fotografia real em tela cheia (100% full-width) da edificação concluída com a presença institucional da Arquiteta Juliana Lucena com certificado na área em destaque.
- **Projetos em Destaque:** Galeria assimétrica de arquitetura com prancha master de 7 colunas (Residência Unifamiliar) e projetos de apoio em 5 colunas com metadados de obra.
- **Manifesto de Segurança Patrimonial:** Bloco escuro com métricas de autoridade em tipografia dourada Cormorant Garamond (`+100`, `98%`, `100%`, `CAU/SP`).
- **Índice Editorial de Serviços:** Lista indexada de serviços com linhas hairline (`01 //`, `02 //`...), escopo pericial e tags normativas de órgãos públicos.
- **Dossiê Pericial:** Análise de 4 inconformidades críticas com foto de vistoria in loco e pareceres periciais.
- **Régua Sequencial em 5 Fases:** Metodologia de trabalho com entregáveis formais e consolidação cartorária.
- **Case Real Documentado:** Cronologia fotográfica de 4 etapas reais de evolução de obra até a averbação em cartório.
- **Sobre a Arquiteta:** Perfil institucional com citação autoral, certificação profissional ativa no CAU/SP e tabela de credenciais.
- **FAQ Expansível:** Acordeão em linhas minimalistas com respostas diretas para quebrar objeções imediatas.
- **Super CTA e Rodapé:** Bloco escultural com atendimento via WhatsApp e rodapé arquitetônico completo em 4 colunas.
