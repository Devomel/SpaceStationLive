import { issSlice } from "../services/StationService"
import { CrewItem } from "./CrewItem";


export const CrewList = () => {
  const { isLoading, data: crew, error } = issSlice.useFetchCrewInISSQuery("", {
    pollingInterval: 50000
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  console.log(crew)
  if (crew) return (
    <div style={{ height: "100%" }} className="crewList">
      {
        crew.map(item => <CrewItem astronaut={item} key={item.name} />)
      }
      <p>Number of crew ISS {crew.length}</p>
    </div>
  )
}
