import { Map } from './components/Map';
import "./styles/container.css"
import { CrewList } from './components/CrewList';
import "./styles/media.css"


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
