import { ApiResponse } from "@Types/apiResponse.d";

const baseUrl = "https://api.nasa.gov/";
const key = "FZyOQapRAcU3R3VyJsjp3St79DfvE4aSRiFoZnA7";

export const getNEOsInfo = async (date:string): Promise<ApiResponse[] | Error> => {
  return await fetch(`${baseUrl}neo/rest/v1/feed?start_date=${date}&end_date=${date}&api_key=${key}`)
    .then((data) => data.json())
    .then((resp: ApiResponse[]) => resp)
    .catch((error: Error) => error);
};
