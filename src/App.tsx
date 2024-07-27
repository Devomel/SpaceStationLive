import 'leaflet/dist/leaflet.css';
import { Map } from './components/Map';
import "./styles/container.css"
import "./styles/map.css"
import { issSlice } from './services/StationService';
import { CrewList } from './components/CrewList';
import { Time } from './components/Time';



function App() {
  const { data: location, error, isLoading } = issSlice.useFetchLocationISSQuery("", {
    pollingInterval: 5000
  })

  console.log(location)

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (location && location[2]) return (
    <>
      {isLoading && console.log("loading")}
      {error && console.log("error")}
      <div className='container'>
        <div className='mapContainer'>
          <div style={{ flex: "1 1 70%", minWidth: "min(500px,95vw )", width: "70%" }}>
            <div>ISS current location: <br />
              longitude: {location[0]} latitude: {location[1]}
            </div>
            <br />
            <Map location={location} />
          </div>
          <div style={{ flex: "1 1 30%", width: "100%", height: "80vh" }}>
            <Time timestamp={location[2]} />
            <br />
            <CrewList />
          </div>
        </div>

      </div>

    </>
  )
}


export default App
