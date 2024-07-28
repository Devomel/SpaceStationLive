import { issSlice } from "../services/StationService"
import { CrewItem } from "./CrewItem";


export const CrewList = () => {
  const { isLoading, data: crew, error } = issSlice.useFetchCrewInISSQuery("", {
    selectFromResult: ({ data, error, isLoading }) => ({
      data,
      error,
      isLoading,
    }),
    pollingInterval: 50000
  })
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error occurred</div>;
  if (crew) return (
    <div className="crewList">
      <p>Number of crew ISS: {crew.length}</p>
      {
        crew.map(item => <CrewItem astronaut={item} key={item.name} />)
      }
    </div>
  )
}
