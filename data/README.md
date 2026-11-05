# Mapa de conteúdo: onde cada informação aparece

Regra: cada informação aparece **uma única vez** no site. Antes de adicionar um texto, confira aqui onde ele já está.

| Informação | Onde aparece | Fonte |
| --- | --- | --- |
| Slogan "Pessoas Seguras, Resultados Sustentáveis" | Seção Empresa + footer | `components/site/about.tsx`, `components/site/footer.tsx` |
| Pilares (prevenção, atendimento personalizado, linguagem simples, documentação adaptada) | Seção Empresa | `data/content.ts` |
| Escopo detalhado de cada serviço | Cards de Serviços (painel) | `data/services.ts` |
| Lista completa de treinamentos | Seção Treinamentos (o card de Serviços só leva até ela) | `data/content.ts` (`trainings`) |
| Bombeiro Civil, Resgate, APH, Brigada (detalhes) | Somente cards de Serviços | `data/services.ts` |
| Prontidão 24/7 | Faixa de Emergência (chamada curta + botão) | `components/site/emergency.tsx` |
| Atendimento em eventos de alto padrão | Seção Eventos (só o diferencial + CTA) | `data/content.ts` |
| Ambientes de atuação (portos, grãos, silos, correias, shiploader, indústria, construção, eventos) | Experiência Operacional | `data/content.ts` |
| Atividades de risco (altura, espaço confinado, LOTO, elétrica) | Normas | `data/content.ts` |
| Clientes | "Quem confia na T&G" | `data/clients.ts` |
| Telefone / WhatsApp | Bloco de Contato, footer e botão flutuante | `config/site.ts` |
| E-mail | Bloco de Contato, footer e menu mobile | `config/site.ts` |
| CNPJ | Não exibido até a emissão | `config/site.ts` |

## Imagens

Nenhuma imagem se repete. A `hero-porto.png` aparece só no hero; o uso em `app/layout.tsx` é a imagem de compartilhamento (Open Graph), que não é exibida na página.

Logos de clientes ficam em `/public/clients/` (`arena-do-galego.png`, `sitio-chuin.png`, `secultba.png`). Até os arquivos oficiais chegarem, o site mostra o nome do cliente em texto.
