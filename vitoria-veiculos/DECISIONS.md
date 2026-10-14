# Registro de decisões

- 2026-10-14: reutilizar scaffold em Documents/Codex/2026-10-14/vitoria-veiculos, que tinha dependências e mídia, mas nenhum componente. Preservado project_id existente. Pasta inicialmente proposta sem data não recebeu implementação.
- As referências originais foram comparadas por SHA-256 e preservadas em docs/references.
- Next 16.4, React 19.3, GSAP 3.15 e demais versões são as instaladas no scaffold. Sem instalação redundante.
- Export estático mantém possibilidade de publicação simples. Inventário em arquivo tipado; backend/CRM depende de dados reais futuros.
- Fotografias são assets conceituais, não estoque. Não inferir marca, modelo, preço, potência ou quilometragem.
- Sem GLB: explorer fotográfico completo; arquitetura de adapter 3D preparada, sem alegar configurador 3D concluído.
- Se contato não for fornecido, formulário gera resumo local copiável/baixável e informa que nada foi enviado.
- WebGL somente transição breve entre fotos em dispositivos capazes; sem loop contínuo ou dependência Three desnecessária.
- Exec shell principal apresentou falha interna; Node REPL e child_process disponíveis para arquivos e comandos. Não houve contorno de rejeição de segurança.
- Fonte Sites: tentativa de abrir via helper falhou em iniciar Git. Continuar implementação local; investigar caminho do Git ao publicar.
- Consultas técnicas: https://gsap.com/docs/v3/GSAP/gsap.matchMedia/ e https://nextjs.org/docs/app/guides/static-exports .
