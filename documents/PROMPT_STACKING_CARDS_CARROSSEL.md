# PROMPT MESTRE: CARROSSEL VERTICAL COM STACKING CARDS (STICKY SCROLL)
> **Versão:** 1.0.0  
> **Compatibilidade:** HTML5, Tailwind CSS v3+, CSS3 Puro, JavaScript Vanilla (ES6+)  
> **Finalidade:** Prompt de engenharia pronto para uso em LLMs (ChatGPT, Claude, Gemini, Antigravity) para construir carrosséis verticais de cartões que se sobrepõem e empilham suavemente durante a rolagem da página.

---

## 📋 Como Utilizar Este Prompt
Copie e cole o bloco contido na seção **[PROMPT COPIÁVEL]** diretamente na sua IA assistente de programação. O prompt já contém todo o contexto técnico, restrições arquitetônicas, armadilhas reais de CSS resolvidas e o boilerplate funcional.

---

```markdown
<!-- ============================================================================== -->
<!-- INÍCIO DO PROMPT PARA A IA                                                     -->
<!-- ============================================================================== -->

Você é um Arquiteto Frontend Sênior e Especialista em UI/UX Editorial de Alto Padrão.
Sua missão é projetar e implementar um componente de **Carrossel Vertical com Efeito de Empilhamento (Stacking Cards / Sticky Scroll)** de alta performance, sem dependência obrigatória de bibliotecas pesadas (como GSAP ou Framer Motion), utilizando **HTML semântico, Tailwind CSS (ou CSS puro) e JavaScript Vanilla leve a 60 FPS**.

---

### 1. OBJETIVO DA FUNCIONALIDADE
Criar uma seção onde, conforme o usuário rola a página:
1. **O Cabeçalho da Seção (Título, Badge e Subtítulo)** fixa no topo logo abaixo da Navbar e **permanece visível** durante todo o percurso dos cartões.
2. Os **Cards sobem verticalmente e se empilham** uns sobre os outros de forma progressiva e magnética.
3. Conforme um novo card sobe por cima do anterior:
   - O card inferior **reduz sutilmente de escala** (ex: de `1` para `0.95`) e **escurece levemente** (ex: `brightness(0.75)`), transmitindo sensação física de profundidade tátil.
   - O novo card projeta uma sombra premium sobre o anterior.
4. **Sem Abismos de Espaço em Branco**: O ritmo de rolagem é imediato e contínuo, sem vácuos vazios ao rolar a página e sem travamentos ao término do último cartão.

---

### 2. REGRAS CRÍTICAS E ARMADILHAS TÉCNICAS (ANTI-BUGS OBRIGATÓRIOS)

Você DEVE seguir rigorosamente estas 6 regras arquitetônicas comprovadas:

#### REGRA 1: O Assassino do Sticky (`overflow-x: clip`)
- **Problema:** Se qualquer elemento ancestral (`html`, `body`, `<main>` ou container de seção) possuir `overflow-x: hidden` ou `overflow: hidden`, o navegador cria um contexto de scroll local e **DESATIVA COMPLETAMENTE o `position: sticky`**.
- **Solução Obrigatória:** No `html` e `body`, utilize estritamente:
  ```css
  html, body {
    overflow-x: clip;
    width: 100%;
    max-width: 100%;
  }
  ```
- **Proibição:** Nenhum container pai direto ou indireto dos cards pode ter `overflow: hidden` ou `overflow: auto`.

#### REGRA 2: Fórmula dos Offsets Progressivos (`top` escalonado)
- Para que os cartões não se cubram 100% de uma só vez (permitindo enxergar as abas/bordas superiores empilhadas), o `top` de cada cartão deve ser escalonado matematicamente:
  $$\text{top}_{card(n)} = \text{top\_base} + (n \times \text{step\_offset})$$
  - `top_base` = Altura da Navbar fixa + Altura do Cabeçalho da Seção + Margem de segurança.
  - `step_offset` = Entre `15px` e `20px` por cartão.
- **Exemplo de Escala (Desktop):**
  - Card 1: `top: 255px; z-index: 10;`
  - Card 2: `top: 275px; z-index: 20;`
  - Card 3: `top: 295px; z-index: 30;`
  - Card 4: `top: 315px; z-index: 40;`
  - Card 5: `top: 335px; z-index: 45;`
- **Responsividade:** Em telas móveis (`mobile`), onde o espaço vertical é menor, recalibre os valores de `top` (ex: `top: 145px`, `top: 160px`, `top: 175px`...).

#### REGRA 3: O Fim do Gap/Vácuo em Branco (Rolagem Contínua)
- **Problema:** Usar margens verticais grandes entre os cards (como `margin-bottom: 50vh` ou `mb-96`) gera uma sensação de página quebrada/vazia onde o usuário rola muito espaço sem ver nada.
- **Solução Obrigatória:**
  - A margem inferior entre os cards deve ser curta e fixa: `margin-bottom: 20px !important;` (ou no máximo `24px` a `32px`).
  - O último card DEVE ter obrigatoriamente: `margin-bottom: 0 !important;`.
  - O container pai (`.stacking-container`) DEVE ter: `padding-bottom: 0 !important;`.
  - O padding da seção e o padding-top da seção seguinte devem ser ajustados para que a próxima seção comece imediatamente após o término do empilhamento.

#### REGRA 4: Hierarquia de Z-Index
- Para garantir que nada fique invisível ou sobreponha elementos indevidos:
  - **Navbar Global:** `z-index: 60` (ou superior a todos).
  - **Cabeçalho Sticky da Seção:** `z-index: 50` (fica visível sobre todos os cards).
  - **Cards:** Ordenados de forma crescente (`z-10`, `z-20`, `z-30`, `z-40`, `z-45`).

#### REGRA 5: Cabeçalho Sticky com Efeito Blur
- O cabeçalho da seção precisa ter:
  - `position: sticky;`
  - `top: [altura_da_navbar];`
  - `background-color: rgba(...)` com `backdrop-filter: blur(12px);` para que os cards passem por baixo sem poluir visualmente a leitura do título.

#### REGRA 6: Ponto de Origem da Transformação
- No CSS dos cards, configure:
  ```css
  .stack-card {
    transform-origin: top center;
    will-change: transform, filter;
    transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.2s ease;
  }
  ```
  Isso garante que ao reduzir a escala com o JS, o topo do cartão não desalinhe do seu offset sticky.

---

### 3. ESPECIFICAÇÃO DE CÓDIGO (BOILERPLATE FUNCIONAL)

Gere a implementação completa estruturada conforme o modelo abaixo:

#### A. Estrutura HTML Semântica (com classes Tailwind CSS)
```html
<section id="especialidades" class="py-12 md:py-16 bg-[#FBF9F5] relative">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <!-- 01. CABEÇALHO STICKY DA SEÇÃO -->
    <div class="services-sticky-header">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <span class="text-[11px] font-semibold tracking-[0.25em] text-[#C25B34] uppercase">
            ÁREAS DE ATUAÇÃO
          </span>
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-serif text-[#181715] mt-1">
            Nossos Serviços Especializados
          </h2>
        </div>
        <p class="text-xs text-[#6E655F] max-w-sm">
          Soluções completas com condução técnica rigorosa e segurança jurídica.
        </p>
      </div>
    </div>

    <!-- 02. CONTAINER DOS STACKING CARDS -->
    <div class="stacking-container relative">

      <!-- CARD 01 -->
      <div class="stack-card sticky top-[145px] sm:top-[185px] lg:top-[255px] z-10 w-full rounded-3xl bg-[#181715] text-white p-6 sm:p-10 border border-[#2B2621] shadow-[0_25px_60px_rgba(0,0,0,0.4)]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-2xl font-serif text-[#D4AF37]">01.</span>
            <h3 class="text-xl sm:text-2xl font-serif text-white">Regularização e Licenciamento</h3>
            <p class="text-xs sm:text-sm text-[#C4B8A9] font-light leading-relaxed">
              Diagnóstico técnico e condução completa de processos em órgãos públicos municipais e estaduais.
            </p>
          </div>
          <div class="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10">
            <span class="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Status: 100% Conforme</span>
          </div>
        </div>
      </div>

      <!-- CARD 02 -->
      <div class="stack-card sticky top-[160px] sm:top-[205px] lg:top-[275px] z-20 w-full rounded-3xl bg-[#A64B2A] text-white p-6 sm:p-10 border border-[#C25B34] shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-2xl font-serif text-white/90">02.</span>
            <h3 class="text-xl sm:text-2xl font-serif text-white">Projetos Executivos & As-Built</h3>
            <p class="text-xs sm:text-sm text-white/90 font-light leading-relaxed">
              Levantamento métrico a laser e elaboração de peças gráficas completas para conformidade física e legal.
            </p>
          </div>
          <div class="lg:col-span-5 bg-white/10 rounded-2xl p-6 border border-white/20">
            <span class="text-xs text-white font-semibold uppercase tracking-wider">Normas ABNT & CAU</span>
          </div>
        </div>
      </div>

      <!-- CARD 03 -->
      <div class="stack-card sticky top-[175px] sm:top-[225px] lg:top-[295px] z-30 w-full rounded-3xl bg-[#23201D] text-white p-6 sm:p-10 border border-[#3D3731] shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-7 space-y-4">
            <span class="text-2xl font-serif text-[#D4AF37]">03.</span>
            <h3 class="text-xl sm:text-2xl font-serif text-white">Habite-se e Certificados</h3>
            <p class="text-xs sm:text-sm text-[#C4B8A9] font-light leading-relaxed">
              Vistorias técnicas e obtenção de autos de conclusão e regularidade perante o município.
            </p>
          </div>
          <div class="lg:col-span-5 bg-white/5 rounded-2xl p-6 border border-white/10">
            <span class="text-xs text-[#D4AF37] font-semibold uppercase tracking-wider">Aprovação Definitiva</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

#### B. CSS Complementar / Reset Essencial
```css
/* 1. Reset Global Anti-Quebra do Sticky */
html, body {
  overflow-x: clip;
  max-width: 100%;
  width: 100%;
}

/* 2. Cabeçalho Sticky da Seção */
.services-sticky-header {
  position: sticky;
  top: 68px; /* Ajuste para coincidir com a altura da sua Navbar fixa */
  z-index: 50;
  background-color: rgba(251, 249, 245, 0.98);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid rgba(216, 206, 195, 0.8);
}

@media (min-width: 640px) {
  .services-sticky-header {
    top: 76px;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .services-sticky-header {
    top: 88px;
  }
}

/* 3. Comportamento do Container e dos Cards */
.stacking-container {
  position: relative;
  padding-bottom: 0 !important;
}

.stack-card {
  transform-origin: top center;
  will-change: transform, filter;
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), filter 0.2s ease;
  margin-bottom: 20px !important; /* Espaçamento curto para evitar abismos brancos */
}

.stack-card:last-child {
  margin-bottom: 0 !important;
}
```

#### C. JavaScript Vanilla de Interpolação Óptica (60 FPS)
```javascript
/**
 * initVerticalStackingCards - Dinâmica de profundidade tátil dos cartões empilháveis
 * Conforme o scroll avança e o próximo cartão sobrepõe o atual:
 * - O cartão de baixo encolhe suavemente até scale(0.95) e escurece até brightness(0.75).
 * - O cartão de cima sobe projetando sombra natural.
 */
function initVerticalStackingCards() {
  const cards = Array.from(document.querySelectorAll('.stack-card'));
  if (cards.length === 0) return;

  let ticking = false;

  function updateCards() {
    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        const nextCard = cards[i + 1];
        const currentRect = card.getBoundingClientRect();
        const nextRect = nextCard.getBoundingClientRect();

        // O próximo card começa a cobrir o atual quando seu topo atinge a base do card atual
        const overlap = currentRect.bottom - nextRect.top;
        const totalHeight = currentRect.height;

        if (overlap > 0) {
          const progress = Math.min(Math.max(overlap / (totalHeight * 0.85), 0), 1);
          const scale = 1 - (progress * 0.05); // Suave redução de 5%
          const brightness = 1 - (progress * 0.25); // Suave escurecimento de 25%
          const translateY = progress * -4; // Leve recuo ótico para cima

          card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
          card.style.filter = `brightness(${brightness})`;
        } else {
          card.style.transform = 'scale(1) translateY(0px)';
          card.style.filter = 'brightness(1)';
        }
      } else {
        card.style.transform = 'scale(1) translateY(0px)';
        card.style.filter = 'brightness(1)';
      }
    });

    ticking = false;
  }

  // Eventos com passive listener para performance máxima
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCards);
      ticking = true;
    }
  }, { passive: true });

  window.addEventListener('resize', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCards);
      ticking = true;
    }
  }, { passive: true });

  // Execução no carregamento inicial
  updateCards();
}

// Inicializar após o carregamento do DOM
document.addEventListener('DOMContentLoaded', initVerticalStackingCards);
```

---

### 4. CHECKLIST DE QUALIDADE (QA)
Antes de finalizar a implementação, verifique:
- [ ] No mobile (iPhone/Android), os cards têm leitura confortável sem cortar conteúdo sob a Navbar?
- [ ] O título da seção permanece fixo e legível enquanto todos os cards deslizam por baixo?
- [ ] Não há nenhum container ancestral com `overflow-x: hidden` desativando o sticky?
- [ ] Ao terminar o último card, a próxima seção surge imediatamente sem tela branca residual?
- [ ] O scroll da página corre macio a 60fps sem engasgos ou repinturas pesadas?

<!-- ============================================================================== -->
<!-- FIM DO PROMPT PARA A IA                                                        -->
<!-- ============================================================================== -->
```

---

## 💡 Dicas de Customização para Novos Projetos
1. **Número de Cartões:**
   - Para adicionar mais cartões, basta adicionar mais um elemento `.stack-card` incrementando a classe de `top` (`top-[calc(top_anterior+20px)]`) e elevando o `z-index` (ex: `z-[46]`, `z-[50]`).
2. **Cores e Temas:**
   - Você pode alternar paletas claras (Off-White, Creme, Pedra) e escuras (Grafite, Terracota, Azul Petróleo) para criar contraste editorial rico entre as lâminas empilhadas.
3. **Modo Somente CSS:**
   - Se preferir não usar JavaScript, o efeito de empilhamento sticky continuará funcionando 100% de forma nativa apenas com as regras de CSS (`position: sticky`, `top` e `margin-bottom`). O JS adiciona apenas o refinamento cosmético de escala e brilho.
