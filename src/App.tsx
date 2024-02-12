import "./Assets/Styles/global.scss"
import { CenteredContainer } from "./Components/CenteredContainer.tsx";
import { NavMenu } from "./Components/NavMenu/index.tsx";
import { IntroductionSection } from "./Components/Introduction/index.tsx";
import { LibrariesSection } from "./Components/LibrariesSection/index.tsx";
import { Functionalities } from "./Components/Functionalities/index.tsx";
import { Heatmap } from "./Components/Heatmap/index.tsx";
import { ProjectSection } from "./Components/ProjectSection/index.tsx";

export default function App() {
  return (
    <>
      <header>
        <NavMenu />
      </header>
      <main>
        <h1>Projeto de Estudo: Criando Mapas com Google Maps API e React</h1>
        <CenteredContainer>
          <IntroductionSection />
        </CenteredContainer>
        <CenteredContainer>
          <LibrariesSection />
        </CenteredContainer>
        <CenteredContainer>
          <Functionalities />
        </CenteredContainer>
        <CenteredContainer>
          <Heatmap />
        </CenteredContainer>
        <CenteredContainer>
          <ProjectSection />
        </CenteredContainer>
      </main>
    </>
  )
}