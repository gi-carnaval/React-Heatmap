import './style.scss'

export const ProjectSection = () => {
  return (
    <div className="projectSection" id="project">
      <h2>Projeto</h2>
      <p>
        Você pode encontrar o projeto completo no repositório do github: <a href="https://github.com/gi-carnaval/React-Heatmap">Heatmap Study</a>
      </p>
      <div>
        <h3>Como Executar o Projeto</h3>
        <ol>
          <li>
            <h4>Clone o repositório:</h4>
            <code>
              git clone https://github.com/seu-usuario/seu-projeto.git
            </code>
          </li>
          <li>
            <h4>Instale as dependências:</h4>
            <code>
              <span>cd seu-projeto</span><br />
              <span>npm install</span>
            </code>
          </li>
          <li>
            <h4>Configure a chave da API do Google Maps:</h4>
            <p>Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:</p>
            <code>
              REACT_APP_GOOGLE_MAPS_API_KEY=SuaChaveAqui
            </code>
          </li>
          <li>
            <h4>Execute o projeto:</h4>
            <p>Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:</p>
            <code>
            npm run dev
            </code>
          </li>
          <li>
            <h4>Acesse o aplicativo:</h4>
            <p>Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API do Google Maps:</p>
            <code>
            Abra seu navegador e acesse `http://localhost:3000`.
            </code>
          </li>
        </ol>
      </div>
      <div className="author" id="author">
        <div className="content">
          <h3>Giovani Carnaval</h3>
          <h4>Desenvolvedor Web</h4>
          <p>
            Desenvolvedor front-end e instrutor apaixonado por tecnologia.
            Em constante busca de conhecimento para mudar vidas por meio da tecnologia.
          </p>
          <li>Linkedin: <a href="https://linkedin.com/in/giovani-carnaval">Giovani Carnaval</a></li>
          <li>Github: <a href="https://github.com/gi-carnaval/">gi-carnaval</a></li>
        </div>
        <aside>
          <img src="https://github.com/gi-carnaval.png" alt="" />
        </aside>
      </div>
    </div>
  )
}