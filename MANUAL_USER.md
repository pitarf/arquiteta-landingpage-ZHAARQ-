# Manual do Usuário (MANUAL_USER.md) - Landing Page ZHAARQ

## 1. Objetivo da Página
A Landing Page tem como finalidade primordial converter buscas no Google por "regularização de imóvel", "arquiteto para Habite-se" e "averbação" em conversas diretas e qualificadas no WhatsApp da ZHAARQ.

## 2. Como Funciona a Conversão
- **Botões "QUERO ANALISAR MEU IMÓVEL":** Ao clicar em qualquer um dos botões principais da página, o visitante é direcionado diretamente para o aplicativo do WhatsApp com a mensagem inicial pronta:
  > *"Olá, encontrei a ZHAARQ pelo Google e gostaria de entender como regularizar meu imóvel."*
- **Barra Flutuante para Celular:** Nos dispositivos móveis, um botão fixo no rodapé acompanha a rolagem da página, permitindo que o cliente entre em contato a qualquer momento.

## 3. Como Alterar o Número do WhatsApp
Para definir o número real de atendimento da ZHAARQ:
1. Abra o arquivo [index.html](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/index.html).
2. Nos elementos com a classe `btn-whatsapp`, adicione ou altere o atributo `data-phone="5511XXXXXXXXX"` (DDD + número com dígitos apenas).
3. Caso o atributo não seja preenchido, o script [main.js](file:///c:/Git/React/Landing%20Page%20-%20aRQUITETA/js/main.js) utilizará o padrão definido.

## 4. Galeria de Fotos Interativa
- O visitante pode clicar em qualquer uma das fachadas reais ou fotos do processo de regularização para visualizá-las em tamanho expandido.
