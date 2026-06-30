# Como publicar e manter o site (passo a passo simples)

## 1. Publicar no GitHub Pages (gratuito)

1. Crie uma conta em github.com (se ainda não tiver).
2. Crie um repositório novo, público, com o nome que quiser (ex: `bonecas-ateliê`).
3. Faça upload de 3 coisas para dentro dele:
   - o arquivo `index.html`
   - o arquivo `produtos.json`
   - a pasta `fotos` com as imagens das bonecas
4. Vá em **Settings → Pages** do repositório, em "Branch" escolha `main` e pasta `/ (root)`, salve.
5. Em alguns minutos o site estará no ar em um endereço tipo:
   `https://seu-usuario.github.io/nome-do-repositorio/`

## 2. Antes de publicar, troque 2 coisas no `index.html`

Procure por (use Ctrl+F):
- `55SEUNUMEROAQUI` → troque pelo número de WhatsApp com DDI+DDD, só números.
  Exemplo: `5511999998888` (esse texto aparece **duas vezes** no arquivo)
- `SEUUSUARIOAQUI` → troque pelo usuário do Instagram.

## 3. Como adicionar uma boneca nova

1. Coloque as fotos dela dentro da pasta `fotos/` (jpg ou png, nomes sem espaço ou acento,
   ex: `003-a.jpg`, `003-b.jpg`).
2. Abra o arquivo `produtos.json` e copie um bloco como este, colando antes do `]` final,
   separando com vírgula do bloco anterior:

```json
{
  "id": "003",
  "nome": "Nome da boneca",
  "descricao": "Descrição curta: roupa, cabelo, detalhes",
  "preco": "180,00",
  "status": "disponivel",
  "fotos": ["fotos/003-a.jpg", "fotos/003-b.jpg"]
}
```

3. Quando vender, basta trocar `"status": "disponivel"` para `"status": "vendida"`.
   Ela passa automaticamente para a aba "Já adotadas" e some o preço/botão de compra.

Tudo isso pode ser editado **direto no site do GitHub**, sem instalar nada:
abra o arquivo no repositório, clique no ícone de lápis (editar), faça a alteração,
e clique em "Commit changes" no fim da página. O site atualiza sozinho em ~1 minuto.

## 4. Cuidados com as fotos

- Tire fotos com boa luz natural, fundo neutro (parede lisa ou tecido).
- Redimensione antes de subir (ex: 1200px no lado maior) para o site carregar rápido —
  pode usar o site squoosh.app (gratuito, sem instalar nada) para comprimir.
- Evite fotos maiores que ~500KB cada.

## O que mudou em relação ao rascunho original

- **Saiu o Google Drive/planilha**: era frágil (link "improvisado" de thumbnail do Drive,
  que pode parar de funcionar a qualquer momento) e mais lento. Agora as fotos
  ficam dentro do próprio site no GitHub — mais rápido, mais estável, e gratuito do
  mesmo jeito.
- **Antes**: uma lista única de produtos com filtro de categoria.
  **Agora**: duas abas claras — *Disponíveis* (com preço e botão de WhatsApp já com
  mensagem pronta) e *Já adotadas* (portfólio do que já foi vendido, sem preço/botão).
- Adicionei botões de WhatsApp e Instagram no topo.
- Cada boneca pode ter mais de uma foto (miniaturas clicáveis).
- Visual próprio (tipografia e cores de ateliê artesanal) em vez de um catálogo genérico.
