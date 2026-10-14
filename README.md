# Site do ISYCT-Mail

Site estático bilíngue (português e inglês) do protótipo ISYCT-Mail. Não há dependências externas nem etapa de compilação.

## Visualização local

Na pasta `html`, execute:

```bash
python3 -m http.server 8000
```

Depois acesse `http://localhost:8000`.

## Publicação no GitHub Pages

Publique o conteúdo desta pasta com `index.html` na raiz do site. O executável `isyct_mail` precisa permanecer ao lado de `index.html`, pois os botões de download usam esse caminho relativo.

O manual do usuário também deve permanecer ao lado de `index.html`. Seu arquivo-fonte é
`manual_usuario_isyct_mail.tex` e o download publicado é `manual_usuario_isyct_mail.pdf`.

Para recompilar o manual nesta pasta:

```bash
latexmk -pdf -interaction=nonstopmode -halt-on-error manual_usuario_isyct_mail.tex
```

## Verificação do executável

```text
SHA-256: 4479a4d922302adc7c28fc1694f37f321498bff41c158a502fd657267bf9416c
Tamanho: 46.302.704 bytes
Formato: ELF 64-bit, x86-64, GNU/Linux
```
