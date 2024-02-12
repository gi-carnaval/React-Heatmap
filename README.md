# Projeto de Estudo: Criando Mapas com Google Maps API e React

Este projeto de estudo visa explorar a integração da API do Google Maps com o framework React, utilizando a biblioteca `@react-google-maps/api`. O objetivo é criar mapas interativos e implementar a funcionalidade de mapa de calor para visualização de dados geográficos.

## Introdução

O objetivo deste projeto é fornecer uma compreensão prática de como integrar mapas dinâmicos em aplicativos web usando as tecnologias mais recentes. Faremos uso do Vite, um construtor de projetos rápido, para configurar o ambiente de desenvolvimento. Utilizaremos o React como framework principal para a construção da interface do usuário, aproveitando seus componentes reutilizáveis e sua estrutura declarativa. O TypeScript será empregado para adicionar tipagem estática ao código, garantindo maior robustez e facilidade de manutenção. Além disso, utilizaremos o Sass como pré-processador CSS para facilitar a estilização e organização do código.

## Funcionalidades Implementadas

- Integração com a API do Google Maps.
- Renderização do mapa em um componente React.
- Implementação da funcionalidade de mapa de calor para visualização de dados geográficos.

## Como Executar o Projeto

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/seu-usuario/seu-projeto.git
    ```

2. **Instale as dependências:**

    ```bash
    cd seu-projeto
    npm install
    ```

3. **Configure a chave da API do Google Maps:**

    Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:

    ```
    REACT_APP_GOOGLE_MAPS_API_KEY=SuaChaveAqui
    ```

4. **Execute o projeto:**

    ```bash
    npm run dev
    ```

5. **Acesse o aplicativo:**

    Abra seu navegador e acesse `http://localhost:3000`.

## Estrutura do Projeto

- `src/`: Contém os arquivos do código-fonte.
    - `components/`: Componentes React, incluindo o componente do mapa.
    - `styles/`: Arquivos de estilos Sass.
    - `utils/`: Utilitários diversos para o projeto.
- Arquivos de configuração:
    - `vite.config.js`: Configuração do Vite.
    - `.env`: Arquivo de variáveis de ambiente para a chave da API do Google Maps.

## Próximos Passos

- Explorar outras funcionalidades da API do Google Maps.
- Implementar mais interatividade no mapa, como marcadores e informações adicionais.
- Aperfeiçoar a estilização e a experiência do usuário.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).
