import './style.scss'

export const IntroductionSection = () => {
  return (
    <div className="introductionSection">
      <h2>Introdução</h2>
      <ul>
        <p>
          O objetivo deste projeto de estudo é explorar a integração da API do Google Maps com o framework <code>React</code>, utilizando a biblioteca <a href="https://www.npmjs.com/package/@react-google-maps/api">@react-google-maps/api</a>.
          A criação de mapas interativos é uma parte essencial de muitas aplicações modernas, desde aplicativos de navegação até plataformas de entrega de alimentos. Este projeto visa fornecer uma compreensão prática de como integrar mapas dinâmicos em aplicativos web utilizando as tecnologias mais recentes.
        </p>
        <p>
          Utilizaremos o <code>Vite</code>, um construtor de projetos rápido, para configurar o ambiente de desenvolvimento. O <code>React</code> será nosso framework de escolha para a construção da interface do usuário, aproveitando os componentes reutilizáveis e a estrutura declarativa que o React oferece. O <code>TypeScript</code> será empregado para adicionar tipagem estática ao nosso código, garantindo maior robustez e facilidade de manutenção. Além disso, faremos uso do <code>Sass</code> como pré-processador <code>CSS</code> para facilitar a estilização e organização do nosso código.
        </p>
        <p>
          Por meio deste projeto, exploraremos não apenas como integrar o Google Maps em um aplicativo React, mas também como utilizar uma funcionalidade específica da API do Google Maps, o mapa de calor, para visualizar dados geográficos de forma intuitiva e eficaz. Este estudo nos proporcionará uma base sólida para a criação de aplicações web com recursos de mapeamento avançados, permitindo-nos expandir nossas habilidades e explorar novas possibilidades criativas no desenvolvimento de software.
        </p>
      </ul>
    </div>
  )
}