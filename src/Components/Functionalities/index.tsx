import './style.scss'

export const Functionalities = () => {
  return (
    <div className="functionalitiesSection" id="functionalities">
      <h2>Funcionalidades Implementadas</h2>

      <ol>
        <li><strong>Integração com a API do Google Maps</strong>
          <ul>
            <li>Configuração da chave da API do Google Maps.</li>
            <li>Renderização do mapa em um componente React.</li>
          </ul>
        </li>
        <li><strong>Mapa de Calor</strong>
          <ul>
            <li>Utilização da funcionalidade de mapa de calor da API do Google Maps.</li>
            <li>Visualização de dados geográficos em um mapa com representação de intensidade por cores.</li>
          </ul>
        </li>
      </ol>
    </div>
  )
}