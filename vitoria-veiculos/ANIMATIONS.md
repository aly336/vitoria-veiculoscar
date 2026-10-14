# Motion system

GSAP é o único dono das timelines de scroll. lib/motion.ts instala e reverte um contexto por página/preferência. Scroll nativo; nenhuma biblioteca de smooth scroll.

| Cena/efeito | Trigger/progresso | Movimento | Fallback |
|---|---|---|---|
| Prelude | entrada, até 2.4s; não bloqueia ponteiro | linha/reflexo, máscara e texto | omitido em reduced motion |
| Hero | top top; +65% viewport; scrub true | pin, escala 1→1.08, texto sobe e desaparece | estático no mobile |
| Reveal | top bottom→bottom top | parallax por camadas; escala 1→1.04 | imagem e títulos visíveis |
| Detalhes | pin desktop +90% viewport | panorama traseiro e frases coordenadas | hotspots com texto estático |
| Showroom | troca pelo usuário; 420ms | crossfade; transição WebGL curta | crossfade/instantâneo |
| Manifesto | top 75%→bottom 70% | palavras preenchidas e máscara da foto | texto totalmente legível |
| Galeria | pin + percurso calculado | eixo X reversível e índice | overflow-x nativo/snap e botões |
| Final | top 80% | três linhas em sequência; foto frontal | conteúdo visível |
| Entrada | 0.5–0.8s power3.out | up/down/left/right/scale/blur | sem transform |
| Cursor/magnético | ponteiro fino apenas | label contextual e magnetismo até 6px | cursor nativo sempre presente |

Scrub usa ease:none para vínculo exato. UI usa 160–240ms cubic-bezier(.23,1,.32,1). Nada anima scale(0). Máscaras nos wrappers; nenhuma distorção permanente da carroceria. Resize invalida percurso; cleanup remove observers/listeners/tweens. Vídeo pausa fora da viewport e quando documento oculto. Botão global reduz movimento e é persistido localmente.

## 3D futuro
Car3DViewer recebe contrato modelUrl, poses e hotspots. Quando GLB real for fornecido, instalar Three/R3F/Drei e substituir adapter. OrbitControls só no modo manual; scroll mode controla rig exclusivamente. Não implementado/validado sem modelo.
