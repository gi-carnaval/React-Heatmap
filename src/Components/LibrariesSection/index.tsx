import './style.scss'

export const LibrariesSection = () => {
  return (
    <div className="librariesSection" id="libs">
      <h2>Bibliotecas Utilizadas</h2>

      <ul>
        <li>
          <a target='_blank' href="https://vitejs.dev/">Vite:</a> Ferramenta de construção rápida para projetos baseados em JavaScript e TypeScript.
        </li>
        <li>
          <a target='_blank' href="https://react.dev/">React:</a> Biblioteca JavaScript para construção de interfaces de usuário.
        </li>
        <li>
          <a target='_blank' href="https://www.typescriptlang.org/">TypeScript:</a> Linguagem de programação de código aberto que se destina a ser um superset para JavaScript.
        </li>
        <li>
          <a target='_blank' href="https://www.npmjs.com/package/@react-google-maps/api">@react-google-maps/api:</a> Biblioteca que permite integrar o Google Maps com o React de forma fácil e eficiente.
        </li>
        <li>
          <a target='_blank' href="https://sass-lang.com/">Sass:</a> Pré-processador CSS que oferece uma sintaxe mais poderosa e organizada para estilização.
        </li>
      </ul>
    </div>
  )
}