# Modelo de artigo técnico

> Nenhum artigo é publicado no site sem revisão de engenharia por Kayllon Rogger Nunes.
> Texto produzido ou rascunhado com IA é tratado como rascunho até essa revisão.
> Não usar dados, fotos ou oscilografias de clientes sem autorização.

---

**Status:** RASCUNHO | EM REVISÃO TÉCNICA | APROVADO PARA PUBLICAÇÃO
**Autor / revisor técnico:**
**Data da revisão:**
**Serviço relacionado:** (testes-comissionamento | diagnostico-falhas | retrofit-spcs | estudos-eletricos)

# Título (até ~70 caracteres, com o termo técnico principal)

## Subtítulo (uma frase com o problema que o artigo ajuda a resolver)

### Resumo
3 a 5 linhas: problema, abordagem, principal conclusão e limitação.

### 1. Contextualização
Onde o problema aparece (tipo de instalação, nível de tensão, tipo de equipamento) e por que importa.

### 2. Fundamentação técnica
Conceitos necessários, com referência às normas e manuais citados na seção 7.

### 3. Problema analisado
Descrição genérica do cenário. Se vier de experiência real, retirar cliente, local, quantidades e qualquer dado identificável.

### 4. Procedimentos e critérios de avaliação
Passo a passo de análise ou ensaio e os critérios usados para aceitar/rejeitar cada hipótese.

### 5. Conclusões
O que se pode concluir com segurança.

### 6. Limitações
O que o método não cobre, premissas e quando é necessário outro tipo de análise ou ensaio.

### 7. Referências técnicas verificáveis
Somente documentos que existem e foram consultados, com edição/ano. Ex.: norma, manual do fabricante, artigo técnico.

### 8. Chamada para ação (contextualizada)
Uma frase ligando o tema ao serviço correspondente, com link para a página do serviço
(ex.: `/diagnostico-de-falhas-eletricas/`). Sem promessas de resultado.

---

## Como publicar (quando aprovado)
1. Hoje o blog (`app/blog/page.tsx` e `app/en/blog/page.tsx`) mostra só os cartões "em preparação".
2. Para publicar, criar uma rota estática por artigo (ex.: `app/blog/<slug>/page.tsx` e a versão EN),
   com `metadata` (title, description, canonical e `languages` PT/EN) e incluir as duas URLs no `public/sitemap.xml`.
3. Atualizar o cartão do artigo no blog para apontar para a nova rota.
