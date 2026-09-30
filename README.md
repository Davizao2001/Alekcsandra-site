# Dra. Aleksandra Carla — Website

Site institucional (Quiet Luxury) da Dra. Aleksandra Carla — Harmonização Facial & Estética Avançada, Mooca/SP.

**Stack:** HTML + Tailwind CSS (CDN) + GSAP/ScrollTrigger + Lenis.

## Estrutura
- `index.html` — página completa (hero, filosofia, intenções, método, resultados, sobre, espaço, contato)
- `assets/img/` — fotos (recepção e retrato)
- `assets/video/` — opcional: `hero-consultorio.mp4` entra por cima da foto da hero com fade

## Como rodar localmente
Não há build: basta abrir `index.html` no navegador ou servir a pasta com qualquer servidor estático:

```bash
python3 -m http.server 8000
# acesse http://localhost:8000
```

## Antes de publicar
- [ ] Substituir os depoimentos de exemplo por avaliações reais do Google (com autorização)
- [ ] Registro profissional (`[Conselho-SP 00000]`)
- [ ] Número do WhatsApp (`5511900000000`) e link do Instagram
- [ ] Horário de atendimento
- [ ] Mais fotos do espaço para a galeria
- [ ] Produção: compilar o Tailwind com o CLI e comprimir as imagens
