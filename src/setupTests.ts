import "@testing-library/jest-dom";
import "whatwg-fetch";
import { TextEncoder } from "util";
global.TextEncoder = TextEncoder;
import { setupServer } from "msw/node";
import { http, HttpResponse } from "msw";

const server = setupServer(
  http.get(
    "https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=FZyOQapRAcU3R3VyJsjp3St79DfvE4aSRiFoZnA7",
    () => {
      return HttpResponse.json({
        element_count: 11,
        near_earth_objects: {
          "2024-06-06": [
            {
              links: {
                self: "http://api.nasa.gov/neo/rest/v1/neo/2415949?api_key=FZyOQapRAcU3R3VyJsjp3St79DfvE4aSRiFoZnA7",
              },
              id: "2415949",
              neo_reference_id: "2415949",
              name: "415949 (2001 XY10)",
              nasa_jpl_url:
                "https://ssd.jpl.nasa.gov/tools/sbdb_lookup.html#/?sstr=2415949",
              absolute_magnitude_h: 19.37,
              estimated_diameter: {
                kilometers: {
                  estimated_diameter_min: 0.3552670883,
                  estimated_diameter_max: 0.7944013596,
                },
                meters: {
                  estimated_diameter_min: 355.267088298,
                  estimated_diameter_max: 794.4013596028,
                },
                miles: {
                  estimated_diameter_min: 0.2207526659,
                  estimated_diameter_max: 0.4936179672,
                },
                feet: {
                  estimated_diameter_min: 1165.5744739718,
                  estimated_diameter_max: 2606.3037566394,
                },
              },
              is_potentially_hazardous_asteroid: false,
              close_approach_data: [
                {
                  close_approach_date: "2024-06-06",
                  close_approach_date_full: "2024-Jun-06 22:41",
                  epoch_date_close_approach: 1717713660000,
                  relative_velocity: {
                    kilometers_per_second: "23.8848668191",
                    kilometers_per_hour: "85985.520548868",
                    miles_per_hour: "53428.0585877119",
                  },
                  miss_distance: {
                    astronomical: "0.4195681284",
                    lunar: "163.2120019476",
                    kilometers: "62766498.328526508",
                    miles: "39001293.5473334904",
                  },
                  orbiting_body: "Earth",
                },
              ],
              is_sentry_object: false,
            },
          ],
        },
      });
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  jest.clearAllMocks();
});
afterAll(() => server.close());
