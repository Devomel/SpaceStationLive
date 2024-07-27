import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LatLngTuple } from "leaflet";
import { IAstronaut } from "../models/IAstronaut";

interface ILocationResponse {
  message: string;
  timestamp: number;
  iss_position: {
    latitude: number;
    longitude: number
  }
}

interface ICrewResponse {
  people: IAstronaut[]
}
export const issSlice = createApi({
  reducerPath: "issAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://api.open-notify.org" }),
  endpoints: (builder) => ({
    fetchLocationISS: builder.query<LatLngTuple, string>({
      query: () => ({
        url: "/iss-now.json"
      }),
      transformResponse: (response: ILocationResponse) => {
        const { latitude, longitude } = response.iss_position;
        return [latitude, longitude, response.timestamp];
      }
    }),
    fetchCrewInISS: builder.query({
      query: () => ({
        url: "/astros.json"
      }),
      transformResponse: (response: ICrewResponse) => {
        const filteredCrew = response.people.filter(item => item.craft === "ISS")
        return filteredCrew;
      }
    })

  })
})
