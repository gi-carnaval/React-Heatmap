import { GoogleMap, HeatmapLayer, Libraries, useJsApiLoader } from "@react-google-maps/api"
import { useState } from "react"
import './style.scss'

export function Heatmap() {
  const API_KEY: string = import.meta.env.VITE_API_KEY
  const [libraries] = useState<Libraries>(['visualization']);
  const [center] = useState<google.maps.LatLngLiteral>({ lat: -22.97867042762809, lng: -49.86777833855092 })
  const [locations, setLocations] = useState<google.maps.LatLngLiteral[]>([])

  

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: API_KEY,
    libraries
  })

  if (!isLoaded) {
    return <div>Loading...</div>
  }


  function addHeatmapPoint(e: google.maps.MapMouseEvent) {
    if (!e.latLng) {
      return
    }

    const newPoint = new google.maps.LatLng(e.latLng.lat(), e.latLng.lng()).toJSON()

    setLocations([
      ...locations,
      newPoint
    ])
  }
  

  return (
    <>
      <div className="mapDemonstration" id="example">
        <h2>Demonstração do Projeto</h2>

        <ul>
          <li><strong>Apresentação da Interface:</strong> Visualização do mapa integrado com o React.</li>
          <li><strong>Mapa de Calor:</strong> Demonstração da funcionalidade de mapa de calor.</li>
          <li><strong>Modo de Uso:</strong> Clique no mapa e adicione os pontos de calor</li>
        </ul>
      </div>
      <div className="map">

        <GoogleMap
          mapContainerStyle={{ position: 'relative', width: '100%', height: '100%' }}
          center={center}
          zoom={15}
          onClick={(e) => { addHeatmapPoint(e) }}
        >
          {locations &&
            <HeatmapLayer
              data={locations.map((data) => (
                new google.maps.LatLng(data.lat, data.lng)
              ))}
              options={{
                data:  locations.map((data) => (
                  new google.maps.LatLng(data.lat, data.lng)
                )),
                radius: 40,
                opacity: 0.4
              }}
            />
          }
        </GoogleMap>
      </div>
    </>
  )
}