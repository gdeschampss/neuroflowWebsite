# Design System — NeuroFlow

Este documento especifica o Design System oficial do site institucional da **NeuroFlow** (marca-mãe), alinhando a identidade visual, tokens de cor, tipografia, espaçamentos, regras de motion e padrões de componentes orientados a conversão.

---

## 1. Filosofia de Design & Posicionamento

- **Posicionamento**: "Chique, mas não Apple" (branco puro respirável, direto) e "Vendedor, mas não infoproduto" (sem desespero, com clareza cirúrgica).
- **Regra dos 90%**: O fundo `#FFFFFF` domina 90% da interface. A cor de marca (`#03AD97`) atua como um holofote de destaque (CTAs, ícones, badges, palavras-chave).
- **Alinhamento**: Esquerda como padrão textual para escaneabilidade rápida; centralizado apenas em Heros e fechos de CTA.
- **Micro-decisão por Seção**: Toda seção visualmente atraente encerra impulsionando uma micro-decisão do usuário (rolar, simular, clicar no WhatsApp/Formulário).

---

## 2. Tokens de Cor (Color Palette)

| Token | Valor Hex/HSL | Aplicação |
|---|---|---|
| `--background` | `#FFFFFF` | Fundo principal da página em 100% das seções. |
| `--text-primary` | `#1F1F1F` | Preto suavizado para títulos, H1-H6, textos primários. |
| `--text-secondary` | `rgba(31, 31, 31, 0.75)` | Cinza escuro com opacidade para subtítulos e descrições. |
| `--text-muted` | `#6B7280` | Legendas, datas de blog, placeholders. |
| `--brand-primary` | `#03AD97` | Verde-petróleo NeuroFlow. Cor de destaque, botões primários, ícones. |
| `--brand-primary-hover` | `#028F7C` | Hover de botões primários e links ativos. |
| `--brand-primary-light` | `rgba(3, 173, 151, 0.08)` | Fundo de ícones, badges, destaques de cards. |
| `--surface-card` | `#FAFAFA` | Fundo sutil de cards secundários e accordion FAQ. |
| `--border-subtle` | `#E5E7EB` | Bordas finas de cards e divisores de linha. |

---

## 3. Tipografia

- **Fonte Principal (Sans-Serif)**: `Inter` (Google Fonts) — Pesos 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold).
- **Fonte de Destaque Editorial (Serif Italic)**: `Instrument Serif` (Italic) ou `Fraunces` (Italic).
  - *Regra estrita*: Usada em no máximo 1 a 3 palavras por página dentro de títulos para criar contraste elegante (ex: "Inteligência Artificial *de verdade*").

### Escala Tipográfica Responsive

| Nível | Mobile | Desktop | Weight | Line Height |
|---|---|---|---|---|
| **H1 (Hero)** | 36px - 44px | 64px - 84px | 800 (ExtraBold) | 1.1 |
| **H2 (Seção)** | 28px - 32px | 36px - 48px | 700 (Bold) | 1.2 |
| **H3 (Card)** | 20px - 22px | 24px - 28px | 600 (SemiBold) | 1.3 |
| **Body (Texto)**| 16px | 18px | 400 / 500 | 1.6 |
| **Caption/Badges**| 13px - 14px | 14px | 600 (SemiBold) | 1.4 |

---

## 4. Bordas & Sombras

- **Corner Radius**:
  - Cards e Modais: `16px` (`rounded-2xl`) ou `20px` (`rounded-3xl`)
  - Botões & Inputs: `12px` (`rounded-xl`)
  - Badges & Pills: `9999px` (`rounded-full`)
- **Sombras**:
  - `shadow-sm`: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
  - `shadow-brand`: `0 10px 25px -5px rgba(3, 173, 151, 0.2)` (brilho suave no botão primário)
  - `shadow-card`: `0 10px 30px -10px rgba(0, 0, 0, 0.04)`

---

## 5. Motion Design & Animações

- **Princípio**: Animação intencional que guia a leitura, nunca poluição visual.
- **Scroll Reveal (Framer Motion / GSAP)**:
  - `initial: { opacity: 0, y: 24 }`
  - `whileInView: { opacity: 1, y: 0 }`
  - `transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }`
- **Micro-interações**:
  - Botão Primário: Hover `scale(1.02)` + transição de background e sombra.
  - Cards: Hover `translateY(-4px)` + aumento de borda para `#03AD9733`.
- **GSAP ScrollTrigger na Hero do Blog**:
  - Scroll fixado (`pin: true`) na viewport.
  - Animação de transição textual em 2 estágios do H1 antes da liberação do scroll da lista de posts.

---

## 6. Padrões de Componentes

1. **Header / Navbar**: Fundo branco translúcido (`backdrop-blur-md bg-white/90`), nav links com indicador ativo em verde teal, CTA "Falar com Especialista".
2. **Feature Cards (estilo AbacatePay)**: Ícone dentro de container `bg-[#03AD9712] text-[#03AD97]`, título de 2-4 palavras, descrição direta de 1 frase.
3. **Simulador ROI**: Input sliders para "Leads/mês" e "Ticket médio", cálculo instantâneo da perda estimada sem resposta no WhatsApp em minutos vs Atlas 24/7.
4. **Carrossel de Depoimentos**: Infinite auto-scroll horizontal com cards leves contendo foto/avatar, nome, cargo e depoimento curto.
5. **Mobile Sticky Bar**: Barra inferior fixa em telas pequenas com botão WhatsApp/Formulário para máxima conversão.

---

## 7. Links Globais de Conversão

- **Formulário de Captação**: `https://formulario-neuroflow-gumsak42b-easygolden-s-projects.vercel.app/`
- **WhatsApp Direct**: `https://wa.me/5547999619049`
