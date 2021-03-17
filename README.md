## Considerações
  Primeiramente, obrigado pela experiência de participar de um desafio como esse, foi muito enriquecedor. Devido a aulas e outro desafio da Bridge que participei, tive um tempo limitado para dedicar a esse desafio aqui (comecei ontem), por isso escolhi uma arquitetura com uma linguagem que tenho mais afinidade para o Banckend (Node js). Todos os arquivos necessários para rodar localmente estão nesse repositório, e o projeto pode ser acessado pelo seguinte link https://bridge-fullstack.herokuapp.com/ (pode demorar um pouco até carregar).
  
  ### Arquitetura e linguagens
  
  O frontend se encontra na pasta Client, enquanto o Backend está na pasta Server.
  
  #### Frontend
  Para o front decidi usar React. Usei styled components (https://styled-components.com/) para fazer a estilização por facilitar bastante na hora de escrever o código e fazer a manutenção depois. Dado que é um projeto pequeno e tecnicamente simples, não achei necessário aplicar alguma estrutura de arquivos mais complexa ou gerenciar o state globalmente, embora talvez fosse caso o projeto crescesse. A lógica toda se encontra no arquivo App.js.
    
  #### Backend
  O back foi feito em Node com express. Escolhi por ser mais rápido implementar nessa linguagem já que eu não tinha tido até então nenhum contato com Kotlin ou Java, embora ache que teria sido uma experiência interessante aprendê-las e aplicá-las nesse desafio.
    
    
## Rodar localmente

  - clone esse repositório na sua pasta de projeto
  - na pasta Client, rode o comando `npm install` e depois `npm build`
  - na pasta Server, rode o comando `npm install`
  - mova a pasta build que está em Client para dentro da pasta Server
  - rode o comando `npm start` dentro de Server
