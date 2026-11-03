# Solução do formulário de cadastro Gamer

## Descrição

O objetivo é criar um formulário responsivo de cadastro para uma rede de jogos competitivos, seguindo os layouts do Frontend Mentor. O projeto usa Angular, TypeScript e SCSS.

---

<span style="font-size: 18px">☰ LEGENDA:</span>

- <span style="color: lightgreen">[✔]</span> Tarefa concluída;
- <span style="color: red">[∎]</span> Interrompida temporariamente;
- <span style="color: green">[◔]</span> Em andamento;
- <span style="color: yellow">[⚠]</span> Ainda não iniciada (Not started yet).

---

## Checklist dos principais objetivos do projeto

- <span style="color: yellow">[⚠]</span> Estrutura inicial do projeto
  - <span style="color: yellow">[⚠]</span> Configurar o Angular, o TypeScript e a compilação de estilos SCSS.
  - <span style="color: yellow">[⚠]</span> Organizar a aplicação e seus componentes em `src/app/` e gerar os arquivos de build em `dist/`.
  - <span style="color: yellow">[⚠]</span> Configurar as fontes locais Orbitron e JetBrains Mono.

- <span style="color: yellow">[⚠]</span> Página principal e base visual
  - <span style="color: yellow">[⚠]</span> Exibir o logotipo Neoncore, o título `// Join the nexus` e o subtítulo de identidade.
  - <span style="color: yellow">[⚠]</span> Aplicar as cores, a tipografia, a escala de espaçamento, os cantos retos e o tema escuro do guia de estilos.
  - <span style="color: yellow">[⚠]</span> Criar o layout de duas colunas para desktop e o layout responsivo de uma coluna para dispositivos móveis.
  - <span style="color: yellow">[⚠]</span> Adicionar estilos visíveis ao passar o cursor e ao navegar por teclado, além de suporte à preferência por movimento reduzido.
  - <span style="color: yellow">[⚠]</span> Comparar a página renderizada com todos os layouts fornecidos e ajustar as diferenças visuais em desktop (1440px), dispositivos móveis (375px) e larguras intermediárias.

- <span style="color: yellow">[⚠]</span> Dividir a página em componentes reutilizáveis
  - <span style="color: yellow">[⚠]</span> Definir os limites dos componentes e as responsabilidades de dados e eventos antes de dividir a estrutura atual da página.
  - <span style="color: yellow">[⚠]</span> Criar os componentes do painel de marca e introdução e do resumo de status do operador.
  - <span style="color: yellow">[⚠]</span> Criar componentes reutilizáveis para campos do formulário e campos de senha.
  - <span style="color: yellow">[⚠]</span> Criar componentes para o indicador de força da senha e a caixa de seleção dos termos.
  - <span style="color: yellow">[⚠]</span> Criar componentes para o formulário de conta e a tela de sucesso.
  - <span style="color: yellow">[⚠]</span> Organizar o HTML, os estilos e o comportamento dos componentes em `src/app/` e compor a página com eles, em vez de manter toda a estrutura no componente raiz.

- <span style="color: yellow">[⚠]</span> Comportamento do formulário de cadastro
  - <span style="color: yellow">[⚠]</span> Adicionar os campos de identificador (Callsign), e-mail (Email), senha (Password), confirmação de senha (Confirm password) e termos de uso (Terms), com rótulos e validações nativas básicas.
  - <span style="color: yellow">[⚠]</span> Adicionar uma dica sobre o formato do identificador (Callsign) e outra sobre o tamanho mínimo da senha.
  - <span style="color: yellow">[⚠]</span> Validar o tamanho do identificador (Callsign), de 3 a 20 caracteres, e permitir apenas letras, números, `_` e `-`.
  - <span style="color: yellow">[⚠]</span> Validar o formato do e-mail e exibir um erro para endereços inválidos.
  - <span style="color: yellow">[⚠]</span> Validar o tamanho da senha (Password), de pelo menos 8 caracteres, e exibir a mensagem de erro apropriada.
  - <span style="color: yellow">[⚠]</span> Validar se a confirmação de senha (Confirm password) corresponde à senha.
  - <span style="color: yellow">[⚠]</span> Exigir a aceitação dos termos de uso (Terms) e da política de privacidade (Privacy Policy) antes de iniciar a criação da conta.
  - <span style="color: yellow">[⚠]</span> Permitir mostrar e ocultar cada senha por meio de botões de olho acessíveis e operáveis pelo teclado, usando os ícones de olho/olho riscado fornecidos.
  - <span style="color: yellow">[⚠]</span> Calcular a força da senha e exibir os estados Fraca (Weak), Razoável (Fair), Boa (Good) e Forte (Strong) mostrados nos layouts.
  - <span style="color: yellow">[⚠]</span> Atualizar as validações e o feedback de status enquanto a pessoa edita os campos e altera o foco.

- <span style="color: yellow">[⚠]</span> ID do operador e resumo de status dos campos
  - <span style="color: yellow">[⚠]</span> Exibir o ID do operador (Operator ID), o nome inicial `Não atribuído (Unassigned)`, a contagem `0/5 prontos (0/5 ready)` e as cinco linhas de status iniciais.
  - <span style="color: yellow">[⚠]</span> Exibir um identificador válido (Callsign) como nome do operador; caso contrário, manter o nome `Não atribuído (Unassigned)`.
  - <span style="color: yellow">[⚠]</span> Atualizar a contagem de requisitos prontos conforme cada um dos cinco requisitos se torne válido.
  - <span style="color: yellow">[⚠]</span> Manter o status de cada linha sincronizado com seu campo: `PENDING`, `OK`, `TOO SHORT`, `TOO LONG`, `BAD CHARACTER`, `MALFORMED`, `MISMATCH` ou `REQUIRED`.
  - <span style="color: yellow">[⚠]</span> Após o cadastro, exibir `PROVISIONED` e bloquear as cinco linhas de status.

- <span style="color: yellow">[⚠]</span> Estados de erro e acessibilidade
  - <span style="color: yellow">[⚠]</span> Adicionar espaços inicialmente ocultos para mensagens de erro e os estilos visuais iniciais de erro.
  - <span style="color: yellow">[⚠]</span> Exibir a mensagem de erro e o estado visual de inválido apropriados para cada campo inválido, incluindo o estado de erro de Terms.
  - <span style="color: yellow">[⚠]</span> Associar cada dica e mensagem de erro ao respectivo campo usando `aria-describedby` e comunicar as mudanças de validação às tecnologias assistivas.
  - <span style="color: yellow">[⚠]</span> Ao tentar enviar um formulário inválido, informar quantos campos precisam de atenção e mover o foco para o primeiro campo inválido.
  - <span style="color: yellow">[⚠]</span> Verificar todo o fluxo do formulário usando apenas o teclado e conferir os rótulos, a ordem de foco e os anúncios do leitor de tela.

- <span style="color: yellow">[⚠]</span> Envio e estados de sucesso
  - <span style="color: yellow">[⚠]</span> Criar a estrutura inicial da tela de sucesso e um espaço visual provisório para a ação da conta.
  - <span style="color: yellow">[⚠]</span> Enviar o formulário somente depois que os cinco requisitos forem válidos.
  - <span style="color: yellow">[⚠]</span> Exibir o estado de carregamento `Transmitting_` e impedir envios duplicados enquanto ele estiver ativo.
  - <span style="color: yellow">[⚠]</span> Exibir o estado de sucesso com o identificador do operador e uma ação funcional “Continuar para entrar” (“Continue to log in”).
  - <span style="color: yellow">[⚠]</span> Alterar o resumo do operador para `PROVISIONED` e bloquear as linhas de status após o sucesso.

- <span style="color: yellow">[⚠]</span> Estados visuais a verificar
  - <span style="color: yellow">[⚠]</span> Formulário inicial e preenchido:
    - <img src="design/desktop-design.jpg" alt="Layout inicial para desktop" width="360">
    - <img src="design/desktop-design-filled.jpg" alt="Layout preenchido para desktop" width="360">
    - <img src="design/mobile-design.jpg" alt="Layout inicial para dispositivos móveis" width="360">
    - <img src="design/mobile-design-filled.jpg" alt="Layout preenchido para dispositivos móveis" width="360">
  - <span style="color: yellow">[⚠]</span> Erros de validação e de termos:
    - <img src="design/desktop-design-error.jpg" alt="Erro de validação no layout desktop" width="360">
    - <img src="design/desktop-design-terms-error.jpg" alt="Erro nos termos no layout desktop" width="360">
    - <img src="design/mobile-design-error.jpg" alt="Erro de validação no layout para dispositivos móveis" width="360">
  - <span style="color: yellow">[⚠]</span> Visibilidade e força da senha:
    - <img src="design/desktop-design-password-visible.jpg" alt="Senha visível no layout desktop" width="360">
    - <img src="design/desktop-design-strength-weak.jpg" alt="Indicador de senha fraca" width="360">
    - <img src="design/desktop-design-strength-fair.jpg" alt="Indicador de senha razoável" width="360">
    - <img src="design/desktop-design-strength-good.jpg" alt="Indicador de senha boa" width="360">
  - <span style="color: yellow">[⚠]</span> Envio e sucesso:
    - <img src="design/desktop-design-submitting.jpg" alt="Estado de envio no layout desktop" width="360">
    - <img src="design/desktop-design-success.jpg" alt="Estado de sucesso no layout desktop" width="360">
    - <img src="design/mobile-design-success.jpg" alt="Estado de sucesso no layout para dispositivos móveis" width="360">
  - <span style="color: yellow">[⚠]</span> Estilos interativos:
    - <img src="design/active-states-focus.jpg" alt="Estados de foco" width="360">
    - <img src="design/active-states-hover.jpg" alt="Estados ao passar o cursor" width="360">
