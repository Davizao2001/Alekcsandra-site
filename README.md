# Dra. Aleksandra Carla — Website

Site institucional (Quiet Luxury) da Dra. Aleksandra Carla — Harmonização Facial & Estética Avançada, Mooca/SP.

**Stack:** HTML + Tailwind CSS (compilado) + GSAP/ScrollTrigger + Lenis. Tudo é servido localmente (sem CDN), então funciona mesmo em redes que bloqueiam domínios externos.

## Estrutura
- `index.html` — página completa (hero, filosofia, intenções, método, resultados, sobre, espaço, contato)
- `assets/img/` — fotos (recepção e retrato)
- `assets/css/` — `tailwind.css` (gerado) e `fonts.css`
- `assets/vendor/` — GSAP, ScrollTrigger e Lenis
- `assets/fonts/` — Cormorant Garamond e Plus Jakarta Sans (woff2)
- `tools/` — configuração do Tailwind para gerar o CSS
- `assets/video/` — opcional: `hero-consultorio.mp4` entra por cima da foto da hero com fade

## Como rodar localmente
Não há build: basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Alterando estilos
Se mudar classes Tailwind no `index.html`, recompile o CSS:

```bash
npm install
npm run build:css
```

## Antes de publicar
- [ ] Substituir os depoimentos de exemplo por avaliações reais do Google (com autorização)
- [ ] Registro profissional (`[Conselho-SP 00000]`)
- [ ] Número do WhatsApp (`5511900000000`) e link do Instagram
- [ ] Horário de atendimento
- [ ] Mais fotos do espaço para a galeria
- [ ] Comprimir as imagens
