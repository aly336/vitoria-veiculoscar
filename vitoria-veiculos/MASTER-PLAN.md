# Vitória Veículos — plano de execução

## Objetivo
Entregar experiência automotiva cinematográfica em português, com assets fornecidos, interação verificável e conteúdo comercial verdadeiro.

## Arquitetura
App Router com export estático. Home, /veiculos/, /veiculos/[slug]/, /sobre/, /contato/ e /privacidade/. Componentes de mídia e interação client-side; texto/rotas estáticos. data/vehicles.ts contém somente inventário confirmado (inicialmente vazio); data/business.ts centraliza contato opcional. lib/motion.ts centraliza as timelines. WebGL de transição carregado sob demanda; showroom fotográfico é o modo disponível. Modelo futuro integra adapter tipado, sem dependência WebGL de carro enquanto ausente.

## Storyboard
00 Prelude curto não bloqueante; 01 hero com vídeo e scroll pin; 02 silhueta lateral com scrub; 03 traseira e hotspots; 04 showroom com seis ângulos, zoom e reset; 05 manifesto editorial progressivo; 06 galeria horizontal desktop e nativa mobile; 07 coleção real sem ofertas fictícias; 08 final frontal e CTA.

## Fases
1. Fundação: inventário, documentos, tokens, configuração. 2. Hero: vídeo/poster/controles e entrada. 3. Storytelling: timelines reversíveis, máscara, parallax e galeria. 4. Showroom: exploração fotográfica, hotspots, zoom, transição WebGL e contrato 3D. 5. Comercial: catálogo/filtros/detalhes/contato. 6. QA: typecheck/build/browser/acessibilidade/performance. 7. Handoff e publicação privada Sites se infraestrutura permitir.

## Aceitação
Conteúdo acessível sem animação; vídeo com pause/fallback; seis imagens efetivamente usadas; seleção de ângulo altera mídia; zoom altera visualização; hotspots mostram descrições observáveis; scroll reversível e sem duplicação; todas as rotas e links válidos; mídia conceitual identificada; filtros operam sobre dados sem fabricar estoque; mensagens não alegam envio inexistente; sem overflow a 320/390/768/1440px; movimento reduzido; documentos atualizados.

## Riscos
Sem GLB: 3D geométrico depende de asset compatível. Sem contato/estoque: integração comercial aguarda dados. Vídeo curto pode exigir loop com corte suave. Pin e mobile: desativar pin em telas pequenas/reduced motion. WebGL indisponível: crossfade. Publicação depende de Git/infraestrutura Sites.
