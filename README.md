# Primeira API NODE 

    Neste Projeto foi Criado uma API REST utilizando node!


    -Techs utilizadas:
        -NODE
        -INSÔMINIA
        -JAVASCRIPT

_______________________________________________________________________________________________

# ANOTAÇÕES:

    Para iniciar o servidor basta rodar o seguinte comando no terminal:

`npm run dev`
# Para criar uma API é necessário rotas

    Exemplo:

    - Criar usuário
    - Listagem de usuário
    - Edição de usuário
    - Remoção de usuário

_______________________________________________________________________________________________

# HTTP

    - Método HTTP
    - URL 

_______________________________________________________________________________________________
# Metodos mais usados:
    
    - GET => Buscar uma informação do back-end
    - POST => Criar uma informação do back-end
    - PUT => Atualizar um recurso no back-end
    - Patch => Atualizar uma informação especifica de um recurso no back-end
    - DELETE => Deletar algo no meu back-end

    A junção do metodo e da url que gera a minha ação, exemplo: 

    GET /user => Buscando usuário no back-end
    POST /user = Criar um usuário no back-end

_______________________________________________________________________________________________

# Tipos de dados:

    - Stateful : armazega o informação em memoria e depois apaga
    - stateless : armazena informação no banco de dados

    - JSON : JavaScript Object Notation 

    - HTTP STATUS CODE : 100, 200, 300, 400, 500

_______________________________________________________________________________________________

# Formas de enviar informação

    -Query Parameters : URL Stateful => Filtros, paginação, não-obrigatórios
    -Route Parameters : Identificação de Recurso => Algo Especifico
    -Request Body : Envio de informação de formulário => utiliza metodo https

    Exemplo: 
    
    http://localhost:3333/users?userId=1  Query Parameters 
    http://localhost:3333/users/1  Route Parameters 
    http://localhost:3333/users  Request Body Parameters





