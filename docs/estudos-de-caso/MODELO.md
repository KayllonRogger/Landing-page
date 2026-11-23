# Modelo de estudo de caso (uso interno)

Este modelo organiza as informações de um caso **antes** de qualquer publicação no site.
Os casos aparecem em `/projetos` e `/en/projects` a partir de `lib/projects.ts`.

> Regra: só publicar o que estiver confirmado e autorizado. Campo sem dado verificável fica vazio.
> Nunca inventar números, percentuais, economia, prazos ou depoimentos.

## 1. Checagem antes de escrever

- [ ] A experiência é da **KR (contrato da empresa)** ou da **trajetória profissional do engenheiro**? Escrever isso de forma explícita.
- [ ] Há acordo de confidencialidade (NDA) ou regra do cliente/contratante sobre divulgação?
- [ ] Nome do cliente, da contratada, do local e quantidades podem aparecer? (padrão: **não**)
- [ ] As fotos foram autorizadas e não mostram dados sensíveis (telas com IPs, nomes de equipamentos do cliente, pessoas)?
- [ ] Os resultados citados têm evidência (relatório, ata, registro de teste)?
- [ ] Texto revisado pelo engenheiro responsável.

## 2. Campos (correspondem a `lib/projects.ts`)

| Campo no código | O que escrever | Obrigatório |
|---|---|---|
| `title` | Tipo de instalação e tensão. Ex.: "Subestação de 230/138/13,8 kV" | sim |
| `location` | Estado ou país, sem cidade/planta se houver restrição | sim |
| `category` | `substations`, `offshore`, `mining`, `fat`, `datacenter` | sim |
| `headline` | Uma frase: o que foi feito, com fabricante/tecnologia | sim |
| `context` | Contexto técnico da instalação | sim |
| `challenge` | Desafio técnico enfrentado (ex.: janela de parada, integração multimarcas) | só se verificado |
| `technologies` | IEDs, softwares e protocolos usados | sim |
| `participation` | **Participação específica do engenheiro** e o que foi feito por outros | sim |
| `activities` | Atividades confirmadas | sim |
| `procedures` | Procedimentos executados (métodos de ensaio, sequência) | só se verificado |
| `results` | Resultados comprovados (ex.: "TAF concluído com N pendências registradas") | só se houver evidência |
| `relatedService` | `testes-comissionamento`, `diagnostico-falhas`, `retrofit-spcs`, `estudos-eletricos` | recomendado |
| `photos` / `coverImage` | Fotos autorizadas com legenda PT/EN | opcional |

Todos os textos têm versão `pt` e `en` equivalentes.

## 3. Casos atuais que precisam de complemento

| Caso | Falta | Quem confirma |
|---|---|---|
| Comissionamento e TAF — Canadá | tipo de instalação, equipamentos, participação específica, fotos | Kayllon |
| Data center — Chile | sistemas envolvidos, participação específica, fotos (experiência como profissional, não contrato da KR) | Kayllon |
| Todos | `challenge`, `procedures` e `results` vazios por falta de dados verificáveis | Kayllon |
