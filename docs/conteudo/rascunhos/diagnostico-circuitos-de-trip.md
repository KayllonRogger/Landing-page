**Status:** RASCUNHO — NÃO PUBLICAR
**Origem:** rascunho preparado com apoio de IA a partir de conhecimento técnico geral. Não usa dados de projetos ou clientes.
**Revisão de engenharia:** pendente (Kayllon Rogger Nunes)
**Serviço relacionado:** Diagnóstico e Investigação de Falhas (`/diagnostico-de-falhas-eletricas/`)

> Antes de publicar: conferir cada afirmação técnica, ajustar à prática real, confirmar as edições das normas
> citadas e remover qualquer trecho que não corresponda à experiência do engenheiro.

# Diagnóstico de falhas em circuitos de trip: um roteiro baseado em evidências

## Quando a proteção manda abrir e o disjuntor não abre, por onde começar a investigação

### Resumo
Uma falha de trip pode estar na proteção (o relé não decidiu abrir), na lógica (a decisão não chegou à saída)
ou no caminho físico até o disjuntor (fiação, alimentação auxiliar, bobina, mecanismo). Este roteiro mostra
como usar oscilografias e registros de eventos para separar essas hipóteses antes de intervir em campo.
A conclusão depende da qualidade dos registros: sem eles, várias hipóteses podem continuar em aberto.

### 1. Contextualização
O circuito de trip liga a decisão do IED à abertura do disjuntor. Ele inclui, em geral, o contato de saída do
relé, a fiação e as réguas de borne, relés auxiliares ou de bloqueio (função 86), a alimentação em corrente
contínua com sua proteção, a bobina de abertura e os contatos auxiliares do disjuntor. Em arquiteturas IEC 61850,
parte da lógica pode trafegar por mensagens GOOSE entre IEDs.

Uma falha nesse caminho tem consequência direta: a falta é eliminada por uma proteção de retaguarda, com
tempo maior e área desligada maior.

### 2. Fundamentação técnica
- A sequência esperada é: partida do elemento de proteção → operação (trip) → contato de saída fechado →
  corrente na bobina de abertura → abertura dos contatos principais → mudança de estado dos contatos auxiliares
  (52a/52b) → extinção da corrente de falta.
- Os IEDs registram canais analógicos (correntes e tensões) e digitais (partidas, trips, entradas binárias) nas
  oscilografias, geralmente exportáveis no formato COMTRADE, e registram eventos com etiqueta de tempo (SER).
- Muitos IEDs oferecem supervisão do circuito de trip (TCS), que monitora a continuidade do circuito e alarma
  quando ela é perdida.

### 3. Problema analisado (cenário genérico)
Durante uma falta, a proteção de um alimentador emite trip, mas o disjuntor não abre. A falta é eliminada por
uma proteção a montante. A pergunta é: onde a sequência foi interrompida?

### 4. Procedimentos e critérios de avaliação

**Passo 1 — Reunir evidências antes de mexer no campo**
- Oscilografias e SER de todos os IEDs envolvidos (o que falhou e o que atuou como retaguarda).
- Arquivos de ajuste e de lógica aplicados no IED.
- Diagramas funcionais e de fiação do circuito de trip, de preferência as-built.
- Alarmes do período: TCS, falta de tensão auxiliar, mola descarregada, baixa pressão de gás (quando aplicável).
- Relato operacional e intervenções recentes (manutenção, troca de ajuste, troca de equipamento).

**Passo 2 — Montar a linha do tempo**
Alinhar os registros pela etiqueta de tempo. Conferir se os relógios estavam sincronizados; se não estavam,
registrar a incerteza e usar eventos comuns para alinhar.

**Passo 3 — Separar as hipóteses pelo ponto em que a sequência parou**

| O que o registro mostra | Hipótese principal | Como verificar |
|---|---|---|
| Elemento não partiu | Ajuste, polaridade, relação de TC/TP, grandeza abaixo do pickup | Conferir ajustes e grandezas registradas; ensaio por injeção secundária |
| Elemento partiu, trip não foi emitido | Temporização, bloqueio, condição de lógica não satisfeita | Revisar a lógica e as condições de bloqueio no instante da falta |
| Trip emitido, saída não registrada como acionada | Mapeamento da lógica para a saída, saída com defeito | Revisar a matriz de saídas; testar a saída em bancada ou com o IED em teste |
| Saída acionada, disjuntor não mudou de estado | Fiação, borne, relé auxiliar, alimentação CC, bobina, mecanismo | Verificar continuidade e tensão no circuito em condição segura; medir a bobina; ensaio do disjuntor |
| Disjuntor abriu com atraso | Mecanismo, bobina, tensão CC baixa | Ensaio de tempo de operação do disjuntor; registro da tensão CC |
| Trip via GOOSE não recebido | Assinatura, qualidade ou tempo de vida da mensagem, rede | Verificar a configuração (SCD/CID) e os registros de recepção dos IEDs |

**Passo 4 — Classificar cada hipótese**
- **Confirmada:** sustentada por registro ou por ensaio reproduzível.
- **Provável:** compatível com as evidências, sem confirmação direta.
- **Descartada:** contradita por registro ou ensaio.
- **Não conclusiva:** faltam dados para avaliar.

**Passo 5 — Testes complementares (quando contratados e liberados)**
Executar somente com autorização, procedimento de trabalho aprovado, equipamento em condição segura e equipe
habilitada conforme as normas de segurança aplicáveis (no Brasil, NR-10).

### 5. Conclusões
O roteiro reduz o risco de trocar componentes sem necessidade e deixa registrado por que cada hipótese foi
aceita ou descartada. Ele também mostra o que falta registrar para que a próxima ocorrência seja mais fácil de
analisar (por exemplo, canais digitais da posição do disjuntor e da tensão CC na oscilografia).

### 6. Limitações
- Registros sobrescritos, canais digitais não configurados e relógios sem sincronismo podem impedir a conclusão.
- Falhas intermitentes (mau contato, por exemplo) podem não se repetir nos ensaios.
- O roteiro não substitui a manutenção do disjuntor nem a análise do fabricante quando há defeito interno.

### 7. Referências técnicas (conferir edição vigente antes de publicar)
- IEEE Std C37.111 / IEC 60255-24 — formato COMTRADE para dados transitórios de sistemas de potência.
- IEEE Std C37.2 — números de funções de dispositivos de sistemas elétricos (ex.: 52, 86).
- IEEE Std C37.233 — guia para ensaios de sistemas de proteção.
- IEC 61850-8-1 — mapeamento de serviços de comunicação para MMS e GOOSE.
- Manual de instrução do IED utilizado (seções de supervisão do circuito de trip e de oscilografia).
- NR-10 — Segurança em instalações e serviços em eletricidade (Brasil).

### 8. Chamada para ação
Teve uma atuação que não ficou explicada? A KR analisa oscilografias, registros de eventos e circuitos de
proteção e indica o que as evidências permitem concluir.
[Diagnóstico e Investigação de Falhas](/diagnostico-de-falhas-eletricas/)
