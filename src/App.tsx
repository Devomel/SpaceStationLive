import 'leaflet/dist/leaflet.css';
import { Map } from './components/Map';
import "./styles/container.css"
import "./styles/map.css"
import { CrewList } from './components/CrewList';



function App() {
  return (
    <>
      <div className='container'>
        <Map>
          <CrewList />
        </Map>
      </div>
    </>
  )
}


export default App
